//  import React, {useContext} from 'react';
import logo from './logo.svg'; 
import './App.css';
import { Outlet, Link } from "react-router-dom";

// import Transaction from './Transaction';


function App() {
  return (
    <>
      <header className='container-fulid  sticky-top'>

        <nav className="navbar navbar-expand-lg header">
          <div className='logo'>
            <a className="navbar-brand" href="#">
              <img src={logo} alt=" " />
            </a>
          </div>
          <div class="container ">
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  text-center" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle p-4  text-white" to="/" id="dropdown" role="button" aria-expanded="false">
                    Home
                  </Link>

                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle p-4 text-white" to="/Transaction" id="dropdown" role="button" aria-expanded="false">
                    Transaction
                  </Link>

                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle  p-4 text-white" id="dropdown" role="button" aria-expanded="false">
                   Contact 
                  </a>

                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle  p-4 text-white" href="#" id="dropdown" role="button" aria-expanded="false">
                    Queck Assiatance
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">bazyyyyy</a></li>
                    <li><a class="dropdown-item" href="#">bazyyyyy</a></li>
                    <li><a class="dropdown-item" href="#">bazyyyyy</a></li>
                  </ul>
                </li>

              </ul>
            </div>
            <button className='btn btn-info'>Sign In</button>
          </div>
        </nav>
      </header>



      <Outlet />



      <footer class="bg-dark text-white py-4">
        <div class="container">
          <div class="row">

            <div class="col-md-2">
              <h5>About</h5>
              <ul class="list-unstyled">
                <li>The Bank</li>
                <li>Board of Directors</li>
                <li>Management Team</li>
                <li>Careers</li>
                <li>Social Responsibility</li>
              </ul>
            </div>

            <div class="col-md-2">
              <h5>Media Center</h5>
              <ul class="list-unstyled">
                <li>Press Releases</li>
                <li>Media Kit</li>
                <li>Investor Kit</li>
                <li>Investor Relations</li>
              </ul>
            </div>

            <div class="col-md-2">
              <h5>Products</h5>
              <ul class="list-unstyled">
                <li>Savings Account</li>
                <li>Current Account</li>
                <li>Credit Cards</li>
                <li>Term Deposits</li>
                <li>Housing Loan</li>
                <li>NRI Services</li>
              </ul>
            </div>

            <div class="col-md-2">
              <h5>Important Links</h5>
              <ul class="list-unstyled">
                <li>Regulatory Disclosures</li>
                <li>Bank Policies</li>
                <li>News</li>
                <li>Service Charges &amp; Fees</li>
                <li>Interest Rates</li>
                <li>Download Forms</li>
              </ul>
            </div>

            <div class="col-md-4">
              <h5>Customer Service</h5>
              <ul class="list-unstyled">
                <li>Contact Us</li>
                <li>Locate Us</li>
                <li>Do Not Call Registry</li>
                <li>Grievance Redressal</li>
                <li>Feedback</li>
                <li>Report a Complaint/Fraud</li>
                <li>Unclaimed Deposits</li>
                <li>Certificates Issued by the Bank</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </>

  );
}

export default App;
