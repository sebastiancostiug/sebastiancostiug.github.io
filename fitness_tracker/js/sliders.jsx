import React, { Component, Fragment } from "react";
import { CtrlPanel } from "./panel.jsx";
import { Trigger } from "./trigger.jsx";
import { totalmem } from "os";

class Sliders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			measuredValue : 0,
			workTime      : 0,
			restTime      : 0,
			roundsNumber  : 0
		};
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
		let totalSeconds = (this.state.workTime + this.state.restTime) * this.state.roundsNumber;
		let totalMinutes = totalSeconds / 60;
		let roundeTotaldMinutes = Math.floor(totalMinutes);
		let andTotalSeconds = (totalMinutes - roundeTotaldMinutes) * 60;
		let roundedAndTotalSeconds = Math.floor(andTotalSeconds / 5) * 5;
		return (
			<Fragment>
				<section className="sliders">
					<div className="overview">
						{this.state.roundsNumber != 0 && <div>{this.state.roundsNumber}</div>}
						{this.state.roundsNumber != 0 && <div>rounds of</div>}
						{this.state.workTime != 0 && <div>{this.state.workTime}</div>}
						{this.state.workTime != 0 && <div>seconds of work and </div>}
						{this.state.restTime != 0 && <div>{this.state.restTime}</div>}
						{this.state.restTime != 0 && <div>seconds of rest between rounds</div>}
						{this.state.roundsNumber != 0 &&
						this.state.workTime != 0 &&
						this.state.restTime != 0 && <div>for a total of</div>}
						{this.state.roundsNumber != 0 &&
						this.state.workTime != 0 &&
						this.state.restTime != 0 && (
							<div>
								{roundeTotaldMinutes} minutes and {roundedAndTotalSeconds} seconds
							</div>
						)}
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
					<CtrlPanel />
				</section>
			</Fragment>
		);
	}
}
export { Sliders };
