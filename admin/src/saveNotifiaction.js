class SaveNotification extends HTMLElement {

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.notificationMessage = this.getAttribute('message');
    }
  
    connectedCallback() {
      // Agrega un listener para el evento personalizado "save-notification"
      document.addEventListener("save-notification", () => {
        this.showNotification();
      });
  
      this.render();
    }
  
    showNotification() {
      this.shadow.querySelector('.notification-container').classList.add('show');
      setTimeout(() => {
        this.hideNotification();
      }, 5000); // La notificación se ocultará después de 5 segundos
    }
  
    hideNotification() {
      this.shadow.querySelector('.notification-container').classList.remove('show');
    }
  
    render() {
      this.shadow.innerHTML = /*html*/ `
        <style>
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
          <p>Se haguardado correctamente</p>
        </div>
      `;
  
      // No es necesario mostrar la notificación aquí, ya que se mostrará cuando se reciba el evento
    }
  }
  
  customElements.define('save-notification-component', SaveNotification);
  