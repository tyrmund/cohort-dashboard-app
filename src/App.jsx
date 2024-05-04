import { Route, Routes, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import productsData from './data/products.json'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './components/HomePage/HomePage'
import ProductsPage from './components/ProductsPage/ProductsPage'
import AboutPage from './components/AboutPage/AboutPage'
import ProductDetails from './components/ProductDetails/ProductDetails'
import NewProductForm from './components/NewProductForm/NewProductForm'

const App = () => {

  const [products, setProducts] = useState(productsData)

  const handleProductRemove = (productIdToDelete) => {
    const productsAfterDeletion = products.filter(eachProduct => eachProduct.id != productIdToDelete)
    setProducts(productsAfterDeletion)
  }

  const addNewProduct = (newProduct) => {
    const newProductsList = [newProduct, ...products]
    setProducts(newProductsList)
  }

  return (
    <div className="App">

      <Navbar />
      <Sidebar />

      <main className="main-content">

        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route
            path={'/productos/listado'}
            element={<ProductsPage
              products={products}
              handleProductRemove={handleProductRemove} />}
          />
          <Route
            path={'/productos/:product_id'}
            element={<ProductDetails
              products={products} />}
          />
          <Route
            path={'/productos/crear'}
            element={<NewProductForm
              products={products}
              handleProductRemove={handleProductRemove}
              addNewProduct={addNewProduct} />}
          />
          <Route path={'/sobre-mi'} element={<AboutPage />} />
        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App