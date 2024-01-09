class FeaturedGallery extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
    this.featured = [
      {
        id: 1,
        image: 'http://localhost:5173/public/minecraft.webp'
      },
      {
        id: 2,
        image: 'http://localhost:5173/public/lol.jpg'
      },
      {
        id: 3,
        image: 'http://localhost:5173/public/clash-royale.webp'
      }
    ]
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      :host {
        height: 40vh;
      }

      .featured-gallery {
        display: flex;
        gap: 1rem;
        height: 100%;
        overflow-x: hidden;
        width: 100%;
      }

      .featured-element{
        cursor: pointer;
        height: 40vh;
        overflow: hidden;
      }

      .featured-element:hover {
        filter: brightness(1.2);
      }
      
      .featured-element:nth-child(1) {
        border-radius: 0 1rem 1rem 0;
        flex: 0 0 25%;
      }

      .featured-element:nth-child(2) {
        border-radius: 1rem;
        flex: 0 0 50%;
      }

      .featured-element:nth-child(3) {
        border-radius: 1rem 0 0 1rem;
        flex: 0 0 25%;
      }

      .featured-element img{
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    </style>

    <div class="featured-gallery"></div>
    `

    const featuredGallery = this.shadow.querySelector('.featured-gallery')

    this.featured.forEach(featured => {
      const featuredElement = document.createElement('div')
      featuredElement.className = 'featured-element'

      const featuredImage = document.createElement('img')
      featuredImage.src = featured.image

      featuredElement.appendChild(featuredImage)
      featuredGallery.appendChild(featuredElement)
    })
  }
}

customElements.define('featured-gallery-component', FeaturedGallery)