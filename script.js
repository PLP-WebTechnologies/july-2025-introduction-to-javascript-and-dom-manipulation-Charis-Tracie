
// Variables & Conditionals

function checkEligibility() {
  let grade = document.getElementById("kcseGrade").value; 
  let result = "";

  if (grade === "") {
    result = " Please select your grade.";
  } else if (["A", "A-", "B+", "B", "B-", "C+"].includes(grade)) {
    result = " Congratulations! You qualify for university admission.";
  } else if (["C", "C-", "D+", "D"].includes(grade)) {
    result = " You qualify for a diploma program.";
  } else {
    result = "Unfortunately, you did not meet the requirements.";
  }

  document.getElementById("eligibilityResult").textContent = result;
}


//  Functions

function estimateFees() {
  let units = parseInt(document.getElementById("units").value) || 0;
  let feePerUnit = 3500; 

  let total = calculateFee(units, feePerUnit);
  document.getElementById("feeResult").textContent = "Estimated Fees: Ksh " + total;
}

// Custom reusable function
function calculateFee(units, costPerUnit) {
  return units * costPerUnit;
}

// Another function
function formatNotice(msg) {
  return  msg;
}


//  Loops

function showCourses() {
  let courses = ["Computer Science", "Business Administration", "Education", "Engineering", "Nursing"];
  let list = document.getElementById("courseList");
  list.innerHTML = "";

  // For loop example
  for (let i = 0; i < courses.length; i++) {
    let li = document.createElement("li");
    li.textContent = courses[i];
    list.appendChild(li);
  }

  
}


// Part 4: DOM Manipulation

function updateTitle() {
  document.getElementById("mainTitle").textContent = "Welcome to Havard University!";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function addNotice() {
  let board = document.getElementById("noticeBoard");
  let li = document.createElement("li");
  li.textContent = formatNotice("Admission deadline is 30th September.");
  board.appendChild(li);
}

