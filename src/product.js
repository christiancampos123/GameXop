class Product extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
    this.product = {
      id: 1,
      title: "Call of Duty Modern Warfare 3",
      description: "Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, creada por Ben Chichoski, desarrollada principal e inicialmente por Infinity Ward, y distribuida por Activision.",
      price: 100,
      category: "Shooter",
      platform: "PC",
      releaseDate: "8 de noviembre de 2011",
      developer: "Infinity Ward",
      image: {
        url: "http://localhost:5173/public/call-of-duty-modern-warfare-3-xl.jpg",
        alt: "Call of Duty"
      }
    }
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .product {
        display: flex;
        justify-content: center;
        gap: 3rem;
        height: 80vh;
        margin: 0 auto;
        padding: 5%;
        max-width: 1400px;
      }

      .product-image img{
        object-fit: cover;
        width: 100%;
      }

      .product-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .product-title{
        color: hsl(0, 0%, 100%);  
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
      }

      .product-description{
        color: hsl(0, 0%, 100%);  
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
      }

      .product-price{
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
      }

      .product-category{
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
      }

      .product-platform{
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
      }
    </style>

    <div class="product">
      <div class="product-image">
        <img src="${this.product.image.url}" alt="${this.product.image.alt}">
      </div>
      <div class="product-info">
        <h2 class="product-title">${this.product.title}</h2>
        <p class="product-description">${this.product.description}</p>
        <p class="product-price">${this.product.price}</p>
        <p class="product-category">${this.product.category}</p>
        <p class="product-platform">${this.product.platform}</p>
        <p class="product-release-date">${this.product.releaseDate}</p>
        <p class="product-developer">${this.product.developer}</p>
      </div>
    </div>
    `
  }
}

customElements.define('product-component', Product)