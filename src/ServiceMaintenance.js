// BikeMaintenance.js
import React from "react";

const ServiceMaintenance = () => {
  return (
    <div className="maintenance-page">
      <div className="maintenance-header">
        <h1>Bike Maintenance Services</h1>
        <p className="maintenance-summary">
          Keep your bike in top shape with our comprehensive maintenance services.
          From regular checkups to full overhauls, our experienced team ensures a smooth and safe ride.
        </p>
      </div>

      <div className="maintenance-section">
        <h2>Service Summary</h2>
        <p>
          Regular maintenance is essential to extend the life of your bike and ensure safe rides.
          Our team provides a range of services including brake adjustments, chain lubrication, tire checks,
          and more. Whether you’re commuting or off-roading, we’ve got you covered.
        </p>
      </div>

      <div className="maintenance-section">
        <h2>Maintenance Features</h2>
        <ul className="maintenance-features">
          <li>Full Bike Inspection</li>
          <li>Brake and Gear Adjustments</li>
          <li>Chain and Drivetrain Lubrication</li>
          <li>Wheel Alignment and Tire Inflation</li>
          <li>Frame Cleaning and Polishing</li>
          <li>Suspension and Fork Checks</li>
          <li>Electric System Diagnostics (for E-bikes)</li>
        </ul>
      </div>


    </div>
  );
};

export default ServiceMaintenance;
