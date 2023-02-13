import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./ProductDetails.css";

function ProductDetails() {

    const params = useParams();
    
    const [product, setProduct] = useState({});

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/" + params.productId)

        .then(response => response.json())

        .then(product => setProduct(product));

    }, []);

    const { id, title, price, description, category, image } = product;

    if (id !== undefined) {

        return (

            <div className="product-details">

                <h2 className="sec-title">Product Details</h2>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <img className="img-fluid" src={image} alt={title} />

                        </div>

                        <div className="col-md-6">

                            <p><span>Id</span>: {id}</p>

                            <p><span>Title</span>: {title}</p>

                            <p><span>Price</span>: ${price}</p>

                            <p><span>Description</span>: {description}</p>

                            <p><span>Category</span>: {category}</p>

                        </div>

                    </div>

                </div>

            </div>

        );

    } else {

        return (

            <div className="spinner">

                <div className="spinner-border" role="status">

                    <span className="visually-hidden">Loading...</span>

                </div>

            </div>

        )

    }

}

export default ProductDetails;