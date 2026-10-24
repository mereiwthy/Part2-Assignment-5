// Task 6

let countValue = 0;

const countDisplay = document.getElementById("countDisplay");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter(newValue) {
  if (newValue < 0) {
    countValue = 0;
  } else {
    countValue = newValue;
  }

  countDisplay.textContent = countValue;
}

incBtn.addEventListener("click", function () {
  updateCounter(countValue + 1);
});

decBtn.addEventListener("click", function () {
  updateCounter(countValue - 1);
});

resetBtn.addEventListener("click", function () {
  updateCounter(0);
});


// Task 7

const textInput = document.getElementById("textInput");
const previewPara = document.getElementById("previewPara");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");

textInput.addEventListener("input", function () {
  const typedText = textInput.value;

  charCount.textContent = typedText.length;

  if (typedText === "") {
    previewPara.textContent = "Your text will appear here";
  } else {
    previewPara.textContent = typedText;
  }
});

clearBtn.addEventListener("click", function () {
  textInput.value = "";
  previewPara.textContent = "Your text will appear here";
  charCount.textContent = "0";
  textInput.focus();
});


// Task 8

const imageSelect = document.getElementById("imageSelect");
const previewImg = document.getElementById("previewImg");
const imgCaption = document.getElementById("imgCaption");

const imagesData = {
  view1: {
    src: "images/front.png",
    alt: "Front view of the character",
    caption: "Front View"
  },

  view2: {
    src: "images/side.png",
    alt: "Side view of the character",
    caption: "Side View"
  },

  view3: {
    src: "images/back.png",
    alt: "Back view of the character",
    caption: "Back View"
  }
};

function updateImage() {
  const selectedKey = imageSelect.value;
  const currentImage = imagesData[selectedKey];

  previewImg.src = currentImage.src;
  previewImg.alt = currentImage.alt;
  imgCaption.textContent = currentImage.caption;
}

imageSelect.addEventListener("change", updateImage);

updateImage();


// Task 9

const kbInput = document.getElementById("kbInput");
const kbStatus = document.getElementById("kbStatus");
const kbResult = document.getElementById("kbResult");

kbInput.addEventListener("keydown", function (event) {
  kbStatus.textContent = "Key pressed: " + event.key;

  if (event.key === "Enter") {
    event.preventDefault();
    kbResult.textContent = kbInput.value;
  } else if (event.key === "Escape") {
    kbInput.value = "";
    kbResult.textContent = "";
  }
});


// Task 10

const focusCard = document.getElementById("focusCard");
const instruction = document.getElementById("instruction");

function applyHighlight() {
  focusCard.classList.add("highlight");
  instruction.textContent = "Card is active!";
}

function removeHighlight() {
  focusCard.classList.remove("highlight");
  instruction.textContent = "Hover or focus on the card below.";
}

focusCard.addEventListener("mouseenter", applyHighlight);
focusCard.addEventListener("mouseleave", removeHighlight);

focusCard.addEventListener("focus", applyHighlight);
focusCard.addEventListener("blur", removeHighlight);