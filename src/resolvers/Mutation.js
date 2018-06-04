const Mutation = {
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
  signup: (_, args, context, info) => {
    return context.prisma.mutation.createUser(
      {
        data: {
          name: args.name,
          email: args.email
        },
      },
      info,
    )
  }
}

module.exports = Mutation
