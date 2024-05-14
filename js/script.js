const loginForm = document.querySelector('.reservation');

loginForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    
    const { text, email, date } = e.currentTarget.elements;

    if (!text.value.trim() || !email.value.trim() || !date.value.trim()) {
        return alert('Please fill in all the fields!');
    } else {
        const formData = {
            text: text.value,
            email: email.value,
            date: date.value,
        };
        console.log(formData);
        e.currentTarget.reset();
    }
}

// modal window

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const banner = document.querySelector('.banner');

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
  banner.classList.add('hidden');
});

const closeAction = function () {
  modalOverlay.classList.remove("open-modal");
  banner.classList.remove('hidden');
};

closeBtn.addEventListener("click", closeAction);

modalOverlay.addEventListener("click", closeAction);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    return closeAction();
  }
});

// show text

let more = document.querySelectorAll('.more');
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener("click", function () {
        more[i].parentNode.classList.toggle("active");
    })
}    