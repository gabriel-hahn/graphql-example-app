import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';

import { getAuthorsQuery } from '../../queries/authors';

const AddBook = ({ data }) => {
  const { loading, authors } = data;

  return (
    <Fragment>
      <form className="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text"/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>
        <div className="field">
          <label>Author name:</label>
          <select>
            <option>Select author</option>
            { loading ? <option disabled>Loading authors...</option> :
              authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>) }
          </select>
        </div>

        <button>+</button>
      </form>
    </Fragment>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
