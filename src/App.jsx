import { useState } from "react";

// Video library with total durations and chapters
const VIDEOS = {
  ds_intro: {
    title: "Learn Data Science Tutorial – Full Course for Beginners",
    total: "8h 15m",
    url: "Part of freeCodeCamp DS Playlist",
    color: "#f97316",
    chapters: [
      { t: "0:00", label: "What is Data Science?" },
      { t: "~0:45", label: "Data Science workflow & roles" },
      { t: "~1:30", label: "Math & stats essentials" },
      { t: "~2:30", label: "Data collection & cleaning overview" },
      { t: "~3:30", label: "Exploratory Data Analysis concepts" },
      { t: "~4:30", label: "Machine Learning intro (theory)" },
      { t: "~5:30", label: "Data storytelling & reporting" },
      { t: "~6:30", label: "Industry demand, career paths" },
      { t: "~7:30", label: "Wrap-up & next steps" },
    ],
  },
  python_ds: {
    title: "Learn Python for Data Science – Full Course for Beginners",
    total: "17h 4m",
    url: "freeCodeCamp · Published May 29, 2025",
    color: "#22d3ee",
    chapters: [
      { t: "0:00",   label: "Course intro & installation (Python, Jupyter, VS Code)" },
      { t: "~0:30",  label: "Variables, data types, operators" },
      { t: "~1:30",  label: "Control flow – if/else, loops" },
      { t: "~2:30",  label: "Functions & scope" },
      { t: "~3:30",  label: "Modules & packages" },
      { t: "~4:30",  label: "Lists, tuples, sets" },
      { t: "~5:30",  label: "Dictionaries & comprehensions" },
      { t: "~6:30",  label: "File I/O & error handling" },
      { t: "~7:30",  label: "NumPy – arrays, operations, broadcasting" },
      { t: "~9:00",  label: "Pandas – Series, DataFrames, read CSV" },
      { t: "~10:30", label: "Pandas – filter, groupby, merge, pivot" },
      { t: "~11:30", label: "Regular expressions (regex)" },
      { t: "~12:00", label: "Matplotlib – line, bar, scatter, histogram" },
      { t: "~13:00", label: "Seaborn – heatmap, pairplot, violin" },
      { t: "~14:00", label: "Web scraping (BeautifulSoup / requests)" },
      { t: "~15:00", label: "Data visualization project" },
      { t: "~16:00", label: "Simple ML model (sklearn intro)" },
      { t: "~16:30", label: "Course wrap-up & next steps" },
    ],
  },
  stats: {
    title: "Statistics – A Full University Course on Data Science Basics",
    total: "8h",
    url: "freeCodeCamp · by Monika Wahi",
    color: "#a78bfa",
    chapters: [
      { t: "0:00",  label: "Intro & types of data (nominal, ordinal, interval, ratio)" },
      { t: "~0:45", label: "Data collection & sampling methods" },
      { t: "~1:30", label: "Experimental design" },
      { t: "~2:15", label: "Descriptive stats – mean, median, mode, range" },
      { t: "~3:00", label: "Variance, std deviation, IQR" },
      { t: "~3:45", label: "Probability basics & rules" },
      { t: "~4:30", label: "Probability distributions (normal, binomial, Poisson)" },
      { t: "~5:15", label: "Hypothesis testing, p-values, significance" },
      { t: "~6:00", label: "Confidence intervals, t-tests, chi-square" },
      { t: "~6:45", label: "Correlation & regression intro" },
      { t: "~7:30", label: "Visualization for stats – histograms, box plots, scatter" },
    ],
  },
  streamlit: {
    title: "Build 12 Data Science Apps with Python and Streamlit – Full Course",
    total: "3–4h",
    url: "freeCodeCamp · by Chanin Nantasenamat",
    color: "#34d399",
    chapters: [
      { t: "0:00",  label: "Streamlit setup, layout, widgets, state" },
      { t: "~0:20", label: "App 1: Simple stock price explorer" },
      { t: "~0:40", label: "App 2: DNA nucleotide count" },
      { t: "~1:00", label: "App 3: EDA basketball (NBA stats)" },
      { t: "~1:20", label: "App 4: EDA football (NFL stats)" },
      { t: "~1:40", label: "App 5: EDA baseball (MLB stats)" },
      { t: "~2:00", label: "App 6: Iris flower classification (ML)" },
      { t: "~2:20", label: "App 7: Penguin classification (ML)" },
      { t: "~2:40", label: "App 8: Boston housing regression" },
      { t: "~3:00", label: "App 9: Bioinformatics – solubility prediction" },
      { t: "~3:10", label: "App 10: Molecular descriptor calculator" },
      { t: "~3:20", label: "App 11: Random forest classification" },
      { t: "~3:35", label: "App 12: Deployment to Streamlit Cloud / Heroku" },
    ],
  },
  tableau: {
    title: "Tableau for Data Science and Data Visualization – Crash Course",
    total: "1–2h",
    url: "freeCodeCamp DS Playlist",
    color: "#fb7185",
    chapters: [
      { t: "0:00",  label: "Tableau desktop install & interface" },
      { t: "~0:20", label: "Connecting to data sources (CSV, Excel, DB)" },
      { t: "~0:40", label: "Building charts – bar, line, scatter, maps" },
      { t: "~1:00", label: "Filters, calculations, parameters" },
      { t: "~1:20", label: "Dashboards & storytelling" },
    ],
  },
  dsa: {
    title: "Data Structures & Algorithms Mega Course – Destination FAANG",
    total: "~50h",
    url: "freeCodeCamp · by Parth Vyas",
    color: "#fbbf24",
    chapters: [
      { t: "0:00",   label: "Course intro & study plan" },
      { t: "~0:30",  label: "Time & Space Complexity, Big-O notation" },
      { t: "~2:00",  label: "Arrays – basics, traversal, two-pointer" },
      { t: "~5:00",  label: "Strings – manipulation, palindromes, anagrams" },
      { t: "~8:00",  label: "Sliding window pattern" },
      { t: "~10:00", label: "Linked Lists – singly, doubly, reverse" },
      { t: "~14:00", label: "Stacks – implementation, monotonic stack" },
      { t: "~17:00", label: "Queues & Deque" },
      { t: "~19:00", label: "Binary Trees – DFS (pre/in/post), BFS" },
      { t: "~23:00", label: "Binary Search Trees – insert, search, validate" },
      { t: "~27:00", label: "Graphs – adjacency list, BFS, DFS" },
      { t: "~32:00", label: "Topological sort, cycle detection, Dijkstra" },
      { t: "~36:00", label: "Dynamic Programming – memoization, tabulation" },
      { t: "~41:00", label: "DP classic problems (knapsack, LCS, coin change)" },
      { t: "~44:00", label: "Greedy algorithms – intervals, activity selection" },
      { t: "~47:00", label: "Backtracking – permutations, N-Queens, subsets" },
      { t: "~49:00", label: "Final FAANG problem walkthroughs" },
    ],
  },
};

