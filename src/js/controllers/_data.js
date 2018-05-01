module.exports = (json) => {
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

  return refinedContents
}