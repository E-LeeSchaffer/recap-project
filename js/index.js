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
      button.textContent = "Show Answer";
    } else {
      button.classList.add("clicked");
      answer.style.display = "block";
      console.log("answer shown");
      button.textContent = "Hide Answer";
    }
  });
});

// toggle bookmark-button
const bookmarkButtons = document.querySelectorAll(
  '[data-js="bookmark-button"]'
);

bookmarkButtons.forEach((button) => {
  const img = button.querySelector('[data-js="add-bookmark"]');
  button.addEventListener("click", () => {
    button.classList.toggle("button__bookmark.active");
    img.src = button.classList.contains("button__bookmark.active")
      ? "bookmark-black.svg"
      : "bookmark-white.svg";
  });
});
