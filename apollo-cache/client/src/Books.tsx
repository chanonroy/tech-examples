import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useState } from "react";

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
