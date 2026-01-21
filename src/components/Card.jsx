import '../styles/Card.css';


import taco from '../assets/img/taco.jpg';
import pancakes from '../assets/img/pancakes.jpg';
import brownie from '../assets/img/brownie.jpg';
import ensalada from '../assets/img/ensalada.jpg';
import sushi from '../assets/img/sushi.jpg';  

function Card(props) {
 
  const images = {
    taco: taco,
    pancakes: pancakes,
    brownie: brownie,
    ensalada: ensalada,
    sushi: sushi
  };


  const imageSrc = images[props.image];

    return (
        <div className='cardContainer'>
            <div className='imageWrapper'>
                <img 
                    className='cardImage'
                    src={images[props.image]}
                    alt={`Photo of ${props.name}`}
                />
                <span className='cardType'>{props.type}</span>
            </div>

            <div className='cardContent'>
                <h2 className='cardTitle'>{props.name}</h2>
                
                <div className='cardInfo'>
                    <div className='infoItem'>
                        <span className='infoIcon'>⏱️</span>
                        <span className='infoText'>{props.time}</span>
                    </div>
                    <div className='infoItem'>
                        <span className='infoIcon'>📊</span>
                        <span className='infoText'>{props.difficulty}</span>
                    </div>
                </div>

                <p className='cardDescription'>
                    {props.description}
                </p>

                <button className='cardButton'>View Recipe</button>
            </div>
        </div>
    );
}

export default Card;