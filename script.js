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
