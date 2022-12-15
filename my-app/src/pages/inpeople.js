import bakaimg from './imgIndigenousPG/baka.jpg';
import xikrinimg from './imgIndigenousPG/xikrin.jpg';
import './indpeo.css';

export default function inpeople(){
    return(
    <div className = 'inpeopleApp'>
        <div className ="inpeopleTitle">
            <h2 style={{margin: '20px'}}>
                Baka Tribe
            </h2>
        </div>
        <div className ='baka_img'>
        <img 
        src={bakaimg} 
        style = {{height: '200px', width: '250px'}}
        />
        </div>
        <div className='bakatxt'>
        <p>
            Individuals, who are located in Messok Dja in Congo Rainforest,
            are being violated from their rights. WWF is taking Baka's land
            to establish logging and palm oil corporations. WWF have not gotten
            consent from the Baka tribe to start this project. 
        
            This practice is know as Colonial Conservation "seizing control of the land and resources of indigenous 
            and tribal people and claiming they are doing it for the good of the planet."  
            <a href = 'https://www.survivalinternational.org/tribes/bakamessokdja' target = "_blank">
                Read more about the Baka community, how their rights are being threatened.
            </a>
        </p>
        </div> 
        <div className='xikrinApp'>      
        <h2 
            style={{margin: '20px'}}>
            Xikrin Tribe
        </h2>
        <div className = 'xikrin_img'>
            <img src={xikrinimg}/>
        </div>
        <div className="xikrin_txt">
        <p>
         There has been the invasion of Xikrin peopl's rights.
         Their land has been destroyed by wild fires, causing for deforestation,
         along with invaders entering there lands in hopes of creating corporations.
         There has been a law passed in 2000 where the government recognizes 
         Xikrin's land but there still have not limited "illegal loggers" to enter.       
        <a href= 'https://www.theguardian.com/world/2019/aug/29/xikrin-people-fight-back-against-amazon-land-grabbing' target = "_blank">
        Read more about the Xikrin community, how their rights are being threatened.
        </a>
        </p>
        </div>
        </div> 
    </div>
    );
}