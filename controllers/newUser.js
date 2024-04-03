const conn = require("../conn/db");

function checkUserExists(req, res, next){
    fname = req.body.fname;
    lname = req.body.lname;
    email = req.body.email;
    phone = req.body.phone;
    dob = req.body.dob;

    seed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    act_code = '';
    for(let i=0; i<8; i++){
        act_code += seed[Math.floor((Math.random()*1000)/36)];
    }
    // console.log(act_code);

    data = [fname, lname, email, phone, dob, act_code];
    sql = `Insert into register_user(fname, lname, email, phone, dob, act_code) values (?)`;
    conn.query(sql, [data], (err, data)=>{
        if(err) throw err;
        res.send(data)
    })
};



module.exports = checkUserExists;