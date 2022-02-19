import { BrowserRouter, Routes, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import "./App.css";
import Header from "./components/Header";
import Coinpage from "./Pages/Coinpage";
import Homepage from "./Pages/Homepage";

function App() {
const useStyles=makeStyles(()=>({
  App: {
    backgroundColor:"#14161a",
    color: "white",

  }
}))

const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/coins/:id" element={<Coinpage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
