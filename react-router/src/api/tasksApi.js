import { mockServer } from '@/api/mockServer'

export const tasksApi = {
  list: () => mockServer.list('tasks'),
  create: (payload) => mockServer.create('tasks', payload),
  update: (taskId, payload) => mockServer.update('tasks', taskId, payload),
  remove: (taskId) => mockServer.remove('tasks', taskId),
}
