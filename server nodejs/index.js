
const express = require('express')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
sgMail.setApiKey("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");

app.post("/send",function(req,res){


  const msg = {
  
    from: 'thamizhselvan310@gmail.com',
    to: 'hello@riskcovry.com',
    subject: 'Form send Email',
    html: `<strong>Name: </strong> ${req.body.name} <br>
           <strong>Email ID:</strong> ${req.body.email}<br>
           <strong>Phone:</strong> ${req.body.phone} <br>
           <strong>Message:</strong> ${req.body.message}   `,
  };
  sgMail.send(msg,function(err){
      if(err){
          console.log(err)
      }
      
  });


})

app.listen(3000);