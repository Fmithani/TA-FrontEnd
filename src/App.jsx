import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// import page
const LandingPage = lazy(() => import('./pages/landingPage'));
const Upload = lazy(() => import('./pages/uploadFile'));

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/upload" name="Upload File" render={() => <Upload />} />
            <Route path="/home" name="Landing Page" render={() => <LandingPage />} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
