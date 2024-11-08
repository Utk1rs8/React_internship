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
          At [Ride It], we’re passionate about Riding and dedicated to helping you find the perfect bike and accessories to enhance your journey. Founded by a team of avid bikers, our mission is to make high-quality bikes and gear accessible to riders of all levels. Whether you're a seasoned rider or just starting out, we believe in empowering everyone to experience the freedom and adventure that biking brings.
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