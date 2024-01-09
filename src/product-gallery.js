class ProductGallery extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    document.addEventListener('filterByCategory', this.handleFilterByCategory.bind(this))
    this.loadData().then(() => this.render())
  }

  handleFilterByCategory (event) {
    const categoryId = event.detail.categoryId;
    const products = categoryId === "null" ? this.products : this.products.filter(product => product.categoryId === Number(categoryId));
    this.render(products);
  }

  async loadData () {
    
    this.products = [
      {
        id: 1,
        path: "/juegos/call-of-duty",
        categoryId: 1,
        price: 100,
        priceBeforeDiscount: 120,
        percentage: 20,
        endOfDiscount: "31 de diciembre",
        image: {
          url: "http://localhost:5173/public/call-of-duty.jpg",
          alt: "Call of Duty"
        }
      },
      {
        id: 2,
        path: "/juegos/payday-3",
        categoryId: 1,
        price: 100,
        image: {
          url: "http://localhost:5173/public/payday-3.jpg",
          alt: "Payday 3"
        }
      },
      {
        id: 3,
        path: "/juegos/persona-5",
        categoryId: 2,
        price: 100,
        image: {
          url: "http://localhost:5173/public/persona-5.jpg",
          alt: "Persona 5"
        }
      },
      {
        id: 4,
        path: "/juegos/red-dead-redemption-2",
        categoryId: 2,
        price: 100,
        image: {
          url: "http://localhost:5173/public/red-dead.jpg",
          alt: "Red Dead Redemption 2"
        }
      },
      {
        id: 5,
        path: "/juegos/starfield",
        categoryId: 3,
        price: 100,
        image: {
          url: "http://localhost:5173/public/starfield.jpg",
          alt: "Starfield"
        }
      },
      {
        id: 6,
        path: "/juegos/street-fighter-6",
        categoryId: 3,
        price: 100,
        image: {
          url: "http://localhost:5173/public/street-fighter.jpg",
          alt: "Street Fighter 6"
        }
      },
      {
        id: 1,
        path: "/juegos/call-of-duty",
        categoryId: 3,
        price: 100,
        image: {
          url: "http://localhost:5173/public/call-of-duty.jpg",
          alt: "Call of Duty"
        }
      },
      {
        id: 2,
        path: "/juegos/payday-3",
        categoryId: 1,
        price: 100,
        image: {
          url: "http://localhost:5173/public/payday-3.jpg",
          alt: "Payday 3"
        }
      },
      {
        id: 3,
        path: "/juegos/persona-5",
        categoryId: 4,
        price: 100,
        image: {
          url: "http://localhost:5173/public/persona-5.jpg",
          alt: "Persona 5"
        }
      },
      {
        id: 4,
        path: "/juegos/red-dead-redemption-2",
        categoryId: 1,
        price: 100,
        image: {
          url: "http://localhost:5173/public/red-dead.jpg",
          alt: "Red Dead Redemption 2"
        }
      },
      {
        id: 5,
        path: "/juegos/starfield",
        categoryId: 1,
        price: 100,
        image: {
          url: "http://localhost:5173/public/starfield.jpg",
          alt: "Starfield"
        }
      },
      {
        id: 6,
        path: "/juegos/street-fighter-6",
        categoryId: 2,
        price: 100,
        image: {
          url: "http://localhost:5173/public/street-fighter.jpg",
          alt: "Street Fighter 6"
        }
      }
    ];
  }

  render (products = this.products) {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      a{
        text-decoration: none;
      }

      .product-gallery {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;  
        padding: 0 1rem;
        scrollbar-width: none;  
      }

      .product {
        align-items: center;
        border-radius: 0.5rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
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

      .product-price {
        background-color: hsl(0, 0%, 0%);
        display: flex;
        flex-direction: column;
        height: 5vh;
        padding: 1rem 5%;
        width: 90%;
      }

      .product-price span {
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.1rem;
      }

      .product-discount-container{
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .product-discount-info span{
        font-size: 0.9rem;
      }

      .product-discount-price{
        align-items: center;
        background-color: hsl(272 40% 35%);
        display: flex;
        gap: 0.5rem;
        padding: 0 0.5rem;
        width: max-content;
      }

      .product-discount-price span.product-discount-percentage{
        font-size: 1.5rem;
      }

      .product-discount-price span:nth-child(2){
        text-decoration: line-through;
      }
    </style>

    <div class="product-gallery"></div>
    `

    products.forEach(product => {
      const productElementLink = document.createElement('a')
      productElementLink.href = product.path

      const productElement = document.createElement('div')
      productElementLink.appendChild(productElement)
     
      productElement.classList.add('product')
      productElement.dataset.endpoint = product.id
      productElement.dataset.categoryId = product.categoryId

      const productImageElement = document.createElement('img')
      productImageElement.src = product.image.url
      productImageElement.alt = product.image.alt

      const productPriceElement = document.createElement('div')
      productPriceElement.classList.add('product-price')

      if(product.priceBeforeDiscount){

        const productDiscountContainer = document.createElement('div')
        productDiscountContainer.classList.add('product-discount-container')

        const productDiscountInfoContainer = document.createElement('div')
        productDiscountInfoContainer.classList.add('product-discount-info')

        productPriceElement.appendChild(productDiscountContainer)

        const productDiscountEnd = document.createElement('span')
        productDiscountEnd.innerText = `Oferta hasta el ${product.endOfDiscount}`;

        productDiscountInfoContainer.appendChild(productDiscountEnd)
        productDiscountContainer.appendChild(productDiscountInfoContainer)

        const productDiscountPriceContainer = document.createElement('div')
        productDiscountPriceContainer.classList.add('product-discount-price')

        const productDiscountPercentage = document.createElement('span')
        productDiscountPercentage.classList.add('product-discount-percentage')
        productDiscountPercentage.innerText = `- ${product.percentage}%`

        productDiscountPriceContainer.appendChild(productDiscountPercentage)

        const productPriceBeforeDiscount = document.createElement('span')
        productPriceBeforeDiscount.innerText = `${product.priceBeforeDiscount} €`
        productDiscountPriceContainer.appendChild(productPriceBeforeDiscount)

        const productPrice = document.createElement('span')
        productPrice.innerText = `${product.price} €`
        productDiscountPriceContainer.appendChild(productPrice)

        productDiscountContainer.appendChild(productDiscountPriceContainer)

      }else{
        
        const productPrice = document.createElement('span')
        productPrice.innerText = `${product.price} €`
        productPriceElement.appendChild(productPrice)
      }

      productElement.appendChild(productImageElement)
      productElement.appendChild(productPriceElement)
      this.shadow.querySelector('.product-gallery').appendChild(productElementLink)

      productElementLink.addEventListener('click', event => {
        event.preventDefault()
        window.history.pushState({}, '', product.path)
        window.dispatchEvent(new Event('popstate'))
      })
    })
  }
}

customElements.define('product-gallery-component', ProductGallery)