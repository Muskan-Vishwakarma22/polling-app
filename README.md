Real-Time Polling & Voting Web App

A web application where users can create polls, vote on them, and see the results. Built using React and localStorage.

About the Project

The goal is to build a polling app where users can create their own poll questions, add options, vote, and see live results with progress bars.

I used React because it makes it easier to manage dynamic content like adding/removing option fields and updating vote counts without reloading the page.


Features

1.Create a poll with a custom question and multiple options
2.Add or remove options dynamically while creating a poll
3.Vote on any poll (only once per poll per browser)
4.See vote counts and percentages after voting
5.Progress bars to visualize results
6.All data is saved using localStorage so it doesn't disappear on page refresh

Tech Stack

React (with Vite)
CSS (custom styling, no libraries)
localStorage for data storage

How to Run the Project

Make sure you have Node.js installed. Then follow these steps:

bash
1. Clone the repository
git clone <your-repo-link-here>

2. Go into the project folder
cd polling-app

3. Install dependencies
npm install

4. Start the development server
npm run dev


Then open your browser and go to `http://localhost:5173`

Folder Structure

src/
├── components/
│   ├── CreatePoll.jsx   → form to create a new poll
│   ├── PollList.jsx     → shows all polls
│   └── PollCard.jsx     → displays a single poll with voting and results
├── App.jsx              → main component, holds all the state
├── index.css            → all the styling
└── main.jsx             → entry point (default, not changed)
How It Works

Creating a poll– The user types a question and fills in at least 2 options. They can also add more options or remove them. When submitted, the poll gets saved to localStorage.

Voting – Each poll shows clickable option buttons. Once you vote, the buttons are replaced with a results view showing vote counts and a progress bar. You can't vote again on the same poll.

Persistence– I used 'useEffect' and 'useState' together so that every time the polls or voted status changes, it automatically saves to localStorage. When the page reloads, the data is read back from localStorage.


Challenges I Faced

Understanding how to update a nested array in state without mutating it directly. I kept getting bugs until I learned to use the spread operator to make a copy first.
Figuring out when to use 'useEffect' – at first I didn't know why it was needed, but now I understand it runs after state changes as a side effect.
Making the form dynamic (add/remove options) was tricky at first because I wasn't sure how to track which input changed. Using the index in the 'map' helped.


What I Would Improve

Add a backend (Node.js + Express) so votes are actually shared between different users/devices
Add a delete poll feature
Better mobile layout
Maybe add WebSockets for true real-time updates

Approach Used

I built this step by step – first designed the data structure, then built the form, then the display, then the voting logic, and finally connected everything to localStorage. I tried to keep each component focused on one job only.


"Assignment submitted as part of Frontend Internship – 2nd Year"