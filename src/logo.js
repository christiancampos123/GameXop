class Logo extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = {
      title: "GameXop",
      image: {
        url: "http://localhost:5173/public/logo.svg",
        alt: "Logo de GameXop"
      }
    }
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      .logo{
        align-items: center;
        display: flex;
        gap: 1rem;
      }

      .logo img{
        height: 3rem;
        width: 3rem;
      }

      .logo h1{
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
        text-shadow: 2px 0 0 hsl(284deg 100% 50%), -2px 0 0 hsl(284deg 100% 50%), 0 2px 0 hsl(284deg 100% 50%), 0 -2px 0 hsl(284deg 100% 50%), 1px 1px hsl(284deg 100% 50%), -1px -1px 0 hsl(284deg 100% 50%), 1px -1px 0 hsl(284deg 100% 50%), -1px 1px 0 hsl(284deg 100% 50%);
      }
    </style>

    <div class="logo">
      <img src="${this.data.image.url}" alt="${this.data.image.alt}" />
      <h1>${this.data.title}</h1>
    </div>
    `
  }
}

customElements.define('logo-component', Logo)