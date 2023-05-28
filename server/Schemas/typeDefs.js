const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User{
_id: String
username: String
email:String
bookCount:String
savedBooks:[Book]!
}
type Book{
bookId:String
authors:[String]!
description:String
title:String
image:String
link:String
}
type Auth{
token: ID!
user : User
}
type Query{
    users:[User]
    user(userId: ID!):User
me: User
}
type Mutation{
login(email:String!, password:String! ): Auth
addUser(usename:String!,email:String, password:String!) : Auth
saveBook(authors:[String]!, description:String!, title:String!, bookId:String!, image:String!, link:String!, ): User
removeBook(bookId:String!): User
}
`
module.exports = typeDefs




// Mutation type:

// login: Accepts an email and password as parameters; returns an Auth type.

// addUser: Accepts a username, email, and password as parameters; returns an Auth type.

// saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

// removeBook: Accepts a book's bookId as a parameter; returns a User type.



