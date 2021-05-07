import { CircularProgress } from "@material-ui/core";
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import CasePopup from "./Popup/CasePopup/CasePopup";
import DetailsCasePopup from "./Popup/DetailsCasePopup/DetailsCasePopup";
import Main from "./Main/Main";
// const Main = lazy(() => import("./Main/Main"));
const Footer = lazy(() => import("./Footer/Footer"));
const FeedbackPopup = lazy(() => import("./Popup/FeedbackPopup/FeedbackPopup"));
const Policy = lazy(() => import("./Policy/Policy"));
const ReadyServicesPopup = lazy(() => import("./Popup/ReadyServicesPopup/ReadyServicesPopup"));
const TestPopup = lazy(() => import("./Popup/TestPopup/TestPopup"));

function App() {
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);
  const [isTestPopupOpen, setIsTestPopupOpen] = useState(false);
  const [isReadyServicesPopupOpen, setIsReadyServicesPopupOpen] = useState(null);
  const [isCasePopupOpen, setIsCasePopupOpen] = useState(null);
  const [isDetailsCasePopupOpen, setIsDetailsCasePopupOpen] = useState(false);

  function handleFeedbackClick() {
    setIsFeedbackPopupOpen(true);
  }

  function handleTestClick() {
    setIsTestPopupOpen(true);
  }

  function handleDetailsCaseClick() {
    setIsDetailsCasePopupOpen(true);
  }

  function closeAllPopups() {
    setIsFeedbackPopupOpen(false);
    setIsTestPopupOpen(false);
    setIsReadyServicesPopupOpen(false);
    setIsCasePopupOpen(false);
  }

  function closeDetailsCasePopup() {
    setIsDetailsCasePopupOpen(false);
  }

  useEffect(() => {
    const closeByOverlay = (e) => {
      if (e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }
    if (isFeedbackPopupOpen || isTestPopupOpen || isReadyServicesPopupOpen || isCasePopupOpen) {
      window.addEventListener('click', closeByOverlay);
    }
    return (() => {
      window.removeEventListener('click', closeByOverlay);
    })
  }, [isFeedbackPopupOpen, isTestPopupOpen, isReadyServicesPopupOpen, isCasePopupOpen]);


  return (
    <>
      <Header onFeedback={handleFeedbackClick} onTest={handleTestClick} />
      <Suspense fallback={<div className="page__progress"><CircularProgress /></div>}>
        <Switch>
          <Route exact path="/">
            <Main 
              onReadyServices={setIsReadyServicesPopupOpen} 
              onCase={setIsCasePopupOpen}
            />
            <FeedbackPopup
              isOpen={isFeedbackPopupOpen}
              onClose={closeAllPopups}
            />
            <TestPopup isOpen={isTestPopupOpen} onClose={closeAllPopups} />
            <ReadyServicesPopup
              isOpen={isReadyServicesPopupOpen}
              onClose={closeAllPopups}
            />
            <CasePopup isOpen={isCasePopupOpen} onClose={closeAllPopups} onDetailsCase={handleDetailsCaseClick}/>
            <DetailsCasePopup isOpen={isDetailsCasePopupOpen} onClose={closeDetailsCasePopup}/>
          </Route>
          <Route path="/policy">
            <Policy />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
