import React, { Component, Fragment } from "react";
import { CtrlPanel } from "./panel.jsx";
import { Trigger } from "./trigger.jsx";
import { Overview } from "./overview.jsx";

class Sweat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			measuredValue : 0,
			workTime      : 0,
			restTime      : 0,
			roundsNumber  : 0,
			isStarted     : false
		};
	}
	handleClick(arg) {
		this.setState({ isStarted: arg });
	}
	wasDragged(event) {
		let slidersHeight = document.querySelector("div.mainDisplay>section.sliders").clientHeight;
		let yTouchPosition = event.touches[0].clientY;
		let yHandlePosition = 100 - yTouchPosition * 100 / slidersHeight;
		this.setState({ measuredValue: yHandlePosition });
		return yHandlePosition;
	}
	dragEnd(arg) {
		let counterMeasuredValue;
		let totalSeconds = this.state.measuredValue * 240 / 100;
		if (arg == "rounds") {
			if (Math.floor(this.state.measuredValue * 40 / 100) > 40) {
				counterMeasuredValue = 40;
				this.setState({ roundsNumber: counterMeasuredValue });
			} else if (Math.floor(this.state.measuredValue * 40 / 100) < 0) {
				counterMeasuredValue = 1;
				this.setState({ roundsNumber: counterMeasuredValue });
			} else {
				counterMeasuredValue = Math.floor(this.state.measuredValue * 40 / 100);
				this.setState({ roundsNumber: counterMeasuredValue });
			}
		} else if (arg == "work") {
			if (Math.round(Math.floor(this.state.measuredValue) * 240) / 100 > 240) {
				counterMeasuredValue = 240;
				this.setState({ workTime: counterMeasuredValue });
			} else if (Math.round(Math.floor(this.state.measuredValue) * 240) / 100 < 0) {
				counterMeasuredValue = 0;
				this.setState({ workTime: counterMeasuredValue });
			} else {
				counterMeasuredValue = Math.floor(totalSeconds / 5) * 5;
				this.setState({ workTime: counterMeasuredValue });
			}
		} else if (arg == "rest") {
			if (Math.round(Math.floor(this.state.measuredValue) * 240) / 100 > 240) {
				counterMeasuredValue = 240;
				this.setState({ restTime: counterMeasuredValue });
			} else if (Math.round(Math.floor(this.state.measuredValue) * 240) / 100 < 0) {
				counterMeasuredValue = 0;
				this.setState({ restTime: counterMeasuredValue });
			} else {
				counterMeasuredValue = Math.floor(totalSeconds / 5) * 5;
				this.setState({ restTime: counterMeasuredValue });
			}
		}
	}
	render() {
		if (this.state.isStarted) {
			return (
				<Fragment>
					<section className="sliders">
						<div className="overview">
							<Overview
								workTime={this.state.workTime}
								restTime={this.state.restTime}
								roundsNumber={this.state.roundsNumber}
							/>
						</div>
						<CtrlPanel
							workTime={this.state.workTime}
							restTime={this.state.restTime}
							roundsNumber={this.state.roundsNumber}
							isStarted={this.state.isStarted}
							handleClick={this.handleClick.bind(this)}
						/>
					</section>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<section className="sliders">
						<div className="overview">
							<Overview
								workTime={this.state.workTime}
								restTime={this.state.restTime}
								roundsNumber={this.state.roundsNumber}
							/>
						</div>
						<div className="active">
							<Trigger
								tSliderType="work"
								tMeasureType="^"
								wasDragged={this.wasDragged.bind(this)}
								dragEnd={this.dragEnd.bind(this)}
							/>
						</div>
						<div className="passive">
							<Trigger
								tSliderType="rest"
								tMeasureType="^"
								wasDragged={this.wasDragged.bind(this)}
								dragEnd={this.dragEnd.bind(this)}
							/>
						</div>
						<div className="rounds">
							<Trigger
								tSliderType="rounds"
								tMeasureType="^"
								wasDragged={this.wasDragged.bind(this)}
								dragEnd={this.dragEnd.bind(this)}
							/>
						</div>
						<CtrlPanel
							workTime={this.state.workTime}
							restTime={this.state.restTime}
							roundsNumber={this.state.roundsNumber}
							handleClick={this.handleClick.bind(this)}
							isStarted={this.state.isStarted}
						/>
					</section>
				</Fragment>
			);
		}
	}
}
export { Sweat };
