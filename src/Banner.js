import React from 'react';
// import Slider from 'react-slick';
import './banner.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import slide4 from './slide4.jpg';
import slide5 from './slide5.jpg';

import atm from './ATM.jpg'
import atm1 from './ATM1.jpg'
import acc1 from './acc1.jpg'
import acc2 from './acc2.jpg'
import acc3 from './acc3.jpg'



const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    const images = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5

    ];

    return (

        <div className='container-fulid'>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                </div>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slide1} alt="Los Angeles" class="d-block" style={{ width: '100%' }} />
                    </div>
                    <div class="carousel-item">
                        <img src={slide2} alt="Chicago" class="d-block" style={{ width: '100%' }} />
                    </div>
                    <div class="carousel-item">
                        <img src={slide3} alt="New York" class="d-block" style={{ width: '100%' }} />
                    </div>
                    <div class="carousel-item">
                        <img src={slide4} alt="New York" class="d-block" style={{ width: '100%' }} />
                    </div>
                    <div class="carousel-item">
                        <img src={slide5} alt="New York" class="d-block" style={{ width: '100%' }} />
                    </div>
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="container-fluid rate">
                <div>
                    <h1 className="text-center pt-4">Attractive Rates</h1>
                </div>
                <div className="row rates text-center">
                    <div className="col-1">  </div>
                    <div className="col-2">
                        <h4>Fixed Deposits</h4>
                        <h2> 8.00%* p.a.</h2>
                    </div>
                    <div className="col-2">
                        <h4>Savings Account</h4>
                        <h2> 7.50%* p.a.</h2>
                    </div>
                    <div className="col-2">
                        <h4>Education Loan</h4>
                        <h2>10.00%* p.a.</h2>
                    </div>
                    <div className="col-2">
                        <h4>Housing Loan</h4>
                        <h2> 8.90%* p.a.</h2>
                    </div>
                    <div className="col-2">
                        <h4>Forex Rates</h4>
                        <h2> $¥€</h2>
                    </div>

                </div>


            </div>

            <div className='container-fulid Atm position-relative '>
                <img className='w-100' src={atm} alt="#" />
                <div className='position-absolute  atm-abs'>
                    <h1 className='mb-5'>You're Just a Card Away <br />
                        from Amazing Offers!</h1>
                    <h3>0% Mark-Up Fee <span>|</span> Travel in Luxury</h3>
                    <div className='mt-4  d-flex justify-content-center'><button className='btn bg-danger'>Apply Now</button></div>
                </div>
            </div>

            <div className='container  mt-5 products' >

                <div className='row m-4 mt-5 mb-5' >
                    <div className='col-12 mb-4'>
                        <h2>
                            Our Products
                        </h2>
                    </div>
                    <div className='col-4' id='acc'>
                        <div className='pro-img'>
                            <img src={acc1} width="100%" alt="" />
                        </div>
                        <div className='acc1'>
                            <h3>Go Account</h3>
                            <button className='btn bg-white m-3' >Know More</button>
                            <span><button className='btn btn-primary m-3 ' > Open Now</button></span>
                        </div>
                    </div>

                    <div className='col-4' id='acc'>
                        <div className='pro-img'>
                            <img src={acc2} width="100%" alt="" />
                        </div>
                        <div className='acc1'>
                            <h3>Digital Fixed Deposit</h3>
                            <button className='btn bg-white m-3' >Know More</button>
                            <span><button className='btn btn-primary  m-3' > Open Now</button></span>
                        </div>
                    </div>

                    <div className='col-4' id='acc'>
                        <div className='pro-img'>
                            <img src={acc3} width="100%" alt="" />
                        </div>
                        <div className='acc1'>
                            <h3>Education Loan</h3>
                            <button className='btn bg-white m-3' >Know More</button>
                            <span><button className='btn btn-primary m-3' > Open Now</button></span>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fulid Atm  position-relative'>
                <img className=' w-100' src={atm1} alt="#" />
                <div className='position-absolute  atm-abs1'>
                    <h1 className='mb-4 '>RBL MoBank App
                    </h1>
                    <h3 className='ps-5'>Safe<span>|</span> Simple<span>|</span> Fast</h3>
                    <img src="https://www.rblbank.com/sites/default/files/inline-images/app-google-play.png" alt="" /><span>     </span>
                    <span><img src="https://www.rblbank.com/sites/default/files/inline-images/app-iphone-store.png" alt="" /></span>
                </div>
            </div>


            <div className='container mb-3'>

                <h2 className='m-5 ms-0'>Offers And Deals</h2>

                <div className='row mb-5 '>
                    <div className='col-4 position-relative'>
                        <img src="https://www.rblbank.com/themes/custom/rbl_bank/images/Ajio.jpg" width="100%" alt="" />
                        <div className=' position-absolute  deals text-white'>
                            <button className='btn btn-outline-success mb-3'>Debit card</button>
                            <h5>Ajio</h5>
                            <p className='mb-4'>Unlesh a story in every swipe</p>
                        </div>
                    </div>
                    <div className='col-4 position-relative '>
                        <img src="https://www.rblbank.com/themes/custom/rbl_bank/images/Attractive.jpg" width="100%" alt="" />
                        <div className=' position-absolute  deals text-white'>
                            <button className='btn btn-outline-success mb-3'>Cridit Card</button>

                            <h5>Attractive Offers</h5>
                            <p>Extra Offers upto  INR 1000 on minmimum <br /> order value of INR is 2900</p>
                        </div>
                    </div>
                    <div className='col-4 position-relative'>
                        <img src="https://www.rblbank.com/themes/custom/rbl_bank/images/Club-Mahindra.jpg" width="100%" alt="" />
                        <div className=' position-absolute deals text-white '>
                            <button className='btn btn-outline-success mb-3'>Debit card</button>

                            <h5>Club mahendra</h5>
                            <p>opto 17% off on Club mahendra  <br /> membership</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mb-5'>
                <button className='btn btn-outline-primary text-cente'>Explore More</button>
            </div>

            <div className='container-fulid  last py-5'>
                <div className='container'>

                    <h2>Money, People & Safety</h2>

                    <div className='row my-5'>

                        <div className='col-3 position-relative'>
                            <img width="100%" src="https://d2e6x8l1x3qfpt.cloudfront.net/2023-11/travel-tips.jpg?VersionId=HyusVKppirYujdgF0hltDZR4RBLnO_te" alt="" />
                            <div className=' position-absolute deals text-white '>
                                <h4>opto 17% off on Club mahendra  <br /> membership</h4>
                            </div>
                        </div>
                        <div className='col-3 position-relative'>
                            <img src="https://www.rblbank.com/themes/custom/rbl_bank/images/go-account-blog.jpg" width="100%" alt="" />
                            <div className=' position-absolute deals text-white '>
                                <h4>opto 17% off on Club mahendra  <br /> membership</h4>
                            </div>
                        </div>
                        <div className='col-3 position-relative'>
                            <img src="https://www.rblbank.com/themes/custom/rbl_bank/images/voice-cloning.jpg" width="100%" alt="" />
                            <div className=' position-absolute deals text-white '>
                                <h4>opto 17% off on Club mahendra  <br /> membership</h4>
                            </div>

                        </div>
                        <div className='col-3 position-relative'>
                            <img src="https://www.rblbank.com/themes/custom/rbl_bank/images/blog20.jpg" width="100%" alt="" />
                            <div className=' position-absolute deals text-white '>
                                <h4>opto 17% off on Club mahendra  <br /> membership</h4>
                            </div>
                        </div>

                        <div className='mt-4  d-flex justify-content-center'>
                            <button className='btn btn-outline-primary'>Read More</button>
                        </div>

                    </div>

                </div>
            </div>



        </div>

    );
};

export default Banner;
