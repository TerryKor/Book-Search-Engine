import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        user {
            _id
            username
            email
            bookCount
            savedBooks {
              bookId
              authors
              description
              title
              image
              link
            }
        }
        token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;


export const ADD_BOOK = gql`
  mutation saveBook($bookInput: BookInput!) {
    saveBook(bookInput: $bookInput) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
  `;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// import { gql } from '@apollo/client';

// export const ADD_USER = gql`
//   mutation addUser($name: String!, $email: String!, $password: String!) {
//     addUser(name: $name, email: $email, password: $password) {
//       token
//       user {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const ADD_BOOK = gql`
//   mutation addBook($bookId: String!, $authors: [String]!, $description: String!, $image: String!, $link:String!, $title:String! ) {
//     addBook(bookId: $bookId, authors: $authors, description: $description, image:$image, link:$link, title:$title) {
//       username
//       savedBooks{
//         bookId
//         authors
//         description
//         image
//         link
//         title
//       }
//     }
//   }
// `;

// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         name
//       }
//     }
//   }
// `;



// export const REMOVE_BOOK = gql`
//   mutation removeBook($bookId: String!) {
//     removeBook(bookId: $bookId) {
//       username
//       savedBooks{
//         bookId
//         authors
//         description
//         image
//         link
//         title
//       }
//     }
//   }
// `;