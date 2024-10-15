
export const UserCard = ({username}: {username?: string}) => {
	return (
		<div style={{border: '1px solid green', padding: '20px'}}>
			<div>
				Username: {username ?? 'user'}
			</div>
			<div>
				password: 123
			</div>
		</div>
	);
}