let htmlHome = `
  <h1 style="text-align: center;">Welcome to our home page!</h1>
  <p style="text-align: center;">This is a paragraph of our home page.</p>

`

let htmlAbout = `
  <h1 style="text-align: center">Welcome to our about page!</h1>
  <p style="text-align: center">This is a paragraph of our home page.</p>
`

let htmlErr = `
<h1 style="text-align: center">Hmmm... it seems we couldn't find the page
                               you were looking for.
</h1>
<p style="text-align: center">Make sure your connected to the internet.</p>
`

module.exports = { htmlHome, htmlAbout, htmlErr }