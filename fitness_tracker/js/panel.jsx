import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class PanelBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timerOn : this.props.timerOn
		};
	}

	doClick() {
		if (typeof this.props.wasClicked === "function") {
			this.props.wasClicked(this.props.scope);
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
		} else if (this.props.scope == "pause") {
			if (this.state.timerOn) {
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
			} else {
				return (
					<Fragment>
						<div className={scope} onClick={this.doClick.bind(this)}>
							<span>
								<i className="fas fa-play" />
							</span>
							<span>resume</span>
						</div>
					</Fragment>
				);
			}
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
			isStarted : this.props.isStarted,
			timerOn   : this.props.timerOn
		};
	}
	componentWillReceiveProps(prevProps) {
		//console.log("____________________componentWillReceiveProps________________________");
		if (prevProps.timerOn !== this.props.timerOn) {
			this.setState({
				timerOn : !this.state.timerOn
			});
		}
	}
	wasClicked(scope) {
		if (scope == "start") {
			if (typeof this.props.handleClick === "function") {
				this.props.handleClick("start");
			}
		} else if (scope == "reset") {
			if (typeof this.props.handleClick === "function") {
				this.props.handleClick("reset");
			}
		} else if (scope == "pause") {
			if (typeof this.props.handleClick === "function") {
				this.props.handleClick("pause");
			}
		}
	}
	render() {
		if (this.state.isStarted) {
			return (
				<Fragment>
					<div className="ctrlPanel">
						<div className="buttons">
							<PanelBtn scope="reset" fasIcon="fas fa-undo-alt" wasClicked={this.wasClicked.bind(this)} />
							<PanelBtn
								scope="pause"
								fasIcon="fas fa-pause"
								wasClicked={this.wasClicked.bind(this)}
								timerOn={this.state.timerOn}
							/>
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
