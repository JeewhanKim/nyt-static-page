/*
* Parse valid JSON data and stroe into the "refined" object.
*/
module.exports = (content, data) => {
  /* 
  * Function: getImageUrl
  * get thumbnail image URL from the images.types object.
  */
  const getImageUrl = (images) => {
    let types = images[0].types.filter(t => t.type === "square320" || t.type === "thumb")
    return types.length ? `http://www.nytimes.com/${types[0].content}` : null
  }

  content.forEach((content, idx) => {
    data.push({
      imageUrl: getImageUrl(content.assets[0].images),
      figcaption: content.assets[0].typeOfMaterial,
      link: content.assets[0].url,
      headline: content.assets[0].headline,
      summary: content.assets[0].summary,
      publisher: content.assets[0].byline
    })
  })
}