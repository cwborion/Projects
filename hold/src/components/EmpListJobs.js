import React from 'react';
import EmpJob from './EmpJob';
import { getJobs } from '../actions/employerActions';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

export default class EmpListJobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			companyId: '',
			jobs: []
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

	componentDidMount() {
		getJobs()
			.then(data => {
				console.log('in emplistjobs.js ', data)
				this.setState({
					companyId: 'abc',
					jobs: data
				});
			});
	};

	render() {
		return (
			<div>
				<h3>EmpListJobs.js</h3>
				<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

					<CardText>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label='Click to view posted openings'
            />
          </CardText>
	          <CardText expandable={true}>
	          	{this.state.jobs.map((job) => (
					(
						<EmpJob job={job} />
					)
				)
				)}
	        	</CardText>

        </Card>
				

			</div>
		)

	}
}

