import React, { Component, Fragment } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

class UsrStatsForm extends Component {
	/*constructor(props) {
		super(props);
		if (this.props.prevData.mega !== undefined) {
			this.state = this.props.prevData;
		}
	}
	handleClick(e) {
		e.preventDefault();
		let obj = {
			test : 1,
			mega : [
				{ a: 1 },
				{ b: 2 }
			]
		};
		let str = "data:text/octstream;{" + JSON.stringify(obj);
		let a = document.createElement("a");
		a.href = str;
		a.download = "data.json";
		document.body.appendChild(a);
		a.click();
	}*/
	componentDidMount() {
		const radioGender = document.querySelectorAll("form.usrStats>div.gender>label.custom-radio");
		radioGender.forEach(function(element) {
			element.addEventListener("click", function(event) {
				radioGender.forEach(function(element) {
					console.log(element);
					event.stopPropagation();
					if (element.firstElementChild.checked) {
						element.style.color = "#92140c";
					} else {
						element.style.color = "#fdf0d5";
					}
				});
			});
		});
		console.log(radioGender);
	}

	render() {
		return (
			<Fragment>
				<form className="usrStats">
					<div className="gender">
						<label className="custom-radio">
							<input type="radio" name="gender" value="1" />
							<i className="fas fa-mars" />
						</label>
						<label className="custom-radio">
							<input type="radio" name="gender" value="2" />
							<i className="fas fa-venus" />
						</label>
					</div>
					<div className="select">
						<input type="month" name="birthdate" placeholder="birth date" />
						<input type="number" name="height" placeholder="height" />
						<input type="number" name="weight" placeholder="weight" />
					</div>
					<div className="save">
						<Link to="/">
							<input type="button" value="back" />
						</Link>
						<input type="submit" value="save" />
					</div>
				</form>
			</Fragment>
		);
	}
}
export { UsrStatsForm };
