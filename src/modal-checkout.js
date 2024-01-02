class ModalCheckout extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
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
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
        height: 80%;
        left: 50%;
        position: relative;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        z-index: 1001;
      }

      .header {
        align-items: center;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
      }

      .header .close-button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        padding: 0;
      }

      .header .close-button svg {
        fill: hsl(0, 0%, 0%);
        height: 1.5rem;
        width: 1.5rem;
      }

      .body {
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
      }

      .step {
        min-width: 100%;
        width: 100%;
      }

      .step.red
      {
        background-color: red;
      }

      .step.blue
      {
        background-color: blue;
      }
    </style>

    <div class="overlay">
      <div class="modal">
        <div class="header">
          <button class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </button>
        </div>
        <div class="body">
          <div class="steps">
            <div class="step active red">
              <div class="login">
                <button class="login-button next-step">Iniciar sesión</button>
              </div>
              <div class="register">
                <button class="register-button next-step">Nuevo usuario</button>
              </div>
            </div>
            <div class="step blue">
              
            </div>
          </div>
        </div>
      </div>
    </div>
    `

    this.shadow.querySelector('.overlay').addEventListener('click', event => {
      if (event.target.closest('.close-button')) {
        this.shadow.querySelector('.overlay').classList.remove('active')
      }

      if (event.target.closest('.next-step')) {
        //Traslada 100% a la izquierda
      }
    })
  }
}

customElements.define('modal-checkout-component', ModalCheckout)