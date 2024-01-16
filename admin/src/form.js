class Form extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
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

.form-buttons {
  background-color: hsl(0, 0%, 100%);
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-right: 0.5rem;
}

.form-buttons-change>div {
  display: flex;
  align-items: center;
  background-color: hsl(0, 0%, 69%);
}

.form-button-active{
  background-color: hsl(34, 100%, 51%);
}


.form-buttons-change>div>button:hover {
  background-color: hsl(34, 79%, 53%);
}

.form-buttons-change>div>button {
  height: 100%;
  width: 5rem;
}

.form-buttons-change {
  display: flex;
  width: 50%;

}

.form-buttons-actions {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}

.form-clean-button button svg,
.form-save-button button svg {
  width: 2rem;
}

.form-clean-button button svg path,
.form-save-button button svg path {
  fill: hsl(207, 85%, 69%);
}

.form-clean-button button:hover svg path,
.form-save-button button:hover svg path {
  fill: hsl(34, 79%, 53%);
}


.form-row {
  display: flex;
  gap: 2rem;
}

.form-element {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.form-element-label label {
  font-weight: 700;
}

.form-element-input * {
  background-color: hsl(226, 64%, 66%);
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  height: 2rem;
  outline: transparent;
  padding: 0.5rem;
  width: 100%;
}

.form-element-input input[type="number"]::-webkit-outer-spin-button,
.form-element-input input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-element-input input[type="date"]::-webkit-calendar-picker-indicator,
.form-element-input input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.form-element-input textarea {
  height: 20vh;
  resize: none;
}

.images {
  display: none;
  flex: 2;
}

.image-placeholder {
  width: 300px;
  height: 200px;
  background-color: #ddd;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666;
}

.images-TODO {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
}

.tab-content{
  display:none;
}

.display {
  display: block;
}

.border-red{
  border: 1px solid red;
}




        </style>
    <section class="form-inside">
    <div class="form-buttons">
    <div class="form-buttons-change">
      <!-- cambiar tanta clase anidada, no es necesario -->
      <div class="form-buttons-main">
        <button class="form-button-active" data-tab="tab-main">
          Principal
        </button>
      </div>
      <div class="form-buttons-images">
        <button data-tab="tab-images">
          Imagenes
        </button>
      </div>
      <div class="form-buttons-git">
        <button data-tab="tab-git">
          GIT
        </button>
      </div>
    </div>
    <div class="form-buttons-actions">
      <div class="form-clean-button">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>broom</title>
            <path
              d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
          </svg>
        </button>
      </div>
      <div class="form-save-button">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>save</title>
            <path
              d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <!-- seccion main index 0 -->
  <div class="data-tabs">
    <section class="tab-content display" data-tab="tab-main">

      <div class="form-row">
        <div class="form-element">
          <div class="form-element-label">
            <label for="name">
              Nombre
            </label>
          </div>
          <div class="form-element-input">
            <input type="text" class="validate" data-onlyletters=true>
          </div>
        </div>
        <div class="form-element">
          <div class="form-element-label">
            <label for="email">
              Email
            </label>
          </div>
          <div class="form-element-input">
            <input type="email" class="validate" data-mail="true">
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-element">
          <div class="form-element-label">
            <label for="password">
              Contraseña
            </label>
          </div>
          <div class="form-element-input">
            <input type="password" class="validate" data-minlength=8>
          </div>
        </div>
        <div class="form-element">
          <div class="form-element-label">
            <label for="confirmar-password" class="validate" data-minlength=15>
              Repetir contraseña
            </label>
          </div>
          <div class="form-element-input">
            <input type="password" class="validate" data-minlength=18>
          </div>
        </div>
      </div>

    </section>
    <!-- section images index 1 -->
    <section class="tab-content images" data-tab="tab-images">
      <div class="images-TODO">
        <div class="image-placeholder">1</div>
        <div class="image-placeholder">2</div>
        <div class="image-placeholder">3</div>
        <div class="image-placeholder">4</div>
        <div class="image-placeholder">5</div>
      </div>
    </section>
    <section class="tab-content images" data-tab="tab-git">
      <div class="images-TODO">
        <div class="image-placeholder">1</div>
        <div class="image-placeholder">2</div>
        <div class="image-placeholder">3</div>
      </div>
    </section>
  </div>
  </section>

        `

    const buttonSave = this.shadow.querySelector(".form-save-button");

    buttonSave?.addEventListener("click", () => {
      document.dispatchEvent(new CustomEvent('save-notification', {

      }));
    });

    // boton de clean
    const buttonBroom = this.shadow.querySelector(".form-clean-button");

    buttonBroom?.addEventListener("click", () => {
      alert("HAS PULSADO LIMPIAR");
    });










    // const tabsSection = document.querySelector('.form');

    // tabsSection?.addEventListener('click', async (event) => {
    //     if (event.target.closest('.form-buttons-main')) {
    //         document.querySelector("form-buttons-main").classList.add("form-button-active");
    //     }

    // });
    // Pestañas de navegación
    // array de nodos


    const buttonContainer = this.shadow.querySelector('.form-buttons-change');

    buttonContainer?.addEventListener('click', (event) => {

      if (event.target.tagName === 'BUTTON') {
        // localizo al padre
        let father = event.target.closest('.form-buttons-change');
        let active = father.querySelector(".form-button-active");
        // se lo quito al hijo que lo tiene
        active.classList.remove("form-button-active");
        // se lo doy al pulsado
        event.target.classList.add('form-button-active');
        const tabDataSet = event.target.dataset.tab;
        //console.log(tabDataSet);
        const form = active.closest(".form-inside");
        console.log(form);
        //console.log(form.querySelector(".display"));
        form.querySelector(".display").classList.remove("display");
        let selector = `[data-tab="${tabDataSet}"]`;
        form.querySelector(".data-tabs").querySelector(selector).classList.add("display");

      }
    });

    // Selecciona el elemento padre .data-tabs
    let dataTabs = this.shadow.querySelector(".data-tabs");

    // Agrega un event listener al elemento padre
    dataTabs.addEventListener('input', (event) => {
      // Verifica si el evento proviene de un elemento de tipo input
      if (event.target.tagName === 'INPUT') {
        let input = event.target.closest('.validate');
        console.log(input);

        if (input) {
          let minLength = input.dataset.minlength;
          console.log(minLength);

          if (input.value.length < parseInt(minLength) && input.value.length > 0) {
            input.classList.add("border-red");
          } else {
            input.classList.remove("border-red");
          }
        }

        if (input) {
          let letters = input.dataset.onlyletters;
          console.log(letters);
          if (letters) {
            let expresionRegular = /^[a-zA-Z]+$/;
            console.log(input.value);
            expresionRegular.test(input.value)
            console.log(expresionRegular.test(input.value));
            if (expresionRegular.test(input.value)) {
              input.classList.remove("border-red");
            } else {
              input.classList.add("border-red");
            }
            if (input.value.length == 0) {
              input.classList.remove("border-red");
            }
          }
        }

        if (input) {
          let mail = input.dataset.mail;
          if (mail) {
            let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log(input.value);
            expresionRegular.test(input.value)
            console.log(expresionRegular.test(input.value));
            if (expresionRegular.test(input.value)) {
              input.classList.remove("border-red");
            } else {
              input.classList.add("border-red");
            }
            if (input.value.length == 0) {
              input.classList.remove("border-red");
            }
          }
        }
      }
    });


  }


}

customElements.define('form-component', Form);