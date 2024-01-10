class Limit extends HTMLElement {

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
        max-width: 100%;
        position: relative;
        bottom: 0;
      }

      .limit{
        display: flex;
        flex-direction: ${this.flexDirection};
        height: 10px;
        width: 100%;
        background-image: linear-gradient(
          to right, 
          hsl(46, 94%, 51%) 0%, 
          hsl(271, 100%, 45%) 25%, 
          hsl(194, 100%, 47%) 50%, 
          hsl(358, 84%, 45%) 75%,
          hsl(358, 84%, 45%) 100%
        );
      }

      .limit-element{
        flex: 1;
        height: 10px;
      }
    </style>

    <div class="limit"></div>
    `
  }
}

customElements.define('limit-component', Limit)