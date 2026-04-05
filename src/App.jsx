import { useState, useEffect } from 'react'
import CreatePoll from './components/CreatePoll'
import PollList from './components/PollList'

function App() {

  // Load polls from localStorage on first render
  const [polls, setPolls] = useState(() => {
    const saved = localStorage.getItem('polls')
    return saved ? JSON.parse(saved) : []
  })

  // Load votedPolls from localStorage on first render
  const [votedPolls, setVotedPolls] = useState(() => {
    const saved = localStorage.getItem('votedPolls')
    return saved ? JSON.parse(saved) : {}
  })

  // Whenever polls changes → save to localStorage automatically
  useEffect(() => {
    localStorage.setItem('polls', JSON.stringify(polls))
  }, [polls])

  // Whenever votedPolls changes → save to localStorage automatically
  useEffect(() => {
    localStorage.setItem('votedPolls', JSON.stringify(votedPolls))
  }, [votedPolls])

  const handlePollCreated = (newPoll) => {
    setPolls([...polls, newPoll])
  }

  const handleVote = (pollId, optionId) => {
    const updatedPolls = polls.map((poll) => {
      if (poll.id !== pollId) return poll
      return {
        ...poll,
        options: poll.options.map((opt) => {
          if (opt.id !== optionId) return opt
          return { ...opt, votes: opt.votes + 1 }
        })
      }
    })
    setPolls(updatedPolls)
    setVotedPolls({ ...votedPolls, [pollId]: true })
  }

  return (
    <div>
      <h1>Polling App</h1>
      <CreatePoll onPollCreated={handlePollCreated} />
      <PollList
        polls={polls}
        onVote={handleVote}
        votedPolls={votedPolls}
      />
    </div>
  )
}

export default App