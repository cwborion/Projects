import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import StudentHeader from './StudentHeader';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

class StudentSignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      retypePassword: '',
      fieldOfStudy: '',
      skills: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRetypePasswordChange = this.handleRetypePasswordChange.bind(this);
    this.handleFieldOfStudyChange = this.handleFieldOfStudyChange.bind(this);
    this.handleSkillsChange = this.handleSkillsChange.bind(this);

  }

  handleSubmit(event) {
    alert('STUDENTsignupPage --> '
      + this.state.firstName + ' | '
      + this.state.lastName + ' | '
      + this.state.email + ' | '
      + this.state.password + ' | '
      + this.state.retypePassword + ' | ' 
      + this.state.fieldOfStudy + ' | '
      + this.state.skills + ' |'
    );
    event.preventDefault();
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleRetypePasswordChange(event) {
    this.setState({retypePassword: event.target.value});
  }

  handleFieldOfStudyChange(event) {
    this.setState({fieldOfStudy: event.target.value});
  }

  handleSkillsChange(event) {
    this.setState({skills: event.target.value});
  }

    // const data = new FormData(event.target);

    // fetch('http://localhost:3000/api/data',{
    //   method: 'POST',
    //   body: data
    // })
    // .then(res => {
    //   console.log('You clicked the submit button! Here is the response ' + res)
    // })
    // .catch(err => {
    //   console.log(err)
    // });

  
  render() {
    return (
      <div>
        <StudentHeader />
        <h2>Tell us a little about yourself...</h2>
        <form onSubmit={this.handleSubmit}>
          <p>                      
            <TextField 
            //this field represents possible v2 for each field
              name='firstName'
              type='text'
              floatingLabelText='First Name'              
              hintText='...type your first name'
              value={this.state.firstName}
              onChange={this.handleFirstNameChange} 
            />                       
          </p>

          <p>          
            <TextField 
              name='lastName'
              type='text'
              floatingLabelText='Last Name'
              hintText='...type your last name'                    
              value={this.state.lastName}
              onChange={this.handleLastNameChange} 
            />                      
          </p>

          <p>                      
            <TextField 
              name='email'
              type='email'
              floatingLabelText='Email address'
              hintText='...type your email address'
              value={this.state.email} 
              onChange={this.handleEmailChange} 
            />                      
          </p>  

          <p>                 
            <TextField 
              name='password'
              type='password'
              floatingLabelText='Create a password'
              type='password'
              hintText="...create a password" 
              value={this.state.password} 
              onChange={this.handlePasswordChange} 
            />                      
          </p>  
            
          <p>                     
            <TextField 
              name='password'
              type='password'
              floatingLabelText='Re-enter password'
              type='password'
              hintText='...re-enter password for verification' 
              value={this.state.retypePassword} 
              onChange={this.handleRetypePasswordChange} 
            />                      
          </p>

          <p>           
            <TextField 
              //future version may include major selector from prepopulated list
              name='major'
              type='text'
              floatingLabelText='Field of Study'
              hintText="...type your major" 
              value={this.state.fieldOfStudy} 
              onChange={this.handleFieldOfStudyChange} 
            />                        
          </p>

          <p>                      
            <TextField 
              //future version may include checkbox to select from prepopulated list
              name='skills'
              type='text'
              floatingLabelText='Skills'
              hintText='...list your skills'
              multiLine={false}
              //rows={2}
              fullWidth={false}
              value={this.state.skills} 
              onChange={this.handleSkillsChange} 
            />                         
          </p>

            <RaisedButton 
              label="Submit" 
              primary={true} 
              style={style} 
              type='submit'
              onSubmit={this.handleSubmit}/>
            <RaisedButton 
              containerElement={<Link to="/" />}  
              label="Cancel" 
              secondary={true} 
              style={style} 
            />
            
        </form>
      </div>
    );
  }
}
export default StudentSignUpPage;