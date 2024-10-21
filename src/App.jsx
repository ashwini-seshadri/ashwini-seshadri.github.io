import './App.css'
import MainView from './sections/MainView/MainView.jsx'
// import Contact from "./sections/Contact/Contact.jsx";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
      // <Router>
      //     <Routes>
      //         <Route path="/" element={<MainView />} />
      //         <Route path="/contact" element={<Contact />} />
      //     </Routes>
      // </Router>
    <>
        <MainView />
        {/*<Contact />*/}
    </>
  )
}

export default App
