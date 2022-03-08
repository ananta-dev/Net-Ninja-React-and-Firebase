import "./SingleCard.css";

export default function SingleCard({
    card,
    revealCardAction,
    flipped,
    disabled,
}) {
    const revealCard = () => {
        if (!disabled) {
            revealCardAction(card);
        }
    };

    return (
        <div className='card'>
            <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt='card front' />
                <img
                    className='back'
                    src='/img/cover.png'
                    onClick={revealCard}
                    alt='card back'
                />
            </div>
        </div>
    );
}
