import React, { Fragment, useState } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../../queries/books';
import BookDetails from '../BookDetails';

import './styles.css';

const BookList = ({ data }) => {
  const { loading, books } = data;
  const [bookIdSelected, setBookIdSelected] = useState(null);

  return (
    <Fragment>
      { loading ? <div>Loading...</div> :
        <div>
          <ul className="book-list">
            { books.map(book => (<li onClick={() => setBookIdSelected(book.id)} key={book.id}>{book.name}</li>)) }
          </ul>
          <BookDetails bookId={bookIdSelected} />
        </div>
      }
    </Fragment>
  );
};

export default graphql(getBooksQuery)(BookList);
