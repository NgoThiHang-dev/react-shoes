import React from 'react'
import "../../assets/css/product-list.css";
import ProList1 from "../../assets/images/pro-shose-1.jpg"
import ProList2 from "../../assets/images/pro-shose-2.jpg"
import ProList3 from "../../assets/images/pro-shose-3.jpg"
import ProList4 from "../../assets/images/pro-shose-4.jpg"

export const ProductList = () => {
    return (
        <div className="product-list">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pro-list-title">
                            <h3>Danh mục sản phẩm</h3>
                            <p>Siêu deal ngày hè lên đến 30%</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="pro-list-contain">
                            <img src={ProList1} alt="images shose"/>
                            <div className="pro-item">
                                <p>Giày sandal</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pro-list-contain">
                            <img src={ProList2} alt="images shose" />
                            <div className="pro-item">
                                <p>Giày cao gót</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pro-list-contain">
                            <img src={ProList3} alt="images shose" />
                            <div className="pro-item">
                                <p>Dép guốc</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pro-list-contain">
                            <img src={ProList4} alt="images shose" />
                            <div className="pro-item">
                                <p>Giày sneaker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
