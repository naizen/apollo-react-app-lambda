import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_HELLO = gql`
  query hello {
    hello
  }
`;

export default function Hello() {
  const { data, loading, error } = useQuery(GET_HELLO);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <div>{data.hello}</div>;
}
