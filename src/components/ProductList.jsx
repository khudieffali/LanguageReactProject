import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../API/myConfig'
import { LangContext } from '../context/LanguageContext'
import img from '../image/iney.jpg'

const ProductList = () => {
    const { langCode } = LangContext()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = () => {
            fetch(`${BASE_URL}/api/products/${langCode}`)
                .then(res => res.json())
                .then(pro => setProducts(pro))
        }
        getProducts()
    }, [langCode])
    return (
        <div className='productList'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    {products.map((pro) => (
                        <div className="col-lg-4 col-md-6 col-12" key={pro.id}>
                            <div className='singleProducts'>
                                <div className='topImage'>
                                    <img width={150} src={img} alt="" />
                                </div>
                                {pro.productRecords.map((rec) => (
                                    <div className='bottomText' key={rec.id}>
                                        <span>
                                        {pro.price}
                                        </span>
                                        <h1 className='p-0 m-0'>
                                            {rec.name}
                                        </h1>
                                        <p className='p-0 m-0'>
                                            {rec.description}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ProductList