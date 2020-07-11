import React, { Component } from 'react';
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
  
    this.callApi()
    .then(res=>this.setState({customers:res}))
    .catch(err=>console.log(err));
 
  callApi= async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
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
      {this.state.customer ? this.state.customers.map(c =>{ 
        return( <Customer
              //map을 사용할때는 key를 설정해줘야함(primarykey)
              key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);}):""}  
        </TableBody>
      </Table>
    </Paper>
  );
}

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
