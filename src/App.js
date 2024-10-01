import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Bike from "./Bike";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import LoginPage from "./LoginPage";




const App=()=>{
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>} />
              <Route path="bike" element={<Bike/>}/>
              <Route path="service" element={<Service/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="loginpage" element={<LoginPage/>}/>
              
            </Route>
           </Routes>
        </BrowserRouter>
          
   
        
        </>
    )
}

export default App;