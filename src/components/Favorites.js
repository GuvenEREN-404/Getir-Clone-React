import Products from 'api/products.json';
import { useState,useEffect } from 'react';
import ProductItem from './ui/ProductItem';

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, [])

    return (
        <div >
            <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
            <div className="grid grid-cols-8 bg-white rounded-lg overflow-hidden">
                {products.length && products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
        </div>
    )
}
