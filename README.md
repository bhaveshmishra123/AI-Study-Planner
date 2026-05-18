# AI-Study-Planner
AI Study Planner is a smart web-based application developed using HTML, CSS, and JavaScript. It helps students organize their study schedule, manage subjects, track tasks, and improve productivity with an easy-to-use interface. The project was built with AI-assisted development and customized for academic learning and project purposes.

## 🌐 Live Website
[Visit AI Study Planner](https://ai-study-planner13.netlify.app/)

## Title
AI Study Planner Using HTML, CSS and JavaScript

# Student Details

| Name | Class | Roll No |
|---|---|---|
| Bhavesh Kumar Mishra | CSE-3BX | 430123010069 |
| Shivbardhan Kumar | CSE-3BX | 430123010068 |
| Gaurav Kumar Singh | CSE-3BX | 430123010087 |
| Debolina Mukhopadhyay | CSE-3BX | 430124120272 |
| Ananya Halder | CSE-3BX | 430123020071 |

- **Semester:** 6th Semester  
- **Subject:** Web and Internet Technology  

## Project Description
AI Study Planner is a front-end web application developed using HTML, CSS, and JavaScript. The purpose of this project is to help students create a smart study roadmap for exams or learning goals. The user enters the goal, target date, study hours per day, subjects, difficulty level, and priority. Based on these inputs, the application generates a weekly study plan, daily focus suggestions, summary insights, and a completion tracker.

Although the project does not call an external AI API, it behaves like an AI-inspired planner because it analyzes the student input and creates adaptive study recommendations using logic written in JavaScript.

## Objective
The main objective of this project is to design a simple and attractive web-based planner that helps students:

1. Enter their study goal and exam date.
2. Add subjects with difficulty and priority.
3. Generate a personalized weekly study schedule.
4. View daily focus suggestions.
5. Track completed tasks using a progress bar.
6. Save progress in the browser using local storage.

## Requirements
### Hardware Requirements
1. Computer or laptop
2. Minimum 4 GB RAM
3. Keyboard and mouse

### Software Requirements
1. Web browser such as Chrome, Edge, or Firefox
2. Visual Studio Code or any code editor
3. Live Server or local server for execution
4. HTML5
5. CSS3
6. JavaScript

## Algorithm
1. Start the application.
2. Accept input from the user:
   Goal, target date, study hours, subjects, difficulty, priority, and study style.
3. Parse the subject list line by line.
4. Assign a weight to each subject based on difficulty and priority.
5. Calculate the number of days left until the target date.
6. Convert days into study weeks.
7. Distribute weekly study hours according to the weight of each subject.
8. Generate objective text for each subject in each week.
9. Display:
   Summary, focus cards, weekly schedule, and progress tracker.
10. Save plan data in local storage.
11. When the user checks tasks, update the completion percentage.
12. Stop.

## Working Explanation
This project works in three main parts.

### 1. User Interface
The HTML file creates the structure of the application. It contains:

1. Header section
2. Goal input form
3. Summary section
4. Daily focus board
5. Weekly study schedule
6. Progress tracker

### 2. Design
The CSS file provides styling for the complete website. It includes:

1. Gradient background
2. Glassmorphism cards
3. Responsive layout
4. Buttons, forms, and typography styling
5. Mobile-friendly screen adjustments

### 3. Logic
The JavaScript file performs all planner logic:

1. Reads user input
2. Converts subjects into structured data
3. Calculates days left and study weeks
4. Assigns more time to harder and higher-priority subjects
5. Generates focus cards and recommendations
6. Tracks completed tasks
7. Saves and loads data using local storage

## Functions Explanation
### `handlePlanGeneration(event)`
Reads form data, validates input, generates a new plan, saves it, and renders the result.

### `parseSubjects(raw)`
Converts each subject line into an object containing subject name, difficulty, and priority.

### `normalizeDifficulty(value)`
Checks whether difficulty is `easy`, `medium`, or `hard`. If invalid, it returns `medium`.

### `buildPlan(input)`
This is the main planning function. It calculates days left, weeks, subject weight, study hours, focus cards, recommendations, and readiness score.

### `getStyleMultiplier(style)`
Changes the subject weight according to the selected study style.

### `createObjective(subject, weekIndex, totalWeeks)`
Generates meaningful objective text for each subject in each week.

### `buildFocusCards(subjects, studyHours, daysLeft)`
Creates the daily focus board for top-priority subjects.

### `buildRecommendations(input, subjects, daysLeft)`
Generates study suggestions based on deadline pressure and workload.

### `render()`
Updates the entire page when a plan is available.

### `renderEmptyState()`
Displays default text when no plan has been generated.

### `renderSummary()`
Shows goal summary, subject tags, and recommendations.

### `renderFocusBoard()`
Displays daily focus cards.

### `renderSchedule()`
Displays weekly study tasks with checkboxes.

### `toggleTask(taskId, isCompleted)`
Marks a task complete or incomplete and saves progress.

### `updateProgress()`
Calculates completion percentage and updates the progress bar.

### `hydrateForm()`
Loads previous saved values into the form when the page opens again.

### `resetPlanner()`
Clears form data, deletes local storage, and resets the screen.

### `computeReadiness(subjects, daysLeft, studyHours)`
Calculates an estimated readiness percentage using study effort, time left, and subject load.

### `loadState()`
Loads saved planner data from local storage.

### `saveState()`
Stores the current app state in local storage.

### `slugify(value)`
Converts subject names into simple IDs.

### `clamp(value, min, max)`
Restricts a value to a minimum and maximum range.

## Input / Output
### Input
1. Main goal
2. Target date
3. Study hours per day
4. Subject name
5. Subject difficulty
6. Subject priority
7. Preferred study style

### Output
1. Generated AI-style study plan
2. Weekly study schedule
3. Focus cards for daily work
4. Study recommendations
5. Readiness score
6. Completion percentage

## Advantages & Limitations
### Advantages
1. Simple and easy to use
2. Attractive modern interface
3. Works in browser without database
4. Saves progress using local storage
5. Automatically creates a weekly study roadmap
6. Useful for students preparing for exams

### Limitations
1. No real AI API integration
2. No user login system
3. No cloud storage
4. No PDF export
5. Depends on browser local storage
6. Google Fonts need internet for exact appearance

## Conclusion
AI Study Planner is a useful mini project that demonstrates front-end web development with practical student use. The application successfully accepts user input, applies planning logic, generates a study schedule, and tracks progress. It is suitable for college lab submission because it combines interface design, client-side logic, storage, and user interaction in one complete project.

## Viva Questions
1. What is the purpose of this project?
2. Which technologies are used in this project?
3. Why is this project called AI Study Planner?
4. What is local storage in JavaScript?
5. How are subjects weighted in the planner?
6. What is the use of `preventDefault()` in form submission?
7. What is the purpose of `querySelector` and `getElementById`?
8. How is the progress bar updated?
9. What is the role of CSS in this project?
10. What is the function of `buildPlan()`?
11. How is the number of study weeks calculated?
12. Why do we use responsive design?
13. What is the use of templates in HTML?
14. What are the limitations of this project?
15. How can this project be improved in the future?

## Comments for Code
The code has been organized with readable function names and small comments in important places. The comments explain:

1. Event registration
2. Form input conversion
3. Subject weighting logic
4. Weekly hour distribution
5. Screen rendering
6. Progress persistence through local storage

These comments help during code explanation and viva.

## Report Format for College Lab
You can submit the report in this order:

1. Cover page
2. Certificate page if required by college
3. Acknowledgement
4. Index
5. Project title
6. Project description
7. Objective
8. Requirements
9. Algorithm
10. Working explanation
11. Functions explanation
12. Input / Output
13. Advantages and limitations
14. Conclusion
15. Viva questions
16. Source code
17. Output screenshots

## Suggestions to Make It More Best
1. Add export to PDF feature
2. Add dark mode and theme switch
3. Add real AI API integration
4. Add login and cloud save
5. Add calendar-based study view
6. Add reminder notifications
7. Add offline fonts for exam-lab systems without internet

## Source Code

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Study Planner</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="page-shell">
    <header class="hero">
      <div class="hero__copy">
        <p class="eyebrow">Adaptive planning for focused learners</p>
        <h1>AI Study Planner</h1>
        <p class="hero__text">
          Turn a big exam or learning goal into a realistic weekly roadmap with daily focus sessions,
          smart priority balancing, and progress tracking that stays out of your way.
        </p>
      </div>
      <div class="hero__card glass">
        <p class="hero__card-label">Planner Mode</p>
        <div class="hero__stats">
          <div>
            <span id="statSubjects">0</span>
            <small>Subjects</small>
          </div>
          <div>
            <span id="statHours">0h</span>
            <small>Daily Effort</small>
          </div>
          <div>
            <span id="statReadiness">0%</span>
            <small>Readiness</small>
          </div>
        </div>
        <p id="heroInsight" class="hero__insight">Build your plan to see AI guidance here.</p>
      </div>
    </header>

    <main class="dashboard">
      <!-- Input form where the student enters goal, date, effort, and subjects. -->
      <section class="planner-panel glass">
        <div class="section-heading">
          <div>
            <p class="section-kicker">Plan Setup</p>
            <h2>Create your roadmap</h2>
          </div>
          <button id="resetButton" class="ghost-button" type="button">Reset</button>
        </div>

        <form id="plannerForm" class="planner-form">
          <label>
            Main goal
            <input id="goal" name="goal" type="text" placeholder="Crack finals, learn DSA, ace IELTS..." required>
          </label>

          <div class="form-grid">
            <label>
              Target date
              <input id="examDate" name="examDate" type="date" required>
            </label>

            <label>
              Study hours per day
              <input id="studyHours" name="studyHours" type="number" min="1" max="16" value="4" required>
            </label>
          </div>

          <label>
            Subjects
            <textarea id="subjects" name="subjects" rows="4" placeholder="Math - hard - 3&#10;Physics - medium - 2&#10;English - easy - 1" required></textarea>
            <small>One per line: <code>Subject - difficulty - priority</code>. Difficulty: easy, medium, hard. Priority: 1-3.</small>
          </label>

          <label>
            Preferred study style
            <select id="studyStyle" name="studyStyle">
              <option value="balanced">Balanced mix</option>
              <option value="deep-work">Deep work blocks</option>
              <option value="revision-first">Revision first</option>
              <option value="exam-sprint">Exam sprint</option>
            </select>
          </label>

          <button class="primary-button" type="submit">Generate AI Plan</button>
        </form>
      </section>

      <!-- Summary area showing generated insights and completion percentage. -->
      <section class="insights-panel">
        <div class="glass summary-card">
          <div class="section-heading">
            <div>
              <p class="section-kicker">AI Summary</p>
              <h2>Your study brief</h2>
            </div>
          </div>
          <div id="summaryContent" class="empty-state">
            Add your goal and subjects to generate a personalized plan.
          </div>
        </div>

        <div class="glass progress-card">
          <div class="section-heading">
            <div>
              <p class="section-kicker">Momentum</p>
              <h2>Completion tracker</h2>
            </div>
          </div>
          <div class="progress-meter">
            <div id="progressBar" class="progress-meter__fill"></div>
          </div>
          <p id="progressText">0% completed</p>
        </div>
      </section>

      <!-- Quick daily action cards generated from the highest-priority subjects. -->
      <section class="glass focus-panel">
        <div class="section-heading">
          <div>
            <p class="section-kicker">Today</p>
            <h2>Daily focus board</h2>
          </div>
        </div>
        <div id="focusBoard" class="focus-board empty-state">
          Your first generated plan will suggest what to focus on today.
        </div>
      </section>

      <!-- Weekly study schedule built from subject difficulty, priority, and time left. -->
      <section class="glass schedule-panel">
        <div class="section-heading">
          <div>
            <p class="section-kicker">Roadmap</p>
            <h2>Weekly study schedule</h2>
          </div>
        </div>
        <div id="schedule" class="schedule empty-state">
          No schedule yet. Generate a plan to start.
        </div>
      </section>
    </main>
  </div>

  <template id="taskTemplate">
    <label class="task-item">
      <input type="checkbox">
      <span></span>
    </label>
  </template>

  <script src="script.js"></script>
</body>
</html>
```

### `style.css`
```css
:root {
  --bg: #f4efe5;
  --bg-accent: #eadfcd;
  --surface: rgba(255, 250, 242, 0.72);
  --surface-strong: #fffaf2;
  --text: #1f2520;
  --muted: #5b655e;
  --line: rgba(31, 37, 32, 0.1);
  --primary: #0f766e;
  --primary-soft: #ccefe9;
  --secondary: #c8682a;
  --shadow: 0 20px 60px rgba(78, 61, 38, 0.12);
  --radius-lg: 28px;
  --radius-md: 20px;
  --radius-sm: 14px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Space Grotesk", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(200, 104, 42, 0.14), transparent 30%),
    radial-gradient(circle at bottom right, rgba(15, 118, 110, 0.16), transparent 28%),
    linear-gradient(160deg, var(--bg) 0%, #f8f3eb 50%, var(--bg-accent) 100%);
}

body::before,
body::after {
  content: "";
  position: fixed;
  inset: auto;
  pointer-events: none;
  z-index: 0;
  border-radius: 999px;
  filter: blur(10px);
}

body::before {
  width: 16rem;
  height: 16rem;
  top: 5rem;
  right: 4rem;
  background: rgba(200, 104, 42, 0.12);
}

body::after {
  width: 20rem;
  height: 20rem;
  left: -5rem;
  bottom: -5rem;
  background: rgba(15, 118, 110, 0.12);
}

.page-shell {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 3rem;
}

.hero,
.dashboard {
  display: grid;
  gap: 1.25rem;
}

.hero {
  grid-template-columns: 1.4fr 0.9fr;
  align-items: stretch;
  margin-bottom: 1.25rem;
}

.hero__copy,
.glass {
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: var(--surface);
  backdrop-filter: blur(18px);
  box-shadow: var(--shadow);
  border-radius: var(--radius-lg);
}

.hero__copy {
  padding: 2rem;
  overflow: hidden;
}

.eyebrow,
.section-kicker,
.hero__card-label {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.72rem;
  color: var(--secondary);
  margin: 0 0 0.9rem;
}

h1,
h2 {
  margin: 0;
  line-height: 0.95;
}

h1 {
  font-family: "Instrument Serif", serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 400;
  max-width: 9ch;
}

h2 {
  font-size: 1.5rem;
}

.hero__text,
.hero__insight,
#summaryContent,
#progressText,
small,
.task-item span,
.day-card p,
.empty-state {
  color: var(--muted);
}

.hero__text {
  font-size: 1.02rem;
  max-width: 56ch;
  margin: 1rem 0 0;
  line-height: 1.7;
}

.hero__card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin: 1rem 0 1.25rem;
}

.hero__stats div {
  background: rgba(255, 255, 255, 0.45);
  border-radius: var(--radius-md);
  padding: 1rem 0.9rem;
}

.hero__stats span {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
}

.hero__stats small {
  display: block;
  margin-top: 0.3rem;
}

.dashboard {
  grid-template-columns: 1.1fr 0.9fr;
}

.planner-panel,
.focus-panel,
.schedule-panel,
.summary-card,
.progress-card {
  padding: 1.4rem;
}

.planner-panel {
  grid-row: span 2;
}

.insights-panel {
  display: grid;
  gap: 1.25rem;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.planner-form,
.form-grid {
  display: grid;
  gap: 1rem;
}

.form-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: grid;
  gap: 0.45rem;
  font-size: 0.95rem;
  font-weight: 500;
}

input,
textarea,
select,
button {
  font: inherit;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.75);
  padding: 0.95rem 1rem;
  color: var(--text);
  outline: none;
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: rgba(15, 118, 110, 0.45);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.08);
}

