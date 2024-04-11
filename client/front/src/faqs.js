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
    // console.log(data)
    this.rows = data
    this.faqs = []
    this.rows.forEach(row => {
      // console.log(row.images)
      this.faqs.push({
        title: row.locales.question,
        description: row.locales.answer,
        image: row.images
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
      const faqSourcelg = document.createElement('source')
      const faqSourcemd = document.createElement('source')
      const faqSourcesm = document.createElement('source')
      // Establecer el atributo srcset y media para <source>
      // console.log('srcset', `${import.meta.env.VITE_API_URL}/api/src/storage/images/resized/${fileName}`)
      // const source = await fetch(`${import.meta.env.VITE_API_URL}/api/src/storage/images/resized/${fileName}`)
      // const source = `${import.meta.env.VITE_API_URL}/api/src/storage/images/resized/${faq.image.featureImage.originalFilename}`

      faqSourcelg.setAttribute('srcset', `${import.meta.env.VITE_API_URL}/api/admin/images/image/${faq.image.lg.featureImage.filename}`)
      faqSourcesm.setAttribute('srcset', `${import.meta.env.VITE_API_URL}/api/admin/images/image/${faq.image.sm.featureImage.filename}`)
      faqSourcemd.setAttribute('srcset', `${import.meta.env.VITE_API_URL}/api/admin/images/image/${faq.image.md.featureImage.filename}`)

      faqSourcelg.setAttribute('media', '(min-width: 1024px)')
      faqSourcemd.setAttribute('media', '(min-width: 768px)')
      faqSourcesm.setAttribute('media', '(min-width: 546px)')

      // Crear el elemento <img>
      const faqImg = document.createElement('img')

      // Establecer el atributo src para <img>
      faqImg.setAttribute('src', `${import.meta.env.VITE_API_URL}/api/admin/images/image/${faq.image.xs.featureImage.filename}`)

      // Establecer el atributo alt para <img>
      // console.log('xddd', faq.image.xs.featureImage.alt)
      faqImg.setAttribute('alt', faq.image.xs.featureImage.alt || 'image')

      // Adjuntar el elemento <source> al elemento <picture>
      faqImage.appendChild(faqSourcelg)
      faqImage.appendChild(faqSourcemd)
      faqImage.appendChild(faqSourcesm)
      faqImage.appendChild(faqImg)

      // Adjuntar el elemento <img> al elemento <picture>
      faqImage.appendChild(faqImg)

      faqElement.appendChild(faqImage)

      faqsContainer.appendChild(faqElement)
    })
  }
}

customElements.define('faqs-component', Faqs)
