const CardsList = ({props}) => {

    const title = props.title;
    const author = props.author;
    
    return (  
        <div className="CardsList">
            {cards.map((card) =>{
                <div className="cards-preview">
                    <h2>{card.title}</h2>
                    <p>Written by: {card.author}</p>
                </div>
            })}
        </div>
    );
}
 
export default CardsList