textarea {
  resize: vertical;
  min-height: 8.5rem;
}

.primary-button,
.ghost-button {
  border: 0;
  border-radius: 999px;
  padding: 0.95rem 1.2rem;
  cursor: pointer;
  transition: transform 180ms ease, opacity 180ms ease, background 180ms ease;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), #0b5f58);
  color: white;
  font-weight: 700;
}

.ghost-button {
  background: rgba(255, 255, 255, 0.6);
  color: var(--text);
}

.primary-button:hover,
.ghost-button:hover {
  transform: translateY(-1px);
}

.progress-meter {
  height: 14px;
  border-radius: 999px;
  background: rgba(31, 37, 32, 0.08);
  overflow: hidden;
}

.progress-meter__fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  border-radius: inherit;
  transition: width 240ms ease;
}

.focus-board,
.schedule {
  display: grid;
  gap: 1rem;
}

.focus-board {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.focus-card,
.day-card {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(31, 37, 32, 0.08);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.focus-card h3,
.day-card h3 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}

.focus-card p,
.day-card p {
  margin: 0 0 0.9rem;
  line-height: 1.55;
}

.task-list {
  display: grid;
  gap: 0.65rem;
}

.task-item {
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.7rem;
  font-weight: 400;
}

.task-item input {
  width: 18px;
  height: 18px;
  margin: 0;
  accent-color: var(--primary);
}

.task-item input:checked + span {
  text-decoration: line-through;
  opacity: 0.68;
}

.empty-state {
  padding: 1rem;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.45);
  border: 1px dashed rgba(31, 37, 32, 0.15);
}

