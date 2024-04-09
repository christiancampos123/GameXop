class Faqs extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}`)
    const data = await response.json()
    console.log(data)
    this.rows = data
    this.faqs = []
    this.rows.forEach(row => {
      console.log(row.images)
      this.faqs.push({
        title: row.locales.question,
        description: row.locales.answer,
        image: row.images.xs
      })
    })
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

    this.faqs.forEach(async faq => {
      console.log(faq.image)
      const faqElement = document.createElement('details')
      const faqElementSummary = document.createElement('summary')
      faqElement.name = 'faq'
      faqElementSummary.textContent = faq.title
      faqElement.appendChild(faqElementSummary)
      faqElement.innerHTML += faq.description
      // Crear el elemento <picture>
      const faqImage = document.createElement('picture')

      // Crear el elemento <source>
      const faqSource = document.createElement('source')
      const fileName = faq.image.featureImage.filename
      // Establecer el atributo srcset y media para <source>
      // console.log('srcset', `${import.meta.env.VITE_API_URL}/api/src/storage/images/resized/${fileName}`)
      // const source = await fetch(`${import.meta.env.VITE_API_URL}/api/src/storage/images/resized/${fileName}`)
      const source = `${import.meta.env.VITE_API_URL}/api/src/storage/images/resized/${faq.image.featureImage.filename}`
      console.log(source)

      faqSource.setAttribute('srcset', source)
      faqSource.setAttribute('media', '(min-width: 600px)')

      // Crear el elemento <img>
      const faqImg = document.createElement('img')

      // Establecer el atributo src para <img>
      faqImg.setAttribute('src', source)

      // Establecer el atributo alt para <img>
      faqImg.setAttribute('alt', 'MDN')

      // Adjuntar el elemento <source> al elemento <picture>
      faqImage.appendChild(faqSource)

      // Adjuntar el elemento <img> al elemento <picture>
      faqImage.appendChild(faqImg)

      faqElement.appendChild(faqImage)

      faqsContainer.appendChild(faqElement)
    })
  }
}

customElements.define('faqs-component', Faqs)
