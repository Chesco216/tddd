// NOTE: defining categories as
// 1 -> to do
// 2 -> doing
// 3 -> done

// TODO: add role or asigment to tasks

export type Task = { id: number, title: string, desc: string, cat: number }[]

export const tasks: Task = [
  {
    id: 1,
    title: 'task 1',
    desc: 'this is a sample of a task',
    cat: 1
  },
  {
    id: 2,
    title: 'task 3',
    desc: 'this is a sample of a task',
    cat: 2
  },
  {
    id: 3,
    title: 'task 3',
    desc: 'this is a sample of a task',
    cat: 3
  },
]
