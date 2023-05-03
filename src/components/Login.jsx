import React, { useState} from "react";
export default function login(props) {

	const[userName, setUserName] = useState(props)
	const[passWord, setPassWord] = useState(props)
	
	function validateForm() {
		return userName.length > 0 && passWord.length > 0
	}
	function handleSubmit(event) {
		event.preventDefault()
	}
	return (
		<div className="login">
			{/* <Form onSubmit={handleSubmit}>
				<Form.Group size="lg" controlId="userName">
				<Form.Label>Email</Form.Label>
				<Form.Control autofocus type="email" value={userName} onChange={(e) => setUserName(e.target.value)}
				/>
			</Form.Group>
				<Form.Group size="lg" controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control type="passWord" value={passWord} onChange={(e) => setPassWord(e.target.value)}
				/>
			</Form.Group>
				<Button block size="lg" type="submit" disabled={!validateForm()}>
					Login
				</Button>
			</Form> */}
            <h1>Login Page</h1>
		</div>
	)
}
