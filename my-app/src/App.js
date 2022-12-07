import Navbar from "./navbar"
import Home from "./pages/Home"
import Endangered from "./pages/endanimals"
import Indigenous from "./pages/inpeople"
import Charities from "./pages/Charities"
import {Route,Routes} from "react-router-dom"
// helps replace switch code and use browserrouter in index.js 
//stops the rerendering of pages
function App() {
/*  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
      case"/endanimals":
      component = <Endangered/>
      break
      case "/inpeople":
        component = <Indigenous/>
        break
       case "/charities":
        component = <Charities/>
  }*/
  return(
  <>
  <Navbar/>
  <div className="container"> 
  <Routes>    
    <Route path="/" element = {<Home/>} />
    <Route path="/endanimals" element = {<Endangered/>} />
    <Route path="/inpeople" element = {<Indigenous/>} />
    <Route path="/charities" element = {<Charities/>} />
  </Routes>
  </div>
  </>
  )}

export default App
