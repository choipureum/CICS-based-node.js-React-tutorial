const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/any',
            'name':'최푸름',
            'birthday':'940418',
            'gender':'남자',
            'job':'대학생'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name':'최상옥',
            'birthday':'960419',
            'gender':'여자',
            'job':'대학생'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name':'김민철',
            'birthday':'9103111',
            'gender':'남자',
            'job':'프로그래머'
          }        
        ]);
});
app.listen(port,()=> console.log(`Listening on port ${port}`));
