export default (() => {

    // Delete Modal
    const acceptButton = document.querySelector(".modal-delete-box-buttons-accept");
    const cancelButton = document.querySelector(".modal-delete-box-buttons-decline");
    const background = document.querySelector(".background-block");
    const deleteModal = document.querySelector(".modal-delete");

    document.addEventListener("showDeleteModal", (event => {
        background.classList.add("background-block-active");
        deleteModal.classList.add("modal-delete-active");
    }));

    acceptButton?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        deleteModal.classList.remove("modal-delete-active");
    });

    cancelButton?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        deleteModal.classList.remove("modal-delete-active");
    });
})();