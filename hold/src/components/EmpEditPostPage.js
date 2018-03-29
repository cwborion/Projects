import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import EmployerHeader from './EmployerHeader';
import { Link } from 'react-router-dom';

class EmpEditPostPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
      companyName: '',
      jobDescription: '',
      skills: '',
      url: '',
      location: ''
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);

		this.handleJobTitleUpdate = this.handleJobTitleUpdate.bind(this);
		this.handleCompanyNameUpdate = this.handleCompanyNameUpdate.bind(this);
		this.handleJobDescriptionUpdate = this.handleJobDescriptionUpdate.bind(this);
		this.handleSkillsUpdate = this.handleSkillsUpdate.bind(this);
		this.handleUrlUpdate = this.handleUrlUpdate.bind(this);
		this.handleLocationUpdate = this.handleLocationUpdate.bind(this);
	}

	handleSubmit(event) {
    alert('EmpEditPostPage --> '
      + this.state.jobTitle + ' | '
      + this.state.companyName + ' | '
      + this.state.jobDescription + ' | '
      + this.state.skills + ' | '
      + this.state.url + ' | '
      + this.state.location + '.'
    );
    event.preventDefault();
	}
	
	handleJobTitleUpdate(event) {
		this.setState({jobTitle: event.target.value});
	}

	handleCompanyNameUpdate(event) {
		this.setState({companyName: event.target.value});
	}

	handleJobDescriptionUpdate(event) {
		this.setState({jobDescription: event.target.value});
	}

	handleSkillsUpdate(event) {
		this.setState({skills: event.target.value});
	}

	handleUrlUpdate(event) {
		this.setState({url: event.target.value});
	}

	handleLocationUpdate(event) {
		this.setState({location: event.target.value});
	}

  render () {
    return (
      <div>
				<EmployerHeader />
        <h2>Edit Job Posting</h2>

			<form onSubmit={this.handleSubmit}>
        <p>Job Title: 
					<TextField
						name="jobTitle" 
        		hintText="...edit job title..."
						fullWidth={true}
						onChange={this.handleJobTitleUpdate}
            value={this.state.jobTitle}
        	/>
        </p>

				<p>Company Name: 
        	<TextField
						name="companyName"
			      hintText="...enter company name..."
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
			      rows={2}
						fullWidth={true}
						onChange={this.handleCompanyNameUpdate}
            value={this.state.companyName}
			    />
    		</p>
        
        <p>Job Description: 
        	<TextField
						name="jobDescription"
			      hintText="...edit job description..."
			      multiLine={true}
			      // rows={2} allows two rows to be viewed simultaneously 
			      rows={2}
						fullWidth={true}
						onChange={this.handleJobDescriptionUpdate}
            value={this.state.jobDescription}
			    />
    		</p>

    		<p>Job Skills/Requirements: 
					<TextField 
						name="skills"
    				hintText="...edit job requirements..."
						fullWidth={true}
						onChange={this.handleSkillsUpdate}
            value={this.state.skills}
    			/>
    		</p>
        <p>Company URL: 
					<TextField 
						name="url"
        		hintText="...edit URL..."
						fullWidth={true}
						onChange={this.handleUrlUpdate}
            value={this.state.url}
        	/>
        </p>

				<p>Location: 
					<TextField 
						name="location"
        		hintText="...enter location..."
						fullWidth={true}
						onChange={this.handleLocationUpdate}
            value={this.state.location}
        	/>
        </p>

				<RaisedButton 
					containerElement={<Link to="/employer/dash" />}
					label="Cancel" 
					primary={true} 
					fullWidth={true} 
				/>
				<RaisedButton 
					label="Update & Save" 
					secondary={true} 
					fullWidth={true} 
					type="submit"
				/>
			</form>

      </div>
    );
  }
}

export default EmpEditPostPage;