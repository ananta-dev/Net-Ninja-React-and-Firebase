import "./SingleCard.css";

export default function SingleCard({ card, revealCardAction }) {
    const revealCard = () => {
        revealCardAction(card);
    };

    return (
        <div className='card'>
            <img className='front' src={card.src} alt='card front' />
            <img
                className='back'
                src='/img/cover.png'
                onClick={revealCard}
                alt='card back'
            />
        </div>
    );
}
