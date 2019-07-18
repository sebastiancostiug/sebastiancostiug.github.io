import React, { Component, Fragment } from "react";
class Trigger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tMeasureType  : this.props.tMeasureType,
			tMeasureValue : 0,
			counterValue  : 0
		};
	}
	doDrag(event) {
		if (typeof this.props.wasDragged === "function") {
			this.setState({ tMeasureValue: this.props.wasDragged(event), counterValue: this.props.wasDragged(event) });
		}
	}
	doResetTouch(event) {
		let timeValue =
			Math.floor(this.state.tMeasureValue * 240 / 100 / 60) +
			":" +
			Math.floor(
				Math.round(
					(this.state.tMeasureValue * 240 / 100 / 60 -
						Math.floor(this.state.tMeasureValue * 240 / 100 / 60)) *
						60
				) / 5
			) *
				5;
		if (typeof this.props.wasDragged === "function") {
			this.props.dragEnd(this.props.tSliderType);
			this.setState({ tMeasureValue: 0 });
			if (this.props.tSliderType == "rounds") {
				if (Math.floor(this.state.counterValue * 40 / 100) > 40) {
					this.setState({ tMeasureType: 40 });
				} else if (Math.floor(this.state.counterValue * 40 / 100) < 0) {
					this.setState({ tMeasureType: 1 });
				} else {
					this.setState({ tMeasureType: Math.floor(this.state.counterValue * 40 / 100) });
				}
			} else {
				if (Math.round(Math.floor(this.state.counterValue) * 240) / 100 > 240) {
					this.setState({ tMeasureType: 4 });
				} else if (Math.round(Math.floor(this.state.counterValue) * 240) / 100 < 0) {
					this.setState({ tMeasureType: 0 });
				} else {
					this.setState({
						tMeasureType : timeValue
					});
				}
			}
		}
	}
	render() {
		let sliderHeight;
		if (Math.floor(this.state.tMeasureValue) * 4 > 384) {
			sliderHeight = 384;
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
		};
		let counterDivContent;
		let totalSeconds = this.state.tMeasureValue * 240 / 100;
		let minutes = totalSeconds / 60;
		let roundedMinutes = Math.floor(minutes);
		let seconds = (minutes - roundedMinutes) * 60;
		let roundedSeconds = Math.floor(seconds / 5) * 5;

		if (this.state.tMeasureValue != 0 || this.state.tMeasureValue != "0") {
			if (this.props.tSliderType == "rounds") {
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
				<div className="handle" onTouchMove={this.doDrag.bind(this)} onTouchEnd={this.doResetTouch.bind(this)}>
					<span>{this.props.tSliderType}</span>
					<span>{this.state.tMeasureType}</span>
				</div>
				<div style={style}>{counterDivContent}</div>
			</Fragment>
		);
	}
}
export { Trigger };
