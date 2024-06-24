import './NavBar.css';
import React from 'react'
function Navbar() {
  return (
    <div classNameName=''> 
        <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-white lead">
                        <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white" href="#">Create project</a>
                        <a className="nav-link text-white" href="#">Tutorial</a>
                        <a className="nav-link text-white" href="#">Chat</a>
                        <a className="nav-link text-white" href="#">Mentoring</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 ms-5" type="search" placeholder="Search" aria-label="Search" />
                        </form><br/>
                        <a className="sign text-white" href="#">SignIn/SignUp</a>
                    </div>
                    </div>
                    
                    
                </div>
            </nav>  
    </div>
  )
}

export default Navbar