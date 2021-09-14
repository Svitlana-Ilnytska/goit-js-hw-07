const refs = {
  createBtn: document.querySelector('[data-action="render"]'),
  removeBtn: document.querySelector('[data-action="destroy"]'),
  square: document.querySelector("#boxes"),
  // container: document.querySelector("#controls"),
};

const createBoxes = (amount) => {
  const basicSquare = 30;
  const box = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const sizeNextSquare = basicSquare + i * 10;

    const div = document.createElement("div");
    div.style.width = `${sizeNextSquare}px`;
    div.style.height = `${sizeNextSquare}px`;
    div.style.backgroundColor = `rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    box.append(div);
  }
  boxes.append(box);
};
const randomColor = () => {
  return Math.floor(Math.random() * 256);
};

function getAmount() {
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}
const destroyBoxes = () => {
  refs.square.innerHTML = "";
};

refs.createBtn.addEventListener("click", getAmount);
refs.removeBtn.addEventListener("click", destroyBoxes);
