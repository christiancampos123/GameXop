export default (() => {
    const filterButton = document.querySelector(".filter-button");

    filterButton?.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent('showFilterModal', {
        }));
    });
})();