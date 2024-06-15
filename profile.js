const main = document.querySelector('[data-js="main"]');
const checkbox = document.querySelector('[data-js="button__switch"] input');
const questionIcon = document.querySelector('[data-js="questions-icon"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
const profilePicture = document.querySelector('[data-js="profile-picture"]');

// Main (Text ohne Bilder) in darkmode ändern
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    main.classList.add("dark-mode");
  } else {
    main.classList.remove("dark-mode");
  }

  console.log(checkbox);
});

// Profilbild in darkmode ändern
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
