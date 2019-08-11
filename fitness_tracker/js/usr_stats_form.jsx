import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class UsrStatsForm extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSubmit() {
		event.preventDefault();
		this.props.submitForm(this.state);
	}

	handleChange(event) {
		if (event.target.type === "month") {
			let today = new Date();
			let birthday = new Date(event.target.value);
			let thisAge = today.getFullYear() - birthday.getFullYear();
			this.setState({ age: thisAge });
		} else {
			this.setState({ [event.target.name]: event.target.value });
		}
	}

	componentDidMount() {
		const radioGender = document.querySelectorAll("form.usrStats>div.gender>label.custom-radio");
		radioGender.forEach(function(element) {
			element.addEventListener("click", function(event) {
				radioGender.forEach(function(element) {
					if (element.firstElementChild.checked) {
						element.style.color = "#92140c";
					} else {
						element.style.color = "#fdf0d5";
					}
				});
			});
		});
	}

	render() {
		return (
			<Fragment>
				<form className="usrStats" action="#" onSubmit={this.handleSubmit.bind(this)}>
					<div className="gender">
						<label className="custom-radio">
							<input type="radio" name="gender" value="male" onChange={this.handleChange.bind(this)} />
							<i className="fas fa-mars" />
						</label>
						<label className="custom-radio">
							<input type="radio" name="gender" value="female" onChange={this.handleChange.bind(this)} />
							<i className="fas fa-venus" />
						</label>
					</div>
					<div className="select">
						<input
							type="month"
							name="birthdate"
							placeholder="birth date"
							onChange={this.handleChange.bind(this)}
						/>
						<input
							type="number"
							name="height"
							placeholder="height"
							onChange={this.handleChange.bind(this)}
						/>
						<input
							type="number"
							name="weight"
							placeholder="weight"
							onChange={this.handleChange.bind(this)}
						/>
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
