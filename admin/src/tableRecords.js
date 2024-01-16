class TableRecords extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {

        this.render()
    }

    render() {

        this.shadow.innerHTML =
            /*html*/
            `
        <style>

* {
  margin: 0;
  padding: 0;
}

section {
  margin: 0;
  padding: 0;
}

.none {
  display: none;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: hsl(0, 0%, 100%);
  font-family: 'Roboto', sans-serif;
}


input,
label,
select,
textarea,
li,
span,
p {
  color: hsl(0, 0%, 100%);
  font-family: 'Roboto', sans-serif;
}
            .filter {
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem 0;
}

.filter-button button svg {
  width: 2rem;
}

.filter-button button svg path {
  fill: hsl(207, 85%, 69%);
}

.filter-button button:hover svg path {
  fill: hsl(34, 79%, 53%);
}

.table-component {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
}

.table-buttons {
  background-color: hsl(207, 85%, 69%);
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.edit-button button svg,
.delete-button button svg {
  width: 2rem;
}

.edit-button button svg path,
.delete-button button svg path {
  fill: hsl(0, 0%, 100%);
}

.edit-button button:hover svg path,
.delete-button button:hover svg path {
  fill: hsl(34, 79%, 53%);
}

            .table-data {
  background-color: hsl(226, 64%, 66%);
  padding: 0.5rem;
}

.table-data ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.table-data ul li span {
  font-weight: 700;
}

.table-data ul li span::after {
  content: ":";
  margin-right: 0.5rem;
}
        </style>
    

        <section class="table-component">
            <section class="filter">
            <div class="filter-button">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>filter-menu</title>
                    <path
                    d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
                </svg>
                </button>
            </div>
            </section>


            <article class="table-record">
            <div class="table-buttons">
                <div class="edit-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                </button>
                </div>
                <div class="delete-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
                </div>
            </div>
            <div class="table-data">
                <ul>
                <li><span>Email</span>bolitakinki69@hotmail.com</li>
                <li><span>Nombre</span>Carlos</li>
                </ul>
            </div>
            </article>




            <article class="table-record">
            <div class="table-buttons">
                <div class="edit-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                </button>
                </div>
                <div class="delete-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
                </div>
            </div>
            <div class="table-data">
                <ul>
                <li><span>Email</span>bolitakinki69@hotmail.com</li>
                <li><span>Nombre</span>Carlos</li>
                </ul>
            </div>
            </article>
            <article class="table-record">
            <div class="table-buttons">
                <div class="edit-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                </button>
                </div>
                <div class="delete-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
                </div>
            </div>
            <div class="table-data">
                <ul>
                <li><span>Email</span>bolitakinki69@hotmail.com</li>
                <li><span>Nombre</span>Carlos</li>
                </ul>
            </div>
            </article>
            <article class="table-record">
            <div class="table-buttons">
                <div class="edit-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                </button>
                </div>
                <div class="delete-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </button>
                </div>
            </div>
            <div class="table-data">
                <ul>
                <li><span>Email</span>bolitakinki69@hotmail.com</li>
                <li><span>Nombre</span>Carlos</li>
                </ul>
            </div>
            </article>
        </section>
        `
        const filterButton = this.shadow.querySelector(".filter-button");

        filterButton?.addEventListener("click", () => {
            document.dispatchEvent(new CustomEvent('showFilterModal', {
            }));
        });

        const tableSection = this.shadow.querySelector('.table-component');
        tableSection?.addEventListener('click', async (event) => {
            if (event.target.closest('.edit-button')) {
                alert("Has pulsado edition");
            }

            if (event.target.closest('.delete-button')) {
                document.dispatchEvent(new CustomEvent('showDeleteModal', {

                }));

            }
        });


    }



}

customElements.define('table-records-component', TableRecords);































