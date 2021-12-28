const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');


const JWT_SECRET = 'Rohitisagoodb$oy';


//ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required


router.post('/createuser',[
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('password', 'Password must be contain min 5 value').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail()
], async (req, res)=>{
    let success = false;
    // obj = {
    //     a: 'thios',
    //     number: 34
    // }
    // res.json(obj)
    // console.log(req.body);
    // const users = User(req.body);
    // users.save()

    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    //Check whether the user with this email exists already
    try{
  
    let user = await User.findOne({email: req.body.email});
    if (user){
        return res.status(400).json({success, error: "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error: 'Please enter a unique value of email', message: err.message})})

    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(jwtData);

    // res.json(user)
    success = true;
    res.json({success, authtoken})
   // Catch error 
 } catch(error){
     console.error(error.message);
     res.status(500).send("Internal Server Error")
 }
})

//ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required

router.post('/login',[
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password Cannot be Empty').exists(),
], async (req, res)=>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken})
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

//ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". login required

router.post('/getuser', fetchuser, async (req, res)=>{

try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user)
}  catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error")
}
})
module.exports = router
