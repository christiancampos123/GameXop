class ActivacionComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = `
      <style>
        /* Estilos del modal */
        .modal-reset {
          display: flex;
          width:30%;
          height:auto;
          flex-direction: column;
          align-items: center;
          position: fixed;
          z-index: 3;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .title{
          margin-bottom:1rem;
          font-size:2rem;
        }

        /* Estilos para los campos del formulario */
        .form-input {
          margin-bottom: 10px;
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box; /* Asegura que el padding y el borde no aumenten el tamaño total */
        }

        /* Estilos para el botón de enviar */
        .form-submit {
          margin-top:2rem;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          margin-bottom:1.5rem;
        }

        /* Estilos para el enlace de olvidé mi contraseña */
        .forgot-password {
          margin-top:2rem;
          text-align: center;
          margin-top: 10px;
        }
      </style>
      <div class="modal-reset">
      <div class="title">Cambiar password</div>
      <input type="password" class="form-input" placeholder="Contraseña">
      <input type="password" class="form-input" placeholder="Repetir Contraseña">
        <button class="form-submit">cambiar pass</button>
      </div>
    `

    const submitButton = this.shadow.querySelector('.form-submit')
    submitButton.addEventListener('click', this.handlereset.bind(this))
  }

  handlereset () {
    const usernameInput = this.shadow.querySelector('input[type="text"]')
  }
}

customElements.define('activacion-component', ActivacionComponent)
