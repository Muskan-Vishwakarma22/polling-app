function PollCard({ poll, onVote, votedPolls }) {
  const hasVoted = votedPolls[poll.id]  // true or undefined

  // Calculate total votes for percentage later
  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0)

  return (
    <div className="poll-card">
      <h3>{poll.question}</h3>
      <p className="vote-count">Total votes: {totalVotes}</p>

      <div className="options">
        {poll.options.map((option) => {
          const percentage = totalVotes === 0
            ? 0
            : Math.round((option.votes / totalVotes) * 100)

          return (
            <div key={option.id} className="option-item">

              {/* Show vote button OR results depending on voted state */}
              {!hasVoted ? (
                <button
                  className="vote-btn"
                  onClick={() => onVote(poll.id, option.id)}
                >
                  {option.text}
                </button>
              ) : (
                <div className="result-row">
                  <span className="option-text">{option.text}</span>
                  <span className="option-votes">{option.votes} votes</span>

                  {/* Progress bar */}
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="percentage">{percentage}%</span>
                </div>
              )}

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PollCard