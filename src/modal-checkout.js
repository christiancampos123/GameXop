class ModalCheckout extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.step = 1
  }

  connectedCallback () {
    document.addEventListener('openCheckout', this.handleOpenCheckout.bind(this))
  }

  async handleOpenCheckout (event) {
    await this.loadData()
    await this.render()
    this.shadow.querySelector('.overlay').classList.add('active')
  }

  async loadData () {
    this.data = [
      {
        id: 1,
        title: 'Producto 1',
        price: 40,
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 1'
        }
      },
      {
        id: 2,
        title: 'Producto 2',
        price: 30,
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 1'
        }
      },
      {
        id: 3,
        title: 'Producto 3',
        price: 30,
        image: {
          url: 'https://picsum.photos/50/50',
          alt: 'Producto 1'
        }
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .overlay {
        background-color: rgba(0, 0, 0, .5);
        bottom: 0;
        left: 0;
        opacity: 0;
        position: fixed;
        right: 0;
        top: 0;
        visibility: hidden;
        z-index: -1;
      }

      .overlay.active{
        opacity: 1;
        visibility: visible;
        z-index: 1000;
      }

      .modal {
        background-color: #fff;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
        height: 80%;
        left: 50%;
        overflow: hidden;
        position: relative;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40%;
        z-index: 1001;
      }

      .modal-header {
        align-items: center;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
      }

      .modal-header .close-button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 0;
      }

      .modal-header .close-button svg {
        fill: hsl(0, 0%, 0%);
        height: 1.5rem;
        width: 1.5rem;
      }

      .modal-header .back-step {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        display: none;
        padding: 0;
        position: absolute;
        left: 1rem;
        top: 1rem;
      }

      .modal-header .back-step.active {
        display: block;
      }

      .modal-header .back-step svg {
        fill: hsl(0, 0%, 0%);
        height: 1.5rem;
        width: 1.5rem;
      }

      .modal-body {
        height: 100%;
        max-width: 100%;
        width: 100%;
      }

      .steps {
        display: flex;
        height: 100%;
        max-width: 100%;
        width: 100%;
        overflow-x: scroll;
        scroll-behavior: smooth;
        -ms-overflow-style: none;  
        scrollbar-width: none;  
      }

      .steps::-webkit-scrollbar {
        display: none;  
      }

      .step {
        min-width: 100%;
        position: relative;
        width: 100%;
      }

      .step-title {
        background-color: hsl(236 55% 25%);
        padding: 0.2rem 0.5rem;
        width: 100%;
      }

      .step-title h4 {
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
      }

      .customer{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      .customer-option{
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        padding: 1rem 5%;
        width: 90%;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
      }

      form .row {
        display: flex;
        gap: 1rem;
        width: 100%;
      }

      .form-element {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.4rem;
        width: 100%;
      }

      .form-element label {
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
      }

      .form-element input, .form-element select {
        border: 1px solid hsl(0, 0%, 80%);
        border-radius: 0.5rem;
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.8rem;
        font-weight: 700;
        padding: 0.5rem;
      }

      .customer-option button {
        align-self: flex-end;
        background-color: hsl(272 40% 35%);
        border: none;
        border-radius: 0.5rem;
        color: hsl(0, 0%, 100%);
        cursor: pointer;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        width: 200px;
      }

      .customer-option button:hover {
        filter: brightness(1.2);
      }
    </style>

    <div class="overlay">
      <div class="modal">
        <div class="modal-header">
          <button class="back-step">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
          </button>
          <button class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="steps">
            <div class="step customer">
              <div class="customer-option">
                <div class="step-title">
                  <h4>¿Ya tienes una cuenta?</h4>
                </div>
                <form class="customer-login">
                  <div class="row">
                    <div class="form-element">
                      <label for="email">Correo electrónico</label>
                      <input type="email" name="email" />
                    </div>
                    <div class="form-element">
                      <label for="password">Contraseña</label>
                      <input type="password" name="password" />
                    </div>
                  </div>
                </form>
                <button class="login-button next-step">Iniciar sesión</button>
              </div>

              <div class="customer-option">
                <div class="step-title">
                  <h4>¿No tienes una cuenta?</h4>
                </div>
                <form class="customer-register">
                  <div class="row">
                    <div class="form-element">
                      <label for="name">Nombre</label>
                      <input type="text" name="name" />
                    </div>
                    <div class="form-element">
                      <label for="surname">Apellidos</label>
                      <input type="text" name="surname" />
                    </div>
                    <div class="form-element">
                      <label for="email">Correo electrónico</label>
                      <input type="email" name="email" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-element">
                      <label for="countryId">País</label>
                      <select name="countryId">
                        <option value=""></option>
                        <option value="es">España</option>
                      </select>
                    </div>
                    <div class="form-element">
                      <label for="cityId">Ciudad</label>
                      <select name="cityId">
                        <option value=""></option>
                        <option value="madrid">Madrid</option>
                      </select>
                    </div>
                    <div class="form-element">
                      <label for="postalCode">Código Postal</label>
                      <input type="text" name="postalCode" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-element">
                      <label for="address">Dirección</label>
                      <input type="text" name="address" />
                    </div>
                    <div class="form-element">
                      <label for="dialCodeId">Prefijo telefónico</label>
                      <select name="dialCodeId">
                        <option value=""></option>
                        <option value="es">+34</option>
                      </select>
                    </div>
                    <div class="form-element">
                      <label for="telephone">Teléfono</label>
                      <input type="text" name="telephone" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-element">
                      <label for="password">Contraseña</label>
                      <input type="password" name="password" />
                    </div>
                    <div class="form-element">
                      <label for="password">Confirmación de la contraseña</label>
                      <input type="password" name="password-confirmation" />
                    </div>
                  </div>
                </form>
                <button class="register-button next-step">Registrarse</button>
              </div>

            </div>
            <div class="step">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    `

    this.shadow.querySelector('.overlay').addEventListener('click', event => {

      event.preventDefault()

      if (event.target.closest('.close-button')) {
        this.shadow.querySelector('.overlay').classList.remove('active')
      }

      if (event.target.closest('.next-step')) {
        const steps = this.shadow.querySelector('.steps');
        steps.scrollBy({ left: steps.offsetWidth, behavior: 'smooth' })

        this.step++
        this.shadow.querySelector('.back-step').classList.add('active')
      }

      if (event.target.closest('.back-step')) {
        const steps = this.shadow.querySelector('.steps');
        steps.scrollBy({ left: -steps.offsetWidth, behavior: 'smooth' })

        this.step--
        if (this.step === 1) {
          this.shadow.querySelector('.back-step').classList.remove('active')
        }
      }

      if (event.target.closest('.login-button')) {
        this.shadow.querySelector('.login').classList.add('active')
        this.shadow.querySelector('.register').classList.remove('active')
      }

      if (event.target.closest('.register-button')) {
        this.shadow.querySelector('.login').classList.remove('active')
        this.shadow.querySelector('.register').classList.add('active')
      }
    })
  }
}

customElements.define('modal-checkout-component', ModalCheckout)