.summary-grid {
  display: grid;
  gap: 0.9rem;
}

.summary-grid strong {
  display: block;
  margin-bottom: 0.25rem;
}

.summary-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  margin: 0.2rem 0.35rem 0 0;
  border-radius: 999px;
  background: var(--primary-soft);
  color: #0b5f58;
  font-size: 0.9rem;
}

.schedule {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

@media (max-width: 920px) {
  .hero,
  .dashboard {
    grid-template-columns: 1fr;
  }

  .planner-panel {
    grid-row: auto;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 1rem, 1180px);
    padding-top: 1rem;
  }

  .hero__copy,
  .hero__card,
  .planner-panel,
  .focus-panel,
  .schedule-panel,
  .summary-card,
  .progress-card {
    padding: 1.1rem;
  }

  .form-grid,
  .hero__stats {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2.7rem;
  }
}
```

### `script.js`
```javascript
const STORAGE_KEY = "ai-study-planner-state";

const plannerForm = document.getElementById("plannerForm");
const resetButton = document.getElementById("resetButton");
const summaryContent = document.getElementById("summaryContent");
const focusBoard = document.getElementById("focusBoard");
const schedule = document.getElementById("schedule");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const taskTemplate = document.getElementById("taskTemplate");
const statSubjects = document.getElementById("statSubjects");
const statHours = document.getElementById("statHours");
const statReadiness = document.getElementById("statReadiness");
const heroInsight = document.getElementById("heroInsight");

