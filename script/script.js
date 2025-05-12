const courseDescriptions = {
    Math: "Ako’s Math class is 99% jokes and 1% actual numbers.",
    Science: "Discover how explosions and baking soda are basically the same thing.",
    Philosophy: "Why is a chair a chair? Explore the real questions with Ako."
  };
  
  function showCourse(courseName) {
    const title = document.getElementById("course-title");
    const text = document.getElementById("course-text");
    const section = document.getElementById("course-description");
  
    title.textContent = courseName;
    text.textContent = courseDescriptions[courseName] || "Description coming soon...";
    section.classList.remove("hidden");
  
    // Scroll to it smoothly
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  function closeCourse() {
    document.getElementById("course-description").classList.add("hidden");
  }
const tips = [
  "Consistency beats cramming. Every. Single. Time.",
  "Ako says: Learn like you're going to teach it.",
  "Breaks aren’t cheating — they’re strategy.",
  "No sleep = no memory. Rest like a legend.",
  "Every master was once a confused student.",
  "Google is your friend. Ako is your backup."
];

let currentTip = 0;

function showNextTip() {
  currentTip = (currentTip + 1) % tips.length;
  document.getElementById("tip-text").textContent = `"${tips[currentTip]}"`;
}
  