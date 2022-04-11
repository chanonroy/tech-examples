import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const BookFragment = gql`
  fragment MyBook on Book {
    id
    title
    __typename
  }
`;

const getBooks = gql`
  query GetBookQuery {
    books {
      id
      author
      ...MyBook
    }
  }

  ${BookFragment}
`;

const getBooksNext = gql`
  query GetBookQueryNext {
    books {
      ...MyBook
    }
  }

  ${BookFragment}
`;

// 1. fragment does not matter
// 2. if parent query is not finished, child query fetches network
// 3. if child query is 'cache-only', it will poll itself until it gets data.

export function BooksNext() {
  const { data, loading } = useQuery(getBooksNext, {
    fetchPolicy: "cache-only",
  });
  return (
    <>
      <div>Books</div>
    </>
  );
}

export default function Books() {
  const { data, loading } = useQuery(getBooks);
  console.log(data);
  return (
    <>
      <BooksNext />
    </>
  );
}
