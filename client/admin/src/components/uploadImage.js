import { store } from '../redux/store.js'
import { setImageGallery } from '../redux/images-slice.js'

class UploadImage extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.images = []
  }

  connectedCallback () {
    this.name = this.getAttribute('name')
    this.type = this.getAttribute('type')
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()
      // console.log(currentState)
      try {
        if (this.type === 'single') {
          this.getThumbnail(currentState)
        }
        if (this.type === 'multiple') {
          this.getThumbnails(currentState)
        }
      } catch (error) {
      }
      // console.log('hola' + currentState.images.showedImages)
    })
    this.render()
    // console.log(this.name)
  }

  getThumbnail (imagesState) {
    console.log(imagesState)
    // Accede a la propiedad showedImages del estado de imágenes
    const images = imagesState.images.showedImages
    const formElementInput = this.shadow.querySelector('.form-element-input')
    formElementInput.querySelectorAll('img').forEach(img => img.remove())

    images.forEach((image, index, images) => {
      if (index === images.length - 1) {
        // Este bloque de código solo se ejecutará para el último elemento del array
        if (image.name === this.name) {
          const img = document.createElement('img')
          img.src = `${import.meta.env.VITE_API_URL}/api/admin/images/${image.filename}`
          img.alt = 'x'
          img.dataset.nombre = image.filename
          this.shadow.querySelector('.form-element-input').appendChild(img)
        }
      }
    })
  }

  getThumbnails (imagesState) {
    console.log(imagesState)
    // Accede a la propiedad showedImages del estado de imágenes
    const images = imagesState.images.showedImages
    const formElementInput = this.shadow.querySelector('.form-element-input')
    formElementInput.querySelectorAll('img').forEach(img => img.remove())
    images.forEach(image => {
      // formElementInput.querySelectorAll('img').forEach(img => img.remove())
      if (image.name === this.name) {
        const img = document.createElement('img')
        img.src = `${import.meta.env.VITE_API_URL}/api/admin/images/${image.filename}`
        img.alt = 'x'
        img.dataset.nombre = image.filename
        this.shadow.querySelector('.form-element-input').appendChild(img)
      }
    })
  }

  render () {
    this.shadow.innerHTML = /* html */ `
      <style>
        * {
          margin: 0;
          padding: 0;
        }

        :host:hover{
          transform:scale(1.03);
        }

  /* Estilo para los divs */
  .square {
    width: 100px;
    height: 100px;
    border: 2px solid #ffffff;
    text-align: center;
    line-height: 100px;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.15s ease-in-out;
  }

  .square:hover{
    transform: scale(102%);
  }

      </style>
      
      <div class="form-row">
      <div class="form-element">
        <div class="form-element-label">
        <!--
          <label for="main-image">
            Galeria de Imagenes
          </label>
          -->
        </div>
        <div class="form-element-input">
          <div class="square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" /></svg>
          </div>
        </div>
      </div>
    </div>
      `
    const upButton = this.shadow.querySelector('.square')
    upButton?.addEventListener('click', () => {
      const image = {
        name: this.getAttribute('name')
      }
      store.dispatch(setImageGallery(image))
      document.dispatchEvent(new CustomEvent('showGalleryModal', {
      }))
    })
  }
}

customElements.define('upload-image-component', UploadImage)
