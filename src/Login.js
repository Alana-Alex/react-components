import React, { Component} from 'react';
import './Login.css';
// import { Button } from 'react-bootstrap';

class MyComp extends React.Component {
    constructor(props){
        super(props);
        this.validation = this.validation.bind(this);
        this.updateUsername = this.updateUsername.bind(this); 
        this.updatePassword = this.updatePassword.bind(this); 
        this.state={ username: "" ,
         password: ""}
    }

    validation(){
        //Compare input values to state
        //if same redirect
        if(this.state.username == "alana" && this.state.password == "alana"){
            //Redirect 

            alert("Valid !!");
        }
    }

    updateUsername(data){
        this.setState({
            username: data.target.value
        }); 
    }

    updatePassword(data){
        this.setState({
            password: data.target.value
        }); 
    }

                render(){

                           return (
                               <div className="container-fluid">
                                      <div className ="form">          
                            <form className="Login-form">
                            
                   
                                     <h2 className="header1" > Login </h2>
                                     
                                     <input className="log1" type = "text" value = ""  placeholder="UserName" value={this.state.username} onChange={evt => this.updateUsername(evt)} /> <br/><br/>
                                     <input className="log2" type = "password" value = ""  placeholder="Password" value={this.state.password} onChange={evt => this.updatePassword(evt)} /> <br/><br/>
                                  <button className="btn11" onClick ={this.validation} bsStyle="warning"> Submit </button>
                                 </form>
                            </div>
                              </div>
)
                              
   	                     }
                            
    }



export default MyComp;