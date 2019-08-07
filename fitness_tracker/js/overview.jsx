import React, { Component, Fragment } from "react";
import { Countdown } from "./countdown.jsx";
class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workTime     : this.props.workTime,
			restTime     : this.props.restTime,
			roundsNumber : this.props.roundsNumber,
			isStarted    : this.props.isStarted,
			timerOn      : this.props.timerOn
		};
	}
	componentDidUpdate(prevProps) {
		if (prevProps.isStarted !== this.props.isStarted) {
			this.setState({
				workTime     : this.props.workTime,
				restTime     : this.props.restTime,
				roundsNumber : this.props.roundsNumber,
				isStarted    : this.props.isStarted,
				timerOn      : this.props.timerOn
			});
		}
		if (prevProps.timerOn !== this.props.timerOn) {
			this.setState({
				timerOn : this.props.timerOn
			});
		}
	}
	render() {
		let totalSeconds = (this.props.workTime + this.props.restTime) * this.props.roundsNumber;
		let totalMinutes = totalSeconds / 60;
		let roundedTotalMinutes = Math.floor(totalMinutes);
		let andTotalSeconds = (totalMinutes - roundedTotalMinutes) * 60;
		let roundedAndTotalSeconds = Math.floor(andTotalSeconds / 5) * 5;
		if (this.state.isStarted) {
			return (
				<Fragment>
					<Countdown
						timerWorkTime={this.state.workTime}
						timerRestTime={this.state.restTime}
						timerRounds={this.state.roundsNumber}
						timerOn={this.state.timerOn}
					/>
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
