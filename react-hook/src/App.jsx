import { useCallback, useMemo, useState } from 'react'
import EffectAndRefPanel from '@/components/EffectAndRefPanel'
import ExpensiveInsightsPanel from '@/components/ExpensiveInsightsPanel'
import TaskReducerPanel from '@/components/TaskReducerPanel'
import { useAppContext } from '@/context/AppContext'
import { useLocalStorageState } from '@/hooks/useLocalStorageState'

export default function App() {
  const { theme, toggleTheme, user, updateUserName } = useAppContext()
  const [nameInput, setNameInput] = useState(user.name)
  const [eventLog, setEventLog] = useLocalStorageState('react-hook.logs', [])

  const addLog = useCallback((message) => {
    setEventLog((prev) => [{ id: Date.now(), message, at: new Date().toLocaleTimeString() }, ...prev].slice(0, 8))
  }, [setEventLog])

  const handleTaskAdd = useCallback(() => addLog('Task created'), [addLog])
  const handleTaskToggle = useCallback(() => addLog('Task toggled'), [addLog])
  const handleTaskRemove = useCallback(() => addLog('Task removed'), [addLog])

  const logCountLabel = useMemo(() => `Recent events (${eventLog.length})`, [eventLog.length])

  const saveProfile = () => {
    if (!nameInput.trim()) return
    updateUserName(nameInput.trim())
    addLog('Profile name updated')
  }

  return (
    <div className={`app ${theme}`}>
      <header className="hero">
        <div>
          <h1>react-hook: practical hooks lab</h1>
          <p>Learn each React hook with realistic feature slices.</p>
        </div>
        <button type="button" onClick={toggleTheme}>Theme: {theme}</button>
      </header>

      <section className="card">
        <h3>useContext + useState + useCallback</h3>
        <p>Current user: {user.name} ({user.role})</p>
        <div className="row">
          <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Update user name" />
          <button type="button" onClick={saveProfile}>Save</button>
        </div>
      </section>
      <br/>

      <div className="grid-2">
        <TaskReducerPanel onAdd={handleTaskAdd} onToggle={handleTaskToggle} onRemove={handleTaskRemove} />
        <EffectAndRefPanel />
        <ExpensiveInsightsPanel />
        <section className="card">
          <h3>{logCountLabel}</h3>
          <ul className="list">
            {eventLog.map((log) => (
              <li key={log.id}>{log.at} - {log.message}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
