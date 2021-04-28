import ReadyServices from "../ReadyServices/ReadyServices";
import Whyme from "../Whyme/Whyme";
import Cases from "../Cases/Cases";
import Feedback from "../Feedback/Feedback";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import "./Main.css";
import We from "../We/We";

function Main() {
  return (
    <main className="content">
      <ReadyServices />
      <Services />
      <Whyme />
      <Clients />
      <We />
      <Cases />
      <Feedback />
    </main>
  );
}

export default Main;
