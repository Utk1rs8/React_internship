import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Bike from "./Bike";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import LoginForm from "./LoginForm";
import Registrationform from "./Registrationform";
import Datainsert from "./Datainsert";
import AdminDashboard from "./AdminDashboard";
import SliderDetail from "./SliderDetail";
import Accessories from "./Accessories";
import BikeDetails from "./Bikedetails";
import CartItem from "./Cartitem";
import BuyNow from "./BuyNow";
import SubscriptionPage from "./SubscriptionPage";



const App=()=>{
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>} />
              <Route path="bike" element={<Bike/>}/>
              <Route path="/bikedetails/:id" element={<BikeDetails/>} />
              <Route path="service" element={<Service/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="loginform" element={<LoginForm/>}/>
              <Route path="registrationform" element={<Registrationform/>}/>
              <Route path="datainsert" element={<Datainsert/>}/>
              <Route path="sliderdetail" element={<SliderDetail/>}/>
              <Route path="accessories" element={<Accessories/>}/>
              <Route path="Adminlogin" element={<AdminDashboard/>}/>
              <Route path="cartitem" element={<CartItem/>} />
              <Route path="buynow" element={<BuyNow/>} />
              <Route path="subscriptionpage" element={<SubscriptionPage/>} />
            </Route>
           </Routes>
        </BrowserRouter>
          
   
        
        </>
    )
}

export default App;