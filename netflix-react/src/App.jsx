import "./App.css";
import TopBar from "./components/TopBar";
import WatchitAgain from "./components/WatchitAgain";
import NewReleases from "./components/NewReleases";
import MyFooter from "./components/MyFooter";
import Tvshows from "./components/Tvshows";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route
            path="/Tvshows"
            element={
              <>
                <Tvshows />
                <WatchitAgain /> <NewReleases />
              </>
            }
          ></Route>
          {/* Route path="/WatchitAgain" element={}></Route>
          <Route path="/NewReleases" element={}></Route> */}
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
