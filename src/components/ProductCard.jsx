import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
    return (
        <div className="product-card">
            <img
                src={image}
                alt={name}
                className="product-image"
            />

            <div className="product-info">
                <h2>{name}</h2>
                <p>${price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProductCard;