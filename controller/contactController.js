const contact = require("../Models/models"),
      {check, validationResult} = require('express-validator/check');
        users = require("../config");



exports.addNewContact = (req, res)=>{
    var err = validationResult(req);
    if (!err.isEmpty()) {
        // console.log(err.mapped())
        // you stop here 
        return res.status(422).json({ err: err.array() });
    }
    // console.log(req.body);
    // console.log(users)
    const authorization = req.body.authorization;
    const deviceToken = req.body.deviceToken;
    const fingerPrint = req.body.fingerPrint;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;

    const user = users.filter(function(v, i){
        return ((v.authorization == authorization)&&(v.deviceToken == deviceToken)&&(v.fingerPrint == fingerPrint))
    })

    if(user.length > 0){
        // console.log('after filter -----------',user[0]);
        // console.log('after filter -----------',user);
        contact.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            user_id: user[0].user_id,
        }).then((result)=>{
            return res.status(200).json({ statusCode: 200, message: "User created successfully..", data: result });
        }).catch(err => {
            return res.status(422).json({ error: err });
            });
    }
    else {
        return res.status(422).json({ error: 'unauthorized..check user credentials..' });
    }
    
}

exports.recentContacts = (req, res)=>{
    const authorization = req.body.authorization;
    const deviceToken = req.body.deviceToken;
    const fingerPrint = req.body.fingerPrint;

    const user = users.filter(function(v, i){
        return ((v.authorization == authorization)&&(v.deviceToken == deviceToken)&&(v.fingerPrint == fingerPrint))
    })
    
    if(user.length > 0){
        // console.log('after filter -----------',user[0]);
        contact.findAndCountAll({
            where: {
               user_id: user[0].user_id
            },
            order: [['createdAt', 'DESC']],
            limit: 5,
         })
         .then(result => {
            return res.status(200).json({ statusCode: 200, message: "Returned the recent contacts (maximum: five contacts..)..", data: result.rows });
         })
         .catch(err => {
            return res.status(422).json({ error: err });
         });
    }
    else {
        return res.status(422).json({ error: 'unauthorized..check user credentials..' });
    }
}

exports.findUserContacts = (req, res)=> {
    const authorization = req.body.authorization;
    const deviceToken = req.body.deviceToken;
    const fingerPrint = req.body.fingerPrint;

    const user = users.filter(function(v, i){
        return ((v.authorization == authorization)&&(v.deviceToken == deviceToken)&&(v.fingerPrint == fingerPrint))
    })

    if(user.length > 0){
        // console.log('after filter -----------',user[0]);
        // console.log('after filter -----------',user);
            contact.findAndCountAll({
                where: {
                   user_id: user[0].user_id
                },
             })
             .then(result => {
            //    console.log(result.count);
            //    console.log(result.rows);
               return res.status(200).json({ statusCode: 200, message: "Returned the all contacts..)..", data: result.rows });
             })
             .catch(err => {
                return res.status(422).json({ error: err });
             });
    }
    else {
        return res.status(422).json({ error: 'unauthorized..check user credentials..' });
    }

}