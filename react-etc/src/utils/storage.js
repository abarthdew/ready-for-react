export function readStorage(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore write failure in constrained browsers
  }
}

export function removeStorage(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // ignore remove failure
  }
}
