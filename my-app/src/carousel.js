import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstimg from './imgCarousel/forest.jpg';
import secondimg from './imgCarousel/giantpanda.jpg';
import thirdimg from './imgCarousel/mundurukupeople.jpg';


function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          src={firstimg}
          alt="First"
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
        />
        <Carousel.Caption>
          <h3>Munduruku people</h3>
          <p>
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
  );
}

export default IndividualIntervalsExample;