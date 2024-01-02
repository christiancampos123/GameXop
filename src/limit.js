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
       
        width: 100%;
      }

      .limit-element{
        flex: 1;
        height: 10px;
      }
    </style>

    <div class="limit">
      <div class="limit-element" style="background-color:hsl(46, 94%, 51%)"></div>
      <div class="limit-element" style="background-color:hsl(271, 100%, 45%)"></div>
      <div class="limit-element" style="background-color:hsl(194, 100%, 47%)"></div>
      <div class="limit-element" style="background-color:hsl(358, 84%, 45%)"></div>
    </div>
    `
  }
}

customElements.define('limit-component', Limit)