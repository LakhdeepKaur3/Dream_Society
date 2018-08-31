
var db=require('./dbconnection');
const express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(bodyParser.json());

// Add headers
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...')
})
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.listen(3001,()=>{
console.log('Server is running at port 3001')
})
app.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE SECURITY';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database Created')
    })
});

app.get('/api/',(req,res)=>{
    res.send('Welcome')
})

//--------------------------------------------------------------------------------------------------------------------------------------------------

app.post('/api/addVendor',urlencodedParser,function(req,res){
   var firstName=req.body.firstname;
   var lastName=req.body.lastname;
   var gender=req.body.gender;
   var services=req.body.services;
   var address=req.body.address;
   var aadhar=req.body.aadharNo;
   var mobile=req.body.mobileNo;
   var username=req.body.userName;
   var email=req.body.email;
   var password=req.body.password;
   var cpassword=req.body.confirmPassword;
   var charges=req.body.charges;

    console.log(req.body);
    db.query("INSERT INTO `vendors` (`firstname`,`lastname`,`gender`,`services`,`address`,`aadharNo`,`mobileNo`,`username`,`email`,`password`,`confirmPassword`,`charges`) VALUES ('"+firstName+"','"+lastName+"','"+gender+"','"+services+"','"+address+"','"+aadhar+"','"+mobile+"','"+username+"','"+email+"','"+password+"','"+cpassword+"','"+charges+"')", function(err, result){
    if(err) throw err;
    console.log("1 record added")
    })
    res.send(username +'Added')
})

app.get('/api/getVendor',function(req,res){
db.query('SELECT * FROM vendors',function(error,rows){
if(error){
    console.log('Error in the query')
}
else{
    console.log('Successful query')
    console.log(rows);
    // res.send('Hello ' +rows[1].firstname);
    res.json(rows);
}
})
});

// app.get('/api/UserVendor',function(req,res){
//     db.query('SELECT * FROM vendors',function(error,rows){
//     if(error){
//         console.log('Error in the query')
//     }
//     else{
//         console.log('Successful query')
//         console.log(rows);
//         // res.send('Hello ' +rows[1].firstname);
//         res.json(rows);
//     }
//     })
//     });

app.get('/api/UserVendor',function(req,res){
    db.query(`select * from vendors`,function(err,result){
        if (err) throw(err);
        res.json(result);
    })
})

app.delete('/api/deleteVendor/:id',function(req,res){
    var id=req.params.id;
console.log(req.body);
const query = "delete from `vendors` where id="+id;
console.log(query);
db.query(query,function(error, rows){
    if(error){
        console.log('Error in query');
    }
    else{
        res.send('Record has been deleted');
    }
})
})

app.put('/api/updateVendor/:id',urlencodedParser,function(req,res){
    var firstName=req.body.vendor.firstname;
    var lastName=req.body.vendor.lastname;
    var gender=req.body.vendor.gender;
    var services=req.body.vendor.services;
    var address=req.body.vendor.address;
    var aadhar=req.body.vendor.aadharNo;
    var mobile=req.body.vendor.mobileNo;
    var username=req.body.vendor.userName;
    var email=req.body.vendor.email;
    var password=req.body.vendor.password;
    var cpassword=req.body.vendor.confirmPassword; 
    var charges=req.body.vendor.charges;
    console.log("dfd",req.body);
    console.log("firstName",firstName);
    var sql="update vendors set firstname='"+firstName+"',lastname='"+lastName+"',gender='"+gender+"',services='"+services+"',address='"+address+"',aadharNo='"+aadhar+"',mobileNo='"+mobile+"',username='"+username+"',email='"+email+"',password='"+password+"',confirmPassword='"+cpassword+"',charges="+charges+" where id="+req.params.id;
    db.query(sql,function(err,result){
        if(err){
            console.log(err);
            console.log(sql);
            console.log('Error in query');
        }
        else{
            res.send('Record has been updated');
        }
    });
})

// app.put('/api/update',function(req,res){
//     if (err) throw err;
//     //Update the address field:
//     var sql = "UPDATE admin SET address = 'Kalkaji' WHERE address = 'Noida'";
//     db.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result.affectedRows + " record(s) updated");
//     });
//   });

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//POST Common Event Form


app.post('/api/addCommonEvent',urlencodedParser,function(req,res){
    var commonEvents=req.body.commonEvents;
    var dateFrom=req.body.dateFrom;
    var dateTo=req.body.dateTo;
    var timeStart=req.body.timeStart;
    var timeEnd=req.body.timeEnd;
     
    console.log(req.body);
    db.query("INSERT INTO `bookcommonevents` (`commonEvents`,`dateFrom`,`dateTo`,`timeStart`,`timeEnd`) VALUES ('"+commonEvents+"','"+dateFrom+"','"+dateTo+"','"+timeStart+"','"+timeEnd+"')", function(err, result){
        //db.query("INSERT INTO `bookcommonevents` (`commonEvents`) VALUES ('"+commonEvents+"')", function(err, result){
     if(err) throw err;
     console.log("1 record added")
     })
     res.send(commonEvents +'Added')
 })

 // View Common Booked Events

 app.get('/api/getCommonEvent',function(req,res){
    db.query('SELECT * FROM bookcommonevents',function(error,rows){
    if(error){
        console.log('Error in the query')
    }
    else{
        console.log('Successful query')
        console.log(rows);
        // res.send('Hello ' +rows[1].firstname);
        res.json(rows);
    }
    })
    });
    
    
    app.get('/api/UserCommonEvent',function(req,res){
        db.query(`select * from CommonEvent`,function(err,result){
            if (err) throw(err);
            res.json(result);
        })
    })

