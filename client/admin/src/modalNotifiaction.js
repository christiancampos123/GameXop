class ModalNotification extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.notificationMessage = this.getAttribute('message')
  }

  connectedCallback () {
    document.addEventListener('custom-notification', (event) => {
      this.handleShowModal(event.detail.message, event.detail.color) // Pasa el mensaje como argumento
    })

    this.render()
  }

  handleShowModal (customMessage, color) {
    if (color === 'green') {
      const notificationContainer = this.shadow.querySelector('.notification-container')
      notificationContainer.classList.add('show-green')
      notificationContainer.querySelector('p').innerText = customMessage
    }
    if (color === 'red') {
      const notificationContainer = this.shadow.querySelector('.notification-container')
      notificationContainer.classList.add('show-red')
      notificationContainer.querySelector('p').innerText = customMessage
    }

    setTimeout(() => {
      this.hideNotification()
    }, 5000) // La notificación se ocultará después de 5 segundos
  }

  hideNotification () {
    try {
      this.shadow.querySelector('.notification-container').classList.remove('show-green')
    } catch (error) {

    }
    try {
      this.shadow.querySelector('.notification-container').classList.remove('show-red')
    } catch (error) {

    }
  }

  render () {
    this.shadow.innerHTML = /* html */ `
        <style>
          :host{
            z-index:11;
            position:absolute;
          }
          .notification-container {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: display 0.3s ease-in-out;
          }
  
          .notification-container.show-green {
            display: block;
            background-color: #090;
          }

          .notification-container.show-red {
            display: block;
            background-color: #900;
          }
        </style>
  
        <div class="notification-container">
          <p>${this.notificationMessage}</p>
        </div>
      `
  }
}

customElements.define('modal-notification-component', ModalNotification)
