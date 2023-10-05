// Modal Change Address
// Get references to the modal and buttons
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open the modal when the "Open Modal" button is clicked
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when the "Close" button is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Modal Transfer
// Get references to the modal and buttons
const modalTransfer = document.getElementById("modalTransfer");
const openTransferBtn = document.getElementById("button-transfer");
const closeTransferBtn = document.getElementById("closeTransferBtn");

// Open the modal when the "Open Modal" button is clicked
openTransferBtn.addEventListener("click", () => {
  modalTransfer.style.display = "block";
});

// Close the modal when the "Close" button is clicked
closeTransferBtn.addEventListener("click", () => {
  modalTransfer.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modalTransfer.style.display = "none";
  }
});

// Button
// Get a reference to the button element
const button1 = document.getElementById("button-cod");
const button2 = document.getElementById("button-transfer");

// Add a click event listener to the button
button1.addEventListener("click", function () {
  // Toggle the 'active' class on the button element
  this.classList.toggle("active");
});

// Add a click event listener to the button
button2.addEventListener("click", function () {
  // Toggle the 'active' class on the button element
  this.classList.toggle("active");
});

