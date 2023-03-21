const User = require('../modal/user.modal')

insertUser = function(req,res){

    console.log('User', req.body);

    var user = new User(req.body);
    
    if(!user.name){
        return res.status(400).json({success: 'false', message: 'Please Provide Name'})
    }

    User.createUser(user, function(err, data){
        if(err){
            res.json({status:200, success:false, message: "Something went wrong"})
        }
        else{
            res.json({status:200, success:true, message: data.message})
        }
    });

}


getAllUser = function(req,res){
    User.getAllUser(function(err, data){
        if(err){
            res.json({status:200, success:false, message: "Something went wrong"})
        }
        else if(data.length==0){
            res.json({status:200, success:true, message: 'Data Not Available', data: data})
        }
        else{
            res.json({status:200, success:true, message: 'Data Available', data: data})
        }
            
    });
}

greetings = function(req,res){
        res.json({status:200, success:true, message: 'Welcome to Webvillee'})
    
}

module.exports = {
    insertUser,
    getAllUser,
    greetings
}