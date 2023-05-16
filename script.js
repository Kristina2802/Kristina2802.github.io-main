const buttonContact = document.querySelector(".button-contact");
const contactForm = document.querySelector(".contact-form")
const popupContainer = document.getElementById("form-container")
const page = document.querySelector(".page")
const popupInputs = document.querySelectorAll(".popup__input");
const popupButton = document.getElementById("submit-button");
const popupForm = document.querySelector(".popup__form");
const buttonChangeTheme = document.querySelector(".button-change-theme");
const serviceListItem = document.querySelectorAll(".service-list__item");
const serviceContentText = document.querySelectorAll(".service-content__text");
const infoTitle = document.querySelector(".optional-info__title");
const serviceContentTitle = document.querySelectorAll(".service-content__title");
const sectionTitle = document.querySelector(".section__title");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");
const textInput = document.getElementById("text");
const emailError = document.querySelector(".popup__error_email");
const phoneError = document.querySelector(".popup__error_phone");
const nameError = document.querySelector(".popup__error_name");
const textError = document.querySelector(".popup__error_text");


function openPopup() {
    contactForm.classList.toggle("popup_opened");
}

function changeTheme() {
  page.classList.toggle("page_theme_dark");
  page.classList.toggle("page_theme_light");
  buttonContact.classList.toggle("button-contact_theme_light");
  buttonContact.classList.toggle("button-contact_theme_dark");
  serviceListItem.forEach((el) => {
    el.classList.toggle("service-list__item_theme_light");
    el.classList.toggle("service-list__item_theme_dark");
  })
  serviceContentText.forEach((el) => {
    el.classList.toggle("service-content__text_theme_light");
    el.classList.toggle("service-content__text_theme_dark");
  })
  infoTitle.classList.toggle("optional-info__title_theme_light");
  infoTitle.classList.toggle("optional-info__title_theme_dark");
  sectionTitle.classList.toggle("section__title_theme_light");
  sectionTitle.classList.toggle("section__title_theme_dark");
  serviceContentTitle.forEach((el) => {
    el.classList.toggle("service-content__title_theme_light");
    el.classList.toggle("service-content__title_theme_dark");
  })
  buttonChangeTheme.classList.toggle("button-change-theme_light");
  buttonChangeTheme.classList.toggle("button-change-theme_dark");
}

function raindropEffect() {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = 1200;

    let minDrops = 100;
    let maxDrops = 500;
    let raindrops = [];
    let minSize = 1;
    let maxSize = 6;
    let minSpeed = 2;
    let maxSpeed = 10;
  
    for (
      let i = 0;
      i < Math.floor(Math.random() * (maxDrops - minDrops + 1)) + minDrops;
      i++
    ) {
      let size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
      let speed =
        Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed;
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      raindrops.push({
        size: size,
        speed: speed,
        x: x,
        y: y,
      });
    }
  
    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < raindrops.length; i++) {
        ctx.beginPath();
        ctx.arc(
          raindrops[i].x,
          raindrops[i].y,
          raindrops[i].size,
          0,
          6 * Math.PI
        );
        ctx.strokeStyle = "blue";
        ctx.stroke();
      }
    }
  
    function updateRain() {
      for (let i = 0; i < raindrops.length; i++) {
        raindrops[i].y += raindrops[i].speed;
        if (raindrops[i].y > canvas.height) {
          raindrops[i].y = 0;
        }
      }
    }
    
    setInterval(function () {
      if (window.innerWidth < 800) {
        raindrops.length = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      drawRain();
      updateRain();
    }, 50);
}

function validateName() {
  const regex = /^[A-Za-zА-Яа-я]+$/;
  if (nameInput.value === "") {
    nameError.textContent = "Это поле обязательно для заполнения";
    nameInput.classList.add("input_error");
    return false;
  } else if (!regex.test(nameInput.value.trim())) {
    nameError.textContent = "Некорректное заполнение поля";
    nameInput.classList.add("input_error");
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("input_error");
    return true;
  }
}

