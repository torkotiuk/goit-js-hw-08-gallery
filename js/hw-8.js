import images from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const lightboxRef = document.querySelector('.lightbox');
const lightbox__buttonRef = document.querySelector('.lightbox__button');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightbox__overlayRef = document.querySelector('.lightbox__overlay');

images.forEach(pic => {
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<li class="gallery__item"><a class="gallery__link" href="${pic.original}"><img class="gallery__image" src="${pic.preview}" data-source="${pic.original}" alt="${pic.description}"></a></li>`,
  );
});

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    console.log(`Your don't click on IMG, fn ends in this place`);
    return;
  }

  openModal();
  console.log(lightboxImageRef);

  const largePicURL = evt.target.dataset.source;
  lightboxImageRef.src = largePicURL;
}

function openModal() {
  lightboxRef.classList.add('is-open');
}

function closeOpenedImage() {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
}

function closeWhenOverlayPressed() {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
}

function handlerEsc(event) {
  if (event.code === 'Escape') {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
  }
}

galleryRef.addEventListener('click', onGalleryContainerClick);
lightbox__buttonRef.addEventListener('click', closeOpenedImage);
lightbox__overlayRef.addEventListener('click', closeWhenOverlayPressed);
window.addEventListener('keydown', handlerEsc);
