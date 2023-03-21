import { BsCheck2 } from "react-icons/bs";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import trialFormCss from './TrialForm.module.scss';

export default function TrialForm() {
    return (
        <>
            <div className="d-flex d-flex justify-content-center" id="request-free-trial">
                <div className="row mt-5 d-flex justify-content-center align-items-center rounded-4" id="mo_external_contact_form">
                    <h3 className="h1 text-center">Get Full - Featured Trial</h3>

                        
                    <div className={`col-md-5 mt-5 p-5 ${trialFormCss.trialFormBg} shadow rounded-start`}>
                        <p className="fs-5 mt-4 text-white"><BsCheck2/> &nbsp; Test the full featured plugin on your WordPress environment
                        </p>
                        <p className="fs-5 text-white mt-3"><BsCheck2/> &nbsp; Integrate with any platform of your choice</p>
                        <p className="fs-5 text-white mt-3"><BsCheck2/> &nbsp; Test all the premium features before purchasing the license</p>
                        <p className="fs-5 text-white mt-3"><BsCheck2 /> &nbsp; 24*7 support to help you with the setup</p>
                        <button className="mt-4 mb-4 p-3 px-5 m-2 bg-transparent text-white border-white rounded-4 fs-6"><b>Start Free Trial</b></button>
                    <button className="mt-4 p-3 mb-4 px-5 m-2 border-0 rounded-4 fs-6"><b>Contact Us</b></button>
                    </div>
                    
                    <div className="col-md-5 mt-5 p-5 px-8 shadow rounded-end">
                        <h3 className="h3 text-center">No Credit Card Required</h3>
                        <form action="" method="POST" className="mo-contact-form">
                            <label className="mt-2" htmlFor="free-trial-email">Email <span className="text-danger">*</span></label>
                            <input className="w-100 mt-3 p-1 rounded-1" type="email" name="email" placeholder="Enter you Email ID" />

                            <label className="mt-3" htmlFor="free-trial-text">Requirement <span className="text-danger">*</span></label>
                            <textarea className="w-100 mt-3 p-1 rounded-1" name="query" placeholder="Enter you requirements in brief" ></textarea >

                            <button className={` ${trialFormCss.trialFormBtn} mt-3 w-100 p-3 border-0 text-white rounded-2`}>SUBMIT</button>
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}