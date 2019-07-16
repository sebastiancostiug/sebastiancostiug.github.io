import React, { Component, Fragment } from "react";
class PanelBtn extends Component {
	render() {
		let { scope, fasIcon } = this.props;
		return (
			<Fragment>
				<div className={scope}>
					<span>
						<i className={fasIcon} />
					</span>
					<span>{scope}</span>
				</div>
			</Fragment>
		);
	}
}
class CtrlPanel extends Component {
	render() {
		return (
			<Fragment>
				<div className="ctrlPanel">
					<div className="buttons">
						<PanelBtn scope="back" fasIcon="fas fa-play" />
						<PanelBtn scope="start" fasIcon="fas fa-play" />
					</div>
				</div>
			</Fragment>
		);
	}
}
export { CtrlPanel };
