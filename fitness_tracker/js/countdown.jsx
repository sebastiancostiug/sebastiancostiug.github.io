import React, { Component, Fragment } from "react";
class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timerOn       : this.props.timerOn, //boolean
			timerWorkTime : this.props.timerWorkTime, //in seconds
			timerRestTime : this.props.timerRestTime, //in seconds
			timerRounds   : this.props.timerRounds //an integer number
		};
	}
	componentDidMount() {
		if (this.state.timerOn) {
			if (this.state.timerRounds > 0) {
				this.workTimer = setInterval(() => {
					if (this.state.timerWorkTime > 0) {
						console.log("first timer working");
						this.setState({
							timerWorkTime : this.state.timerWorkTime - 1
						});
					} else {
						console.log("first timer done");
						this.restTimer = setInterval(() => {
							if (this.state.timerRestTime > 0) {
								console.log("second timer working");
								this.setState({
									timerRestTime : this.state.timerRestTime - 1
								});
							} else {
								console.log("second timer done");
								this.setState({
									timerWorkTime : this.props.timerWorkTime,
									timerRestTime : this.props.timerRestTime,
									timerRounds   : this.state.timerRounds - 1
								});
							}
						}, 1000);
					}
				}, 1000);
			} else {
				console.log("both timers done");
				this.setState({ timerOn: false });
			}
		}
	}
	componentDidUpdate() {
		if (this.state.timerRestTime <= 0) {
			console.log("cleared both intervals");
			clearInterval(this.workTimer);
			clearInterval(this.restTimer);
		}
	}
	componentWillUnmount() {
		clearInterval(this.workTimer);
		clearInterval(this.restTimer);
	}
	render() {
		let { timerWorkTime, timerRestTime, timerRounds } = this.state;
		let totalSeconds = (timerWorkTime + timerRestTime) * timerRounds;
		let totalMinutes = totalSeconds / 60;
		let roundedTotalMinutes = Math.floor(totalMinutes);
		let andTotalSeconds = (totalMinutes - roundedTotalMinutes) * 60;
		let roundedAndTotalSeconds = Math.floor(andTotalSeconds);
		return (
			<Fragment>
				<div className="Countdown-time">
					<div>Work time:{timerWorkTime}</div>
					<div>Rest time:{timerRestTime}</div>
					<div>Rounds left:{timerRounds}</div>
					<div>
						Total time left:
						{roundedTotalMinutes} : {andTotalSeconds}
					</div>
				</div>
			</Fragment>
		);
	}
}
export { Countdown };
