import { Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <Route>
      <Header />
      <Main />
      <Footer />
    </Route>
  );
}

export default App;
