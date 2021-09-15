let squareSize = 30;
const refs = {
  createBtn: document.querySelector('[data-action="render"]'),
  removeBtn: document.querySelector('[data-action="destroy"]'),
  square: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
};

const createBoxes = (amount) => {

  const box = document.createDocumentFragment();

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.style.backgroundColor = `rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    box.append(div);
    squareSize = squareSize + 10;
  }
  boxes.append(box);
  refs.input.value = "";
};

const randomColor = () => {
  return Math.floor(Math.random() * 256);
};

function getAmount() {
  createBoxes(refs.input.value);
}
const destroyBoxes = () => {
  squareSize = 30;
  refs.square.innerHTML = "";
};

refs.createBtn.addEventListener("click", getAmount);
refs.removeBtn.addEventListener("click", destroyBoxes);
