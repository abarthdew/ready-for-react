import { readJSON, writeJSON } from '@/utils/storage'

const DB_KEY = 'react-router.mockdb'
const seed = {
  projects: [
    { id: 'p1', name: 'Web Revamp', status: 'in-progress', ownerId: 'u1', description: 'Migrate legacy UI.' },
    { id: 'p2', name: 'Mobile QA', status: 'todo', ownerId: 'u2', description: 'Prepare mobile regression.' },
  ],
  tasks: [
    { id: 't1', projectId: 'p1', title: 'Setup design tokens', status: 'done', assigneeId: 'u1' },
    { id: 't2', projectId: 'p1', title: 'Create routing structure', status: 'in-review', assigneeId: 'u2' },
    { id: 't3', projectId: 'p2', title: 'Write smoke cases', status: 'todo', assigneeId: 'u3' },
  ],
  users: [
    { id: 'u1', name: 'Alice', email: 'alice@corp.com', role: 'pm' },
    { id: 'u2', name: 'Bob', email: 'bob@corp.com', role: 'dev' },
    { id: 'u3', name: 'Chris', email: 'chris@corp.com', role: 'qa' },
  ],
}

function delay(ms = 180) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function db() {
  const stored = readJSON(DB_KEY, null)
  if (!stored) {
    writeJSON(DB_KEY, seed)
    return structuredClone(seed)
  }

  return stored
}

function save(next) {
  writeJSON(DB_KEY, next)
  return next
}

function id(prefix) {
  return `${prefix}${Math.random().toString(36).slice(2, 8)}`
}

export const mockServer = {
  async list(resource) {
    await delay()
    return db()[resource]
  },

  async get(resource, itemId) {
    await delay()
    return db()[resource].find((item) => item.id === itemId) ?? null
  },

  async create(resource, payload) {
    await delay()
    const current = db()
    const record = { id: id(resource[0]), ...payload }
    current[resource].push(record)
    save(current)
    return record
  },

  async update(resource, itemId, payload) {
    await delay()
    const current = db()
    current[resource] = current[resource].map((item) =>
      item.id === itemId ? { ...item, ...payload } : item,
    )
    save(current)
    return current[resource].find((item) => item.id === itemId)
  },

  async remove(resource, itemId) {
    await delay()
    const current = db()
    current[resource] = current[resource].filter((item) => item.id !== itemId)

    if (resource === 'projects') {
      current.tasks = current.tasks.filter((task) => task.projectId !== itemId)
    }

    save(current)
    return true
  },
}
