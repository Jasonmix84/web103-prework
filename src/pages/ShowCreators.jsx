import { Link } from 'react-router-dom';

export default function ShowCreators() {
	return (
		<div>
			<div style={{ marginBottom: '1rem' }}>
				<Link to="/add">
					<button>Add Creator</button>
				</Link>
			</div>
			{/* ...existing code for showing creators... */}
			<h2>Show Creators Page</h2>
		</div>
	);
}
