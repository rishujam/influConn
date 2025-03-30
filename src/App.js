import './App.css';
import AutoScrollSlider from './components/AutoScrollSlider';
import Button from './components/Button';
import Column from './components/Column';
import './components/HomeDesigns.css';
import Row from './components/Row';
import Spacer from './components/Spacer';
import TextView from './components/TextView';
import React, { useState } from "react";
import Modal from "./components/Modal";

/**
 * The App component renders the main layout and sections of the InfluConnect application.
 * It includes a header with navigation items, branding information, and various sections
 * describing the platform features for brands and influencers. Each section provides 
 * information and actions to engage users, such as buttons for different user flows and 
 * informative text views. The App component is styled with CSS classes and utilizes 
 * additional components like Button, Column, Row, Spacer, and TextView for structure 
 * and styling.
 */
function App() {
  const images = [
    "/images/insta_influencer.jpeg",
    "/images/home_bg2.jpeg"
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="logo">
          InfluConnect <span className="byline">by Xenovara Solutions</span>
        </div>
        <div className="headerNavContainer">
          <nav>
            <a className="navItem" href="#about">About</a>
            <a className="navItem" href="#how-it-works">How it Works</a>
            <a className="navItem" href="#for-brands">For Brands</a>
            <a className="navItem" href="#for-influencers">For Influencers</a>
          </nav>
        </div>
        <div className="header-buttons">
          <Button text="Get Started" variant="primary" onClick={() => setIsModalOpen(true)} />
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={() => alert("Details Sent!")} />
      <section id="about"> {
        <div className="brandingContainer">
          <div className="brandingTextContainer">
            <div className="textHead">Connect your brand with authentic voices</div>
            <div className="textBody">Match with micro-influencers who truly understand your brand and reach engaged audiences.</div>
            <Spacer height='8px' />
            <div className="columnWrapContent" style={{ paddingTop: '16px' }}>
              <Button text="I'm a Brand" variant="primary" onClick={() => alert("Primary Clicked!")} />
              <Button text="I'm an Influencer" variant="secondary" onClick={() => alert("Secondary Clicked!")} />
            </div>
            <Spacer height='8px' />
            <ul className="bullet-list">
              <li>Built for Small Businesses & Micro-Influencers</li>
              <li>Find the Right Match</li>
              <li>Opportunities for Influencers</li>
              <li>Easy Search & Filtering</li>
              <li>Seamless Communication</li>
              <li>Data-Driven Insights</li>
            </ul>
          </div>
          <div className="image-container">
            <AutoScrollSlider images={images} />
          </div>
        </div>
      } </section>

      <Spacer />

      {/* How It Works Section */}
      <section id="how-it-works"> {
        <Column alignment="center" bgColor="#F8F9FA">
          <Spacer height='16px' />
          <div className="textHead2">How It Works</div>
          <Spacer height='16px' />
          <Row alignment="space-evenly" paddingBottom='16px'>
            <Column>
              <img src="images/search.png" alt="Search Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Find Your Match"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Our AI-powered matching system connects you with the perfect partners based on your needs."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/deal.png" alt="deal Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Collaborate"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Work together seamlessly through our platform with integrated tools and communication."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/grow.svg" alt="Grow Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Grow Together"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Track performance, measure success, and scale your influence or brand reach."} fontSize='14px' alignment='center' />
            </Column>
          </Row>
        </Column>
      } </section>

      {/* For Influencers */}
      <section id="for-influencers"> {
        <Column alignment="center" bgColor="#FFFFFF">
          <Spacer height='16px' />
          <div className="textHead2">For Influencers</div>
          <Spacer height='16px' />
          <Row alignment="space-evenly" paddingBottom='16px'>
            <Column>
              <img src="images/research.png" alt="research Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Discover brand collaborations"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Explore and apply for brand campaigns that match your profile, or let brands reach out to you."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/promote.png" alt="promote Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Promote & Engage"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Create engaging content and share it with your audience to boost brand visibility."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/earning.png" alt="earning Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Earn & Grow"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Get rewarded for your influence while building strong relationships with brands."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/progress.png" alt="progress Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Track Your Success"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Monitor campaign performance and insights to refine your strategy."} fontSize='14px' alignment='center' />
            </Column>
          </Row>
        </Column>
      } </section>


      {/* For Brands */}
      <section id="for-brands"> {
        <Column alignment="center" bgColor="#F8F9FA">
          <Spacer height='16px' />
          <div className="textHead2">For Brands</div>
          <Spacer height='16px' />
          <Row alignment="space-evenly" paddingBottom='16px'>
            <Column>
              <img src="images/find.png" alt="Find Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Find the Right Influencers"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Search and discover influencers that align with your brand’s goals."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/filter.png" alt="filter Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Advanced Filtering"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Narrow down results by location, niche, engagement, audience demographics, and more."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/outreach.png" alt="outreach Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Seamless Outreach"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Connect with influencers effortlessly through our platform for collaboration."} fontSize='14px' alignment='center' />
            </Column>
            <Column>
              <img src="images/track_performance.png" alt="track_performance Img" width="64" height="64" />
              <Spacer height='8px' />
              <TextView fontWeight='700' color='#000000' text={"Track Campaign Performance"} />
              <Spacer height='8px' />
              <TextView fontWeight='400' text={"Measure engagement and impact to optimize future partnerships."} fontSize='14px' alignment='center' />
            </Column>
          </Row>
        </Column>
      } </section>


      {/* Question Section */}
      <Column bgColor="linear-gradient(to right, #2563EB, #0F172A)">
        <Spacer height='56px' />
        <TextView text={"Ready To Scale Your Influence?"} color="#ffffff" fontSize='24px' fontWeight='700' alignment='center' />
        <Spacer height='16px' />
        <TextView text={"Join thousands of successful partnerships on our platform"} color="#ffffff" fontSize='16px' fontWeight='400' alignment='center' />
        <Spacer height='16px' />
        <Button text="Get Started" variant="tertiary" onClick={() => alert("Tertiary Clicked!")} />
        <Spacer height='56px' />
      </Column>

      {/* Contact Section */}
      <Column bgColor="#0F172A">
        <Spacer height='36px' />
        <TextView text={"Contact Us"} color="#ffffff" fontSize='24px' fontWeight='700' alignment='center' />
        <Spacer height='8px' />
        <TextView text={"Email: influconn@gmail.com"} color="#ffffff" fontSize='16px' fontWeight='400' alignment='center' />
        <Spacer height='36px' />
      </Column>
    </div>
  );
}

export default App;
