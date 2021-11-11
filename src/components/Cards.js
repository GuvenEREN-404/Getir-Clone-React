import { useState,useEffect } from "react"
import cardsData from 'api/cards'
export default function Cards() {

    const [cards,setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    }, [])


    return (
        <div className="grid grid-cols-3 gap-x-4 mt-8">
           {cards.length && cards.map(card => (
               <div className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                   <img src={card.image}/>
                   <h6 className="mt-2 font-semibold text-lg text-primary-brand-color">{card.title}</h6>
                   <p className="mt-2 text-sm text-gray-700">{card.description}</p>
               </div>
           ))}
        </div>
    )
}
