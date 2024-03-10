import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import Navbar from '../website/Navbar';
import Footer from '../website/Footer';

function Service() {

    const redirect=useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }


    return (
        <div>
            <Navbar/>

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>
                    <div className="row g-4">
                        {
                            data.map((value, index, arr) => {

                                return (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="service-item d-flex flex-column text-center rounded">
                                            <div className="service-icon flex-shrink-0">
                                               <img src={value.cate_img} width="100%" height="200px" alt="" />
                                            </div>
                                            <h5 className="mb-3">{value.cate_name} : {value.cate_name}</h5>
                                            {/* <h5 className="mb-3"> {value.id }</h5> */}
                                            
        
                                            <center><a className="btn btn-square mb-3" onClick={()=>redirect('/view_service/'+ value.id )} href="javascript:void(0)"><i className="fa fa-arrow-right" /></a>
                                            </center> </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Service End */}



            <Footer/>
        </div>
    )
}

export default Service