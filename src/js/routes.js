import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './app/MainLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const Home = lazy(() => import('./app/pages/Home'));
const About = lazy(() => import('./app/pages/About'));
const Contact = lazy(() => import('./app/pages/Contact'));

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
