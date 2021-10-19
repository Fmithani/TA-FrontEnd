import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import ScrollToTop from "./Componants/ScrollToTop";

// import page
const LandingPage = lazy(() => import('./Pages/LandingPage'));
const Upload = lazy(() => import('./Pages/UploadFile'));
const Detail = lazy(() => import('./Pages/LandingPage/Detail'));
const Archive = lazy(() => import('./Pages/Archive/index'));

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<></>}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/upload" name="Upload File" render={() => <Upload />} />
              <Route path="/detail" name="Image Detail Page" render={() => <Detail />} />
              <Route path="/archive" name="Landing Page" render={() => <Archive />} />
              <Route path="/home" name="Landing Page" render={() => <LandingPage />} />
              <Redirect from="/" to="/home" />
            </Switch>
          </ScrollToTop>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
