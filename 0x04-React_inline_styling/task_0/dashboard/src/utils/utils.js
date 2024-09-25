 export const getFullYear = () => {
	return new Date().getFullYear();
 }

export const getFooterCopy = (isIndex) => {
	if (isIndex) {
		return `Holberton School`;
	} else {
		return `Holberton School main dashboard`;
	}
}

export const getLatestNotification = (flag) => {
	const msg = '<strong>Urgent requirement</strong> - complete by EOD';
	if (flag) {
		return {
			__html: msg
		}
	}
	return msg;
}


