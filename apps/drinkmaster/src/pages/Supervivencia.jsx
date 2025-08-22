import { useState } from 'react'
import SurvivalConfig from '../components/SurvivalConfig'
import SurvivalGame from '../components/SurvivalGame'
import SurvivalResults from '../components/SurvivalResults'
import EditarJugadoresButton from '../components/EditarJugadoresButton'

const Supervivencia = () => {
  const [phase, setPhase] = useState('config')
  const [settings, setSettings] = useState(null)
  const [results, setResults] = useState([])
  const [players, setPlayers] = useState(
    JSON.parse(sessionStorage.getItem('players') || '[]'),
  )

  return (
    <div className="min-h-dvh bg-gradient-to-br from-fuchsia-900 via-purple-900 to-indigo-900 text-white">
      {phase === 'config' && (
        <SurvivalConfig
          onStart={(cfg) => {
            setSettings(cfg)
            setPhase('juego')
          }}
        />
      )}
      {phase === 'juego' && (
        <SurvivalGame
          players={players}
          settings={settings}
          onFinish={(ranking) => {
            setResults(ranking)
            setPhase('fin')
          }}
        />
      )}
      {phase === 'fin' && <SurvivalResults ranking={results} />}
      {phase !== 'fin' && (
        <EditarJugadoresButton
          players={players}
          onPlayersChange={setPlayers}
        />
      )}
    </div>
  )
}

export default Supervivencia
