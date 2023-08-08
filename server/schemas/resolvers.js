const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: { 
      me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id }).select('-__v -password')
        
            return userData;
        } else {
            throw new AuthenticationError('Unable to Log In');
        }
      },
    },
  
    Mutation: {
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No User Account with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Wrong Password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },

      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
  
      saveBook: async (parent, { bookData }, context) => {
        if (context.user) {
          const newUserProfile = await User.findOneAndUpdate(
            { 
                _id: context.user._id 
            },
            {
              $push: { savedBooks: bookData }
            },
            {
                new: true
            });

            return newUserProfile;
        }
        throw new AuthenticationError('You Must be Logged-in to Save Book to Your Profile')
      },
      
      removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
          const newUserProfile = await User.findOneAndUpdate(
            { 
                _id: context.user._id
            },
            {
                $pull: { savedBooks: bookId }
            },
            {
                new: true
            }

        )
      }
      throw new AuthenticationError('You Must be Logged-in to Remove Book From Your Profile');
    },
}}
  
module.exports = resolvers;