import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { Sweat } from "./sweat.jsx";
import { UsrStatsForm } from "./usr_stats_form.jsx";
import { NavMainMenu } from "./nav_main_menu.jsx";
import { UsrStatsBtn } from "./usr_btn.jsx";
import { UsrStats } from "./usr_stats.jsx";
class NotFound extends React.Component {
	render() {
		return <h1>404, Nothing is here</h1>;
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usrGender : null,
			usrAge    : null,
			usrHeight : null,
			usrWeight : null
		};
	}

	submitForm(obj) {
		this.setState({
			usrGender : obj.gender,
			usrAge    : obj.age,
			usrHeight : obj.height,
			usrWeight : obj.weight
		});
	}

	render() {
		return (
			<div className="row">
				<HashRouter>
					<div className="col-2 leftBar">
						<UsrStats
							usrGender={this.state.usrGender}
							usrAge={this.state.usrAge}
							usrHeight={this.state.usrHeight}
							usrWeight={this.state.usrWeight}
						/>
						<NavLink to="/usrstatsform">
							<UsrStatsBtn />
						</NavLink>
					</div>
					<div className="col-10 mainDisplay">
						<Switch>
							<Route exact path="/" component={NavMainMenu} />
							<Route
								path="/usrstatsform"
								render={(props) => <UsrStatsForm {...props} submitForm={this.submitForm.bind(this)} />}
							/>
							<Route path="/sweat" component={Sweat} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</HashRouter>
			</div>
		);
	}
}
document.addEventListener("DOMContentLoaded", function() {
	ReactDOM.render(<App />, document.getElementById("app"));
});