function validateEmail() {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (email.value === "") {
    emailError.textContent = "Это поле обязательно для заполнения";
    email.classList.add("input_error");
    return false;
  } else if (!regex.test(email.value)) {
    emailError.textContent = "Некорректное заполнение поля";
    email.classList.add("input_error");
  } else {
    emailError.textContent = "";
    email.classList.remove("input_error");
    return true;
  }
}

function validatePhone() {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (phone.value === "") {
    phoneError.textContent = "Это поле обязательно для заполнения";
    phone.classList.add("input_error");
  } else if (!regex.test(phone.value)) {
    phoneError.textContent = "Некорректное заполнение поля";
    phone.classList.add("input_error");
  } else {
    phoneError.textContent = "";
    phone.classList.remove("input_error");
    return true;
  }
}

function validateText() {
  if (textInput.value === "") {
    textError.textContent = "Это поле обязательно для заполнения";
    textInput.classList.add("input_error");
    return false;
  } else {
    textError.textContent = "";
    textInput.classList.remove("input_error");
    return true;
  }
}

function changeContactButton() {
  if (validateEmail() && validateName() && validatePhone() && validateText()) {
    popupButton.textContent = "Отправляем...";
    popupButton.disable = true;
    popupButton.classList.add("button_disabled");
    setTimeout(() => {
      sendForm();
    }, 1000);
  } else {
    popupButton.disable = false;
    popupButton.classList.remove("button_disabled");
    popupButton.textContent = "Отправить";
  }
}

function sendForm() {
  createRequest({"name": nameInput.value, "email": emailInput.value, "phone": phoneInput.value, "text": textInput.value});
}

function createRequest(postRequest) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: postRequest.name,
            email: postRequest.email,
            phone: postRequest.phone,
            text: postRequest.text
        })
    })
        .then( function (response) {
            console.log('submitted form');
            popupButton.textContent = "Отправлена!";
            popupButton.classList.add("button-send_message");
            setTimeout(() => {
              popupButton.classList.remove("button-send_message");
              popupButton.textContent = "Отправить";
              popupButton.classList.remove("button_disabled");
              popupButton.disabled = false;
              nameInput.value = "";
              emailInput.value = "";
              phoneInput.value = ""
              textInput.value = "";
            }, 1000);
        })
}

document.addEventListener('click', e => {
  if (!(e.composedPath().includes(popupContainer) || e.composedPath().includes(buttonContact) || e.composedPath().includes(popupButton))) {
    contactForm.classList.remove("popup_opened")
  }
})

buttonChangeTheme.addEventListener("click", changeTheme);
buttonContact.addEventListener("click", openPopup);
buttonContact.addEventListener("click", function() {
  if (window.innerWidth > 800) {
    raindropEffect();
  }
});

window.addEventListener("resize", function () {
  if (contactForm.classList.contains("popup_opened") && window.innerWidth > 800) {
    raindropEffect();
  }
})

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
phoneInput.addEventListener("input", validatePhone);
textInput.addEventListener("input", validateText);
popupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  changeContactButton();
})

document.addEventListener("DOMContentLoaded", function() {
  const popup = document.querySelector(".popup_message");
  const popupContainer = document.getElementById("message-container");
  const closeButton = document.getElementById("close-message-button");
  const timeBeforeShow = 10 * 1000;
  let show = false;

  function showMessage() {
    if (!localStorage.getItem("show")) {
      popup.classList.add("popup_opened");
      localStorage.setItem("show", "true");
    }
  }

  function close() {
    popup.classList.remove("popup_opened");
  }

  setTimeout(function() {
    showMessage();
  }, timeBeforeShow);

  closeButton.addEventListener("click", function() {
    close();
  })

  popup.addEventListener('click', e => {
    if (!(e.composedPath().includes(popupContainer) || e.composedPath().includes(closeButton))) {
      popup.classList.remove("popup_opened")
    }
  })
})