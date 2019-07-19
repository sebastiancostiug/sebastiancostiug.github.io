import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class NavMainMenu extends Component {
	render() {
		return (
			<Fragment>
				<nav className="mainMenu">
					<Link to="/grow">
						<div id="grow">
							<span>grow</span>
						</div>
					</Link>
					<Link to="/sweat">
						<div id="sweat">
							<span>sweat</span>
						</div>
					</Link>
					<Link to="/recover">
						<div id="recover">
							<span>recover</span>
						</div>
					</Link>
				</nav>
			</Fragment>
		);
	}
}
export { NavMainMenu };
