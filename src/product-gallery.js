class ProductGallery extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = [
      {
        id: 1,
        path: "/juego/call-of-duty",
        image: {
          url: "http://localhost:5173/public/call-of-duty.jpg",
          alt: "Call of Duty"
        }
      },
      {
        id: 2,
        path: "/juego/payday-3",
        image: {
          url: "http://localhost:5173/public/payday-3.jpg",
          alt: "Payday 3"
        }
      },
      {
        id: 3,
        path: "/juego/persona-5",
        image: {
          url: "http://localhost:5173/public/persona-5.jpg",
          alt: "Persona 5"
        }
      },
      {
        id: 4,
        path: "/juego/red-dead-redemption-2",
        image: {
          url: "http://localhost:5173/public/red-dead.jpg",
          alt: "Red Dead Redemption 2"
        }
      },
      {
        id: 5,
        path: "/juego/starfield",
        image: {
          url: "http://localhost:5173/public/starfield.jpg",
          alt: "Starfield"
        }
      },
      {
        id: 6,
        path: "/juego/street-fighter-6",
        image: {
          url: "http://localhost:5173/public/street-fighter.jpg",
          alt: "Street Fighter 6"
        }
      },
      {
        id: 1,
        path: "/juego/call-of-duty",
        image: {
          url: "http://localhost:5173/public/call-of-duty.jpg",
          alt: "Call of Duty"
        }
      },
      {
        id: 2,
        path: "/juego/payday-3",
        image: {
          url: "http://localhost:5173/public/payday-3.jpg",
          alt: "Payday 3"
        }
      },
      {
        id: 3,
        path: "/juego/persona-5",
        image: {
          url: "http://localhost:5173/public/persona-5.jpg",
          alt: "Persona 5"
        }
      },
      {
        id: 4,
        path: "/juego/red-dead-redemption-2",
        image: {
          url: "http://localhost:5173/public/red-dead.jpg",
          alt: "Red Dead Redemption 2"
        }
      },
      {
        id: 5,
        path: "/juego/starfield",
        image: {
          url: "http://localhost:5173/public/starfield.jpg",
          alt: "Starfield"
        }
      },
      {
        id: 6,
        path: "/juego/street-fighter-6",
        image: {
          url: "http://localhost:5173/public/street-fighter.jpg",
          alt: "Street Fighter 6"
        }
      }
    ];
  }

  connectedCallback () {
    this.viewTransitionNavigation()
    this.render()
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

    this.data.forEach(product => {
      const productElementLink = document.createElement('a');
      productElementLink.href = product.path;

      const productElement = document.createElement('div');
      productElementLink.appendChild(productElement);
     
      productElement.classList.add('product');
      productElement.dataset.endpoint = product.id;

      const productImageElement = document.createElement('img');
      productImageElement.src = product.image.url;
      productImageElement.alt = product.image.alt;

      productElement.appendChild(productImageElement);
      this.shadow.querySelector('.product-gallery').appendChild(productElementLink);
    });
  }

  viewTransitionNavigation () {
    
    if (document.startViewTransition && !window.navigationEventAdded) {

      window.navigation.addEventListener('navigate', (event) => {

        const main = document.querySelector('main');
        const product = document.createElement('faqs-component').outerHTML
        
        const toUrl = new URL(event.destination.url)

        if (location.origin !== toUrl.origin) return

        event.intercept({

          async handler () {

            console.log( main)

            // const response = await fetch(toUrl.pathname)
            // const text = await response.text()

            // const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)

            document.startViewTransition(() => {
              main.innerHTML = faqs
              document.documentElement.scrollTop = 0
            })
          }
        })
      })

      window.navigationEventAdded = true
    }
  }
}

customElements.define('product-gallery-component', ProductGallery)