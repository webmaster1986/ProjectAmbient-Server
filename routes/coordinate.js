const express = require('express');
const router = express.Router()
const Coordinate = require('../app/models/coordinate');

router.post('/', async (req, res, next) => {
    try {
        // const {patientEmail} = req.body
        const user1 = await new Coordinate(req.body);
        // Coordinate.findOne({patientEmail}, function (err, user) {
        //     if (user && user.patientEmail === "") {
        //         return res.status(500).send({message: "You have to fill all the field."})
        //     }
        //     else if (user && user.patientEmail === patientEmail) {
        //         return res.status(500).send({message: "Coordinate email already exists."})
        //     }
        //     else {
        //         user1.save(function (err) {
        //             if (err)
        //                 return res.send(err);
        //         });
        //     }
        //     return res.status(200).json(user1);
        // })

        user1.save(function (err) {
            if (err)
                return res.send(err);
        });
        return res.status(200).json(user1);
    } catch (e) {
        next(e);
    }
})


router.get('/',  async (req, res, next) => {
    try {
        const user = await Coordinate.find(function(err, user) {
            if (err)
                return  res.send(err);

        });
        return res.status(200).json(user)
    } catch (e) {
        next(e);
    }
})

router.route('/patients/:user_id')


module.exports = router;
