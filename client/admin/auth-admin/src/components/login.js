class LoginComponent extends HTMLElement {
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
        .modal-login {
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
          margin-top:3rem;
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
      <div class="modal-login">
      <div class="title">LOGIN</div>
        <input type="text" class="form-input" placeholder="Usuario">
        <input type="password" class="form-input" placeholder="Contraseña">
        <button class="form-submit">Iniciar sesión</button>
        <div class="forgot-password">
          <a href="http://dev-chrishop.com/admin/login/reset">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    `

    const submitButton = this.shadow.querySelector('.form-submit')
    submitButton.addEventListener('click', this.handleLogin.bind(this))
  }

  handleLogin () {
    const usernameInput = this.shadow.querySelector('input[type="text"]')
    const passwordInput = this.shadow.querySelector('input[type="password"]')
    const username = usernameInput.value
    const password = passwordInput.value

    // Aquí puedes enviar los datos del usuario para autenticación
    console.log('Usuario:', username)
    console.log('Contraseña:', password)

    // Aquí podrías enviar una solicitud al servidor para autenticar al usuario
    // y luego actuar en consecuencia (por ejemplo, mostrar un mensaje de error si la autenticación falla).
  }
}

customElements.define('login-component', LoginComponent)
