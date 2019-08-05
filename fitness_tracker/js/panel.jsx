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
		if (this.props.scope == "back") {
			return (
				<Link to="/">
					<div className={scope} onClick={this.doClick.bind(this)}>
						<span>
							<i className={fasIcon} />
						</span>
						<span>{scope}</span>
					</div>
				</Link>
			);
		} else {
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
}
class CtrlPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isStarted : this.props.isStarted
		};
	}

	wasClicked(scope) {
		if (scope == "back") {
			//go back to main
		} else if (scope == "start") {
			if (typeof this.props.handleClick === "function") {
				this.props.handleClick(true);
			}
		} else if (scope == "reset") {
			this.props.handleClick(false);
		} else if (scope == "pause") {
			//pause the countdowd
		}
	}
	render() {
		if (this.state.isStarted) {
			return (
				<Fragment>
					<div className="ctrlPanel">
						<div className="buttons">
							<PanelBtn scope="reset" fasIcon="fas fa-undo-alt" wasClicked={this.wasClicked.bind(this)} />
							<PanelBtn scope="pause" fasIcon="fas fa-pause" wasClicked={this.wasClicked.bind(this)} />
						</div>
					</div>
				</Fragment>
			);
		} else {
			return (
				<Fragment>
					<div className="ctrlPanel">
						<div className="buttons">
							<PanelBtn scope="back" fasIcon="fas fa-play" wasClicked={this.wasClicked.bind(this)} />
							<PanelBtn
								scope="start"
								fasIcon="fas fa-play"
								wasClicked={this.wasClicked.bind(this)}
								workTime={this.props.workTime}
								restTime={this.props.restTime}
								roundsNumber={this.props.roundsNumber}
							/>
						</div>
					</div>
				</Fragment>
			);
		}
	}
}
export { CtrlPanel };
