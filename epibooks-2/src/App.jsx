import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
//import AlltheBooks from "./components/AlltheBooks";
import romance from "../src/data/romance.json";
import MyFooter from "./components/MyFooter";

function App() {
  console.log(romance);
  return (
    <>
      <MyNav title="Epibook" />

      <Welcome description="Welcome to Epibook website!" />
      <SingleBook book={romance[0]} />
      <BookList books={romance} />

      {/*<AlltheBooks />*/}
      <MyFooter li1="Home" li2="Pricing" li3="Contacts" li4="Social media" />
    </>
  );
}

export default App;
