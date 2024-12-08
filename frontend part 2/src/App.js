import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">Swasthya Chetna</div>
        <nav className="nav-links">
          <a href="#contact">Contact Us</a>
          <a href="#referrals">Referrals</a>
          <a href="#support">Support</a>
          <button className="learn-more">Learn More</button>
          <button className="login">Login</button>
        </nav>
      </header>
      <main className="content">
        <div className="text-section">
          <h1>Discover a New Era of Credit Evaluation</h1>
          <p>Dedicated to Helping You Thrive Financially</p>
          <button className="signup-button">Sign Up</button>
        </div>
        <div className="illustration">
          <img
            src="/coinexchange.png" 
            alt="Credit Evaluation Illustration"
          />
        </div>
        

      </main>
    </div>
  );
}

export default App;
