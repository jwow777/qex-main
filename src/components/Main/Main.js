import "./Main.css";
import ReadyServices from "../ReadyServices/ReadyServices";
import { lazy } from "react";
const Services = lazy(() => import("../Services/Services"));
const Whyme = lazy(() => import("../Whyme/Whyme"));
const Clients = lazy(() => import("../Clients/Clients"));
const We = lazy(() => import("../We/We"));
const AboutUs = lazy(() => import("../AboutUs/AboutUs"));
const Cases = lazy(() => import("../Cases/Cases"));
const Feedback = lazy(() => import("../Feedback/Feedback"));
const Contacts = lazy(() => import("../Contacts/Contacts"));

function Main({onReadyServices, onCase}) {
  return (
    <main className="content">
      <ReadyServices isOpenPopup={onReadyServices}/>
      <Services />
      <Whyme />
      <Clients />
      <We />
      <AboutUs />
      <Cases isOpenPopup={onCase}/>
      <Feedback />
      <Contacts />
    </main>
  );
}

export default Main;
