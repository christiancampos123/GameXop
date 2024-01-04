class ProductGallery extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
    
    this.products = [
      {
        id: 1,
        path: "/juegos/call-of-duty",
        image: {
          url: "http://localhost:5173/public/call-of-duty.jpg",
          alt: "Call of Duty"
        }
      },
      {
        id: 2,
        path: "/juegos/payday-3",
        image: {
          url: "http://localhost:5173/public/payday-3.jpg",
          alt: "Payday 3"
        }
      },
      {
        id: 3,
        path: "/juegos/persona-5",
        image: {
          url: "http://localhost:5173/public/persona-5.jpg",
          alt: "Persona 5"
        }
      },
      {
        id: 4,
        path: "/juegos/red-dead-redemption-2",
        image: {
          url: "http://localhost:5173/public/red-dead.jpg",
          alt: "Red Dead Redemption 2"
        }
      },
      {
        id: 5,
        path: "/juegos/starfield",
        image: {
          url: "http://localhost:5173/public/starfield.jpg",
          alt: "Starfield"
        }
      },
      {
        id: 6,
        path: "/juegos/street-fighter-6",
        image: {
          url: "http://localhost:5173/public/street-fighter.jpg",
          alt: "Street Fighter 6"
        }
      },
      {
        id: 1,
        path: "/juegos/call-of-duty",
        image: {
          url: "http://localhost:5173/public/call-of-duty.jpg",
          alt: "Call of Duty"
        }
      },
      {
        id: 2,
        path: "/juegos/payday-3",
        image: {
          url: "http://localhost:5173/public/payday-3.jpg",
          alt: "Payday 3"
        }
      },
      {
        id: 3,
        path: "/juegos/persona-5",
        image: {
          url: "http://localhost:5173/public/persona-5.jpg",
          alt: "Persona 5"
        }
      },
      {
        id: 4,
        path: "/juegos/red-dead-redemption-2",
        image: {
          url: "http://localhost:5173/public/red-dead.jpg",
          alt: "Red Dead Redemption 2"
        }
      },
      {
        id: 5,
        path: "/juegos/starfield",
        image: {
          url: "http://localhost:5173/public/starfield.jpg",
          alt: "Starfield"
        }
      },
      {
        id: 6,
        path: "/juegos/street-fighter-6",
        image: {
          url: "http://localhost:5173/public/street-fighter.jpg",
          alt: "Street Fighter 6"
        }
      }
    ];
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .product-gallery {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;  
        scrollbar-width: none;  
      }

      .product {
        align-items: center;
        border-radius: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        overflow: hidden;
      }

      .product:hover {
        filter: brightness(1.2);
      }

      .product img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    </style>

    <div class="product-gallery"></div>
    `

    this.products.forEach(product => {
      const productElementLink = document.createElement('a')
      productElementLink.href = product.path

      const productElement = document.createElement('div')
      productElementLink.appendChild(productElement)
     
      productElement.classList.add('product')
      productElement.dataset.endpoint = product.id

      const productImageElement = document.createElement('img');
      productImageElement.src = product.image.url
      productImageElement.alt = product.image.alt

      productElement.appendChild(productImageElement)
      this.shadow.querySelector('.product-gallery').appendChild(productElementLink);
    })
  }
}

customElements.define('product-gallery-component', ProductGallery)