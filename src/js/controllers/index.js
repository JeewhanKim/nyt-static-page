NYTD.render_section_front = (json) => {

  const domElements = require('./_dom.js') // static page dom elements
  let data = [] // data [objects] to store refined json contents

  /*
  * Initial Validation
  */
  if(json.page === undefined || json.page.content === undefined) {
    console.log('invalid JSON format')
    return
  }
  if(domElements.getMain().length < 1) {
    console.log('invalid DOM Elements')
    return
  }

  /*
  * Step 1. Refine JSON file to get only A~C Column named contents
  */
  const refinedContents = require('./_data')(json)

  /*
  * Step 2. Parse valid JSON data and store into the "refined" data object array.
  */
  require('./_parser.js')(refinedContents, data)

  /*
  * Step 3. Generate & Render DOM HTML from refined data.
  */
  const viewController = require('./_generate.js')
  viewController(domElements.getMain(), data)

  /*
  * Lanauge Option Click Events
  */
  domElements.getLanguageSelector().find('li').click(e => {
    const option = $(e.currentTarget).attr('data-lang')
    $(e.currentTarget).addClass('selected').siblings().removeClass('selected')
    viewController(domElements.getMain(), data, option)
  })
}
