const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galeryContainerEl = document.querySelector("#gallery");

const makeGalery = ({ url, alt }) => {
  const titleEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = url;
  imageEl.alt = alt;

  // titleEl.append(imageEl);
  titleEl.insertAdjacentHTML("afterbegin", imageEl);

  return imageEl;
};
const elements = images.map(makeGalery);
console.log(elements);

// const elements = makeGalery(images);
galeryContainerEl.append(...elements);
