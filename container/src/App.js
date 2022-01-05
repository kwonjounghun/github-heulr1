import React, { Suspense } from 'react';
const HeaderApp = React.lazy(() => import('header/App'));
const FooterApp = React.lazy(() => import('footer/App'));

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
        <HeaderApp />
        <div>container</div>
        <FooterApp />
      </Suspense>
    </div>
  );
};

export default App;
