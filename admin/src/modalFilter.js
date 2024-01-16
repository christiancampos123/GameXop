export default (() => {
    //modal
    const buttonAccept = document.querySelector(".filter-inside-buttons-accept");
    const buttonDecline = document.querySelector(".filter-inside-buttons-decline");
    const background = document.querySelector(".background-block");
    const filterMenu = document.querySelector(".filter-modal");

    document.addEventListener("showFilterModal", (event => { 
        background.classList.add("background-block-active");
        filterMenu.classList.add("filter-modal-active");
     }));


    buttonAccept?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        filterMenu.classList.remove("filter-modal-active");
    });

    buttonDecline?.addEventListener("click", () => {
        background.classList.remove("background-block-active");
        filterMenu.classList.remove("filter-modal-active");
    });

})();