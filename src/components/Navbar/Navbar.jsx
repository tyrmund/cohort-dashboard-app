import './../Navbar/Navbar.css'
import kanbanLogo from './../../assets/kanban-logo.png'

const NavBar = () => {
    return (
        <header className='Navbar'>
            <img src={kanbanLogo} alt="KanbanLogo" />
            <h1 className='Title'>Kanban</h1>
        </header>
    )
}

export default NavBar