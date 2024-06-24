const addBookmark = document.querySelector('[data-js="button__bookmark"]');
const bookmarkButton = document.querySelector('[data-js="bookmark-image"]');

// funktoniert noch nicht
addBookmark.addEventListener("click", () => {
  addBookmark.classList.toggle("active");
  if (addBookmark.classList.contains("active")) {
    bookmarkImage.src = "bookmark-black.jpg";
  } else {
    bookmarkImage.src = "bookmark-white.svg";
  }
});
