import { useState } from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import FeedbackPopup from "./FeedbackPopup/FeedbackPopup";
import ReadyServicesPopup from "./ReadyServicesPopup/ReadyServicesPopup";

function App() {
  const [isFeedbackPopupOpen, setIsFeedbackPopupOpen] = useState(false);
  const [isReadyServicesPopupOpen, setIsReadyServicesPopupOpen] = useState(null);

  function handleFeedbackClick() {
    setIsFeedbackPopupOpen(true);
  }

  function closeAllPopups() {
    setIsFeedbackPopupOpen(false);
    setIsReadyServicesPopupOpen(false);
  }
  return (
    <Route>
      <Header onFeedback={handleFeedbackClick} />
      <Main onReadyServices={setIsReadyServicesPopupOpen}/>
      <Footer />
      <FeedbackPopup isOpen={isFeedbackPopupOpen} onClose={closeAllPopups} />
      <ReadyServicesPopup isOpen={isReadyServicesPopupOpen} onClose={closeAllPopups} />
    </Route>
  );
}

export default App;
