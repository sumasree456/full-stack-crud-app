import React, { Component } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"; 
import {Typography,Card,CardContent,Grid,TextField,Button} from "@mui/material"


class ClassSignup extends Component <any,any>{

     constructor(props:any) {
       super(props)
     
       this.state = {
          firstName:"",
          lastName:"",
          email:"",
          org:""
        }}
     
      error={
        firstname:"",
        lastname:"",
        email:"",
        org:""
      }
    
    handleChange=(e:any)=>{

        this.setState({[e.target.name]:e.target.value})
        // console.log(e.target.value)

    }

    handleSubmit=(e:any)=>{
       e.preventDefault();
       this.validate();
       console.log('details',this.state)
       axios.post("http://localhost:9000/users",this.state).then(response=>{
        console.log(response)
       }).catch(error=>{
        console.log(error)
       })

    }
    
    validate=()=>{
        var errors = {
          firstname:"",
          lastname:"",
          email:"",
        } ;
        var  checkmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        var checkname=/^[a-zA-Z]+$/;
        if (!this.state["firstName"]) {
          errors.firstname = "firstname is required!";
        }else if (!checkname.test(this.state["firstName"])) {
          errors.firstname = "This is not a valid format!";
        }
        if (!this.state.lastName) {
          errors.lastname = "lastname is required!";
        }else if (!checkname.test(this.state.lastName)) {
          errors.lastname = "This is not a valid format!";
        }
       
        if (!this.state.email) {
          errors.email = "Email is required!";
        } else if (!checkmail.test(this.state.email)) {
           errors.email = "This is not a valid email format!";
       }
       return errors;
    
      };
    
  render() {
    return (
      <div>
        
         <div style= { {backgroundColor:' #fefbd8'}}className="App">
      <Typography gutterBottom variant='h4' align="center" >Signup Page</Typography>
      <Card style={{maxWidth:420,margin:"0 auto" , padding:"20px 7px"}}>
        <CardContent>
          <form onSubmit={(e:any)=>{this.handleSubmit(e)}}>
           <Grid container spacing={2}>
               <Grid xs={12} item>
                <TextField label="FirstName" name='firstName' placeholder='enter first name'  variant="outlined" fullWidth  value={this.state.firstName} onChange={this.handleChange} required/>
                 <Typography variant='body2' className='text-danger' >{this.state.firstName===""?"":this.validate().firstname}</Typography>
                
               </Grid>
               <Grid xs={12} item>
                <TextField label="LastName" name='lastName' placeholder='enter last name' variant="outlined" fullWidth   value={this.state.lastName}onChange={this.handleChange} required />
                <Typography variant='body2' className='text-danger' >{this.state.lastName===""?"":this.validate().lastname}</Typography>
               </Grid>
               <Grid xs={12} item>
                <TextField type="email" label="Email" name='email' placeholder='enter email' variant="outlined" fullWidth value={this.state.email}onChange={this.handleChange} required />
                <Typography variant='body2'  className='text-danger' >{this.state.email===""?"":this.validate().email}</Typography>
               </Grid>
               <Grid xs={12} item>
                  <Typography variant='subtitle1'  style={{padding:"0.5em"}}>Organization</Typography>
                   <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" defaultValue="sspl"  name="org" style={{padding:"0px 39px"}} onChange={this.handleChange}>
                       <FormControlLabel value="sspl" control={<Radio />} label="SSPL"  />
                       <FormControlLabel value="infosys" control={<Radio />} label="Infosys" />
                       <FormControlLabel value="tcs" control={<Radio />} label="Tcs" />
                   </RadioGroup>            
               </Grid>
               
               <Grid xs={12} item>
                <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
               </Grid>
           </Grid><br></br>
           
           </form>
           
           
        </CardContent>
      </Card>
    </div>
      </div>
    )
  }
}


export default ClassSignup