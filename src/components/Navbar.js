// import menu from '../assets/icons/menu.png';
import logo from '../assets/logo.png';


const Navbar = () => {


    return ( 

        <div className="navbar">

        <nav className="navbar navbar-expand-sm navbar-dark">
                                    <div className="container-xxl">
                        
                                    <div className="navbar-brand mb-4 me-5" id="logo">
                                    <img className="img-fluid" src={logo} alt="logo" />
                                    </div>
                            
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                                        {/* <img src={menu} alt="" /> */}
                                    </button>

                    
                                    </div>
                                </nav>




</div>
     );
}
 
export default Navbar;