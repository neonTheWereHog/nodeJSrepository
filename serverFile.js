const http = require("http")
const {htmlHome, htmlAbout, htmlErr} = require("./nodeAppVaribles")

let server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end(htmlHome)
    } 
    if (req.url === "/about") {
        res.end(htmlAbout)
    } 
     if (req.url != "/" && req.url != "/about") {
        res.end(htmlErr)
    }

})

server.listen(5000)