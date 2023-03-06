import { galleryItems } from "./gallery-items.js";
// Change code below this line
//console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const markup = createGallery(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", markup);

/*<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="small-image.jpg"
      alt="Image description"
    />
  </a>
</div>;*/
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
            </a>
            </div>`;
    })
    .join("");
}

galleryRef.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = ev.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${largeImg}" width='800' height='600'>`
  );
  instance.show();
});

/*window.addEventListener("keydown", onClose);

function onClose(ev) {
  if (ev.target.code === "Escape") {
    instance.close();
  }
}*/
