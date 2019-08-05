import React, { Component, Fragment } from "react";
class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workTime     : 0,
			restTime     : 0,
			roundsNumber : 0,
			isStarted    : false
		};
	}

	render() {
		let isStarted = this.state.isStarted;
		let totalSeconds = (this.props.workTime + this.props.restTime) * this.props.roundsNumber;
		let totalMinutes = totalSeconds / 60;
		let roundedTotalMinutes = Math.floor(totalMinutes);
		let andTotalSeconds = (totalMinutes - roundedTotalMinutes) * 60;
		let roundedAndTotalSeconds = Math.floor(andTotalSeconds / 5) * 5;

		if (isStarted) {
			return (
				<Fragment>
					<div>get ready: {this.state.roundsNumber}</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					{this.props.roundsNumber != 0 && <span>{this.props.roundsNumber}</span>}
					{this.props.roundsNumber != 0 && <span>rounds of</span>}
					{this.props.workTime != 0 && <span>{this.props.workTime}</span>}
					{this.props.workTime != 0 && <span>seconds of work and </span>}
					{this.props.restTime != 0 && <span>{this.props.restTime}</span>}
					{this.props.restTime != 0 && <span>seconds of rest between rounds</span>}
					{this.props.roundsNumber != 0 &&
					this.props.workTime != 0 &&
					this.props.restTime != 0 && <span>for a total of</span>}
					{this.props.roundsNumber != 0 &&
					this.props.workTime != 0 &&
					this.props.restTime != 0 && (
						<span>
							{roundedTotalMinutes} minutes and {roundedAndTotalSeconds} seconds
						</span>
					)}
				</Fragment>
			);
		}
	}
}
export { Overview };

/*
						{this.state.roundsNumber != 0 && <span>{this.state.roundsNumber}</span>}
						{this.state.roundsNumber != 0 && <span>rounds of</span>}
						{this.state.workTime != 0 && <span>{this.state.workTime}</span>}
						{this.state.workTime != 0 && <span>seconds of work and </span>}
						{this.state.restTime != 0 && <span>{this.state.restTime}</span>}
						{this.state.restTime != 0 && <span>seconds of rest between rounds</span>}
						{this.state.roundsNumber != 0 &&
						this.state.workTime != 0 &&
						this.state.restTime != 0 && <span>for a total of</span>}
						{this.state.roundsNumber != 0 &&
						this.state.workTime != 0 &&
						this.state.restTime != 0 && (
							<span>
								{roundeTotaldMinutes} minutes and {roundedAndTotalSeconds} seconds
							</span>
						)}
*/
