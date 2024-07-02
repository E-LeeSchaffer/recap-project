const form = document.querySelector('[data-js="form"]');
const cardsContainer = document.querySelector('[data-js="cardsContainer"]');
// console.log("submit:", "it works");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   // Informationen aus dem Formular holen
  //   const formElements = event.target.elements;
  //   console.log(formElements);

  // Formular-Daten in ein Objekt umwandeln
  const formData = new FormData(event.target); //sammelt alle Daten, die in das Formular eingetragen wurden
  const data = Object.fromEntries(formData); //macht aus den Daten ein einfaches Objekt, das leichter zu verwenden ist
  console.log(data);

  const card = document.createElement("div");
  card.classList.add("card__box");

  const article = document.createElement("article");
  article.classList.add("card__content");

  const questionParameter = document.createElement("p");
  questionParameter.textContent = data.question;

  const answerParameter = document.createElement("p");
  answerParameter.textContent = data.answer;
  answerParameter.classList.add("answer-hide");
  //   answerParameter.hidden = true;

  const tagParameter = document.createElement("p");
  tagParameter.textContent = `# ${data.tag}`;
  tagParameter.classList.add("tag");

  //Button zum Anzeigen der Antwort
  const showAnswerButton = document.createElement("button");
  showAnswerButton.textContent = "Show Answer";
  showAnswerButton.classList.add("button");
  showAnswerButton.addEventListener("click", () => {
    answerParameter.classList.toggle("answer-show");
    showAnswerButton.textContent = answerParameter.classList.contains(
      "answer-show"
    )
      ? "Show Answer"
      : "Hide Answer";
  });

  //   Elemente in die DOM einfügen
  article.appendChild(questionParameter);
  article.appendChild(showAnswerButton);
  article.appendChild(answerParameter);
  article.appendChild(tagParameter);
  card.appendChild(article);
  cardsContainer.insertBefore(card, cardsContainer.firstChild);
});

// display remaining characters
const updateCharacters = (input, counter, maxLength) => {
  const remaining = maxLength - input.value.length;
  counter.textContent = `${remaining} characters left`;
};

const addCountListener = (inputId, counterId, maxLength) => {
  const input = document.getElementById(inputId);
  const counter = document.getElementById(counterId);
  input.addEventListener("input", () => {
    updateCharacters(input, counter, maxLength);
  });
};

addCountListener("yourQuestion", "questionCount", 150);
addCountListener("yourAnswer", "answerCount", 150);

// const questionInput = document.getElementById("yourQuestion");
// const questionCount = document.getElementById("questionCount");
// questionInput.addEventListener("input", () => {
//   updateCharacters(questionInput, questionCount, 150);
// });

// const answerInput = document.getElementById("yourAnswer");
// const answerCount = document.getElementById("answerCount");
// answerInput.addEventListener("input", () => {
//   updateCharacters(answerInput, answerCount, 150);
// });
