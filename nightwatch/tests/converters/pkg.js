var camelCase = require('camelcase')
module.exports = function(pkg, cb) {
    cb(null, camelCase(pkg))
}

