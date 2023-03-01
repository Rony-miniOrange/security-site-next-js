import { useState,useEffect } from "react";
import Image from "next/image";
const CustomerLogos = (props) =>{
    const [logos, setLogos] = useState(null);
    useEffect(() =>{
        setLogos(props.customerLogo.logos);
    },[]);
    return(
        <div className=" d-flex my-4 mb-5 justify-content-center">
        {
        logos && logos.map((logo) => 
        {   
            return(
                <div className="d-flex logo mx-3 px-4 align-items-center">
                <Image src = {logo.logo_url} alt={logo.id} width={150}/>
                </div>
            )
        })
        }
        </div>
    )
}
export default CustomerLogos;