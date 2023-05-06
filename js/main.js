const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.onclick = () => {
    modal.classList.add("active");
}

closeModal.onclick = () => {
    modal.classList.remove("active");   
}