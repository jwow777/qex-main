import React, {
  lazy,
  Suspense,
  // useEffect,
  // useRef,
  useState,
} from 'react';
import { CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

import Main from '../Main/Main';

const Footer = lazy(() => import('../Footer/Footer'));
const PopupFeedback = lazy(() => import('../PopupFeedback/PopupFeedback'));
const PopupTest = lazy(() => import('../PopupTest/PopupTest'));
const PopupPolicy = lazy(() => import('../PopupPolicy/PopupPolicy'));
const PopupReadyServices = lazy(() => import('../PopupReadyServices/PopupReadyServices'));
const PopupCase = lazy(() => import('../PopupCase/PopupCase'));
const PopupDetailsCase = lazy(() => import('../PopupDetailsCase/PopupDetailsCase'));

function App() {
  const [openFeedback, setOpenFeedback] = useState(false);
  const handleClickOpenFeedback = () => setOpenFeedback(true);
  const handleCloseFeedback = () => setOpenFeedback(false);

  const [openTest, setOpenTest] = useState(false);
  const handleClickOpenTest = () => setOpenTest(true);
  const handleCloseTest = () => setOpenTest(false);

  const [openReadyServices, setOpenReadyServices] = useState(false);
  const [readyServiceData, setReadyServiceData] = useState(null);
  const handleClickOpenReadyServices = () => setOpenReadyServices(true);
  const handleCloseReadyServices = () => setOpenReadyServices(false);

  const [openCase, setOpenCase] = useState(false);
  const [caseData, setCaseData] = useState(null);
  const handleClickOpenCase = () => setOpenCase(true);
  const handleCloseCase = () => setOpenCase(false);

  const [openDetailsCase, setOpenDetailsCase] = useState(false);
  const handleClickOpenDetailsCase = () => setOpenDetailsCase(true);
  const handleCloseDetailsCase = () => setOpenDetailsCase(false);

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleClickOpenPolicy = () => () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

  // const descriptionElementRef = useRef(null);
  // useEffect(() => {
  //   if (openFeedback) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  //   if (openPolicy) {
  //     const { current: descriptionElement } = descriptionElementRef;
  //     if (descriptionElement !== null) {
  //       descriptionElement.focus();
  //     }
  //   }
  // }, [openFeedback, openPolicy]);
  return (
    <>
      <Header onFeedback={handleClickOpenFeedback} onTest={handleClickOpenTest} />
      <Suspense
        fallback={
          <div className='page__progress'>
            <CircularProgress />
          </div>
        }
      >
        <Switch>
          <Route exact path='/'>
            <Main
              onReadyServices={handleClickOpenReadyServices}
              dataService={setReadyServiceData}
              onCase={handleClickOpenCase}
              dataCase={setCaseData}
              openPolicy={handleClickOpenPolicy}
            />
            <PopupFeedback
              openPolicy={handleClickOpenPolicy}
              open={openFeedback}
              close={handleCloseFeedback}
            />
            <PopupTest open={openTest} close={handleCloseTest} />
            <PopupReadyServices
              open={openReadyServices}
              close={handleCloseReadyServices}
              data={readyServiceData}
            />
            <PopupCase
              open={openCase}
              close={handleCloseCase}
              data={caseData}
              onDetailsCase={handleClickOpenDetailsCase}
            />
            <PopupDetailsCase open={openDetailsCase} close={handleCloseDetailsCase}/>
            <PopupPolicy open={openPolicy} close={handleClosePolicy}/>
          </Route>
        </Switch>
        <Footer openPolicy={handleClickOpenPolicy}/>
      </Suspense>
    </>
  );
}

export default App;
