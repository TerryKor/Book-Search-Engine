const { AuthenticationError } = require('apollo-server-express');
const { User } = require("../models");
const { signToken } = require('../utils/auth');
// added query resolvers to find user by id and handle logged in user
const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        },
        me: async (parent, args, context) => {
            if (context.User) {
                return User.findOne({ _id: context.user._id })
            }
            throw new AuthenticationError('You need to be logged in')
        }
    },
    // added mutations to add user, login and to save and remove books
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(username)

            return { token, username }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No profile with this email found!')
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!password) {
                throw new AuthenticationError('Incorrect password!')
            }
            const token = signToken(user)
            return { token, user };
        },

        saveBook: async (parent, { userId, book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    {
                        $addToSet: { savedBooks: book },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }

            throw new AuthenticationError('You need to be logged in!')

        },
        removeBook: async (parent, { book }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: book } },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in!')
        },



    }



}

module.exports = resolvers