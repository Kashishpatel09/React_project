import React, { useState, useEffect } from 'react'
import axios from 'axios'



import { useNavigate,useParams} from 'react-router-dom';
import Navbar from '../website/Navbar';
import Footer from '../website/Footer';

function View_service() {

  
    const redirect=useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);


    const {cate_id}=useParams();
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services?cate_id=${cate_id}`);
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
                                               <img src={value.img} width="100%" height="200px" alt="" />
                                            </div>
                                            <h5 className="mb-3">{value.cate_name} : {value.name}</h5>
                                            <p className="mb-3"> {value.desc}</p>
                                           <u >  <h5 className="mb-3"> {value.price}</h5> </u>
        
                                           {/* /  <a className="btn btn-square" onClick={()=>redirect('/view_service/'+ value.id )} href="javascript:void(0)"><i className="fa fa-arrow-right" /></a>  */}
                                        </div>
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

export default View_service