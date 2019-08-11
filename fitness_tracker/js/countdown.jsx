import React, { Component, Fragment } from "react";
class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timerOn                      : this.props.timerOn,
			timerWorkTime                : this.props.timerWorkTime, //in seconds
			timerWorkTimeFromProps       : this.props.timerWorkTime, //in seconds
			timerRestTimeFromProps       : this.props.timerRestTime, //in seconds
			timerRestTime                : this.props.timerRestTime, //in seconds
			timerRounds                  : this.props.timerRounds, //an integer number
			roundNumber                  : 1,
			totalWorkoutSecondsFromProps :
				(this.props.timerWorkTime + this.props.timerRestTime) * this.props.timerRounds,
			totalWorkoutSeconds          :
				(this.props.timerWorkTime + this.props.timerRestTime) * this.props.timerRounds + 5,
			remainingWorkoutSeconds      :
				(this.props.timerWorkTime + this.props.timerRestTime) * this.props.timerRounds + 5
		};
	}
	componentDidMount() {
		//console.log("____________________componentDidMount________________________");
		if (this.state.totalWorkoutSeconds > 0) {
			this.workTimer = setInterval(() => {
				console.log("timer ON");
				if (this.state.timerOn === true) {
					this.setState({
						totalWorkoutSeconds : this.state.totalWorkoutSeconds - 1
					});
				}
				if (this.state.timerOn === true) {
					if (
						this.state.timerWorkTime > 0 &&
						this.state.totalWorkoutSeconds - this.state.totalWorkoutSecondsFromProps < 0
					) {
						this.setState({
							timerWorkTime : this.state.timerWorkTime - 1
						});
					} else if (
						this.state.timerRestTime > 0 &&
						this.state.totalWorkoutSeconds - this.state.totalWorkoutSecondsFromProps < 0
					) {
						this.setState({
							timerRestTime : this.state.timerRestTime - 1
						});
					} else if (
						this.state.timerRounds > 0 &&
						this.state.totalWorkoutSeconds - this.state.totalWorkoutSecondsFromProps < 0
					) {
						this.setState({
							timerWorkTime : this.props.timerWorkTime - 1,
							timerRestTime : this.props.timerRestTime,
							timerRounds   : this.state.timerRounds - 1,
							roundNumber   : this.state.roundNumber + 1
						});
					}
				}
			}, 1000);
		}
	}
	componentWillReceiveProps(prevProps) {
		//console.log("____________________componentWillReceiveProps________________________");
		if (prevProps.timerOn !== this.props.timerOn) {
			this.setState({
				timerOn : !this.state.timerOn
			});
		}
	}
	componentDidUpdate() {
		//console.log("____________________componentDidUpdate________________________");
		if (this.state.totalWorkoutSeconds === 0) {
			clearInterval(this.workTimer);
			console.log(" component did update - cleared both intervals - timer done");
		}
	}
	componentWillUnmount() {
		//console.log("____________________componentWillUnmount________________________");
		clearInterval(this.workTimer);
	}
	render() {
		let totalSeconds = this.state.totalWorkoutSeconds;
		let totalMinutes = totalSeconds / 60;
		let roundedTotalMinutes = Math.floor(totalMinutes);
		let andTotalSeconds = (totalMinutes - roundedTotalMinutes) * 60;
		let roundedAndTotalSeconds = Math.floor(andTotalSeconds);

		let totalWorkSeconds = this.state.timerWorkTime;
		let totalWorkMinutes = totalWorkSeconds / 60;
		let roundedTotalWorkMinutes = Math.floor(totalWorkMinutes);
		let andTotalWorkSeconds = (totalWorkMinutes - roundedTotalWorkMinutes) * 60;
		let roundedAndTotalWorkSeconds = Math.floor(andTotalWorkSeconds);

		let totalRestSeconds = this.state.timerRestTime;
		let totalRestMinutes = totalRestSeconds / 60;
		let roundedTotalRestMinutes = Math.floor(totalRestMinutes);
		let andTotalRestSeconds = (totalRestMinutes - roundedTotalRestMinutes) * 60;
		let roundedAndTotalRestSeconds = Math.floor(andTotalRestSeconds);

		let workProgressWidth = {
			width : `${this.state.timerWorkTime}` / `${this.state.timerWorkTimeFromProps}` * 100 + "%"
		};
		let restProgressWidth = {
			width : `${this.state.timerRestTime}` / `${this.state.timerRestTimeFromProps}` * 100 + "%"
		};
		if (this.state.totalWorkoutSeconds > this.state.totalWorkoutSecondsFromProps) {
			return (
				<Fragment>
					<div className="getReady">
						<div className="countdownHeader">GET READY</div>
						<div className="countdownPrepCounter">
							{`${this.state.totalWorkoutSeconds}` - `${this.state.totalWorkoutSecondsFromProps}`}
						</div>
					</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<div className="countdown">
						<div className="roundNumber">
							<span>Round:</span>
							<span>
								{`${this.state.roundNumber}` > 9 ? (
									`${this.state.roundNumber}`
								) : (
									"0" + `${this.state.roundNumber}`
								)}
							</span>
						</div>
						<div className="workTime">
							<span className="progress" style={workProgressWidth} />
							<span className="progressTitle">Work time:</span>
							<span className="progressCounter">
								{roundedTotalWorkMinutes} :
								{`${roundedAndTotalWorkSeconds}` > 9 ? (
									`${roundedAndTotalWorkSeconds}`
								) : (
									"0" + `${roundedAndTotalWorkSeconds}`
								)}
							</span>
						</div>
						<div className="restTime">
							<span className="progress" style={restProgressWidth} />
							<span className="progressTitle">Rest time:</span>
							<span className="progressCounter">
								{roundedTotalRestMinutes} :
								{`${roundedAndTotalRestSeconds}` > 9 ? (
									`${roundedAndTotalRestSeconds}`
								) : (
									"0" + `${roundedAndTotalRestSeconds}`
								)}
							</span>
						</div>
						<div className="roundsLeft">
							<span>Rounds left:</span>
							<span>
								{`${this.state.timerRounds}` > 10 ? (
									`${this.state.timerRounds}` - 1
								) : (
									"0" + (`${this.state.timerRounds}` - 1)
								)}
							</span>
						</div>
						<div className="workoutTime">
							<span>Total time left:</span>
							<span>
								{`${roundedTotalMinutes}` > 9 ? (
									`${roundedTotalMinutes}`
								) : (
									"0" + `${roundedTotalMinutes}`
								)}{" "}
								:
								{`${roundedAndTotalSeconds}` > 9 ? (
									`${roundedAndTotalSeconds}`
								) : (
									"0" + `${roundedAndTotalSeconds}`
								)}
							</span>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}
export { Countdown };
