const { User } = require('../models')

module.exports = {
    async index (req, res) {
        try {
            let users = await User.findAll()
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: err
            })
        }
    },
    async getById (req, res) {
        try {
            console.log('ById' + req.params.userId)
            const user = await User.findById(req.params.userId)
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to show the user'
            })
        }
    },
    async search (req, res) {
        try {
            const search = req.query
            let cond = {}
            if (search.firstname !== '') {
                cond['first_name'] = { $like: '%' + search.firstname + '%' }
            }
            if (search.last_name !== '') {
                cond['last_name'] = { $like: '%' + search.last_name + '%' }
            }
            if (search.email !== '') {
                cond['email'] = { $like: '%' + search.email + '%' }
            }
            if (search.gender !== '') {
                cond['gender'] = { $like: search.gender }
            }
            if (search.age !== '') {
                cond['age'] = search.age
            }
            console.log(search)
            let user = null
            if (search) {
                user = await User.findAll({
                    where: {
                        $or: cond
                    }
                })
            } else {
                user = await User.findAll({
                    limit: 10
                })
            }

            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    msg: 'Not found user'
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'an error has occured trying to Search'
            })
        }
    },
    async getByFirstName (req, res) {
        try {
            console.log('ByFirstname' + req.params.fname)
            let user = await User.find({
                where: {
                    first_name: req.params.fname
                }
            })
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to getByGender'
            })
        }
    },
    async getByLastName (req, res) {
        try {
            let user = await User.find({
                where: {
                    last_name: req.params.lname
                }
            })
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to getByGender'
            })
        }
    },
    async getByEmail (req, res) {
        try {
            let user = await User.find({
                where: {
                    email: req.params.email
                }
            })
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to getByGender'
            })
        }
    },
    async getByGender (req, res) {
        try {
            let user = await User.findAll({
                where: {
                    gender: req.params.gender
                }
            })
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to getByGender'
            })
        }
    },
    async getByAge (req, res) {
        try {
            let user = await User.findAll({
                where: {
                    age: req.params.age
                }
            })
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to getByGender'
            })
        }
    },
    async getByBetweenAge (req, res) {
        try {
            let minAge = req.params.min
            let maxAge = req.params.max
            let user = await User.findAll({
                where: {
                    age: {
                        $gte: minAge,
                        $lte: maxAge
                    }
                }
            })
            console.log('getByBetweenAge' + minAge, maxAge)
            if (user) {
                res.send(user)
            } else {
                res.status(404).send({
                    error: 'UserNotFound'
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'an error has occured trying to getByBetweenAge'
            })
        }
    }
}
