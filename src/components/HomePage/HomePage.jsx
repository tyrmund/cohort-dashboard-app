import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductsList from "../ProductsList/ProductsList"
import ProductDetails from './../ProductDetails/ProductDetails'
import About from './../About/About'
import NotFound from "../NotFound/NotFound"
import { Route, Routes } from 'react-router-dom';

import './HomePage.css'

const HomePage = () => {

    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />

                <Routes>
                    <Route path={'/'} element={<ProductsList />} />
                    <Route path={'/product-details/:productId'} element={<ProductDetails />} />
                    <Route path={'/about'} element={<About />} />
                    <Route path={'*'} element={<NotFound />} />
                </Routes>

            </main>
        </div>
    )
}

export default HomePage