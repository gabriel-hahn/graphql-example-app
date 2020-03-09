import React, { Fragment, useState } from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery } from '../../queries/authors';
import { addBookMutation } from '../../queries/books';

const AddBook = ({ getAuthorsQuery, addBookMutation }) => {
  const { loading, authors } = getAuthorsQuery;

  const [name, setName] = useState(null);
  const [genre, setGenre] = useState(null);
  const [authorId, setAuthorId] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    addBookMutation({
      variables: {
        name,
        genre,
        authorId
      }
    });
  }

  return (
    <Fragment>
      <form className="add-book" onSubmit={handleSubmitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Author name:</label>
          <select onChange={(e) => setAuthorId(e.target.value)} >
            <option>Select author</option>
            { loading ? <option disabled>Loading authors...</option> :
              authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>) }
          </select>
        </div>

        <button type="submit">+</button>
      </form>
    </Fragment>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
