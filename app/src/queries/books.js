import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      id,
      name
    }
  }
`;

export { getBooksQuery };
