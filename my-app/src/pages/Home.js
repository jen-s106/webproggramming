import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import stylesheet from './App.css';
import Carousel from 'react-bootstrap/Carousel';
import firstimg from './imgCarousel/forest.jpg';
import secondimg from './imgCarousel/giantpanda.jpg';
import thirdimg from './imgCarousel/mundurukupeople.jpg';
import Popup from "./Popup";
import './Popup.css'
import {useState} from 'react';

export default function Home(){
    const [buttonPopup, setButtonPopup] = useState(false);
    return( 
    <div className={stylesheet}>  
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={firstimg}
          alt="First"
          style={{height: 500, width: 500}}
        />
        <Carousel.Caption>
          <h3>Amazon Rainforest</h3>
          <p>
            The forest is located in South America with an area of 6.7 million sq km.
            About 60% of the forest is in Brazil while the rest is located in 
            Bolivia, Colombia, Ecuador, Guyana, Peru, Suriname, Venezuela and French Guiana.
            Animals and indigenous people who live in this area are being harmed because
            of deforestation. We are chopping down trees to make room for agriculture.
            Read more about the Amazon rainforest Crisis:         
            <a href='https://www.wwf.org.uk/updates/ways-help-amazon-rainforest'>WWF</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={secondimg}
          alt="Second slide"
          style={{height: 500, width: 500}}
        />
        <Carousel.Caption>
          <h3>Giant Panda</h3>
          <p>
            This fluffy animal is located in southwest china
            and lives on high mountains. Their diet consists
            of eating 26 to 85 pounds of bamboo and they weigh about 220-330lbs.
            Pandas were once considered endangered but
            with the rise of population to 1,864 there are
            at an extinction risk of vulnerable.
            There primary habitat is in Yangtze Basin region 
            but with the development of infrastructure has left 
            the panda with access to bamboo forests.
            Info gotten from:
            <a href='https://www.worldwildlife.org/species/giant-panda#:~:text=Infrastructure%20development%20(such%20as%20dams,bamboo%20they%20need%20to%20survive.'> WFF Giant Panda</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={thirdimg}
          alt="Third slide"
          style={{height: 500, width: 500}}
        />
        <Carousel.Caption>
          <h3 style={{color:"black"}}>Munduruku people</h3>
          <p style={{color:"black", fontWeight: "bold"}}>
            These indigenous people are located in Brazil and 
            have been victim to their land being destroyed by deforestation
            which is caused by mining and fires. The major
            cause for this is from the construcrtion of the 
            Ferrograo railroad, transports soybeans and corn,
            and the multinational mining company, Anglo-American back in 2019.
            These projects have caused for the invasion of their land.
            Read More about the 
            <a href='https://amazonwatch.org/news/2020/1009-overflight-uncovers-environmental-destruction-of-munduruku-indigenous-territory'>Munduruku people</a>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='missionst'>
    <h2>Our Mission</h2>
    <p>With this site, we wish to bring awareness to deforestation
    which is an issue that effects individuals from all over the globe.
     Animals and Indigenous people are at risk and it is
    up to us to help fight the cause.</p> 
    <p>Please be sure to donate to charities!</p>
    </div>

    <div className='form'>
      <p>Be updated on issues regarding deforestation</p>
      <p>such as learning about more resources, present news</p>
      <p>and volunteer work to participate in. </p>
    
      <button onClick={()=> setButtonPopup (true)}>Registration Form</button>  
    
      <Popup trigger ={buttonPopup} setTrigger = {setButtonPopup}>
         <div className='txtPopup'>       
        <h2 style={{color: "white"}}>Registration Form</h2>
        
          <p>First Name:</p>
          <input type= "text"/>
          <p>Last Name:</p>
          <input type= "text"/>
          <p>Email Address:</p>
          <input type= "text"/>
        </div>
      </Popup>

      <p style={{color:"white"}}>This is a FREE newsletter</p>     
    </div>


    </div>
  );
}