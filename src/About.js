import React from 'react';

// import aboutImage from '../static/image/aboutImage.jpg'; // Adjust path based on your project

const About = () => {
  return (
    <>
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about who we are and what we do</p>
      </div>
      
      <div className="about-section">
        <div className="about-image">
          {/* <img src={aboutImage} alt="About Us" /> */}
        </div>
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet lectus auctor, tincidunt risus nec, convallis arcu. Suspendisse potenti. 
            Our team consists of passionate individuals who strive to deliver high-quality products and services.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Bob Johnson</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default About;