let appState = loadState();

// Register the main UI events once and then paint the initial screen.
plannerForm.addEventListener("submit", handlePlanGeneration);
resetButton.addEventListener("click", resetPlanner);

hydrateForm();
render();

function handlePlanGeneration(event) {
  event.preventDefault();

  // Read the form once and convert raw user text into structured planner input.
  const formData = new FormData(plannerForm);
  const planInput = {
    goal: formData.get("goal").toString().trim(),
    examDate: formData.get("examDate").toString(),
    studyHours: Number(formData.get("studyHours")),
    subjects: parseSubjects(formData.get("subjects").toString()),
    studyStyle: formData.get("studyStyle").toString()
  };

  if (!planInput.goal || !planInput.examDate || !planInput.subjects.length) {
    return;
  }

  const generatedPlan = buildPlan(planInput);
  appState = {
    ...planInput,
    generatedPlan,
    completedTasks: {}
  };

  saveState();
  render();
}

function parseSubjects(raw) {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, difficulty = "medium", priority = "2"] = line.split("-").map((part) => part.trim());
      return {
        name,
        difficulty: normalizeDifficulty(difficulty),
        priority: clamp(Number(priority) || 2, 1, 3)
      };
    })
    .filter((subject) => subject.name);
}

function normalizeDifficulty(value) {
  const lowered = value.toLowerCase();
  if (["easy", "medium", "hard"].includes(lowered)) {
    return lowered;
  }
  return "medium";
}

