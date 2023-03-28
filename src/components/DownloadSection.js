import React from 'react';
import Download from './Download.module.css';
import 'bootstrap/dist/css/bootstrap.css'

const DownloadSection = (props) => {
    console.log("DOWNLOAD SECTION");
    return (
        <div className={`justify-content-center${Download.featureSection}`}>
            <div className={`d-flex w-80`}>
                {props.downloadSection.length > 0 && props.downloadSection.map((item) => {
                    return (
                        <div className={`w-100 ${Download.headerResourcesMargin}`}>
                            {/* <h3 className={`fs-1`}><b>5000 <span className={`${Download.orangeText}`}>+</span></b></h3> */}
                            <h3 className={`fs-1`}>{item.sectionValue}</h3>
                            <p className={`mt-2 fs-4`}>{item.sectionTitle}</p>
                        </div>
                        // <div className={`w-100 ${Download.headerResourcesMargin}`}>
                        //     <h3 className={`fs-1`}><b>5000 <span className={`${Download.orangeText}`}>+</span></b></h3>
                        //     <p className={`mt-2 fs-4`}>Active Installs</p>
                        // </div>
                        // <div className={`w-100 ${Download.headerResourcesMargin}`}>
                        //     <h3 className={`fs-1`}><b>9000 <span className={`${Download.orangeText}`}>+</span></b></h3>
                        //     <p className={`mt-2 fs-4`}>Ratings</p>
                        // </div>
                        // <div className={`w-100 ${Download.headerResourcesMargin}`}>
                        //     <h3 className={`fs-1`}><b>24 <span className={`${Download.orangeText}`}>x</span> 7</b></h3>
                        //     <p className={`mt-2 fs-4`}>Worldwide Support</p>
                        // </div>
                    )
                })}
            </div>
        </div>
    );
}

export default DownloadSection;