const UsersController = require('./controllers/UsersController')

module.exports = (app) => {
    app.use(function (req, res, next) {
        res.contentType('application/json')
        next()
    })
    app.get('/user/get', UsersController.index)
    /**
    * @api {get} /user/:id Get User By id.
    * @apiVersion 0.0.1
    * @apiName GetUserById
    * @apiGroup User
    *
    * @apiParam {Number} id Users unique ID.
    * @apiUse UserSuccessReturn
    * @apiError UserNotFound The id of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/user/:userId(\\d+)/', UsersController.getById)
    /**
    * @api {get} /user/firstname/:fname Get User By firstname.
    * @apiVersion 0.0.1
    * @apiName GetUserByFirstname
    * @apiGroup User
    *
    * @apiParam {String} fname Users first_name.
    * @apiUse UserSuccessReturn
    * @apiError UserNotFound The firstname of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/user/firstname/:fname', UsersController.getByFirstName)
    /**
    * @api {get} /user/lastname/:lname Get User By lastname.
    * @apiVersion 0.0.1
    * @apiName GetUserByLastname
    * @apiGroup User
    *
    * @apiParam {String} lname Users last_name.
    * @apiUse UserSuccessReturn
    * @apiError UserNotFound The lastname of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/user/lastname/:lname', UsersController.getByLastName)
    /**
    * @api {get} /user/email/:email Get User By email.
    * @apiVersion 0.0.1
    * @apiName GetUserByEmail
    * @apiGroup User
    *
    * @apiParam {String} email Users email.
    * @apiUse UserSuccessReturn
    * @apiError UserNotFound The email of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/user/email/:email', UsersController.getByEmail)
    /**
    * @api {get} /users/gender/:gender Get User By gender.
    * @apiVersion 0.0.1
    * @apiName GetUserByGender
    * @apiGroup User
    *
    * @apiParam {String="male", "female"} gender User gender.
    * @apiUse UserSuccessReturnArray
    * @apiError UserNotFound The gender of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/users/gender/:gender', UsersController.getByGender)
    /**
    * @api {get} /users/age/:age Get User By age.
    * @apiVersion 0.0.1
    * @apiName GetUserByAge
    * @apiGroup User
    *
    * @apiParam {Number} age Users age.
    * @apiUse UserSuccessReturnArray
    * @apiError UserNotFound The age of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/users/age/:age(\\d+)', UsersController.getByAge)
    /**
    * @api {get} /users/age/:min-:max Get User By between age.
    * @apiVersion 0.0.1
    * @apiName GetUserByBetweenAge
    * @apiGroup User
    *
    * @apiParam {Number} min minimum of age.
    * @apiParam {Number} max maximum of age.
    * @apiUse UserSuccessReturnArray
    * @apiError UserNotFound The age of the User was not found.
    * @apiUse UserNotFoundError
    * */
    app.get('/users/age/:min-:max', UsersController.getByBetweenAge)
}
