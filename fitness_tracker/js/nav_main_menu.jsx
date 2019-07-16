import React, { Component, Fragment } from "react";
class NavMainMenu extends Component {
	//handleClick(e) {
	//	console.log(mainMenu);
	//}
	render() {
		return (
			<Fragment>
				<nav className="mainMenu">
					<div id="grow">
						<span>grow</span>
					</div>
					<div id="sweat">
						<span>sweat</span>
					</div>
					<div id="recover">
						<span>recover</span>
					</div>
					<div id="go">
						<span>go</span>
					</div>
				</nav>
			</Fragment>
		);
	}
}
export { NavMainMenu };
