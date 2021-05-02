import "./Main.css";
import ReadyServices from "../ReadyServices/ReadyServices";
import Services from "../Services/Services";
import Whyme from "../Whyme/Whyme";
import Clients from "../Clients/Clients";
import We from "../We/We";
import AboutUs from "../AboutUs/AboutUs";
import Cases from "../Cases/Cases";
import Feedback from "../Feedback/Feedback";
import Contacts from "../Contacts/Contacts";

function Main({onReadyServices}) {
  return (
    <main className="content">
      <ReadyServices isOpenPopup={onReadyServices}/>
      <Services />
      <Whyme />
      <Clients />
      <We />
      <AboutUs />
      <Cases />
      <Feedback />
      <Contacts />
    </main>
  );
}

export default Main;
