const Navbar = () => {
    return ( 
        <div className="navbar">
        <nav className="navbar">
		    <input type="checkbox" id="check"/>
		    <label for="check">
			<i className="	fa fa-bars" id="on"></i>
			<i className="	fa fa-times" id="off"></i>
		    </label>
		    
		<ul>
			<li><a href="#">FactsON</a></li>
			<li><a href="#">FactsON</a></li>
			<li><a href="#">FactsON</a></li>
			<li><a href="#">FactsON</a></li>
		</ul>
	</nav>
        </div>
     );
}
 
export default Navbar;