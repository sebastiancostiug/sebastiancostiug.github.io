import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class PanelBtn extends Component {
	doClick() {
		if (typeof this.props.wasClicked === "function") {
			this.props.wasClicked(this.props.scope);
		}
	}
	render() {
		let { scope, fasIcon } = this.props;
		return (
			<Fragment>
				<div className={scope} onClick={this.doClick.bind(this)}>
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
	wasClicked() {
		if (this.props.scope == "back") {
		}
	}
	render() {
		return (
			<Fragment>
				<div className="ctrlPanel">
					<div className="buttons">
						<Link to="/">
							<PanelBtn scope="back" fasIcon="fas fa-play" wasClicked={this.wasClicked.bind(this)} />
						</Link>
						<Link to="/sweat">
							<PanelBtn scope="start" fasIcon="fas fa-play" wasClicked={this.wasClicked.bind(this)} />
						</Link>
					</div>
				</div>
			</Fragment>
		);
	}
}
export { CtrlPanel };
