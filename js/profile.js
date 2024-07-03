const main = document.querySelector('[data-js="main"]');
const checkbox = document.querySelector('[data-js="button__switch"] input');
const questionIcon = document.querySelector('[data-js="questions-icon"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const profilePicture = document.querySelector('[data-js="profile-picture"]');

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

// Counter question Button
const questionCounterButton = document.querySelector(
  '[data-js="question-counter"]'
);
const questionCounterText =
  questionCounterButton.querySelector(".button__text");

questionCounterButton.addEventListener("click", () => {
  let count = parseInt(questionCounterText.textContent, 10);
  count += 1;
  questionCounterText.textContent = count;
});

// Counter bookmark Button
const bookmarkCounterButton = document.querySelector(
  '[data-js="bookmark-counter"]'
);
const bookmarkCounterText =
  bookmarkCounterButton.querySelector(".button__text");

bookmarkCounterButton.addEventListener("click", () => {
  let count = parseInt(bookmarkCounterText.textContent, 10);
  count += 1;
  bookmarkCounterText.textContent = count;
});
