const input = document.getElementById("inputText");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const sentenceCount = document.getElementById("sentenceCount");
const feedback = document.getElementById("feedback");

let history = [];

// Save state for undo
function saveState() {
  history.push(input.value);
  if (history.length > 20) history.shift();
}

// LIVE STATS
input.addEventListener("input", updateStats);

function updateStats() {
  const text = input.value;

  charCount.textContent = text.length;

  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCount.textContent = words.length;

  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;
}

// CASE FUNCTIONS
function toUpper() {
  saveState();
  input.value = input.value.toUpperCase();
  updateStats();
}

function toLower() {
  saveState();
  input.value = input.value.toLowerCase();
  updateStats();
}

function toTitle() {
  saveState();
  input.value = input.value
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());
  updateStats();
}

function toSentence() {
  saveState();
  input.value = input.value
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
  updateStats();
}

// CLEANING FUNCTIONS
function removeSpaces() {
  saveState();
  input.value = input.value.replace(/\s+/g, " ").trim();
  updateStats();
}

function removeBreaks() {
  saveState();
  input.value = input.value.replace(/\n+/g, " ");
  updateStats();
}

function removeDuplicates() {
  saveState();
  const lines = input.value.split("\n");
  const unique = [...new Set(lines)];
  input.value = unique.join("\n");
  updateStats();
}

function trimText() {
  saveState();
  input.value = input.value.trim();
  updateStats();
}

// UTILITIES
function undo() {
  if (history.length > 0) {
    input.value = history.pop();
    updateStats();
  }
}

function resetText() {
  saveState();
  input.value = "";
  updateStats();
}

// COPY
function copyText() {
  navigator.clipboard.writeText(input.value);
  feedback.textContent = "Copied!";
  setTimeout(() => feedback.textContent = "", 1500);
}