import { Link } from "react-router-dom";

export default function Card({ card, setCard }) {

    function onclick() {
        setCard(card);
    }

    return (
        <Link className="card" to='/card' onClick={onclick}>
            {card.img == null || card.img === '' ? <p className="card__img-none">No cover image</p> : <img className="card__image" alt={card.title} src={card.img} />}
            <div className="card__info">
                {card?.categories == null || card.categories.length === 0 ? '' : <p className="card__categories">{card.categories[0]}</p>}
                <h2 className="card__name">{card.title}</h2>
                <p className="card__author">{card.authors}</p>
            </div>
        </Link >
    )
}