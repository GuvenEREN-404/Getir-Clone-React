import { useState,useEffect } from "react";
import categoryData from 'api/categories.json'
import Category from "./ui/Category";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Categories() {

    const [categories,setCategories] = useState([]);

    useEffect(() => {
      // setTimeout(() => {
        Aos.init({duration:2000});
        setCategories(categoryData)
       //}, 1000); 
    }, [])

    return (
        <div className="bg-white py-4">
            <div data-aos="fade-right" className="container mx-auto">
                <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
                <div className="grid grid-cols-10">
                    {!categories.length && 'yükleniyor'}
                    {categories && categories.map((category,index) => <Category key={index} category={category}/>)}
                </div>
            </div>
        </div>
    )
}
