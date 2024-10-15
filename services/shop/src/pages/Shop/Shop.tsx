import { Link } from 'react-router-dom';
import {shopRoutes} from '@packages/shared/src/routes/shop';

const shop = () => {
	return (
		<div>
			<h1>SHOP</h1>
			<div>
				<Link to={shopRoutes.shop}>Main</Link>
				<br/>
				<Link to={shopRoutes.second}>Second</Link>
			</div>
		</div>
	);
}

export default shop;