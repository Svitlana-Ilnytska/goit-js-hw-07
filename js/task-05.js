const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  // refs.nameLabel.textContent = event.currentTarget.value;

  if (refs.input.value !== "") {
    refs.nameLabel.textContent = event.currentTarget.value;
  } else {
    refs.nameLabel.textContent = "незнакомец";
  }
}
