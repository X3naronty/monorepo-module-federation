import { App } from '@/components/App';
import { Shop } from '@/pages/Shop';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserCard } from '@packages/shared/src/components/UserCard';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        ),
      },
			{
        path: '/shop/second',
        element: (
          <Suspense fallback={'Loading...'}>
            <div style={{color: 'red'}}>
							<h2>
                Second page
              </h2>
              <UserCard username={'FROM SHOP'}/>
						</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;