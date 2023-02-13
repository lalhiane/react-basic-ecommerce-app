import Product from "./Product";

import { useEffect, useState } from "react";

import "./Products.css";

function Products() {

    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    const getData = (url, setFunc) => {

        fetch(url)

            .then(response => response.json())

            .then(data => setFunc(data));

    }

    useEffect(() => {

        getData("https://fakestoreapi.com/products", setProducts);
        
        getData("https://fakestoreapi.com/products/categories", setCategories);

    }, []);

    let productsEl = products.map(product => {

        return <div className="col-lg-4 col-md-6" key={product.id}>

            <Product product={product} />

        </div>

    });

    let categoriesEl = categories.map(category=> {

        return <button type="button" className="btn btn-primary" key={category}

            onClick={_ => getData(
                
                `https://fakestoreapi.com/products/category/${category}`,

                setProducts
                
            )}
            
        >{category}</button>

    });

    return (

        <div className="products">

            <div className="container">

                <h2 className="sec-title">Our Products</h2>

                <div className="categories d-flex justify-content-center gap-10">
                    
                    {categoriesEl}
                    
                </div>

                <div className="row">{productsEl}</div>

            </div>

        </div>

    );
}

export default Products;