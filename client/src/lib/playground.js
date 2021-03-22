const moment = require('moment')

console.log(moment().format('YYYY-MM-DD'))

console.log(moment('1990 Jun 4', 'YYYY-MM-DD').format('YYYY-MM-DD'))