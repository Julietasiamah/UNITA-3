import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AlltheBooks from "./components/AlltheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav title="Epibook" />

      <Welcome description="Welcome to Epibook website!" />
      <AlltheBooks />
      <MyFooter li1="Home" li2="Pricing" li3="Contacts" li4="Social media" />
    </>
  );
}

export default App;
