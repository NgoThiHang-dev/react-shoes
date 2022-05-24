import React from 'react'
import "../../assets/css/home.css"
import banner1 from "../../assets/images/banner-01.jpg"
import banner2 from "../../assets/images/banner-02.jpg"
import banner3 from "../../assets/images/banner-03.jpg"
import FeaturedProduct from '../../component/FeaturedProduct/FeaturedProduct'
import { OurProduct } from '../../component/OurProduct/OurProduct'
import { ProductList } from '../../component/ProductList/ProductList'
import { Product } from '../product/Product'

export const Home = () => {
    return (
        <>
            <div className="slides-shop">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} alt="..." />
                            <div className="carousel-caption">
                                <h1><strong>Welcome To <br /> Freshshop</strong></h1>
                                <p>See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                                <a className="btn-shop" href="#">Shop New</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} alt="..." />
                            <div className="carousel-caption">
                                <h3>There are 3 red tomatoes</h3>
                                <p>They are so fresh</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Product />
            <ProductList />
            <OurProduct />
            <FeaturedProduct />
        </>
    )
}
