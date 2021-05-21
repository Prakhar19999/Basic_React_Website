import React from 'react';


const Navbar=()=>{
    return(
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="landingpage">Logo</a>
                    </div>
                    <button class="btn btn-success navbar-btn" style={{float:"right"}}>Sign Up</button>
                    <ul class="nav navbar-nav" style={{float:"right"}}>
                        <li><a href="home">Home</a></li>
                        <li><a href="page1">Services</a></li>
                        <li><a href="page2">Products</a></li>
                    </ul>
                </div>
            </nav>
      </div>
    );
}

export default Navbar;