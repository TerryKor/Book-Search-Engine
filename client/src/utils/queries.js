import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    profiles {
      _id
      name
      books
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      books
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      books
    }
  }
`;
