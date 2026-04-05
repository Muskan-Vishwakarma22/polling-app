import { useState } from 'react'

function CreatePoll({ onPollCreated }) {
  // State for the question input
  const [question, setQuestion] = useState('')

  // State for options — starts with 2 empty strings
  const [options, setOptions] = useState(['', ''])

  // --- HANDLER: when user types in an option box ---
  const handleOptionChange = (index, value) => {
    const updated = [...options]   // copy the array (never mutate state directly!)
    updated[index] = value         // update the specific index
    setOptions(updated)            // set the new array
  }

  // --- HANDLER: add a new empty option ---
  const handleAddOption = () => {
    setOptions([...options, ''])   // spread existing + add one empty string
  }

  // --- HANDLER: remove an option by index ---
  const handleRemoveOption = (index) => {
    const updated = options.filter((_, i) => i !== index)
    setOptions(updated)
  }

  // --- HANDLER: form submission ---
  const handleSubmit = () => {
    // Basic validation
    if (!question.trim()) return alert('Please enter a question!')
    if (options.some(o => !o.trim())) return alert('Please fill all options!')
    if (options.length < 2) return alert('Need at least 2 options!')

    // Build the poll object (remember our data structure from Step 1?)
    const newPoll = {
      id: 'poll_' + Date.now(),
      question: question.trim(),
      createdAt: Date.now(),
      options: options.map((text, i) => ({
        id: 'opt_' + i,
        text: text.trim(),
        votes: 0
      }))
    }

    onPollCreated(newPoll)   // send poll up to App.jsx
    setQuestion('')           // reset form
    setOptions(['', ''])      // reset options
  }

  return (
    <div className="create-poll">
      <h2>Create a New Poll</h2>

      {/* Question input */}
      <input
        type="text"
        placeholder="Enter your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Dynamic option inputs */}
      {options.map((option, index) => (
        <div key={index} className="option-row">
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          {/* Only show remove button if more than 2 options */}
          {options.length > 2 && (
            <button onClick={() => handleRemoveOption(index)}>✕</button>
          )}
        </div>
      ))}

      <button onClick={handleAddOption}>+ Add Option</button>
      <button onClick={handleSubmit}>Create Poll</button>
    </div>
  )
}

export default CreatePoll