class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
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
div,
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
    padding: 0.5rem 1.5rem;
    cursor: pointer;
}

.tab:hover{
  background-color: #e5a450;
}

.tab button{
    color: blue;
    pointer-events: none;
    cursor: not-allowed;
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

input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
}

select {
  cursor: pointer;
}


        </style>
<div class="form">
  <form class="faq-form">
    <div class="form-top-bar">
      <div class="tabs">
        <div class="tab active" data-tab="general">
            General
        </div>
        <div class="tab" data-tab="images">
            Imágenes
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
  
    <input type="hidden" name="id" value="">
    <div class="tab-contents">
      <div class="tab-content active" data-tab="general">
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="title">
                Nombre
              </label>
            </div>
            <div class="form-element-input">
              <input type="text" name="name" value="">
            </div>
          </div>
        </div>

  
        <div class="form-language-bar">
          <div class="tabs">
  
              <div class="tab active" data-tab="es">
                  ES
              </div>
              <div class="tab" data-tab="en">
                  EN
              </div>
  
          </div>
        </div>
  
  
          <div class="tab-contents">
            <div class="tab-content active" data-tab="es">
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="title">
                      Pregunta
                    </label>
                  </div>
                  <div class="form-element-input">
                    <input type="text" name="pregunta" value="">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="description">
                      Respuesta
                    </label>
                  </div>
                  <div class="form-element-input">
                    <textarea name="respuesta" type="textarea" class="event-description" data-onlyletters="true"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content" data-tab="en">
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="title">
                      Question
                    </label>
                  </div>
                  <div class="form-element-input">
                    <input type="text" name="question" value="">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="description">
                      Answer
                    </label>
                  </div>
                  <div class="form-element-input">
                    <textarea name="answer" type="textarea" class="event-description" data-onlyletters="true"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <!-- image Gallery -->
      <div class="tab-content" data-tab="images">
      <upload-image-component> </upload-image-component>
      </div>
    </div>
  </form>
</div>

        `

    const buttonSave = this.shadow.querySelector('.store-button')

    buttonSave?.addEventListener('click', async (event) => {
      event.preventDefault()

      const form = this.shadow.querySelector('.faq-form')
      const formData = new FormData(form)
      const formDataJson = Object.fromEntries(formData.entries())
      delete formDataJson.id

      try {
        const response = await fetch('http://127.0.0.1:8080/api/admin/faqs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataJson)
        })

        if (response.status === 500 || response.status === 422) {
          throw response
        }

        const data = await response.json()

        const saveNotificationEvent = new CustomEvent('custom-notification', {
          detail: {
            message: 'Se ha guardado correctamente',
            color: 'green'
          }
        })

        document.dispatchEvent(saveNotificationEvent)
      } catch (error) {
        console.log(error)
      }
    })

    // boton de clean
    const buttonBroom = this.shadow.querySelector('.create-button')

    buttonBroom?.addEventListener('click', (event) => {
      event.preventDefault()
      const broomNotificationEvent = new CustomEvent('custom-notification', {
        detail: {
          message: 'Se ha limpiado correctamente',
          color: 'red'
        }
      })

      document.dispatchEvent(broomNotificationEvent)
    })

    const main = this.shadow.querySelector('.form')
    // console.log(main)
    main?.addEventListener('click', (event) => {
      // event.preventDefault()

      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        tabClicked.classList.add('active')
        tabActive.classList.remove('active')

        this.shadow.querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })
  }
}

customElements.define('form-component', Form)
