import React from 'react'
import "../../assets/css/featured-product.css"
import FeaPro1 from "../../assets/images/feature-1.jpg"
import FeaPro2 from "../../assets/images/feature-2.jpg"
import FeaPro3 from "../../assets/images/feature-3.jpg"
import FeaPro4 from "../../assets/images/feature-4.jpg"

const FeaturedProduct = () => {
    return (
        <div className="featured-product">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="featured-pro-title">
                            <h3>Featured Product</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="featured-pro-menu">
                            <ul>
                                <li className="active">All</li>
                                <li>Oranges</li>
                                <li>Fresh Meat</li>
                                <li>Vegettables</li>
                                <li>Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro1} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro2} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro3} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro4} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro1} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro2} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro3} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="feature-pro-single">
                            <div className="feature-item-pic">
                                <div className="feature-pro-image">
                                    <img src={FeaPro4} alt="images" className="feature-pro-image-s" />
                                </div>
                                <div className="feature-pro-control">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-heart"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-retweet"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-pro-text">
                                <a><h6>Crab Pool</h6></a>
                                <p>$30.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturedProduct