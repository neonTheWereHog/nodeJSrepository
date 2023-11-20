let { readFile, writeFile } = require("fs")

readFile("./reportFile/sales.txt", "utf8", (err, result)=>{
    if (err) {
        console.log(err)
        return;
    }
    salesTable = result

    readFile("./reportFile/revenue.txt", "utf8", (err,result)=>{
        if (err) {
            console.log(err)
            return
        }
        revenueTable = result

        writeFile("./reportFile/report.txt", `SALES: \n ${salesTable} 
                                              \n REVENUE: \n ${revenueTable}`,
                                              (err, result)=>{
                                                if (err) {
                                                    console.log(err)
                                                    return
                                                }

                                                console.log(result)
                                              } )
    })
})