// Delete Common Event
    
    app.delete('/api/deleteCommonEvent/:id',function(req,res){
        var id=req.params.id;
    console.log(req.body);
    const query = "delete from `bookcommonevents` where id="+id;
    console.log(query);
    db.query(query,function(error, rows){
        if(error){
            console.log('Error in query');
        }
        else{
            res.send('Record has been deleted');
        }
    })
    })

// Update Common Event    
    
    app.put('/api/updateCommonEvent/:id',urlencodedParser,function(req,res){
        console.log('hello')
        var commonEvents=req.body.event.commonEvents;
        var dateFrom=req.body.event.dateFrom;
        var dateTo=req.body.event.dateTo;
        var timeStart=req.body.event.timeStart;
        var timeEnd=req.body.event.timeEnd;
        console.log("dfd",req.body);
        console.log("commonEvents",commonEvents);
        var sql="update bookcommonevents set commonevents='"+commonEvents+"',datefrom='"+dateFrom+"',dateto='"+dateTo+"',timestart='"+timeStart+"',timeend='"+timeEnd+"' where id="+req.params.id;
        db.query(sql,function(err,result){
            if(err){
                console.log(err);
                console.log(sql);

                console.log('Error in query');
                console.log('query galat hai');
            }
            else{
                res.send('Record has been updated');
            }
        });
    })

//POST Common Event Form

 app.post('/api/addPersonalEvent',urlencodedParser,function(req,res){
    var name=req.body.name;
    var personalEvents=req.body.personalEvents;
    var dateFrom=req.body.dateFrom;
    var dateTo=req.body.dateTo;
    var timeStart=req.body.timeStart;
    var timeEnd=req.body.timeEnd;
     
    console.log(req.body);
    db.query("INSERT INTO `bookpersonalevents` (`name`,`personalEvents`,`dateFrom`,`dateTo`,`timeStart`,`timeEnd`) VALUES ('"+name+"','"+personalEvents+"','"+dateFrom+"','"+dateTo+"','"+timeStart+"','"+timeEnd+"')", function(err, result){
        //db.query("INSERT INTO `bookcommonevents` (`commonEvents`) VALUES ('"+commonEvents+"')", function(err, result){
     if(err) throw err;
     console.log("1 record added")
     })
     res.send(name +'Added')
 })

//View Personal Event

 app.get('/api/getPersonalEvent',function(req,res){
    db.query('SELECT * FROM PersonalEvent',function(error,rows){
    if(error){
        console.log('Error in the query')
    }
    else{
        console.log('Successful query')
        console.log(rows);
        // res.send('Hello ' +rows[1].firstname);
        res.json(rows);
    }
    })
    });
    
    
    app.get('/api/UserPersonalEvent',function(req,res){
        db.query(`select * from PersonalEvent`,function(err,result){
            if (err) throw(err);
            res.json(result);
        })
    })

// Delete Personal Event
    
    app.delete('/api/deletePersonalEvent/:id',function(req,res){
        var id=req.params.id;
    console.log(req.body);
    const query = "delete from `PersonalEvent` where id="+id;
    console.log(query);
    db.query(query,function(error, rows){
        if(error){
            console.log('Error in query');
        }
        else{
            res.send('Record has been deleted');
        }
    })
    })

// Update Personal Event   
    
    app.put('/api/updatePersonalEvent/:id',urlencodedParser,function(req,res){
        var commonEvents=req.body.event.commonEvents;
        var dateFrom=req.body.event.dateFrom;
        var dateTo=req.body.event.dateTo;
        var timeStart=req.body.event.timeStart;
        var timeEnd=req.body.event.timeEnd;

        console.log("dfd",req.body);
        console.log("Name",name);
        var sql="update personalevents set name='"+name+"',personalEvents='"+personalEvents+"',dateFrom='"+dateFrom+"',dateTo='"+dateTo+"',timeStart='"+timeStart+"',timeEnd='"+timeEnd+"' where id="+req.params.id;
        db.query(sql,function(err,result){
            if(err){
                console.log(err);
                console.log(sql);
                console.log('Error in query');
            }
            else{
                res.send('Record has been updated');
            }
        });
    })

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Venues List

app.get('/api/getVenues',function(req,res){
    db.query('SELECT * FROM venues',function(error,rows){
    if(error){
        console.log('Error in the query')
    }
    else{
        console.log('Successful query')
        console.log(rows);
        // res.send('Hello ' +rows[1].firstname);
        res.json(rows);
    }
    })
    });
    



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
