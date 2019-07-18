import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { Sliders } from "./sliders.jsx";
import { UsrStatsForm } from "./usr_stats_form.jsx";
import { NavMainMenu } from "./nav_main_menu.jsx";
import { UsrStatsBtn } from "./usr_btn.jsx";
import { UsrStats } from "./usr_stats.jsx";
//import { data } from "./data";
class NotFound extends React.Component {
	render() {
		return <h1>404, Nothing is here</h1>;
	}
}
class App extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-2 leftBar">
					<UsrStats />
					<UsrStatsBtn />
				</div>

				<div className="col-10 mainDisplay">
					<HashRouter>
						<Switch>
							<Route exact path="/" component={NavMainMenu} />
							<Route path="/usrstatsform" component={UsrStatsForm} />
							<Route path="/sliders" component={Sliders} />
							<Route path="/countdown" component={Sliders} />
							<Route component={NotFound} />
						</Switch>
					</HashRouter>
				</div>
			</div>
		);
	}
}
document.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(<App />, document.getElementById("app"));
});
