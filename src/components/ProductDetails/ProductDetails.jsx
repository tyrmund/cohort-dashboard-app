import { useParams } from "react-router-dom"
import productsData from './../../data/products.json'

function ProductDetails() {

    const { productId } = useParams()
    const productInfo = productsData.find(product => +product.id === +productId)

    return (

        <div>
            <h1>Product details</h1>
            <hr />
            <p>{productInfo.description}</p>
            <hr />
        </div>

    )

}

export default ProductDetails