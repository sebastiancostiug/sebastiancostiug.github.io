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

		let totalWorkSeconds = this.props.workTime;
		let totalWorkMinutes = totalWorkSeconds / 60;
		let roundedTotalWorkMinutes = Math.floor(totalWorkMinutes);
		let andTotalWorkSeconds = (totalWorkMinutes - roundedTotalWorkMinutes) * 60;
		let roundedAndTotalWorkSeconds = Math.floor(andTotalWorkSeconds);

		let totalRestSeconds = this.props.restTime;
		let totalRestMinutes = totalRestSeconds / 60;
		let roundedTotalRestMinutes = Math.floor(totalRestMinutes);
		let andTotalRestSeconds = (totalRestMinutes - roundedTotalRestMinutes) * 60;
		let roundedAndTotalRestSeconds = Math.floor(andTotalRestSeconds);

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
					{this.props.roundsNumber != 0 && <span className="value">{this.props.roundsNumber} </span>}
					{this.props.roundsNumber != 0 && <span> rounds of</span>}
					<br />
					{this.props.workTime != 0 && (
						<span className="value">
							{roundedTotalWorkMinutes}:
							{`${roundedAndTotalWorkSeconds}` > 9 ? (
								`${roundedAndTotalWorkSeconds}`
							) : (
								"0" + `${roundedAndTotalWorkSeconds}`
							)}
						</span>
					)}
					{this.props.workTime != 0 && <span> of work and </span>}
					<br />
					{this.props.restTime != 0 && (
						<span className="value">
							{roundedTotalRestMinutes}:
							{`${roundedAndTotalRestSeconds}` > 9 ? (
								`${roundedAndTotalRestSeconds}`
							) : (
								"0" + `${roundedAndTotalRestSeconds}`
							)}
						</span>
					)}
					{this.props.restTime != 0 && <span> of rest between rounds</span>}
					<br />
					{this.props.roundsNumber != 0 &&
					this.props.workTime != 0 &&
					this.props.restTime != 0 && <span>for a total of </span>}
					{this.props.roundsNumber != 0 &&
					this.props.workTime != 0 &&
					this.props.restTime != 0 && (
						<span className="value">
							{roundedTotalMinutes}:
							{`${roundedAndTotalSeconds}` > 9 ? (
								`${roundedAndTotalSeconds}`
							) : (
								"0" + `${roundedAndTotalSeconds}`
							)}
						</span>
					)}
				</Fragment>
			);
		}
	}
}
export { Overview };
