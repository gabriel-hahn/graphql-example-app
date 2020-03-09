import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../../queries/books';

const BookList = ({ data }) => {
  const { loading, books } = data;

  return (
    <Fragment>
      { loading ? <div>Loading...</div> :
        <div>
          <ul className="book-list">
            { books.map(book => (<li key={book.id}>{book.name}</li>)) }
          </ul>
        </div>
      }
    </Fragment>
  );
};

export default graphql(getBooksQuery)(BookList);