function buildPlan(input) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDate = new Date(`${input.examDate}T00:00:00`);
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.max(1, Math.ceil((targetDate - today) / msPerDay));
  const weeks = clamp(Math.ceil(daysLeft / 7), 1, 8);
  const difficultyWeight = { easy: 1, medium: 1.35, hard: 1.75 };
  const styleMultiplier = getStyleMultiplier(input.studyStyle);

  // Create a workload score so harder and more important subjects get more time.
  const weightedSubjects = input.subjects.map((subject) => {
    const weight = difficultyWeight[subject.difficulty] * (1 + subject.priority * 0.22) * styleMultiplier(subject);
    return { ...subject, weight };
  });

  const totalWeight = weightedSubjects.reduce((sum, subject) => sum + subject.weight, 0);
  const totalWeeklyHours = input.studyHours * 6;
  const weeklyPlan = [];

  for (let weekIndex = 0; weekIndex < weeks; weekIndex += 1) {
    const weekLabel = `Week ${weekIndex + 1}`;
    const intensityBoost = 1 + weekIndex * 0.04;
    const tasks = weightedSubjects.map((subject) => {
      // Split weekly study hours proportionally among subjects.
      const allocatedHours = Math.max(
        1,
        Math.round(((subject.weight / totalWeight) * totalWeeklyHours * intensityBoost) * 2) / 2
      );

      return {
        id: `${weekLabel}-${slugify(subject.name)}`,
        subject: subject.name,
        hours: allocatedHours,
        objective: createObjective(subject, weekIndex, weeks),
        difficulty: subject.difficulty
      };
    });

    weeklyPlan.push({ weekLabel, tasks });
  }

  return {
    daysLeft,
    weeks,
    readiness: computeReadiness(weightedSubjects, daysLeft, input.studyHours),
    weeklyPlan,
    focusCards: buildFocusCards(weightedSubjects, input.studyHours, daysLeft),
    recommendations: buildRecommendations(input, weightedSubjects, daysLeft)
  };
}

