import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const HeaderApp = React.lazy(() => import('header/App'));
const FooterApp = React.lazy(() => import('footer/App'));
const App1 = React.lazy(() => import('app1/App'));
const App2 = React.lazy(() => import('app2/App'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>container</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <HeaderApp />
            <div>container</div>
            <App1 />
            <App2 />
            <FooterApp />
          </Router>
        </QueryClientProvider>
      </Suspense>
    </div>
  );
};

export default App;
