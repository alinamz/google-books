import { useSelector } from 'react-redux';
import Card from '../Card/Card.js';
import Preloader from '../Preloader/Preloader';
import { useDispatch } from 'react-redux';
import { getMoreBooks } from '../../features/books/booksSlice.js';

export default function CardList({ setCard }) {
    const dispatch = useDispatch();
    const { list, filtered, isLoading, totalItems } = useSelector(({ books }) => books);

    function handleLoadMoreBooks() {
        dispatch(getMoreBooks({}));
    }

    return (
        isLoading ? <Preloader></Preloader> :
            (<div className="container">
                <p className='container__title'>Total found: {totalItems}</p>
                <div className='cards'>
                    {filtered?.map((card) => {
                        return <Card setCard={setCard} card={card} key={card.id} />
                    })
                    }
                </div>
                {
                    (list.length === totalItems) ? '' : <button onClick={handleLoadMoreBooks} className='container__btn'>Load more</button>
                }
            </div>)
    )
}