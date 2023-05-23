const galleryImages = document.querySelectorAll('.series_photo');
const sunnyMoments = document.querySelectorAll('.sunny-moments');
const modernCapital = document.querySelectorAll('.modern-capital');
const sunnyMomentsl = sunnyMoments.length;
const modernCapitall = modernCapital.length;
const inFourWalls = document.querySelectorAll('.in-four-walls');
const inFourWallsl = inFourWalls.length;
const links = document.querySelectorAll('.gallery__link');
const popup = document.getElementById('popup_for_gallery');
const popupImage = document.getElementById('popup__image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const container = document.querySelector('.popup-div-image');
const totalImages = galleryImages.length;
const body = document.querySelector('.page');

let start;
let currentImageIndex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

links.forEach((link) => {
    link.addEventListener('click', function (evt) {
        evt.preventDefault();
    });
})
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        start = true;
        container.classList.add('popup-content-start');
        displayPopup();
        start = false;
        container.classList.remove('popup-content-start');

    });
});

closeBtn.addEventListener('click', () => {
    hidePopup();
    container.innerHTML = ``;
});


prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
    }
    updatePopupImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
    }
    updatePopupImage();
});

function displayPopup() {
    body.classList.add('my-body-noscroll-class');
    container.style.display = 'block';
    updatePopupImage();
    popup.classList.add('show-popup');
}

function hidePopup() {
    popup.classList.remove('show-popup');
    body.classList.remove('my-body-noscroll-class');;
}

popup.addEventListener('click', e => {
    if (!(e.composedPath().includes(popupContainer) || e.composedPath().includes(closeBtn)) && !(e.composedPath().includes(prevBtn) || e.composedPath().includes(nextBtn))) {
      popup.classList.remove("show-popup");
      body.classList.remove('my-body-noscroll-class');
    }
})

function updatePopupImage() {
    if (!start) {
        container.classList.remove('popup-content-show');
    }
    setTimeout(() => {
        const imageSrc = galleryImages[currentImageIndex].getAttribute('src');
        container.innerHTML = `<img class="popup-content-image" id ="popup__image" src="${imageSrc}">`;
        if (currentImageIndex === 0 || currentImageIndex === sunnyMomentsl || currentImageIndex === sunnyMomentsl + modernCapitall) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
        if (currentImageIndex === sunnyMomentsl - 1 || currentImageIndex === sunnyMomentsl + modernCapitall - 1 || currentImageIndex === totalImages - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
        if (!start) {
            container.classList.add('popup-content-show');
        }
    }, 0);

}