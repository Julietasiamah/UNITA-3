import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <>
      <MyNav title="Epibooks" />
      <Container>
        <Welcome description="Welcome to Epibooks!" />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter li1="Contatti" li2="Social" li3="About us" li4="Address" />
      <CommentArea />
    </>
  );
}

export default App;