function getStyleMultiplier(style) {
  switch (style) {
    case "deep-work":
      return (subject) => (subject.difficulty === "hard" ? 1.2 : 0.95);
    case "revision-first":
      return (subject) => (subject.priority >= 2 ? 1.15 : 0.9);
    case "exam-sprint":
      return (subject) => (subject.priority === 3 ? 1.25 : 0.92);
    default:
      return () => 1;
  }
}

function createObjective(subject, weekIndex, totalWeeks) {
  if (weekIndex === 0) {
    return `Build foundations in ${subject.name} and map weak areas.`;
  }

  if (weekIndex === totalWeeks - 1) {
    return `Finish timed practice and rapid revision for ${subject.name}.`;
  }

  if (subject.difficulty === "hard") {
    return `Push through advanced problems in ${subject.name} with error review.`;
  }

  if (subject.priority === 3) {
    return `Strengthen high-value topics in ${subject.name} and revisit mistakes.`;
  }

  return `Consolidate ${subject.name} with practice, notes, and recap.`;
}

function buildFocusCards(subjects, studyHours, daysLeft) {
  const sorted = [...subjects].sort((a, b) => b.weight - a.weight);
  const topThree = sorted.slice(0, 3);

  return topThree.map((subject, index) => {
    const blockHours = Math.max(1, Math.round((studyHours / (index + 1)) * 10) / 10);
    const urgency = daysLeft <= 14 ? "High urgency" : daysLeft <= 30 ? "Steady push" : "Long-game prep";

    return {
      title: subject.name,
      note: `${urgency}. Spend ${blockHours}h on ${subject.difficulty} material with active recall.`,
      cue: index === 0 ? "Start here" : index === 1 ? "Second block" : "Light revision"
    };
  });
}

