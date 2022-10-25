import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Menu from '../components/Menu';
import { db } from '../utils/firebase.config';

const Products = () => {
    const [productsArray, setProductsArray] = useState([]);


    useEffect(() => {
        async function fetchData() {
            await getDocs(collection(db, "products"))
                .then((res) => setProductsArray(res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        }
        fetchData();
    }, [])

    return (
        <div>
            <Menu />
            <div className="sort-bar">
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            <div className="products">
                {productsArray.map((product) => <Card product={product} key={product.id} />)}
            </div>
        </div>
    );
};

export default Products;