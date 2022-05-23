import React from 'react'
import "../../assets/css/product.css"
import pro1 from "../../assets/images/img-pro-01.jpg";
import pro2 from "../../assets/images/img-pro-02.jpg";
import pro3 from "../../assets/images/img-pro-03.jpg";
import pro4 from "../../assets/images/img-pro-04.jpg";

export const Product = () => {
    return (
        <div className="product-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Fruits & Vegetables</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="special-menu text-center">
                            <div className="button-group filter-button-group">
                                <button className="active" data-filter="*">All</button>
                                <button data-filter=".top-featured">Top featured</button>
                                <button data-filter=".best-seller">Best seller</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row spcial-list">
                    <div className="col-3 top-featured">
                        <div className="product-single">
                            <div className="box-img-hover">
                                <div className="pro-sale">
                                    <p className="sale">Sale</p>
                                </div>
                                <img src={pro1} className="img-fluid" alt="images" />
                                <div className="mask-icon">
                                    <ul>
                                        <li><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                        <li><a href="#" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                    <a className="cart" href="#">Add to Cart</a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h5> $9.79</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 best-seller">
                        <div className="product-single">
                            <div className="box-img-hover">
                                <div className="pro-new">
                                    <p className="new">New</p>
                                </div>
                                <img src={pro2} className="img-fluid" />
                                <div className="mask-icon">
                                    <ul>
                                        <li><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                        <li><a href="#" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                    <a className="cart" href="#">Add to Cart</a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h5> $9.79</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 top-featured">
                        <div className="product-single">
                            <div className="box-img-hover">
                                <div className="pro-sale">
                                    <p className="sale">Sale</p>
                                </div>
                                <img src={pro3} className="img-fluid" alt="images" />
                                <div className="mask-icon">
                                    <ul>
                                        <li><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                        <li><a href="#" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                    <a className="cart" href="#">Add to Cart</a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h5> $9.79</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 top-featured">
                        <div className="product-single ">
                            <div className="box-img-hover">
                                <div className="pro-sale">
                                    <p className="sale">Sale</p>
                                </div>
                                <img src={pro4} className="img-fluid" alt="images" />
                                <div className="mask-icon">
                                    <ul>
                                        <li><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        <li><a href="#" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                                        <li><a href="#" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                                    </ul>
                                    <a className="cart" href="#">Add to Cart</a>
                                </div>
                            </div>
                            <div className="pro-text">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h5> $9.79</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
