import "./style.css";
import Image from "next/image";

const Flipkart = async () => {
    const product = {
        title:"SHOE",
        description:"jjhfjdhfjdfhjfhdjhjdjfhjdhueyuij",
        price:"700",
        rating:"4.2",
        seller:"KRISHNA ENTERPRISE"
    }
  return (
    <div className="product-container">
        <div className="image-container">
            <div className="image-section">
            <Image
              src={
                 "/images/shoe.jpg"
              }
              alt="product anme"
              width={600}
              height={600}
            />
            </div>
            <div className="buyandcart">
                <div className="buy">
                    <h1>BUY NOW</h1>
                </div>
                <div className="cart">
                    <h1>ADD TO CART</h1>
                </div>
            </div>
        </div>
        <div className="description-container">
            <div>Breadcom</div>
            <div className="">{product.title}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div>{product.rating}</div>
            <div>{product.seller}</div>
        </div>
    </div>
  )
};


export default Flipkart;