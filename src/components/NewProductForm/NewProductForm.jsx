import { useState } from "react"
import './NewProductForm.css'
import ProductsList from "../ProductsList/ProductsList"

const NewProductForm = ({ products, handleProductRemove, addNewProduct }) => {

    const [productName, setProductName] = useState("")
    const [productBrand, setProductBrand] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [productScore, setProductScore] = useState(5)
    const [productDetails, setProductDetails] = useState("")
    const [addNotification, setAddNotification] = useState('')

    const handleProductName = (event) => {
        const { value } = event.target
        setProductName(value)
    }

    const handleProductBrand = (event) => {
        const { value } = event.target
        setProductBrand(value)
    }

    const handleProductPrice = (event) => {
        const { value } = event.target
        setProductPrice(value)
    }

    const handleProductScore = (event) => {
        const { value } = event.target
        setProductScore(value)
    }

    const handleProductDetails = (event) => {
        const { value } = event.target
        setProductDetails(value)
    }

    const handleProductSubmit = (event) => {
        event.preventDefault()
        let newId = 1
        while (products.find(product => Number(product.id) === newId)) {
            newId = Math.floor(Math.random() * 1000)
        }

        const newProduct = {
            id: newId,
            title: productName,
            brand: productBrand,
            price: productPrice,
            rating: productScore,
            description: productDetails,
            stock: 0,
            images: []
        }

        addNewProduct(newProduct)
        setAddNotification('¡Producto ingresado exitosamente!')
        setTimeout(() => {
            setAddNotification('')
        }, 2000)
    }

    return (
        <div className="new-product-form">
            <h1>Agregar nuevo producto</h1>
            <form onSubmit={handleProductSubmit}>
                <label htmlFor="product-name-form">Artículo </label>
                <input
                    type="text"
                    id="product-name-form"
                    placeholder="Nombre del artículo"
                    value={productName}
                    onChange={handleProductName}
                />
                <br />
                <label htmlFor="product-brand-form">Marca </label>
                <input
                    type="text"
                    id="product-brand-form"
                    placeholder="Nombre de la marca"
                    value={productBrand}
                    onChange={handleProductBrand}
                />
                <br />
                <label htmlFor="product-price-form">Precio </label>
                <input
                    type="number"
                    id="product-price-form"
                    min={0}
                    placeholder="Precio"
                    value={productPrice}
                    onChange={handleProductPrice}
                />
                <br />
                <label htmlFor="product-score-form">Puntuación (del 0 al 5) </label>
                <input
                    type="number"
                    id="product-score-form"
                    min={0}
                    max={5}
                    placeholder="Puntuación"
                    value={productScore}
                    onChange={handleProductScore}
                />
                <br />
                <label htmlFor="product-details-form">Detalles adicionales </label>
                <input
                    className="details-field"
                    type="text"
                    id="product-details-form"
                    placeholder="Detalles del producto"
                    value={productDetails}
                    onChange={handleProductDetails}
                />
                <br />
                <input
                    type="submit"
                    id="product-submit-form"
                    value='Agregar a la lista'
                /> <p className="add-product-notification">{addNotification}</p>
            </form>
            <ProductsList products={products} handleProductRemove={handleProductRemove} />
        </div>
    )
}

export default NewProductForm