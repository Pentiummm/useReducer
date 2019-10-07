export async function login({ username, password }) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'pvh' && password === 'pvh') {
				resolve();
			} else {
				reject();
			}
		}, 1000);
	});
}
