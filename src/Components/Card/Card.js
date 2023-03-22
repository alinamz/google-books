export default function Card({ card }) {

    return (
        <div className="card">
            <img className="card__image" alt={card.name} src={card.link} />
            <div className="card__info">
                <p className="card__categories">{card.categorie}</p>
                <h2 className="card__name">{card.name}</h2>
                <p className="card__author">{card.author}</p>
            </div>
        </div>
    )
}