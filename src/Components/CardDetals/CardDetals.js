export default function CardDetals({ card }) {

   const arr = (card.description !== undefined) ? card.description : "No description provided"
    return (
        <div className="element">
            <div className="element__image">
                <img className="element__image-link" alt={card.title} src={card.img} />
            </div>
            <div className="element__description">
                <p className="card__categorie">{card.categories?.join(', ')}</p>
                <h2 className="card__name-books">{card.title}</h2>
                <p className="card__author-books">{card.authors}</p>
                <p className="card__content">{arr}</p>
            </div>
        </div>
    )
}