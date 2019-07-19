import React, { Component, Fragment } from "react";
import { CtrlPanel } from "./panel.jsx";
import { Trigger } from "./trigger.jsx";
class Sliders extends Component {
	render() {
		return (
			<Fragment>
				<section className="sweat">
					<div className="overview">
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
