import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/add-product'}>Add Product</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar