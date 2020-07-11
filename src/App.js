import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles=theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "scroll"
  },
  table:{
    minWidth:1080
  }
 
})

function App(props) {
  const {classes} =props
  return (
    <Paper className={classes.root}>
      <Table className={classes.talbe}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
      {customers.map(c =>{ return( <Customer
              //map을 사용할때는 key를 설정해줘야함(primarykey)
              key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}  
        </TableBody>
      </Table>
    </Paper>
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
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell><img src={props.image} alt='profile'></img></TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow> 
  ) 
}
export default withStyles(styles)(App);
