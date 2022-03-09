import { objectType, extendType, stringArg, nonNull, intArg } from 'nexus';

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('title');
    t.nonNull.boolean('done');
  }
});

export const TaskQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('tasks', {
      type: 'Task',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.task.findMany()
      }
    })
  }
});

export const CreateTaskMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createTask', {
      type: 'Task',
      args: {
        title: nonNull(stringArg())
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.task.create({
          data: {
            title: args.title
          }
        })
      }
    })
  }
});

export const DeleteTaskMutaion = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteTask', {
      type: 'Task',
      args: {
        id: nonNull(intArg())
      },
      resolve(_parent, args, ctx) {
        return ctx.prisma.task.delete({
          where: {
            id: args.id
          }
        })
      }
    })
  }
});
