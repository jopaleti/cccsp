// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import swal from "@sweetalert/with-react";
// import axios from "axios";
// import {
// 	faUserCircle,
// 	faArrowCircleRight,
// 	faClock,
// } from "@fortawesome/free-solid-svg-icons";
// import { apiRoot } from "../../config/config";

// const Login = (props) => {
// 	const [name, setName] = useState("");
// 	const [matno, setMatno] = useState("");
// 	const [course, setCourse] = useState("");
// 	const [time, setTime] = useState(0);

// 	useEffect(() => {
// 		console.log({ name, matno, course, time });
// 		axios.get(`${apiRoot}/config`).then((res) => {
// 			console.log(res.data.config);
// 			setCourse(res.data.config.course);
// 			setTime(res.data.config.time);
// 		});
// 	}, [name, matno]);

// 	const proceed = () => {
// 		if (!course) {
// 			return swal(
// 				"Oops",
// 				"Sorry admin has not set up this exam or test",
// 				"error"
// 			);
// 		} else {
// 			localStorage.setItem(
// 				"user",
// 				JSON.stringify({
// 					matric_number: matno,
// 					name: name,
// 				})
// 			);
// 			props.history.push({
// 				pathname: "/test-page",
// 				state: {
// 					name: name,
// 					matno: matno,
// 					course: course,
// 					time: time,
// 				},
// 			});
// 		}
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (!name) {
// 			return swal("Please enter your name", "", "error");
// 		}
// 		if (!matno) {
// 			return swal("Please enter your matric number", "", "error");
// 		}
// 		if (!course) {
// 			return swal(
// 				"Oops",
// 				"Sorry admin has not set up this exam or test",
// 				"error"
// 			);
// 		}
// 		return swal(
// 			<div
// 				style={{
// 					display: "flex",
// 					flexDirection: "column",
// 					justifyContent: "center",
// 				}}
// 			>
// 				<h2>WELCOME</h2>
// 				<hr />
// 				<div>
// 					<FontAwesomeIcon
// 						icon={faUserCircle}
// 						style={{ fontSize: 100, color: "rgba(11, 141, 247, 0.6)" }}
// 					/>
// 				</div>

// 				<h3 className="text-secondary text-uppercase">{name}</h3>
// 				<p className="text-secondary f-4">{matno}</p>

// 				<h5 style={{ marginTop: 40 }} className=" ">
// 					COURSE: {course}
// 				</h5>
// 				<div>
// 					<FontAwesomeIcon icon={faClock} style={{ fontSize: 40 }} />
// 				</div>
// 				<h5 className="my-1">TIME: {Math.floor(time)} MIN</h5>
// 			</div>,
// 			{
// 				buttons: ["CANCEL", "BEGIN EXAMINATION"],
// 			}
// 		).then((clicked) => {
// 			if (clicked) {
// 				proceed();
// 			}
// 		});
// 	};

// 	return (
// 		<div className="container-fluid">
// 			<div className="row">
// 				<div className="left col-md-6"></div>
// 				<div className="col-md-6 right">
// 					<h4 className="login-text">Login to start Exam or Test</h4>
// 					<form onSubmit={handleSubmit} className="login_form">
// 						<div>
// 							<label htmlFor="name" className="login-label">
// 								Name
// 							</label>
// 							<div className="login-input-icon">
// 								<FontAwesomeIcon icon={faUserCircle} />
// 								<input
// 									type="text"
// 									name="name"
// 									id="name"
// 									className="login-input"
// 									value={name}
// 									onChange={(e) => setName(e.target.value)}
// 								/>
// 							</div>
// 						</div>
// 						<div>
// 							<label htmlFor="matno" className="login-label">
// 								Matriculation Number
// 							</label>
// 							<div className="login-input-icon">
// 								<FontAwesomeIcon icon={faUserCircle} />
// 								<input
// 									type="text"
// 									name="matno"
// 									id="matno"
// 									className="login-input"
// 									value={matno}
// 									onChange={(e) => setMatno(e.target.value)}
// 								/>
// 							</div>
// 						</div>
// 						<button type="submit" className="login-button">
// 							Login <FontAwesomeIcon icon={faArrowCircleRight} />
// 						</button>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import swal from "@sweetalert/with-react";
import axios from "axios";
import {
	faUserCircle,
	faArrowCircleRight,
	faClock,
} from "@fortawesome/free-solid-svg-icons";
import { apiRoot } from "../../config/config";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			matno: "",
			course: "",
			time: 0,
		};
	}
	componentDidMount() {
		console.log(this.state);
		axios.get(`${apiRoot}/config/${this.state.course}`).then((res) => {
			console.log(res.data.config);
			this.setState({
				course: res.data.config.course,
				time: res.data.config.time,
			});
		});
	}

	proceed = () => {
		if (!this.state.course) {
			return swal(
				"Oops",
				"Sorry admin has not set up this exam or test",
				"error"
			);
		} else {
			localStorage.setItem(
				"user",
				JSON.stringify({
					matric_number: this.state.matno,
					name: this.state.name,
				})
			);
			this.props.history.push({
				pathname: "/test-page",
				state: {
					name: this.state.name,
					matno: this.state.matno,
					course: this.state.course,
					time: this.state.time,
				},
			});
		}
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.name) {
			return swal("Please enter your name", "", "error");
		}
		if (!this.state.matno) {
			return swal("Please enter your matric number", "", "error");
		}
		if (!this.state.course) {
			return swal(
				"Oops",
				"Sorry admin has not set up this exam or test",
				"error"
			);
		}
		return swal(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<h2>WELCOME</h2>
				<hr />
				<div>
					<FontAwesomeIcon
						icon={faUserCircle}
						style={{ fontSize: 100, color: "rgba(11, 141, 247, 0.6)" }}
					/>
				</div>

				<h3 className="text-secondary text-uppercase">{this.state.name}</h3>
				<p className="text-secondary f-4">{this.state.matno}</p>

				<h5 style={{ marginTop: 40 }} className=" ">
					COURSE: {this.state.course}
				</h5>
				<div>
					<FontAwesomeIcon icon={faClock} style={{ fontSize: 40 }} />
				</div>
				<h5 className="my-1">TIME: {Math.floor(this.state.time)} MIN</h5>
			</div>,
			{
				buttons: ["CANCEL", "BEGIN EXAMINATION"],
			}
		).then((clicked) => {
			if (clicked) {
				this.proceed();
			}
		});
	};
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="left col-md-6 ">
						<h1>Welcome To CCCSP PRE-EXAM QUIZ</h1>
					</div>
					<div className="col-md-6 right">
						<h4 className="login-text">Login to start Exam or Test</h4>
						<form onSubmit={this.handleSubmit} className="login_form">
							<div>
								<label className="label_login">FULL NAME</label>
								<br />
								<input
									onChange={(e) => this.setState({ name: e.target.value })}
									type="text"
									placeholder="Enter your first name"
									className="input-box"
								/>
							</div>

							<div>
								<label className="label_login">MATRIC NUMBER</label>
								<br />
								<input
									onChange={(e) => this.setState({ matno: e.target.value })}
									type="text"
									placeholder="Enter your matric number"
									className="input-box"
								/>
							</div>
							<div>
								<button className="login_btn">
									SUBMIT{" "}
									<FontAwesomeIcon
										icon={faArrowCircleRight}
										style={{ marginLeft: 4 }}
									/>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
