window.NYTD = {} // to Store Global Object name spaced as NYTD

NYTD.render_section_front = (json) => {

  const $main = $('#nyt-main')
  /*
  * Initial Validation
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
  * get thumbnail image URL from the images.types object
  */
  const getImageUrl = (images) => {
    let types = images[0].types.filter(t => t.type === "square320" || t.type === "wide")
    return types.length ? `http://www.nytimes.com/${types[0].content}` : null
  }

  refinedContents.forEach((content, idx) => {
    refinedData.push({
      imageUrl: getImageUrl(content.assets[0].images),
      figcaption: content.assets[0].typeOfMaterial,
      link: content.assets[0].url,
      headline: content.assets[0].headline,
      summary: content.assets[0].summary,
      publisher: content.assets[0].byline
    })
  })

  const viewController = (data) => {
    let html = ``
    html += `<section>`
    data.forEach((data, idx) => {
      if(idx === 0 || (idx-3)%4 === 0) html += `<div class="nyt-row">` // create another row every 3 + 4n columns
      html += `<div class="${idx === 0 ? 'nyt-col-2': ''}">` // only the first element should be 2 column-width
      html += `<a href="${data.link}"><picture><img src="${data.imageUrl}" tabindex="0"></picture></a>`
      html += `<figcaption>${data.figcaption}</figcaption>`
      html += `<a href="${data.link}"><h3>${data.headline}</h3></a>`
      html += `<p>${data.summary}</p>`
      if(data.publisher !== undefined) {
        html += `<span>${data.publisher}</span>`
      }
      html += `</div>`
      if(idx === 2 || (idx-2)%4 === 0) html += `</div>`
    })
    html += `</section>`
    $main.append(html) 
  }

  viewController(refinedData)
}
