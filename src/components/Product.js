import { Link } from "react-router-dom";

function Product(props) {

    const {id, image, title, description} = props.product;

    return (

        <div className="card">

            <img src={image} className="card-img-top" alt={title} />

            <div className="card-body">

                <h5 className="card-title">{title}</h5>

                <p className="card-text">{

                    description.substr(0, 100)

                    // description.split(" ").slice(0, 20).join(" ")

                }</p>

                <Link to={`/product/${id}`} className="btn btn-primary">Details</Link>

            </div>

        </div>

    );

}

export default Product;