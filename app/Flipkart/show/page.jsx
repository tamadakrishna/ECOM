import './style.css';

const Show = async () => {
    
    return (
    <div className="showContainer">
        <div className="productFilters"></div>
        <div className="products">
            {
                [1,2,3,4].map((item,index)=>{
                   return (<div className="product" key={index}>
                        <div className="productImage"></div>
                        <div className="productDescription">
                            <div>TITLE</div>
                            <div>DESCRIPTION</div>
                            <div>PRICE</div>
                        </div>
                   </div>)
                })
            }
            
        </div>
    </div>
)
}

export default Show;