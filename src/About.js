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
            <img src="utku.jpg" alt="Team Member 1" />
            <h3>Utkarsh Churariya</h3>
            <p>CEO & Founder & Lead</p>
          </div>
          <div className="team-member">
            <img src="dev.jpg" alt="Team Member 2" />
            <h3>Devanshu Vishwakarma</h3>
            <p>BackEnd Developer</p>
          </div>
          <div className="team-member">
              <img src="nishu.jpeg" alt="Team Member 3" />
            <h3>Nishant Malviya</h3>
              <p>FrontEnd Developer</p>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}


export default About;