import React, { Component, Fragment } from "react";
class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timerOn             : this.props.timerOn, //boolean
			timerWorkTime       : this.props.timerWorkTime, //in seconds
			timerRestTime       : this.props.timerRestTime, //in seconds
			timerRounds         : this.props.timerRounds, //an integer number
			roundNumber         : 1,
			totalWorkoutSeconds : (this.props.timerWorkTime + this.props.timerRestTime) * this.props.timerRounds
		};
	}
	componentDidMount() {
		if (this.state.totalWorkoutSeconds > 0) {
			this.workTimer = setInterval(() => {
				console.log("first timer working");
				this.setState({
					totalWorkoutSeconds : this.state.totalWorkoutSeconds - 1
				});
				if (this.state.timerWorkTime > 0) {
					this.setState({
						timerWorkTime : this.state.timerWorkTime - 1
					});
				} else if (this.state.timerRestTime > 0) {
					this.setState({
						timerRestTime : this.state.timerRestTime - 1
					});
				} else if (this.state.timerRounds > 0) {
					this.setState({
						timerWorkTime : this.props.timerWorkTime - 1,
						timerRestTime : this.props.timerRestTime,
						timerRounds   : this.state.timerRounds - 1,
						roundNumber   : this.state.roundNumber + 1
					});
				}
			}, 1000);
		}
	}
	componentDidUpdate() {
		if (this.state.totalWorkoutSeconds == 0) {
			clearInterval(this.workTimer);
			console.log(" component did update - cleared both intervals - timer done");
		}
	}
	render() {
		let totalSeconds = this.state.totalWorkoutSeconds;
		let totalMinutes = totalSeconds / 60;
		let roundedTotalMinutes = Math.floor(totalMinutes);
		let andTotalSeconds = (totalMinutes - roundedTotalMinutes) * 60;
		let roundedAndTotalSeconds = Math.floor(andTotalSeconds);
		return (
			<Fragment>
				<div className="Countdown-time">
					<div>Round:{this.state.roundNumber}</div>
					<div>Work time:{this.state.timerWorkTime}</div>
					<div>Rest time:{this.state.timerRestTime}</div>
					<div>Rounds left:{this.state.timerRounds - 1}</div>
					<div>
						Total time left:
						{roundedTotalMinutes} :
						{roundedAndTotalSeconds}
					</div>
				</div>
			</Fragment>
		);
	}
}
export { Countdown };
