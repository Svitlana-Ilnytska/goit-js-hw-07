const lists = document.querySelectorAll(".item");
for (let el of lists) {
  let title = el.firstElementChild.textContent;
  let elLength = el.lastElementChild.children.length;
  console.log(`Категория: ${title} 
    Количество элементов: ${elLength}`);
}
