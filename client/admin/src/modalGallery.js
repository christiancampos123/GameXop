class Gallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.activeTab = 1
  }

  connectedCallback () {
    this.render()
    this.addEventListeners()
  }

  addEventListeners () {
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
           /* Semi-transparent background */
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
          overflow: hidden;
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
        .tab.active{
          background-color:#2A4CBB
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

        .tab-content-images{
          padding-left:1rem;
          padding-top:1rem;
          flex:3;
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
    }

    /* Estilo para el contenedor que envuelve los avatares */
    .avatar-container {
      display: flex;
      flex-wrap: wrap;

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

    .upload-button{
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      width:3rem;
      height:2rem;
      position:absolute;
      bottom:2rem;
      right:2rem;
    }

      </style>
      
      <div class="modal-gallery-back">
        <div class="modal-gallery">
          <span class="close-button">X</span>
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
          <!-- Avatares individuales -->
          <div class="avatar">A</div>
          <div class="avatar">B</div>
          <div class="avatar">C</div>
          <div class="avatar">D</div>
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
            <button class="upload-button">
              Subir
            </button>
          </div>
        </div>
  
  
  
        <div class="tab-content" data-tab="images">
        <div class="tab-content-upload">
          adios
          </div>
        </div>
      </div>
      `
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
    document.addEventListener('showGalleryModal', event => {
      modal.classList.add('active')
    })

    const closeButton = this.shadow.querySelector('.close-button')
    closeButton.addEventListener('click', () => modal.classList.remove('active'))

    modal.addEventListener('click', function (event) {
      console.log('Se hizo clic en el contenedor exterior')
      modal.classList.remove('active')
    })

    main.addEventListener('click', function (event) {
      event.stopPropagation() // Evita que el evento se propague al contenedor exterior
      // console.log('Se hizo clic en el contenedor interior')
    })
  }
}

customElements.define('modal-gallery-component', Gallery)
