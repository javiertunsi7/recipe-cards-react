function Card(props) {
    return (
        <div className='cardContainer'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;