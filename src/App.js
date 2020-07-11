import React from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      {
        customers.map(c =>{
          return(
            <Customer
              //map을 사용할때는 key를 설정해줘야함(primarykey)
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
          );

        })
      }  
    </div>
  );
}
const customers=[{
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
]

function Customer(props){
  return(
    <div>
       <CustomerProfile id={props.id} image={props.image} name={props.name}/>
       <CustomerInfo birthday={props.birthday} gender={props.gender} job={props.job}/>      
    </div>
  ) 
}

function CustomerProfile(props){
  return(
    <div>
      <img src={props.image} alt='profile'/>
      <h2>{props.name}({props.id})</h2>
    </div>
  )
}
export default App;
