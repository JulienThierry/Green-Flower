import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import Menu from '../components/Menu';
import { db } from '../utils/firebase.config';

const Products = () => {
    const [productsArray, setProductsArray] = useState([]);
    const [filter, setFilter] = useState("");
    const location = useLocation();







    useEffect(() => {


        async function fetchData() {

            if (filter) {
                await getDocs(collection(db, "products"))
                    .then((res) => setProductsArray(res.docs
                        .filter((product) => product.data().type === filter)
                        .map((doc) => ({ ...doc.data(), id: doc.id }))))
            } else {
                await getDocs(collection(db, "products"))
                    .then((res) => setProductsArray(res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            }
        }
        fetchData();
    }, [filter])

    return (
        <div>
            <Menu />

            <div className="sort-bar">
                <ul>
                    <li onClick={() => setFilter("")}>Tout</li>
                    <li onClick={() => setFilter("bouquets")} >Bouquets</li>
                    <li onClick={() => setFilter("graines")}>Graines</li>
                    <li onClick={() => setFilter("fleurs")}>Fleurs</li>
                    <li onClick={() => setFilter("offres")}>Offres</li>
                    <li onClick={() => setFilter("cadeaux")}>Cadeaux</li>
                </ul>
            </div>
            <div className="products">
                {productsArray.map((product) => <Card product={product} key={product.id} />)}
            </div>
        </div >
    );
};

export default Products;