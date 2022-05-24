import React from 'react'
import "../../assets/css/our-product.css"
import OurPro1 from "../../assets/images/product-img-1.jpg"
import OurPro2 from "../../assets/images/product-img-2.jpg"
import OurPro3 from "../../assets/images/product-img-3.jpg"

export const OurProduct = () => {
    return (
        <div className="our-product">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="our-pro-title">
                            <h3><span className="our-text-orange">Our</span> Products</h3>
                            <p>Lorem ipsum dolor sit metus, consectetur adipiscing elit. Aliquid, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="row our-pro-list">
                    <div className="col-4">
                        <div className="our-pro-box">
                            <div className="our-pro-img">
                                <img src={OurPro1} alt="images" />
                            </div>
                            <div className="our-pro-info">
                                <p className="our-pro-name">Strawberry</p>
                                <p><span>Per</span> Kg</p>
                                <p className="our-pro-price">85 $</p>
                            </div>
                            <div className="btn-add-cart">
                                <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="our-pro-box">
                            <div className="our-pro-img">
                                <img src={OurPro2} alt="images" />
                            </div>
                            <div className="our-pro-info">
                                <p className="our-pro-name">Strawberry</p>
                                <p><span>Per</span> Kg</p>
                                <p className="our-pro-price">85 $</p>
                            </div>
                            <div className="btn-add-cart">
                                <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="our-pro-box">
                            <div className="our-pro-img">
                                <img src={OurPro3} alt="images" />
                            </div>
                            <div className="our-pro-info">
                                <p className="our-pro-name">Strawberry</p>
                                <p><span>Per</span> Kg</p>
                                <p className="our-pro-price">85 $</p>
                            </div>
                            <div className="btn-add-cart">
                                <button><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
