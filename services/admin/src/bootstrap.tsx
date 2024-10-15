import { LazyAbout } from '@/pages/About/About.lazy';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { router } from './router/Router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);



container.render(<RouterProvider router={router} />);
