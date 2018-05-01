window.NYTD = {} // to Store Global Object name spaced as NYTD

NYTD.render_section_front = (json) => {

  const $main = $('#nyt-main')
  const $languageSelector = $('#languer-selector')
  /*
  * Step 0. Initial Validation
  */
  if(json.page === undefined || json.page.content === undefined) {
    console.log('invalid JSON format')
    return
  }
  if($main.length < 1) {
    console.log('invalid DOM Elements')
    return
  }

  /*
  * Step 1. Refine JSON file to get only A~C Column named contents
  */
  const contents = json.page.content.filter((content) => content.name.indexOf('Column') !== -1)
  let refinedContents = []
  let refinedData = []
  
  contents.forEach((content) => {
    content = content['collections'].filter(collection => {
      const assets = collection.assets
      if(assets === undefined || !assets.length) return
      return assets[0].summary && assets[0].url && assets[0].images && assets[0].images[0] !== undefined
    })
    refinedContents = [...refinedContents, ...content]
  })

  /* 
  * Function: getImageUrl
  * get thumbnail image URL from the images.types object.
  */
  const getImageUrl = (images) => {
    let types = images[0].types.filter(t => t.type === "square320" || t.type === "wide")
    return types.length ? `http://www.nytimes.com/${types[0].content}` : null
  }

  /*
  * Parse valid JSON data and stroe into the "refined" object.
  */
  const contentParser = (content, refinedContent) => {
    content.forEach((content, idx) => {
      refinedContent.push({
        imageUrl: getImageUrl(content.assets[0].images),
        figcaption: content.assets[0].typeOfMaterial,
        link: content.assets[0].url,
        headline: content.assets[0].headline,
        summary: content.assets[0].summary,
        publisher: content.assets[0].byline
      })
    })
  }

  /* 
  * Function: Check if the letter is uppercase.
  */
  const isUpperCase = char => (char >= 'A') && (char <= 'Z')

  /*
  * Function: Translate Maritian
  */
  const translate = (sentence, lang) => {
    if(lang === 'en') return sentence
    if(lang === 'ma') {
      return sentence.split(' ').reduce((sentence, word) => {
        if(word.length > 3) { // a. every word three characters or less is left alone
          let returnWord = 'boinga' // b. every word more than three characters is replaced with boinga.
          word.split('').forEach((letter, idx) => {
            if(idx > returnWord.length) return
            if(isUpperCase(letter)) {
              // c. maintain the same capitalization and punctuation in the English and Martian Versions.
              returnWord = returnWord.split('').map((letter, i) => (idx === i) ? letter.toUpperCase() : letter).join('')
            }
          })
          word = returnWord
        }
        return sentence + ' ' + word
      }, '')
    }
  }

  /*
  * Generate & Render DOM HTML from refined data.
  */
  const viewController = (data, lang = 'en') => {
    $main.html('')
    let html = ``
    html += `<section>`
    data.forEach((data, idx) => {
      if(idx === 0 || (idx-3)%4 === 0) {
        html += `<div class="nyt-row">` // create another row every 3 + 4n columns
      }
      html += `<div class="${idx === 0 ? 'nyt-col-2': 'nyt-col-1'}">` // only the first element should be 2 column-width
      html += `<a href="${data.link}"><div class="nyt-image"><img src="${data.imageUrl}" tabindex="0"></div></a>`
      html += `<figcaption>${translate(data.figcaption, lang)}</figcaption>`
      html += `<a href="${data.link}"><h3>${translate(data.headline, lang)}</h3></a>`
      html += `<p>${translate(data.summary, lang)}</p>`
      if(data.publisher !== undefined) {
        html += `<span>${translate(data.publisher, lang)}</span>`
      }
      html += `</div>`
      if(idx === 2 || (idx-2)%4 === 0) {
        html += `</div>`
      }
    })
    html += `</section>`
    $main.append(html) 
  }

  /*
  * Step 2.
  */
  contentParser(refinedContents, refinedData)
  /*
  * Step 3.
  */
  viewController(refinedData)

  $languageSelector.find('li').click(e => {
    const option = $(e.currentTarget).attr('data-lang')
    $(e.currentTarget).addClass('selected').siblings().removeClass('selected')
    viewController(refinedData, option)
  })
}
