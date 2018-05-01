/*
* Generate & Render DOM HTML from refined data.
*/
module.exports = (main, data, lang = 'en') => {
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

  main.html('')
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
  main.append(html) 
}