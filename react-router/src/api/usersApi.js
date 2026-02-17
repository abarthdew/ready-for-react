import { mockServer } from '@/api/mockServer'

export const usersApi = {
  list: () => mockServer.list('users'),
  create: (payload) => mockServer.create('users', payload),
  update: (userId, payload) => mockServer.update('users', userId, payload),
  remove: (userId) => mockServer.remove('users', userId),
}
