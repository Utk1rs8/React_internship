import React from 'react';



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
                <h2>Basic Tune-Up</h2>
                <p>Includes brake adjustments, gear tuning, and chain lubrication. Perfect for regular maintenance.</p>
                <span className="price">$50</span>
                </div>
                <div className="service-item">
                <h2>Advanced Tune-Up</h2>
                <p>Everything in the Basic Tune-Up plus a detailed inspection of the bike’s components.</p>
                <span className="price">$90</span>
                </div>
                <div className="service-item">
                <h2>Full Overhaul</h2>
                <p>A comprehensive service to ensure your bike is performing at its best, including a full breakdown and rebuild.</p>
                <span className="price">$200</span>
                </div>
                <div className="service-item">
                <h2>Custom Builds</h2>
                <p>Work with our experts to build the bike of your dreams. From frame selection to component installation.</p>
                <span className="price">Contact for pricing</span>
                </div>
            </section>
            
            <footer className="service-footer">
                <p>Contact us to schedule your bike service or visit our shop for more details!</p>
                <button className="contact-button">Get in Touch</button>
            </footer>
        </div>
        </>
    )
}
export default Service;