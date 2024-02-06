class Gallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.activeTab = 1

    this.galleryData = [
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' },
      { id: '1', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '2', imageUrl: '../src/images/gmail.png' },
      { id: '3', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '4', imageUrl: '../src/images/logo.png' },
      { id: '5', imageUrl: '../src/images/gmail.png' },
      { id: '6', imageUrl: '../src/images/logo.png' },
      { id: '7', imageUrl: '../src/images/chatgpt-icon.webp' },
      { id: '8', imageUrl: '../src/images/logo.png' },
      { id: '9', imageUrl: '../src/images/gmail.png' },
      { id: '10', imageUrl: '../src/images/logo.png' }

    ]
  }

  connectedCallback () {
    this.render()

    document.addEventListener('showGalleryModal', this.handleShowGalleryModal.bind(this))
    this.generateGalleryItems()
  }

  handleShowGalleryModal (event) {
    const modal = this.shadow.querySelector('.modal-gallery-back')
    modal.classList.add('active')
  }

  generateGalleryItems () {
    const galleryContainer = this.shadow.querySelector('.avatar-container')

    this.galleryData.forEach(item => {
      const avatarDiv = document.createElement('div')
      avatarDiv.classList.add('avatar')
      const img = document.createElement('img')
      img.src = item.imageUrl
      img.alt = `Image ${item.id}`
      avatarDiv.appendChild(img)
      galleryContainer.appendChild(avatarDiv)
    })
  }

  render () {
    this.shadow.innerHTML = /* html */ `
      <style>
        * {
          margin: 0;
          padding: 0;
        }

        .modal-gallery-back {
          height: 100vh;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index:10;
          display:none;

        }

        .modal-gallery-back.active {
          display: flex;
        }

        .modal-gallery {
          position: relative;
          width: 80%;
          height: 80vh;
          background-color: white;
          z-index: 10;
          padding-top:1rem;
          overflow:hidden;
        }
        .modal-gallery-title{
          margin-bottom:2rem;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }

        .tabs{
          display:flex;
          border-bottom:solid 1px;
        }

        .tab {
          margin-left:1rem;
          width:3rem;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor: pointer;
          padding: 10px;
          border: 1px solid #ccc;
        }
        .tab:hover{
          background-color:#E5A450
        }
        .tab.active{
          background-color:#E69428
        }
        .modal-gallery-title{
          margin-left:1rem;
          font-size:1.5rem;
        }

        .tab-content {
          display:none;
          height:100%;
        }

        .tab-content.active{
          width: 100%;
          display: flex;
        }

        .tab-content-images {
          padding-left: 1rem;
          padding-top: 1rem;
          flex: 3;
          overflow: auto; /* Añade un scrollbar cuando sea necesario */
          max-height: calc(80vh - 10rem); /* 80% de la altura de la ventana modal menos la altura del título y otros elementos */
          scrollbar-width: thin; /* para navegadores que no son webkit */
          scrollbar-color: transparent transparent;
        }

        .tab-content-upload{
          padding-left:1rem;
          padding-top:1rem;
        }
        .tab-content-form{
          padding-right:2rem;
          padding-left:2rem;
          padding-top:1rem;
          flex:1;
          background-color:lightgrey;
          box-sizing: border-box;
        }

        .avatar {
          width: 100px;
          height: 100px;
          background-color: #3498db;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-weight: bold;
          font-size: 1.2em;
          overflow: hidden; /* Para ocultar partes de la imagen que excedan el contenedor */
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ajusta la imagen para cubrir completamente el contenedor */
        }

        /* Estilo para el contenedor que envuelve los avatares */
        .avatar-container {
          display: flex;
          flex-wrap: wrap;
          max-height: 100%; /* Ocupa el máximo de la altura disponible */
          width: 100%; /* Ocupa todo el ancho disponible */
        }

        .gallery{
          display:flex;
          flex-direction:column;
          gap:1rem;
          margin-top:2rem;
        }

        .title-form{
          display:flex;
          justify-content:center;
        }

        .chose-button{
          display:flex;
          justify-content:center;
          align-items:center;
          width:3rem;
          height:2rem;
          position:absolute;
          bottom:2rem;
          right:2rem;
        }

        .tab-content-upload {
          background-color: #fff;
          padding: 20px;
          text-align: center;
        }

        button {
          background-color: #3498db;
          color: #fff;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #2980b9;
        }

        input[type="file"] {
          display: none;
        }

        .close-button svg{
          fill:red;
          width:2rem;
          height:2rem;
          transition: transform 0.09s ease-in-out;
        }

        .close-button svg:hover{
          transform: scale(105%);
        }

        .images-preview img {
          max-width: 200px; /* Ancho máximo */
          max-height: 150px; /* Altura máxima */
          width: auto; /* Para mantener la proporción original y ajustar automáticamente el ancho */
          height: auto; /* Para mantener la proporción original y ajustar automáticamente la altura */
          border: 1px solid #ccc; /* Borde opcional para resaltar la imagen */
        }

      </style>
      
      <div class="modal-gallery-back">
        <div class="modal-gallery">
          <span class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-box</title><path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z" /></svg>
          </span>
          <div class = "modal-gallery-title">
          Imagenes
          </div>
          <div class="tabs">
            <div class="tab active" data-tab="gallery">
                Galleria
            </div>
            <div class="tab" data-tab="images">
                Subir
            </div>
          </div>


        <div class="tab-content active" data-tab="gallery">
          <div class="tab-content-images">
          <div class="avatar-container">

          <!-- Añade más avatares según sea necesario -->
        </div>
          </div>
          <div class="tab-content-form">
          <div class = title-form>
            FORM
          </div>  
            <form class ="gallery">
              <label class="title">
                Titulo
              </label>
              <input type="text">
              <label class="alternative">
                Nombre
              </label>
              <input type="text">
            </form>
            <button class="chose-button">
              Elegir
            </button>
          </div>
        </div>
  
  
  
      <div class="tab-content" data-tab="images">
        <div class="tab-content-upload">
        <label for="imagen">Selecciona una imagen:</label>
        <button class="buttonInput">Subir imagen</button>
        <input type="file" class="imagen" name="imagen" accept="image/*">
        </div>
        <div class="images-preview">
        </div>
      </div>
      </div>
      `

    const buttonChose = this.shadow.querySelector('.chose-button')
    buttonChose.addEventListener('click', (event) => {
      const choseNotificationEvent = new CustomEvent('custom-notification', {
        detail: {
          message: 'Se ha elegido la imagen correctamente',
          color: 'green'
        }
      })

      document.dispatchEvent(choseNotificationEvent)
    })

    const input = this.shadow.querySelector('.imagen')
    const buttonInput = this.shadow.querySelector('.buttonInput')
    const previewDiv = this.shadow.querySelector('.images-preview')

    buttonInput.addEventListener('click', (event) => {
      input.click()
    })

    input.addEventListener('change', (event) => {
      // Verifica si se seleccionó algún archivo
      if (input.files && input.files[0]) {
        const reader = new FileReader()

        // Configura la función que se ejecutará cuando la lectura del archivo esté completa
        reader.onload = function (e) {
          // Crea un elemento de imagen y establece su src como la vista previa
          const imgPreview = document.createElement('img')
          imgPreview.src = e.target.result

          // Limpia cualquier contenido previo en el div de vista previa
          previewDiv.innerHTML = ''

          // Agrega la imagen al div de vista previa
          previewDiv.appendChild(imgPreview)
        }

        // Lee el archivo como una URL de datos
        reader.readAsDataURL(input.files[0])
      }
    })

    const main = this.shadow.querySelector('.modal-gallery')
    // console.log(main)
    main?.addEventListener('click', (event) => {
      // event.preventDefault()

      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        // console.log(tabClicked)
        tabClicked.classList.add('active')
        tabActive.classList.remove('active')

        this.shadow.querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })
    const modal = this.shadow.querySelector('.modal-gallery-back')

    const closeButton = this.shadow.querySelector('.close-button')
    closeButton.addEventListener('click', () => modal.classList.remove('active'))

    modal.addEventListener('click', function (event) {
      console.log('Se hizo clic en el contenedor exterior')
      modal.classList.remove('active')
    })

    main.addEventListener('click', function (event) {
      event.stopPropagation()
    })
  }
}

customElements.define('modal-gallery-component', Gallery)
