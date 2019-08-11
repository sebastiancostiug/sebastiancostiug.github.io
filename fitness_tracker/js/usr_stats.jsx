import React, { Component, Fragment } from "react";

class UsrStats extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.usrGender !== this.props.usrGender) {
			this.setState({
				usrGender : this.props.usrGender,
				usrAge    : this.props.usrAge,
				usrHeight : this.props.usrHeight,
				usrWeight : this.props.usrWeight
			});
		}
	}
	render() {
		return (
			<Fragment>
				<div className="info">
					<span>user stats</span>
					<div>
						{this.state.usrGender == "male" && (
							<span className="usrGender">
								<i className="fas fa-mars" />
							</span>
						)}
						{this.state.usrGender == "female" && (
							<span className="usrGender">
								<i className="fas fa-venus" />
							</span>
						)}
						<span className="usrAge">{this.state.usrAge}</span>
						<span className="usrHeight">{this.state.usrHeight}</span>
						<span className="usrWeight">{this.state.usrWeight}</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
export { UsrStats };