const phases = [
  {
    id: 1, label: "PHASE 1", title: "DS Intro & Statistics",
    dates: "Mar 24 – Apr 6", weeks: "Weeks 1–2",
    color: "#f97316", bg: "#12080200", accent: "#7c3310", icon: "📐",
    weeks_data: [
      {
        week: "Week 1", dates: "Mar 24–30", focus: "Data Science Overview",
        sessions: [
          { day: "Mon–Tue", video: "ds_intro", from: "0:00", to: "~2:30", label: "What is DS + Workflow + Math essentials", note: "Take notes on the DS lifecycle diagram" },
          { day: "Wed–Thu", video: "ds_intro", from: "~2:30", to: "~5:30", label: "Data collection, EDA concepts, ML intro (theory)", note: "Don't worry about code yet — absorb the mental model" },
          { day: "Fri",     video: "ds_intro", from: "~5:30", to: "~8:15", label: "Storytelling, careers, wrap-up", note: "Write a 1-page personal 'why DS' note after" },
          { day: "Sat",     video: null, label: "Set up dev environment", note: "Install Anaconda, Jupyter, VS Code. Explore Kaggle — read 2 notebooks." },
          { day: "Sun",     video: null, label: "Rest & light review", note: "Skim your Week 1 notes" },
        ],
        practice: "Environment setup + Kaggle account created",
        project: null,
      },
      {
        week: "Week 2", dates: "Mar 31–Apr 6", focus: "Statistics — Full Course",
        sessions: [
          { day: "Mon",     video: "stats", from: "0:00", to: "~1:30", label: "Types of data, data collection, sampling methods", note: "" },
          { day: "Tue",     video: "stats", from: "~1:30", to: "~3:00", label: "Experimental design + Descriptive stats (mean, median, mode, range)", note: "Practice computing these by hand on a small dataset" },
          { day: "Wed",     video: "stats", from: "~3:00", to: "~4:30", label: "Variance, std deviation, IQR + Probability basics", note: "" },
          { day: "Thu",     video: "stats", from: "~4:30", to: "~6:00", label: "Distributions (normal, binomial) + Hypothesis testing + p-values", note: "Draw the normal distribution from memory — label 68/95/99.7" },
          { day: "Fri",     video: "stats", from: "~6:00", to: "~8:00", label: "Confidence intervals, t-tests, chi-square, correlation, regression intro, visualization for stats", note: "" },
          { day: "Sat",     video: null, label: "Stats practice", note: "Solve 10 stats problems on Khan Academy. Then verify 5 of them with scipy.stats in Python." },
          { day: "Sun",     video: null, label: "Rest", note: "" },
        ],
        practice: "10 stats problems (Khan Academy) + verify with scipy.stats",
        project: null,
      },
    ],
  },
  {
    id: 2, label: "PHASE 2", title: "Python for Data Science",
    dates: "Apr 7 – May 4", weeks: "Weeks 3–6",
    color: "#22d3ee", bg: "#020f1200", accent: "#0e5a67", icon: "🐍",
    weeks_data: [
      {
        week: "Week 3", dates: "Apr 7–13", focus: "Python Basics (0:00 → ~6:30)",
        sessions: [
          { day: "Mon",     video: "python_ds", from: "0:00", to: "~1:30", label: "Setup, installation, variables, data types, operators", note: "Follow along — type every line of code" },
          { day: "Tue",     video: "python_ds", from: "~1:30", to: "~3:30", label: "Control flow (if/else, for, while) + Functions & scope", note: "" },
          { day: "Wed",     video: "python_ds", from: "~3:30", to: "~5:30", label: "Modules & packages + Lists, tuples, sets", note: "Build a small CLI quiz game using lists + functions" },
          { day: "Thu",     video: "python_ds", from: "~5:30", to: "~7:30", label: "Dictionaries & comprehensions + File I/O & error handling", note: "" },
          { day: "Fri",     video: null, label: "Practice: 15 Python problems (HackerRank Easy)", note: "Focus on string manipulation, loops, functions" },
          { day: "Sat",     video: null, label: "Practice: 10 HackerRank Medium problems", note: "" },
          { day: "Sun",     video: null, label: "Rest / review notes", note: "" },
        ],
        practice: "HackerRank Python track — 25 problems (Easy + Medium)",
        project: null,
      },
      {
        week: "Week 4", dates: "Apr 14–20", focus: "NumPy & Pandas (7:30 → ~11:30)",
        sessions: [
          { day: "Mon",     video: "python_ds", from: "~7:30", to: "~9:00", label: "NumPy – arrays, indexing, slicing, operations, broadcasting", note: "Create a cheat sheet for NumPy operations" },
          { day: "Tue",     video: "python_ds", from: "~9:00", to: "~10:30", label: "Pandas – Series, DataFrames, read_csv, head/tail/info/describe", note: "Load the Titanic dataset and explore it" },
          { day: "Wed",     video: "python_ds", from: "~10:30", to: "~11:30", label: "Pandas – filter, groupby, merge, pivot, regex", note: "" },
          { day: "Thu",     video: null, label: "Practice: Kaggle Learn — Pandas micro-course (free)", note: "Complete all 6 exercises on Kaggle Learn" },
          { day: "Fri",     video: null, label: "Practice: Kaggle Learn — NumPy + real dataset cleaning", note: "Clean the Titanic dataset from scratch" },
          { day: "Sat",     video: null, label: "Mini project: full Pandas EDA on Titanic", note: "Answer 5 questions from the data using only Pandas" },
          { day: "Sun",     video: null, label: "Rest", note: "" },
        ],
        practice: "Kaggle Learn Pandas micro-course + Titanic EDA",
        project: null,
      },
      {
        week: "Week 5", dates: "Apr 21–27", focus: "Matplotlib, Seaborn, Web Scraping (~12:00 → ~15:00)",
        sessions: [
          { day: "Mon",     video: "python_ds", from: "~12:00", to: "~13:00", label: "Matplotlib – line, bar, scatter, histogram, subplots, styling", note: "" },
          { day: "Tue",     video: "python_ds", from: "~13:00", to: "~14:00", label: "Seaborn – heatmaps, pairplots, violin plots, distribution plots", note: "Recreate 5 plots from a Kaggle notebook" },
          { day: "Wed",     video: "python_ds", from: "~14:00", to: "~15:00", label: "Web scraping – requests + BeautifulSoup", note: "Scrape a simple table from Wikipedia" },
          { day: "Thu",     video: null, label: "Visualization challenge", note: "Tell a data story with 6+ different chart types on one dataset" },
          { day: "Fri",     video: null, label: "Practice: Plotly basics (interactive charts)", note: "Use Plotly Express for 3 interactive charts" },
          { day: "Sat",     video: null, label: "Mini project: Visualization story on a Kaggle dataset", note: "Publish as a Kaggle notebook" },
          { day: "Sun",     video: null, label: "Rest", note: "" },
        ],
        practice: "Kaggle notebook with 6+ visualizations published",
        project: null,
      },
      {
        week: "Week 6", dates: "Apr 28–May 4", focus: "ML Intro + Course Projects (~15:00 → 17:04)",
        sessions: [
          { day: "Mon",     video: "python_ds", from: "~15:00", to: "~16:00", label: "Data visualization project (from course)", note: "Replicate exactly, then add your own twist" },
          { day: "Tue",     video: "python_ds", from: "~16:00", to: "~17:04", label: "Simple ML model with sklearn + course wrap-up", note: "Understand train/test split, fit, predict, accuracy" },
          { day: "Wed",     video: null, label: "Extend the ML model", note: "Try 3 different sklearn classifiers on the same dataset. Compare accuracy." },
          { day: "Thu",     video: null, label: "GitHub setup", note: "Create repo. Push the visualization + ML project. Write proper READMEs." },
          { day: "Fri",     video: null, label: "LinkedIn update", note: "Add Python, Pandas, NumPy, Matplotlib, sklearn skills. Link GitHub." },
          { day: "Sat",     video: null, label: "Full mock EDA challenge", note: "Pick a new dataset. Do complete EDA in 3 hours like a take-home test." },
          { day: "Sun",     video: null, label: "Phase 2 review", note: "Skim all notes. Identify 3 weak areas to revisit next week." },
        ],
        practice: "2 projects on GitHub with clean READMEs",
        project: "🔨 GitHub Project: Visualization Story + ML Model (sklearn)",
      },
    ],
  },
  {
    id: 3, label: "PHASE 3", title: "Streamlit, Tableau & Capstone",
    dates: "May 5 – Jun 8", weeks: "Weeks 7–10",
    color: "#34d399", bg: "#02120900", accent: "#0e5c35", icon: "🚀",
    weeks_data: [
      {
        week: "Week 7", dates: "May 5–11", focus: "Streamlit Apps 1–6 (0:00 → ~2:00)",
        sessions: [
          { day: "Mon",     video: "streamlit", from: "0:00", to: "~0:20", label: "Streamlit setup, layout, widgets, session state", note: "Install streamlit. Run 'Hello World' app." },
          { day: "Tue",     video: "streamlit", from: "~0:20", to: "~0:40", label: "App 1: Stock price explorer + App 2: DNA nucleotide count", note: "" },
          { day: "Wed",     video: "streamlit", from: "~0:40", to: "~1:20", label: "App 3: NBA stats EDA + App 4: NFL stats EDA", note: "" },
          { day: "Thu",     video: "streamlit", from: "~1:20", to: "~2:00", label: "App 5: MLB stats EDA + App 6: Iris flower classification (ML)", note: "" },
          { day: "Fri",     video: null, label: "Customize App 3 or 4", note: "Add a new chart, filter, or stat that wasn't in the course" },
          { day: "Sat",     video: null, label: "Deploy App 6 to Streamlit Community Cloud", note: "Get a public URL. Share it." },
          { day: "Sun",     video: null, label: "Rest", note: "" },
        ],
        practice: "1 Streamlit app deployed publicly",
        project: null,
      },
      {
        week: "Week 8", dates: "May 12–18", focus: "Streamlit Apps 7–12 + FastAPI Foundations",
        sessions: [
          { day: "Mon",     video: "streamlit", from: "~2:00", to: "~2:40", label: "App 7: Penguin classification + App 8: Boston housing regression", note: "" },
          { day: "Tue",     video: "streamlit", from: "~2:40", to: "~3:20", label: "App 9: Bioinformatics solubility + App 10: Molecular descriptor", note: "Focus on how ML pipelines are structured inside an app" },
          { day: "Wed",     video: "streamlit", from: "~3:20", to: "~3:50", label: "App 11: Random forest + App 12: Deployment to Streamlit Cloud", note: "" },
          { day: "Thu",     video: null, label: "⚡ FastAPI Day 1 — install, routing, path/query params, Pydantic models, auto docs", note: "Read fastapi.tiangolo.com/tutorial in order. Goal: a working /predict endpoint that accepts JSON." },
          { day: "Fri",     video: null, label: "⚡ FastAPI Day 2 — CORS middleware, load a pkl sklearn model, return predictions as JSON, test with Postman", note: "This is the bridge between your ML model and your React frontend. Nail this." },
          { day: "Sat",     video: null, label: "Mini integration: call your FastAPI /predict endpoint from a React component using fetch()", note: "Even a simple create-react-app doing a POST request counts — prove the full stack works end-to-end." },
          { day: "Sun",     video: null, label: "Rest", note: "" },
        ],
        practice: "FastAPI /predict endpoint + called from React — push to GitHub",
        project: "🔨 FastAPI + React mini integration (sklearn model served via API, consumed by React frontend)",
      },
      {
        week: "Week 9", dates: "May 19–25", focus: "Tableau Crash Course + Custom Streamlit App",
        sessions: [
          { day: "Mon",     video: "tableau", from: "0:00", to: "~0:40", label: "Tableau install, interface, connecting to data (CSV, Excel)", note: "" },
          { day: "Tue",     video: "tableau", from: "~0:40", to: "~1:20", label: "Building charts – bar, line, scatter, maps + Filters & calculations", note: "" },
          { day: "Wed",     video: "tableau", from: "~1:20", to: "~2:00", label: "Dashboards, parameters, storytelling", note: "Publish a dashboard to Tableau Public. Add to LinkedIn." },
          { day: "Thu",     video: null, label: "Build your own custom Streamlit app (13th app — your own idea)", note: "Take any Kaggle dataset you've used and wrap it in Streamlit. This is your last Streamlit-only app — capstone will use React." },
          { day: "Fri",     video: null, label: "Deploy custom Streamlit app to Streamlit Community Cloud", note: "Get a public URL. Add to GitHub + LinkedIn." },
          { day: "Sat",     video: null, label: "Review Phase 1–3 concepts so far", note: "Stats → Python → Pandas → Visualization → Streamlit → FastAPI → Tableau" },
          { day: "Sun",     video: null, label: "Rest", note: "" },
        ],
        practice: "Tableau Public dashboard + custom Streamlit app deployed",
        project: null,
      },
      {
        week: "Weeks 10–11", dates: "May 26–Jun 8", focus: "Capstone — React + FastAPI + ML (Full Stack DS App)",
        sessions: [
          { day: "Week 10 Mon",     video: null, label: "Pick a real-world problem + dataset (housing, churn, health, fraud)", note: "Scope the app: what will the user input? What does the model predict? Sketch the UI in Figma or on paper." },
          { day: "Week 10 Tue–Wed", video: null, label: "Full EDA + feature engineering (at least 8 visualizations, document every finding)", note: "Use pandas-profiling or ydata-profiling to speed this up" },
          { day: "Week 10 Thu–Fri", video: null, label: "Train 3+ models (LR, RF, XGBoost) — evaluate with cross-validation, pick the winner", note: "Save the final model with joblib: joblib.dump(model, 'model.pkl')" },
          { day: "Week 10 Sat",     video: null, label: "Build FastAPI backend — /predict endpoint loads the pkl, accepts feature JSON, returns prediction + confidence", note: "Add a /health endpoint too. Test everything in Swagger UI (auto-generated at /docs)." },
          { day: "Week 10 Sun",     video: null, label: "Rest", note: "" },
          { day: "Week 11 Mon–Tue", video: null, label: "Build React frontend — form inputs for features, POST to FastAPI, display prediction result with confidence", note: "Use your existing React skills. Style it properly — this is a portfolio piece. Tailwind or CSS modules, your call." },
          { day: "Week 11 Wed",     video: null, label: "Add visualizations to React frontend — charts showing model confidence, feature importance (recharts or Chart.js)", note: "Fetch the feature importance from a FastAPI endpoint and render it as a bar chart in React." },
          { day: "Week 11 Thu",     video: null, label: "Deploy: FastAPI → Render or Railway (free tier). React → Vercel. Wire them together with env variables.", note: "CORS is already set up from Week 8 — just update the API_URL env var in Vercel." },
          { day: "Week 11 Fri",     video: null, label: "GitHub monorepo — clean structure: /backend (FastAPI) + /frontend (React) + /notebooks (EDA). Write a killer README.", note: "Include: problem statement, architecture diagram, live demo link, how to run locally, screenshots." },
          { day: "Week 11 Sat",     video: null, label: "Write a Medium or LinkedIn article: 'How I built a full-stack ML app with React + FastAPI'", note: "Explain the problem, your model choice, the architecture, what you'd do differently. Tag freeCodeCamp." },
          { day: "Week 11 Sun",     video: null, label: "Rest — Phase 3 complete! 🎉", note: "You now have a deployed, production-grade DS app that 95% of DS candidates don't have." },
        ],
        practice: "Full stack DS app live at a public URL — React frontend + FastAPI backend + trained ML model",
        project: "🔨 CAPSTONE: React (Vercel) + FastAPI (Render) + sklearn model — real problem, deployed, GitHub monorepo + article published",
      },
    ],
  },
  {
    id: 4, label: "PHASE 4", title: "DSA Mega Course",
    dates: "Jun 9 – Jul 6", weeks: "Weeks 12–15",
    color: "#fbbf24", bg: "#12100200", accent: "#6b5500", icon: "🧩",
    weeks_data: [
      {
        week: "Week 12", dates: "Jun 9–15", focus: "Big-O, Arrays, Strings (0:00 → ~8:00)",
        sessions: [
          { day: "Mon", video: "dsa", from: "0:00", to: "~2:00", label: "Course intro + Time & Space Complexity + Big-O notation", note: "Write out every complexity class with an example" },
          { day: "Tue", video: "dsa", from: "~2:00", to: "~5:00", label: "Arrays – basics, traversal, two-pointer technique", note: "LeetCode: Two Sum, Best Time to Buy/Sell Stock, Contains Duplicate" },
          { day: "Wed", video: "dsa", from: "~5:00", to: "~8:00", label: "Strings – manipulation, palindromes, anagrams + Sliding window", note: "LeetCode: Valid Palindrome, Anagram, Longest Substring Without Repeat" },
          { day: "Thu", video: null, label: "LeetCode: 5 Easy arrays/strings problems", note: "" },
          { day: "Fri", video: null, label: "LeetCode: 5 Medium arrays/strings problems", note: "" },
          { day: "Sat", video: null, label: "Review + write all patterns in a notebook from memory", note: "Two-pointer, sliding window templates" },
          { day: "Sun", video: null, label: "Rest", note: "" },
        ],
        practice: "LeetCode: 10 problems (Easy + Medium, arrays + strings)",
        project: null,
      },
      {
        week: "Week 13", dates: "Jun 16–22", focus: "Linked Lists, Stacks, Queues (~10:00 → ~19:00)",
        sessions: [
          { day: "Mon", video: "dsa", from: "~10:00", to: "~14:00", label: "Linked Lists – singly, doubly, reverse, detect cycle, merge sorted", note: "Implement a LinkedList class from scratch in Python" },
          { day: "Tue", video: "dsa", from: "~14:00", to: "~17:00", label: "Stacks – implementation, balanced parentheses, monotonic stack", note: "LeetCode: Valid Parentheses, Min Stack, Daily Temperatures" },
          { day: "Wed", video: "dsa", from: "~17:00", to: "~19:00", label: "Queues & Deque – BFS applications", note: "LeetCode: Sliding Window Maximum, Design Circular Queue" },
          { day: "Thu", video: null, label: "LeetCode: 5 problems (linked lists)", note: "" },
          { day: "Fri", video: null, label: "LeetCode: 5 problems (stacks + queues)", note: "" },
          { day: "Sat", video: null, label: "Implement Stack + Queue from scratch", note: "Then solve 3 more medium problems" },
          { day: "Sun", video: null, label: "Rest", note: "" },
        ],
        practice: "LeetCode: 15 problems (linked lists + stacks + queues)",
        project: null,
      },
      {
        week: "Week 14", dates: "Jun 23–29", focus: "Trees & Graphs (~19:00 → ~35:00)",
        sessions: [
          { day: "Mon", video: "dsa", from: "~19:00", to: "~23:00", label: "Binary Trees – DFS (pre/in/post order), BFS, level order", note: "LeetCode: Invert Binary Tree, Max Depth, Same Tree" },
          { day: "Tue", video: "dsa", from: "~23:00", to: "~27:00", label: "Binary Search Trees – insert, delete, validate, kth smallest", note: "LeetCode: Validate BST, BST Iterator" },
          { day: "Wed", video: "dsa", from: "~27:00", to: "~32:00", label: "Graphs – adjacency list, BFS, DFS, connected components", note: "LeetCode: Number of Islands, Clone Graph" },
          { day: "Thu", video: "dsa", from: "~32:00", to: "~35:00", label: "Topological sort, cycle detection, Dijkstra's algorithm", note: "LeetCode: Course Schedule, Network Delay Time" },
          { day: "Fri", video: null, label: "LeetCode: 6 tree problems", note: "" },
          { day: "Sat", video: null, label: "LeetCode: 5 graph problems", note: "" },
          { day: "Sun", video: null, label: "Rest", note: "" },
        ],
        practice: "LeetCode: 11 problems (trees + graphs)",
        project: null,
      },
      {
        week: "Week 15", dates: "Jun 30–Jul 6", focus: "DP, Greedy, Backtracking (~36:00 → ~50:00)",
        sessions: [
          { day: "Mon", video: "dsa", from: "~36:00", to: "~41:00", label: "Dynamic Programming – memoization vs tabulation, 1D DP patterns", note: "LeetCode: Climbing Stairs, House Robber, Coin Change" },
          { day: "Tue", video: "dsa", from: "~41:00", to: "~44:00", label: "DP classic problems – knapsack, LCS, Edit Distance", note: "LeetCode: Longest Common Subsequence, Edit Distance" },
          { day: "Wed", video: "dsa", from: "~44:00", to: "~47:00", label: "Greedy algorithms – interval scheduling, meeting rooms, jump game", note: "LeetCode: Meeting Rooms, Jump Game, Gas Station" },
          { day: "Thu", video: "dsa", from: "~47:00", to: "~50:00", label: "Backtracking – permutations, combinations, N-Queens, Sudoku solver + FAANG walkthroughs", note: "LeetCode: Subsets, Permutations, N-Queens" },
          { day: "Fri", video: null, label: "LeetCode: 5 DP problems", note: "" },
          { day: "Sat", video: null, label: "LeetCode: 5 Greedy + Backtracking problems", note: "" },
          { day: "Sun", video: null, label: "DSA complete review — rewrite every pattern template from memory", note: "" },
        ],
        practice: "LeetCode: 10 problems (DP + Greedy + Backtracking)",
        project: null,
      },
    ],
  },
  {
    id: 5, label: "PHASE 5", title: "Interview Prep & Final Revision",
    dates: "Jul 6 – Aug 31", weeks: "Weeks 16–22",
    color: "#fb7185", bg: "#14050800", accent: "#6b1527", icon: "🎯",
    weeks_data: [
      {
        week: "Week 16", dates: "Jul 6–12", focus: "DS Theory Blitz + SQL",
        sessions: [
          { day: "Mon", video: null, label: "ML fundamentals Q&A: bias/variance, overfitting, regularization, cross-validation", note: "Write answers to 20 common ML interview questions" },
          { day: "Tue", video: null, label: "Algorithms: LR, Ridge, Lasso, DT, RF, SVM, KNN, k-means, PCA", note: "For each: when to use it, pros/cons, hyperparameters" },
          { day: "Wed", video: null, label: "Evaluation metrics: accuracy, precision, recall, F1, AUC-ROC, RMSE", note: "Practice computing each metric by hand" },
          { day: "Thu", video: null, label: "SQL for DS: joins, window functions, CTEs, GROUP BY, subqueries", note: "Mode Analytics SQL tutorial or LeetCode SQL Easy problems" },
          { day: "Fri", video: null, label: "SQL practice: 10 Medium SQL problems on LeetCode", note: "" },
          { day: "Sat", video: null, label: "Statistics interview questions: 30 common Qs from glassdoor/stratascratch", note: "" },
          { day: "Sun", video: null, label: "Make Anki flashcards for all DS concepts", note: "" },
        ],
        practice: "50 DS theory flashcards (Anki) + 10 SQL LeetCode problems",
        project: null,
      },
      {
        week: "Week 17", dates: "Jul 13–19", focus: "LeetCode Grind",
        sessions: [
          { day: "Mon–Fri", video: null, label: "3 LeetCode problems/day (1 Easy + 2 Medium)", note: "Rotate topics: Day 1 arrays, Day 2 trees, Day 3 DP, Day 4 strings, Day 5 graphs" },
          { day: "Sat", video: null, label: "Full mock coding interview (2 × 45-min timed problems)", note: "Use Pramp or ask a friend. Write out approach before coding." },
          { day: "Sun", video: null, label: "Review mock interview — what went wrong?", note: "" },
        ],
        practice: "LeetCode: 15 problems this week (cumulative ~80+)",
        project: null,
      },
      {
        week: "Week 18", dates: "Jul 20–26", focus: "System Design & DS Case Studies",
        sessions: [
          { day: "Mon", video: null, label: "System design basics: scalability, load balancing, databases, caching, CAP theorem", note: "" },
          { day: "Tue", video: null, label: "Design a recommendation system end-to-end", note: "Candidate generation → ranking → serving" },
          { day: "Wed", video: null, label: "Design a fraud detection pipeline", note: "Data pipeline → model → monitoring → rollback" },
          { day: "Thu", video: null, label: "A/B testing – design, sample size, p-values, pitfalls", note: "" },
          { day: "Fri", video: null, label: "Product sense for DS: defining metrics, experiment design, trade-offs", note: "" },
          { day: "Sat", video: null, label: "Mock case study interview (record yourself, review playback)", note: "" },
          { day: "Sun", video: null, label: "Write 5 STAR behavioral stories from your projects", note: "Situation → Task → Action → Result. Use your 3 GitHub projects." },
        ],
        practice: "5 written STAR stories + 1 recorded mock case study",
        project: null,
      },
      {
        week: "Week 19", dates: "Jul 27–Aug 2", focus: "Mock Interviews",
        sessions: [
          { day: "Mon", video: null, label: "Resume + LinkedIn final polish", note: "Add all projects: React+FastAPI capstone (with live URL), Streamlit apps, Tableau Public dashboard, GitHub link" },
          { day: "Tue", video: null, label: "Mock coding interview (Pramp / interviewing.io)", note: "" },
          { day: "Wed", video: null, label: "Mock DS theory interview (peer or record yourself)", note: "" },
          { day: "Thu", video: null, label: "Mock case study + behavioral Q&A", note: "" },
          { day: "Fri", video: null, label: "Review all feedback — list 3 weak spots to target", note: "" },
          { day: "Sat", video: null, label: "Targeted LeetCode grind on weak patterns", note: "" },
          { day: "Sun", video: null, label: "Rest 🛏️", note: "" },
        ],
        practice: "3 full mock interviews (coding + theory + case study)",
        project: null,
      },
      {
        week: "Weeks 20–22", dates: "Aug 3–31", focus: "Final Sprint → Target Interview",
        sessions: [
          { day: "Aug 3–9",   video: null, label: "Speed-run all Phase 1–3 DS notes. 5 LeetCode/day.", note: "Use your Anki deck daily — 20 min/morning" },
          { day: "Aug 10–16", video: null, label: "Speed-run all Phase 4 DSA patterns. Write algos from memory.", note: "1 full mock interview this week (Pramp)" },
          { day: "Aug 17–23", video: null, label: "Final 10 hardest LeetCode problems. Re-read all project READMEs.", note: "Practice explaining your projects out loud in 2 minutes each" },
          { day: "Aug 24–30", video: null, label: "Light review only — 2 LeetCode/day. Sleep 8 hours.", note: "You are ready. Trust the 5 months of work." },
          { day: "Aug 31",    video: null, label: "🏁 TARGET INTERVIEW DATE", note: "Go get it." },
        ],
        practice: "Daily Anki reviews + 2–5 LeetCode/day + mock interviews",
        project: null,
      },
    ],
  },
];