function buildRecommendations(input, subjects, daysLeft) {
  const hardest = [...subjects].sort((a, b) => b.weight - a.weight)[0];
  const examPressure = daysLeft <= 14 ? "Very tight" : daysLeft <= 30 ? "Manageable" : "Comfortable";

  return [
    `${examPressure} runway: you have ${daysLeft} day${daysLeft === 1 ? "" : "s"} to reach "${input.goal}".`,
    `Anchor your week around ${hardest.name}, which currently has the highest workload weight.`,
    `Use the ${input.studyStyle.replace("-", " ")} style to protect consistency and avoid overloading one day.`,
    "Keep one weekly session for mock tests or recap instead of learning only new content."
  ];
}

function render() {
  if (!appState.generatedPlan) {
    renderEmptyState();
    return;
  }

  // Update the top summary cards, then refresh the detail sections below.
  const { generatedPlan, subjects, studyHours, goal } = appState;

  statSubjects.textContent = String(subjects.length);
  statHours.textContent = `${studyHours}h`;
  statReadiness.textContent = `${generatedPlan.readiness}%`;
  heroInsight.textContent = `Your plan for ${goal} spans ${generatedPlan.weeks} week${generatedPlan.weeks === 1 ? "" : "s"} with a ${generatedPlan.readiness}% readiness score.`;

  renderSummary();
  renderFocusBoard();
  renderSchedule();
  updateProgress();
}

function renderEmptyState() {
  statSubjects.textContent = "0";
  statHours.textContent = "0h";
  statReadiness.textContent = "0%";
  heroInsight.textContent = "Build your plan to see AI guidance here.";
  summaryContent.className = "empty-state";
  summaryContent.textContent = "Add your goal and subjects to generate a personalized plan.";
  focusBoard.className = "focus-board empty-state";
  focusBoard.textContent = "Your first generated plan will suggest what to focus on today.";
  schedule.className = "schedule empty-state";
  schedule.textContent = "No schedule yet. Generate a plan to start.";
  progressBar.style.width = "0%";
  progressText.textContent = "0% completed";
}

function renderSummary() {
  const { goal, studyStyle, generatedPlan, subjects } = appState;
  summaryContent.className = "summary-grid";
  summaryContent.innerHTML = `
    <div>
      <strong>Goal</strong>
      <span>${goal}</span>
    </div>
    <div>
      <strong>Plan snapshot</strong>
      <span>${generatedPlan.daysLeft} days left, ${generatedPlan.weeks} study week${generatedPlan.weeks === 1 ? "" : "s"}, ${studyStyle.replace("-", " ")} mode.</span>
    </div>
    <div>
      <strong>Subjects</strong>
      ${subjects.map((subject) => `<span class="summary-pill">${subject.name} - ${subject.difficulty} - P${subject.priority}</span>`).join("")}
    </div>
    <div>
      <strong>AI recommendations</strong>
      <span>${generatedPlan.recommendations.join(" ")}</span>
    </div>
  `;
}

