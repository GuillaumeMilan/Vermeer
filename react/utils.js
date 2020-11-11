fs = require('fs');
fs.readFile('dist/build.log', 'utf8', function (err,data) {
  if(err)
    console.error(err)

  const webpack_result = JSON.parse(data)
  if(webpack_result.errors) {
    webpack_result.errors.map(function (error) {
      console.log("Error in ", error.moduleName)
      console.log(error.message)
    })
  }
})
