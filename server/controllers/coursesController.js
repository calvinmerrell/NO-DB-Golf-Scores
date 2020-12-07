const courses = require('../data.js')






module.exports = {
    getAllCourses: (req,res) => {
        res.status(200).send(courses)
    },
}
