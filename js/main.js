const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const sectionBack = document.getElementById("section-back");

openModal.onclick = () => {
    modal.style.display = "block";
    sectionBack.style.display = "none";
}

closeModal.onclick = () => {
    modal.style.display = "none";
    sectionBack.style.display = "";
}