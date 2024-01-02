class Search extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.flexDirection = this.getAttribute('flex-direction')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      :host {
        max-width: 300px;
      }

      .search-bar {
        align-items: center;
        display: flex;
        gap: 0.5rem;
      }

      form {
        align-items: center;
        display: flex;
      }

      input {
        background-color: hsl(0, 0%, 100%);
        border: 1px solid hsl(0, 0%, 100%);
        border-radius: 0.5rem;
        color: hsl(0, 0%, 0%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        height: 2rem;
        outline: none;
        padding: 0 1rem;
        width: 100%;
      }

      .search-button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .search-button svg {
        fill: hsl(0, 0%, 100%);
        height: 2rem;
        width: 2rem;
      }
    </style>

    <div class="search-bar">
      <form>
        <input type="text" placeholder="busca tu juego" />
      </form>
      <button class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
      </button>
    </div>
    `
  }
}

customElements.define('search-component', Search)