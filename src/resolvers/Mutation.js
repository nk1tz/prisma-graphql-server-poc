const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const Mutation = {

  signup: async (_, args, context, info) => {
    const password = await bcrypt.hash(args.password, 9)
    const user = await context.prisma.mutation.createUser({
        data: { ...args, password }
    })
    return {
      token: jwt.sign({ userId: user.id }, 'shhhhh'),
      user,
    }
  },

  login: async (_, { email, password }, context, info) => {
    const user = await context.prisma.query.user({ where: { email } })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, 'shhhhh'),
      user,
    }
  },

  createDraft: (_, args, context, info) => {
    return context.prisma.mutation.createPost(
      {
        data: {
          title: args.title,
          content: args.content,
          author: {
            connect: {
              id: args.authorId,
            },
          },
        },
      },
      info,
    )
  },
  publish: (_, args, context, info) => {
    return context.prisma.mutation.updatePost(
      {
        where: {
          id: args.id,
        },
        data: {
          published: true,
        },
      },
      info,
    )
  },
  deletePost: (_, args, context, info) => {
    return context.prisma.mutation.deletePost(
      {
        where: {
          id: args.id,
        },
        info,
      }
    )
  },

}

module.exports = Mutation
