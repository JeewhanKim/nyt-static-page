window.NYTD = {} // to Store Global Object name spaced as NYTD

NYTD.render_section_front = (json) => {
  /*
  * Initial Validation
  */
  if(json.page === undefined || json.page.content === undefined) {
    console.log('invalid JSON format')
    return
  }

  /*
  * Step 1. Refine JSON file to get only A~C Column named contents
  */
  const contents = json.page.content.filter((content) => content.name.indexOf('Column') !== -1)
  
  contents.forEach((content) => {

  })
  
}
