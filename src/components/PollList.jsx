import PollCard from './PollCard'

function PollList({ polls, onVote, votedPolls }) {
  if (polls.length === 0) {
    return <p>No polls yet. Create one above!</p>
  }

  return (
    <div className="poll-list">
      <h2>All Polls</h2>
      {polls.map((poll) => (
        <PollCard
          key={poll.id}
          poll={poll}
          onVote={onVote}
          votedPolls={votedPolls}
        />
      ))}
    </div>
  )
}

export default PollList