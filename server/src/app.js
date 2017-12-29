const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('doc'))

/**
 * @apiDefine UserNotFoundError
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
* @apiDefine UserSuccessReturn
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "first_name": "trish",
*       "last_name": "potebury",
*       "email": "tpotebury0@artisteer.com",
*       "gender": "female",
*       "age": 19
*     }
*/

/**
* @apiDefine UserSuccessReturnArray
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     [
*       {
*           "first_name": "trish",
*           "last_name": "potebury",
*           "email": "tpotebury0@artisteer.com",
*           "gender": "female",
*           "age": 19
*       },{
*           "id": 78,
*           "first_name": "lars",
*           "last_name": "mattioli",
*           "email": "lmattioli25@mit.edu",
*           "gender": "female",
*           "age": 30
*       }
*     ]
*/

require('./routes')(app)

sequelize.sync({force: false})
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
