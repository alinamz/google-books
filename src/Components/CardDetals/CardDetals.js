const item = {
    link: 'https://img3.labirint.ru/rc/d75a2cd9e1b4b7d10a957199ae4c1871/363x561q80/books81/801293/cover.png?1624447637',
    name: 'Венецианский альбом',
    author: 'Риз Боуэн',
    categorie: 'classic',
    content: 'С помощью PROMT.One наслаждайтесь точным переводом с английского на русский, а для слов и фраз смотрите английскую транскрипцию, произношение и варианты переводов с примерами употребления в разных контекстах. Бесплатный онлайн-переводчик PROMT.One - достойная альтернатива Google Translate и другим сервисам, предоставляющим перевод с английского на русский и с русского на английский.',
    id: '6'
}

export default function CardDetals({ card }) {

   const arr = (card.description !== undefined) ? card.description : "Скоро здесь появится описание книги!"
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