const express = require("express");
const app = express();
const port = 5000

const authmiddlewear=(req,res,next)=>{
   
const d = new Date();
let day = d.getDay()
const d2 = new Date(day);
let hour = d.getHours();
if (day<5 ){
   
    next()
}
else if(hour>9 ){console.log(hour)
    next()}
else if (hour<17){
    console.log(hour)
    next()

}

else{ res.send('we are closed now ')
}
}



app.use(authmiddlewear)

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/pages/home.html")
    console.log ('goodrun')
});


app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/pages/contactus.html')
});

app.get('/services', (req,res)=>{
    res.sendFile(__dirname +'/pages/ourServices.html')
});

app.get('/css/home.css', (req,res)=>{
    res.sendFile(__dirname+'/pages/css/home.css')
});
app.get('/css/contact.css', (req,res)=>{
    res.sendFile(__dirname+'/pages/css/contact.css')
});
app.get('/css/services.css', (req,res)=>{
    res.sendFile(__dirname+'/pages/css/services.css')
});

app.listen(port,err=> err? console.log(err) : console.log(`Server is running on port ${port} ...`)
);
