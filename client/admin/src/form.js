class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */
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
  color: white;
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

.form {
    flex: 2;
}

.form-top-bar{
    display: flex;
    justify-content: center;
    background-color: white;
    height: 3rem;
    width: 100%;
    margin-bottom: 2rem;

}
.tabs{
    display: flex;
    height: 100%;
    width: 100%;
}

.tab{
    background-color: #b0b0b0;
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.tab:hover{
  background-color: #e5a450;
}

.tab button{
    color: blue;
}

.tab.active button{
    color: white;
}

.tab.active{
    background-color: #e69428;
    color: white;
}

.tab-contents{
  width: 100%;
}

.tab-content.active{
  width: 100%;
  display: block;
}

.tab-content{
  display: none;
}

.form-buttons {
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem;
  padding-right: 0.5rem;
}

.create-button button svg,
.store-button button svg {
  width: 2rem;
    
}

.create-button button svg path,
.store-button button svg path {
  fill: #6db7f3;
}

.create-button button:hover svg path,
.store-button button:hover svg path {
  fill: #e69428;
}

.form-row{
  display: flex;
  gap: 1rem;
}

.form-element {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
}

.form-element-input * {
  background-color: #718be0;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  outline: transparent;
  padding: 0.5rem;
  width: 100%;
}

textarea{
  height: 15vh;
}

.language-contents{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 5rem;
}

.form-language-bar{
  background-color: white;
  width: 100%;
  height: 3rem;
  margin: 1rem 0;
}




        </style>
<div class="form">
  <div class="form-top-bar">
    <div class="tabs">
      <div class="tab active" data-tab="general">
        <button>
          General
        </button>
      </div>
      <div class="tab" data-tab="images">
        <button>
          Imágenes
        </button>
      </div>
    </div>
    <div class="form-buttons">
      <div class="create-button"  data-endpoint="">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
        </button>
      </div>
      <div class="store-button" data-endpoint="">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
        </button>
      </div>
    </div>
  </div>
  <form class="admin-form">
    <input type="hidden" name="id" value="">
    <div class="tab-contents">
      <div class="tab-content active" data-tab="general">
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="title">
                Titulo
              </label>
            </div>
            <div class="form-element-input">
              <input type="text" name="name" value="">
            </div>
          </div>
          <div class="form-element">
            <div class="form-element-label">
              <label for="address">
                Lugar del evento
              </label>
            </div>
            <div class="form-element-input">
              <input type="text" name="address" value="">
            </div>
          </div>
        </div>
  
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="date">
                Fecha Inicio
              </label>
            </div>
            <div class="form-element-input">
            <input type="date" name="start_date" value="">
            </div>
          </div>
          <div class="form-element">
            <div class="form-element-label">
              <label for="date">
                Fecha Fin
              </label>
            </div>
            <div class="form-element-input">
              <input type="date" name="end_date" value="">
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="price">
                Precio
              </label>
            </div>
            <div class="form-element-input">
              <input type="number" name="price" value="">
            </div>
          </div>
          <div class="form-element">
            <div class="form-element-label">
              <label for="town">
                Poblacion
              </label>
            </div>
            <div class="form-element-input">
              <select id="town_id" name="town_id">
                <option value="">Seleccione una Poblacion</option>
  
                    <option value=""></option>
  
              </select>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="start_time">
                Hora Inicio
              </label>
            </div>
            <div class="form-element-input">
              <input type="time" name="start_time" value="">
            </div>
          </div>
          <div class="form-element">
            <div class="form-element-label">
              <label for="start_time">
                Hora Fin
              </label>
            </div>
            <div class="form-element-input">
              <input type="time" name="end_time" value="">
            </div>
          </div>
        </div>
  
        <div class="form-language-bar">
          <div class="tabs">
  
              <div class="tab active" data-tab="es">
                <button>
                  ES
                </button>
              </div>
              <div class="tab" data-tab="en">
                <button>
                  EN
                </button>
              </div>
  
          </div>
        </div>
  
  
          <div class="tab-contents">
            <div class="tab-content active" data-tab="es">
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="title">
                      Titulo
                    </label>
                  </div>
                  <div class="form-element-input">
                    <input type="text" name="" value="">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="description">
                      Descripcion
                    </label>
                  </div>
                  <div class="form-element-input">
                    <textarea name="" type="textarea" class="event-description" data-onlyletters="true"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content" data-tab="en">
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="title">
                      Titulo
                    </label>
                  </div>
                  <div class="form-element-input">
                    <input type="text" name="" value="">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="description">
                      Descripcion
                    </label>
                  </div>
                  <div class="form-element-input">
                    <textarea name="" type="textarea" class="event-description" data-onlyletters="true"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
      </div>
      <div class="tab-content" data-tab="images">
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="main-image">
                Imagen Principal
              </label>
            </div>
            <div class="form-element-input">
              <input type="image" name="" value="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

        `

    const buttonSave = this.shadow.querySelector('.store-button')

    buttonSave?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('save-notification', {

      }))
    })

    // boton de clean
    const buttonBroom = this.shadow.querySelector('.create-button')

    buttonBroom?.addEventListener('click', () => {
      alert('HAS PULSADO LIMPIAR')
    })

    // const tabsSection = document.querySelector('.form');

    // tabsSection?.addEventListener('click', async (event) => {
    //     if (event.target.closest('.form-buttons-main')) {
    //         document.querySelector("form-buttons-main").classList.add("form-button-active");
    //     }

    // });
    // Pestañas de navegación
    // array de nodos

    // const buttonContainer = this.shadow.querySelector('.form-buttons-change')

    // buttonContainer?.addEventListener('click', (event) => {
    //   if (event.target.tagName === 'BUTTON') {
    //     // localizo al padre
    //     const father = event.target.closest('.form-buttons-change')
    //     const active = father.querySelector('.form-button-active')
    //     // se lo quito al hijo que lo tiene
    //     active.classList.remove('form-button-active')
    //     // se lo doy al pulsado
    //     event.target.classList.add('form-button-active')
    //     const tabDataSet = event.target.dataset.tab
    //     // console.log(tabDataSet);
    //     const form = active.closest('.form-inside')
    //     console.log(form)
    //     // console.log(form.querySelector(".display"));
    //     form.querySelector('.display').classList.remove('display')
    //     const selector = `[data-tab="${tabDataSet}"]`
    //     form.querySelector('.data-tabs').querySelector(selector).classList.add('display')
    //   }
    // })doc

    const main = this.shadow.querySelector('.form')
    console.log(main)
    main?.addEventListener('click', (event) => {
      // event.preventDefault()

      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        console.log(tabClicked)
        tabClicked.classList.add('active')
        tabActive.classList.remove('active')

        this.shadow.querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })

    // // Selecciona el elemento padre .data-tabs
    // const dataTabs = this.shadow.querySelector('.data-tabs')

    // // Agrega un event listener al elemento padre
    // dataTabs.addEventListener('input', (event) => {
    //   // Verifica si el evento proviene de un elemento de tipo input
    //   if (event.target.tagName === 'INPUT') {
    //     const input = event.target.closest('.validate')
    //     console.log(input)

    //     if (input) {
    //       const minLength = input.dataset.minlength
    //       console.log(minLength)

    //       if (input.value.length < parseInt(minLength) && input.value.length > 0) {
    //         input.classList.add('border-red')
    //       } else {
    //         input.classList.remove('border-red')
    //       }
    //     }

    // if (input) {
    //   const letters = input.dataset.onlyletters
    //   console.log(letters)
    //   if (letters) {
    //     const expresionRegular = /^[a-zA-Z]+$/
    //     console.log(input.value)
    //     expresionRegular.test(input.value)
    //     console.log(expresionRegular.test(input.value))
    //     if (expresionRegular.test(input.value)) {
    //       input.classList.remove('border-red')
    //     } else {
    //       input.classList.add('border-red')
    //     }
    //     if (input.value.length === 0) {
    //       input.classList.remove('border-red')
    //     }
    //   }
    // }

    // if (input) {
    //   const mail = input.dataset.mail
    //   if (mail) {
    //     const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //     console.log(input.value)
    //     expresionRegular.test(input.value)
    //     console.log(expresionRegular.test(input.value))
    //     if (expresionRegular.test(input.value)) {
    //       input.classList.remove('border-red')
    //     } else {
    //       input.classList.add('border-red')
    //     }
    //     if (input.value.length === 0) {
    //       input.classList.remove('border-red')
    //     }
    //   }
    // }
    // }
    // })
  }
}

customElements.define('form-component', Form)
