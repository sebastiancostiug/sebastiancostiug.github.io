import React, { Component, Fragment } from "react";
import { CtrlPanel } from "./panel.jsx";
class Trigger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tSliderType   : this.props.tSliderType,
			tMeasureType  : this.props.tMeasureType,
			tMeasureValue : 0,
			counterValue  : 0
		};
	}
	doTouch(event) {
		let slidersHeight = document.querySelector("div.mainDisplay>section.sliders").clientHeight;
		let yTouchPosition = event.touches[0].clientY;
		let yHandlePosition = 100 - yTouchPosition * 100 / slidersHeight;
		this.setState({ tMeasureValue: yHandlePosition });
	}
	doResetTouch(event) {
		let couterMeasuredValue;
		let totalSeconds = this.state.tMeasureValue * 240 / 100;
		console.log(totalSeconds);
		let minutes = totalSeconds / 60;
		let roundedMinutes = Math.floor(minutes);
		let seconds = (minutes - roundedMinutes) * 60;
		let roundedSeconds = Math.round(seconds);

		if (this.state.tSliderType == "rounds") {
			if (Math.floor(this.state.tMeasureValue * 40 / 100) > 40) {
				couterMeasuredValue = "x" + 40;
			} else if (Math.floor(this.state.tMeasureValue * 40 / 100) < 0) {
				couterMeasuredValue = "x" + 1;
			} else {
				couterMeasuredValue = "x" + Math.floor(this.state.tMeasureValue * 40 / 100);
			}
		} else {
			if (Math.round(Math.floor(this.state.tMeasureValue) * 240) / 100 > 240) {
				couterMeasuredValue = 4 + "m:00s";
			} else if (Math.round(Math.floor(this.state.tMeasureValue) * 240) / 100 < 0) {
				couterMeasuredValue = 0 + "m:00s";
			} else {
				couterMeasuredValue = roundedMinutes + "m:" + roundedSeconds + "s";
			}
		}
		this.setState({ counterValue: couterMeasuredValue });
		this.setState({ tMeasureType: couterMeasuredValue });
		this.setState({ tMeasureValue: 0 });
	}
	render() {
		let sliderHeight;
		if (Math.floor(this.state.tMeasureValue) * 4 > 384) {
			sliderHeight = 384;
			//} else if (Math.floor(this.state.tMeasureValue) * 4 < 384) {
			//	sliderHeight = 384;
		} else {
			sliderHeight = Math.floor(this.state.tMeasureValue) * 4;
		}
		let style = {
			height          : `${sliderHeight}px`,
			backgroundColor : "rgba(30, 30, 30, 0.75)",
			margin          : 0,
			width           : "100%",
			textAlign       : "center",
			lineHeight      : `${sliderHeight}px`
			//fontSize        : "2em"
		};
		console.log(Math.floor(this.state.tMeasureValue) * 4);
		let counterDivContent;
		let totalSeconds = this.state.tMeasureValue * 240 / 100;
		let minutes = totalSeconds / 60;
		let roundedMinutes = Math.floor(minutes);
		let seconds = (minutes - roundedMinutes) * 60;
		let roundedSeconds = Math.round(seconds);

		if (this.state.tMeasureValue != 0 || this.state.tMeasureValue != "0") {
			if (this.state.tSliderType == "rounds") {
				if (Math.floor(this.state.tMeasureValue * 40 / 100) > 40) {
					counterDivContent = "x" + 40;
				} else if (Math.floor(this.state.tMeasureValue * 40 / 100) < 0) {
					counterDivContent = "x" + 1;
				} else {
					counterDivContent = "x" + Math.floor(this.state.tMeasureValue * 40 / 100);
				}
			} else {
				if (Math.round(Math.floor(this.state.tMeasureValue) * 240) / 100 > 240) {
					counterDivContent = 4 + "m:00s";
				} else if (Math.round(Math.floor(this.state.tMeasureValue) * 240) / 100 < 0) {
					counterDivContent = 0 + "m:00s";
				} else {
					counterDivContent = roundedMinutes + "m:" + roundedSeconds + "s";
				}
			}
		} else {
			counterDivContent = "";
		}
		return (
			<Fragment>
				<div className="handle" onTouchMove={this.doTouch.bind(this)} onTouchEnd={this.doResetTouch.bind(this)}>
					<span>{this.state.tSliderType}</span>
					<span>{this.state.tMeasureType}</span>
				</div>
				<div style={style}>{counterDivContent}</div>
			</Fragment>
		);
	}
}
class Sliders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workTime     : 0,
			restTime     : 0,
			roundsNumber : 0
		};
	}
	render() {
		return (
			<Fragment>
				<section className="sliders">
					<div className="active">
						<Trigger tSliderType="work" tMeasureType="0:05" />
					</div>
					<div className="passive">
						<Trigger tSliderType="rest" tMeasureType="0:05" />
					</div>
					<div className="rounds">
						<Trigger tSliderType="rounds" tMeasureType="x1" />
					</div>
					<CtrlPanel />
				</section>
			</Fragment>
		);
	}
}
export { Sliders };
