const refs = {
  buttonDecrement: document.querySelector("[data-action='decrement']"),
  buttonIncrement: document.querySelector("[data-action='increment']"),
  container: document.querySelector("#counter"),
  value: document.querySelector("#value"),
};

let counter = 0;

const increment = () => {
  counter += 1;
  document.querySelector("#value").textContent = counter;
};

const decrement = () => {
  counter -= 1;
  document.querySelector("#value").textContent = counter;
};

refs.buttonDecrement.addEventListener("click", decrement);
refs.buttonIncrement.addEventListener("click", increment);