export default function StudySchedule() {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [showVideoRef, setShowVideoRef] = useState(null);

  const phase = phases[activePhase];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#07070f", color: "#e4dff4", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg,#0d0b1e,#110820)", borderBottom: "1px solid #251d40", padding: "28px 24px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ fontFamily: "monospace", fontSize: 11, color: "#6b5f9e", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 6 }}>
            freeCodeCamp DS Playlist + DSA Mega Course · Mar 24 → Aug 31, 2026
          </div>
          <h1 style={{ margin: "0 0 4px", fontSize: "clamp(20px,4vw,34px)", fontWeight: 700, background: "linear-gradient(90deg,#e8d5ff,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Your 5-Month Road to the Job Interview
          </h1>
          <p style={{ margin: "6px 0 0", color: "#7a7099", fontSize: 13, fontFamily: "monospace" }}>
            With exact timestamps · React + FastAPI capstone · 3 months learning · 2 months interview prep
          </p>
        </div>
      </div>

      {/* VIDEO REFERENCE PANEL */}
      <div style={{ background: "#0d0c1a", borderBottom: "1px solid #1e1a35", padding: "10px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5a5274", marginRight: 4 }}>VIDEOS:</span>
          {Object.entries(VIDEOS).map(([key, v]) => (
            <button key={key}
              onClick={() => setShowVideoRef(showVideoRef === key ? null : key)}
              style={{
                background: showVideoRef === key ? v.color + "33" : "transparent",
                border: `1px solid ${showVideoRef === key ? v.color : "#2a2445"}`,
                color: v.color, borderRadius: 4, padding: "3px 10px",
                cursor: "pointer", fontSize: 11, fontFamily: "monospace",
                transition: "all 0.15s"
              }}>
              {v.total}
            </button>
          ))}
        </div>
        {showVideoRef && (
          <div style={{ maxWidth: 920, margin: "10px auto 4px", background: "#0b0a18", border: `1px solid ${VIDEOS[showVideoRef].color}44`, borderRadius: 8, padding: "12px 16px" }}>
            <div style={{ color: VIDEOS[showVideoRef].color, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>
              {VIDEOS[showVideoRef].title} <span style={{ fontFamily: "monospace", fontSize: 11, opacity: 0.7 }}>({VIDEOS[showVideoRef].total})</span>
            </div>
            <div style={{ color: "#6a6288", fontFamily: "monospace", fontSize: 11, marginBottom: 10 }}>{VIDEOS[showVideoRef].url}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px,1fr))", gap: 4 }}>
              {VIDEOS[showVideoRef].chapters.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "#b0a8cc" }}>
                  <span style={{ color: VIDEOS[showVideoRef].color, fontFamily: "monospace", whiteSpace: "nowrap", minWidth: 50 }}>{c.t}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PHASE TABS */}
      <div style={{ background: "#09091a", borderBottom: "1px solid #1a1730", padding: "12px 20px", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 8, maxWidth: 920, margin: "0 auto", flexWrap: "wrap" }}>
          {phases.map((p, i) => (
            <button key={p.id} onClick={() => { setActivePhase(i); setExpandedWeek(null); }}
              style={{
                background: activePhase === i ? p.color : "transparent",
                color: activePhase === i ? "#000" : p.color,
                border: `1.5px solid ${p.color}`,
                borderRadius: 6, padding: "7px 14px", cursor: "pointer",
                fontSize: 12, fontWeight: 700, fontFamily: "monospace",
                letterSpacing: "0.04em", transition: "all 0.2s",
                opacity: activePhase === i ? 1 : 0.65,
              }}>
              {p.icon} {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* PHASE HEADER */}
      <div style={{ background: phase.bg, borderBottom: `2px solid ${phase.accent}`, padding: "18px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ color: phase.color, fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", marginBottom: 3 }}>
              {phase.label} · {phase.weeks}
            </div>
            <h2 style={{ margin: 0, fontSize: 20, color: "#f0ecf8", fontWeight: 700 }}>{phase.icon} {phase.title}</h2>
          </div>
          <div style={{ background: phase.accent + "44", border: `1px solid ${phase.accent}`, borderRadius: 7, padding: "8px 16px", textAlign: "center" }}>
            <div style={{ color: phase.color, fontSize: 15, fontWeight: 700 }}>{phase.dates}</div>
            <div style={{ color: "#7a7099", fontSize: 10, fontFamily: "monospace" }}>dates</div>
          </div>
        </div>
      </div>

      {/* WEEKS */}
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "18px 18px 40px" }}>
        {phase.weeks_data.map((w, wi) => {
          const isOpen = expandedWeek === wi;
          return (
            <div key={wi} style={{ marginBottom: 10 }}>
              <button onClick={() => setExpandedWeek(isOpen ? null : wi)}
                style={{
                  width: "100%", background: isOpen ? phase.accent + "33" : "#0e0d1c",
                  border: `1px solid ${isOpen ? phase.color : "#252040"}`,
                  borderRadius: isOpen ? "9px 9px 0 0" : 9,
                  padding: "13px 16px", cursor: "pointer", textAlign: "left",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "all 0.2s",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span style={{ background: phase.color, color: "#000", borderRadius: 4, padding: "2px 10px", fontSize: 11, fontWeight: 800, fontFamily: "monospace" }}>
                    {w.week}
                  </span>
                  <span style={{ color: "#c0b8d8", fontSize: 14, fontWeight: 600 }}>{w.focus}</span>
                  <span style={{ color: "#504870", fontSize: 12, fontFamily: "monospace" }}>{w.dates}</span>
                </div>
                <span style={{ color: phase.color, fontSize: 14 }}>{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div style={{ background: "#0b0a18", border: `1px solid ${phase.color}`, borderTop: "none", borderRadius: "0 0 9px 9px", padding: "16px 18px" }}>
                  {/* Sessions table */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ color: phase.color, fontSize: 10, fontFamily: "monospace", letterSpacing: "0.18em", marginBottom: 10 }}>📅 DAILY SESSIONS</div>
                    {w.sessions.map((s, si) => (
                      <div key={si} style={{
                        display: "grid", gridTemplateColumns: "90px 1fr",
                        gap: "0 12px", marginBottom: 10,
                        paddingBottom: 10, borderBottom: si < w.sessions.length - 1 ? "1px solid #1a1830" : "none"
                      }}>
                        <div style={{ fontFamily: "monospace", fontSize: 11, color: "#6a6288", paddingTop: 1 }}>{s.day}</div>
                        <div>
                          {s.video && (
                            <div style={{
                              display: "inline-flex", gap: 6, alignItems: "center",
                              background: VIDEOS[s.video].color + "22",
                              border: `1px solid ${VIDEOS[s.video].color}55`,
                              borderRadius: 4, padding: "2px 8px", marginBottom: 4,
                              fontSize: 11, fontFamily: "monospace", color: VIDEOS[s.video].color
                            }}>
                              🎬 {VIDEOS[s.video].total.split("·")[0].trim()} · {s.from} → {s.to}
                            </div>
                          )}
                          <div style={{ fontSize: 13, color: "#c8c0e0", marginBottom: s.note ? 3 : 0 }}>{s.label}</div>
                          {s.note && <div style={{ fontSize: 12, color: "#6a6288", fontStyle: "italic" }}>💡 {s.note}</div>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Practice + Project */}
                  <div style={{ display: "grid", gridTemplateColumns: w.project ? "1fr 1fr" : "1fr", gap: 12 }}>
                    <div style={{ background: "#091a0f", border: "1px solid #1a4530", borderRadius: 6, padding: "10px 12px" }}>
                      <div style={{ color: "#34d399", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.15em", marginBottom: 6 }}>⚡ PRACTICE THIS WEEK</div>
                      <div style={{ fontSize: 13, color: "#86efbd", lineHeight: 1.55 }}>{w.practice}</div>
                    </div>
                    {w.project && (
                      <div style={{ background: "#140810", border: "1px solid #4a1530", borderRadius: 6, padding: "10px 12px" }}>
                        <div style={{ color: "#fb7185", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.15em", marginBottom: 6 }}>🔨 PROJECT</div>
                        <div style={{ fontSize: 13, color: "#fda4af", lineHeight: 1.55 }}>{w.project}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div style={{ background: "#09091a", borderTop: "1px solid #1a1730", padding: "14px 24px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "Video Hours", val: "~120h" },
            { label: "LeetCode Problems", val: "100+" },
            { label: "Projects", val: "5+" },
            { label: "Weeks Total", val: "22" },
            { label: "Target Date", val: "Aug 31" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 19, fontWeight: 700, color: "#a78bfa" }}>{s.val}</div>
              <div style={{ fontSize: 10, color: "#504870", fontFamily: "monospace", letterSpacing: "0.1em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
