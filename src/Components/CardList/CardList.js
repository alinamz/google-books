import utils from '../../utils/const';
import Card from '../Card/Card.js'

export default function CardList() {

    return (
        <div className="container">
            <p className='container__title'>Всего найдено {utils.length}</p>
            <div className='cards'>
                {
                    utils.map((card) => {
                        return <Card card={card} key={card.id} />
                    })
                }
            </div>
            <button className='container__btn'>Load more</button>
        </div>
    )
}