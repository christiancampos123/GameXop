class Faqs extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.rows = null
    this.datas = null
  }

  async connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}?size=4`)
    const data = await response.json()
    this.rows = data.rows
    this.datas = data
    console.log(this.datas)
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>

      .faqs-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      details {
        color: hsl(0, 0%, 100%);
        font-family: 'Lato', sans-serif;
        font-size: 1.2rem;
      }

      summary {
        border-bottom: 1px solid hsl(0, 0%, 100%);
        color: hsl(0, 0%, 100%);
        cursor: pointer;
        font-family: 'Lato', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        padding: 0.5rem;
      }
    </style>

    <div class="faqs-container"></div>
    `

    const faqsContainer = this.shadow.querySelector('.faqs-container')

    this.rows.forEach(row => {
      const faqElement = document.createElement('details')
      const faqElementSummary = document.createElement('summary')
      faqElement.name = 'faq'
      faqElementSummary.textContent = row.name
      faqElement.appendChild(faqElementSummary)
      faqElement.innerHTML += row.order
      faqsContainer.appendChild(faqElement)
    })
  }
}

customElements.define('faqs-component', Faqs)
