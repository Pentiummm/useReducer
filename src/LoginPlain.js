import React, { useState } from 'react';
import { login } from './utils';

const LoginPlain = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const onSubmit = async e => {
		e.preventDefault();

		setIsLoading(true);
		setError('');

		try {
			await login({ username, password });
			setIsLoggedIn(true);
			setUsername('');
			setPassword('');
			setError('');
		} catch (error) {
			// do nothing for now
			setError('Incorrect username or password');
		}

		setIsLoading(false);
	};
	return (
		<div className="App">
			<div className="login-container">
				{isLoggedIn ? (
					<>
						<h1>Hello {username}!</h1>
						<button onClick={() => setIsLoggedIn(false)}>Log Out</button>
					</>
				) : (
					<form className="form" onSubmit={onSubmit}>
						{error && <p className="error">{error}</p>}
						<input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} />
						<input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)} />
						<button type="submit" disabled={isLoading}>
							{isLoading ? 'Logging in...' : 'Login'}
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default LoginPlain;