function renderFocusBoard() {
  focusBoard.className = "focus-board";
  focusBoard.innerHTML = "";

  appState.generatedPlan.focusCards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "focus-card";
    article.innerHTML = `
      <p class="section-kicker">${card.cue}</p>
      <h3>${card.title}</h3>
      <p>${card.note}</p>
    `;
    focusBoard.appendChild(article);
  });
}

function renderSchedule() {
  schedule.className = "schedule";
  schedule.innerHTML = "";

  appState.generatedPlan.weeklyPlan.forEach((week) => {
    const card = document.createElement("article");
    card.className = "day-card";

    const tasksList = document.createElement("div");
    tasksList.className = "task-list";

    week.tasks.forEach((task) => {
      const taskNode = taskTemplate.content.firstElementChild.cloneNode(true);
      const checkbox = taskNode.querySelector("input");
      const text = taskNode.querySelector("span");

      // Persist progress so completed tasks still appear checked after refresh.
      checkbox.checked = Boolean(appState.completedTasks[task.id]);
      checkbox.addEventListener("change", () => toggleTask(task.id, checkbox.checked));
      text.textContent = `${task.subject}: ${task.hours}h - ${task.objective}`;

      tasksList.appendChild(taskNode);
    });

    const totalHours = week.tasks.reduce((sum, task) => sum + task.hours, 0);

    card.innerHTML = `
      <h3>${week.weekLabel}</h3>
      <p>${totalHours} planned hours with balanced coverage across your subjects.</p>
    `;
    card.appendChild(tasksList);
    schedule.appendChild(card);
  });
}

function toggleTask(taskId, isCompleted) {
  appState.completedTasks[taskId] = isCompleted;
  saveState();
  updateProgress();
}

function updateProgress() {
  const tasks = appState.generatedPlan?.weeklyPlan.flatMap((week) => week.tasks) ?? [];
  const completed = tasks.filter((task) => appState.completedTasks[task.id]).length;
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}% completed`;
}

function hydrateForm() {
  if (!appState.goal) {
    return;
  }

  document.getElementById("goal").value = appState.goal;
  document.getElementById("examDate").value = appState.examDate;
  document.getElementById("studyHours").value = String(appState.studyHours);
  document.getElementById("subjects").value = appState.subjects
    .map((subject) => `${subject.name} - ${subject.difficulty} - ${subject.priority}`)
    .join("\n");
  document.getElementById("studyStyle").value = appState.studyStyle;
}

function resetPlanner() {
  appState = {};
  plannerForm.reset();
  localStorage.removeItem(STORAGE_KEY);
  renderEmptyState();
}

function computeReadiness(subjects, daysLeft, studyHours) {
  const averageDifficulty = subjects.reduce((sum, subject) => {
    const value = subject.difficulty === "hard" ? 3 : subject.difficulty === "medium" ? 2 : 1;
    return sum + value;
  }, 0) / subjects.length;

  const runwayScore = clamp(Math.round((daysLeft / 45) * 45), 10, 45);
  const effortScore = clamp(studyHours * 6, 12, 30);
  const loadPenalty = Math.round(averageDifficulty * subjects.length * 2.2);

  return clamp(runwayScore + effortScore - loadPenalty, 18, 96);
}

function loadState() {
  try {
    // Restore the previous plan from browser storage if it exists.
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
```

## Sample Output Description
When the project runs successfully, the output page shows:

1. A stylish hero section with project title
2. A planner input form
3. AI summary and readiness score
4. Daily focus cards
5. Weekly roadmap cards with tasks
6. Completion tracker with progress bar

## How to Run
### Using VS Code Live Server
1. Open the project folder in VS Code.
2. Open `index.html`.
3. Click `Go Live`.

### Using Terminal
```powershell
cd "B:\AI Study Planner"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```
