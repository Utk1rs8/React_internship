import React from 'react';
import { Link } from 'react-router-dom';


const Service=()=>{
    return(
        <>
        <div className="service-container">
            <header className="service-header">
                <h1>Bike Services</h1>
                <p>Keep your bike in top condition with our expert services!</p>
            </header>
            
            <section className="service-list">
                <div className="service-item">
                <Link to="../subscriptionpage" style={{textDecoration:'none'}} ><h2>Subscription Plans</h2></Link>
                <p> Details of different plans available, such as monthly, quarterly, or annual subscriptions. These may include tiered options (e.g., Basic, Standard, Premium) with varying levels of benefits and pricing.</p>
                </div>
                <div className="service-item">
                <Link to="../servicemaintenance" style={{textDecoration:'none'}}><h2>Maintenance</h2></Link>
                <p>Briefly describe the types of maintenance services offered, like tune-ups, repairs, tire replacements, chain adjustments, and brake inspections.Emphasize the importance of regular maintenance for longevity and performance.</p>
                </div>
                <div className="service-item">
                <h2>Spare Parts</h2>
                <p>Clearly defined categories, such as "Brakes," "Tires & Tubes," "Chains," "Pedals," "Gears & Derailleurs," and "Suspension." This helps users quickly find the parts they need.</p>
                </div>
                <div className="service-item">
                <h2>Thanks For Supporting</h2>
                <p>Express gratitude for the purchase and welcome the customer to the brand's community of riders.</p>
                <h2>#Born To Race</h2>
                </div>
            </section>
            

        </div>
        </>
    )
}
export default Service;