// Navigation header - used for both detail and plants pages
// (with different props values)
function Navbar(props) {
    
    return (
        <nav className="navbar">
            <h2>{props.left}</h2>
            <h1>{props.title}</h1>
            <h2>Guide</h2>
        </nav>
    )
}

export default Navbar