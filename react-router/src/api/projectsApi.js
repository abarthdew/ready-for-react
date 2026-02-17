import { mockServer } from '@/api/mockServer'

export const projectsApi = {
  list: () => mockServer.list('projects'),
  detail: (projectId) => mockServer.get('projects', projectId),
  create: (payload) => mockServer.create('projects', payload),
  update: (projectId, payload) => mockServer.update('projects', projectId, payload),
  remove: (projectId) => mockServer.remove('projects', projectId),
}
