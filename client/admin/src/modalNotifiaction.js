class ModalNotification extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.notificationMessage = this.getAttribute('message')
  }

  connectedCallback () {
    document.addEventListener('custom-notification', (event) => {
      this.handleShowModal(event.detail.message) // Pasa el mensaje como argumento
    })

    this.render()
  }

  handleShowModal (customMessage) {
    const notificationContainer = this.shadow.querySelector('.notification-container')
    notificationContainer.classList.add('show')
    notificationContainer.querySelector('p').innerText = customMessage

    setTimeout(() => {
      this.hideNotification()
    }, 5000) // La notificación se ocultará después de 5 segundos
  }

  hideNotification () {
    this.shadow.querySelector('.notification-container').classList.remove('show')
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
            background-color: #090;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: display 0.3s ease-in-out;
          }
  
          .notification-container.show {
            display: block;
          }
        </style>
  
        <div class="notification-container">
          <p>${this.notificationMessage}</p>
        </div>
      `
  }
}

customElements.define('modal-notification-component', ModalNotification)
