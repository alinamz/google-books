const item = {
    link: 'https://img3.labirint.ru/rc/d75a2cd9e1b4b7d10a957199ae4c1871/363x561q80/books81/801293/cover.png?1624447637',
    name: 'Венецианский альбом',
    author: 'Риз Боуэн',
    categorie: 'classic',
    content: 'С помощью PROMT.One наслаждайтесь точным переводом с английского на русский, а для слов и фраз смотрите английскую транскрипцию, произношение и варианты переводов с примерами употребления в разных контекстах. Бесплатный онлайн-переводчик PROMT.One - достойная альтернатива Google Translate и другим сервисам, предоставляющим перевод с английского на русский и с русского на английский.',
    id: '6'
}

export default function CardDetals() {
    return (
        <div className="element">
            <div className="element__image">
                <img className="element__image-link" alt={item.name} src={item.link} />
            </div>
            <div className="element__description">
                <p className="card__categorie">{item.categorie}</p>
                <h2 className="card__name-books">{item.name}</h2>
                <p className="card__author-books">{item.author}</p>
                <p className="card__content">{item.content}</p>
            </div>
        </div>
    )
}