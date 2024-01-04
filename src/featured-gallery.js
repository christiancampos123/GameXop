class FeaturedGallery extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
  
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

    <div class="featured-gallery">
      <div class="featured-element">
        <img src="http://localhost:5173/public/minecraft.webp" />
      </div>
      <div class="featured-element">
        <img src="http://localhost:5173/public/lol.jpg" />
      </div>
      <div class="featured-element">
        <img src="http://localhost:5173/public/clash-royale.webp" />
      </div>
    </div>
    `
  }
}

customElements.define('featured-gallery-component', FeaturedGallery)