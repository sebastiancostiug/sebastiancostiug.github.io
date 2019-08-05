import React, { Component, Fragment } from "react";
import { CtrlPanel } from "./panel.jsx";
import { Trigger } from "./trigger.jsx";
import { Overview } from "./overview.jsx";
class Sliders extends Component {
	render() {
		return (
			<Fragment>
				<section className="sweat">
					<div className="overview">
						<Overview />
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
