import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

export default class EmpJob extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			expanded: false
		}
		
	}

	handleExpandChange = (expanded) => {
    this.setState({ expanded: expanded });
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };


	render () {
		var {job} = this.props;
		return(
			<div>				
				<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

					<CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label={job.jobTitle}
            />
          </CardText>
	          <CardText expandable={true}>
	          	
	          	<div>
	          		<h5>{job.timePosted}</h5>
	          	</div>
	          	<div>
	          		<h5>{job.location}</h5>
	          	</div>
	          	<div>
	          		<h5>{job.skills}</h5>
	          	</div>
	          	<div>
	          		<h5>{job.jobDescription}</h5>
	          	</div>
	        	</CardText>

        </Card>
			</div>
		)
	}
}

