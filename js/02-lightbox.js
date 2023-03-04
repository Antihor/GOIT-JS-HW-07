import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(SimpleLightbox);

const galleryRef = document.querySelector(".gallery");
const markup = createGallery(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", markup);

/*<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>;*/

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  captionPosition: "bottom";
  captionDelay: 250;
  captionData: "alt";
});
