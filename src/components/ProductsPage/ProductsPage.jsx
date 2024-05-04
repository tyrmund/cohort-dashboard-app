import './ProductsPage.css'

import ProductsList from '../ProductsList/ProductsList'

const ProductsPage = ({ products, handleProductRemove }) => {
    return (
        <div className="ProductsPage">

            <h1>Productos</h1>

            <hr />

            <ProductsList products={products} handleProductRemove={handleProductRemove} />
        </div>
    )
}

export default ProductsPage