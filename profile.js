const main = document.querySelector('[data-js="main"]');
const checkbox = document.querySelector('[data-js="button__switch"] input');
const questionIcon = document.querySelector('[data-js="questions-icon"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const profilePicture = document.querySelector('[data-js="profile-picture"]');
const button = document.querySelector('[data-js="button"]');
const buttons = document.querySelectorAll('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

// show answer for button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    if (button.classList.contains("clicked")) {
      button.classList.remove("clicked");
      answer.style.display = "none";
      console.log("answer hidden");
    } else {
      button.classList.add("clicked");
      answer.style.display = "block";
      console.log("answer shown");
    }
  });
});

// change main (Text w/o images) into darkmode
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    main.classList.add("dark-mode");
  } else {
    main.classList.remove("dark-mode");
  }

  console.log(checkbox);
});

// change profile image into darkmode
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    profilePicture.src = "user-white.svg";
  } else {
    profilePicture.src = "user-black.svg";
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    questionIcon.src = "questionsicon-white.svg";
  } else {
    questionIcon.src = "questionicon.svg";
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    bookmarkIcon.src = "bookmarks-white.svg";
  } else {
    bookmarkIcon.src = "bookmark-button.svg";
  }
});
