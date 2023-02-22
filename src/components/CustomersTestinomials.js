import { useState,useEffect } from "react";
import {FaStar} from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import Image from "next/image";
import CustomerTestinomialSectionCss from "./CustomerTestinomialSectionCss.module.scss"
const GetRating = (props) => {
    const[rating,setRating] = useState(null);
    useEffect(() =>{
        setRating(props.ratings);
    });
    const[ratingArray,setRatingArray] = useState(Array(5).fill(0));
    const ratingStars = []
    ratingArray.forEach((ratingArrayElement,index) =>{
        if(index<rating){
            ratingStars.push(<div className="px-1"><FaStar color="orange" size={15} /></div>)
        }
        else{
            ratingStars.push(<div className="px-1"><FaRegStar color="orange" size={15} /></div>)
        }
    })
    return(
        <div className="d-flex">
        {ratingStars}
        </div>
    )
}
const CustomersTestinomials = (props) => {
    const [testinomials, setTestinomials] = useState(null);
    const [reviewCard, setReviewCard] = useState(null);
    const [reviewBottom, setReviewBottom] = useState(null);
    const [reviewBottomCards, setReviewBottomCards] = useState(null);
    useEffect(() =>{
        setTestinomials(props.customerData.testinomials);
        setReviewCard(props.customerData.reviewCard);
        setReviewBottom(props.customerData.customer_review_bottom);
        setReviewBottomCards(props.customerData.customer_review_bottom_cards);
    },[]);
    return (
        <div className="container-fluid my-5 px-5">
        <div className="my-1">
        <h2>Testinomials</h2>
        <div className="row d-flex pt-4 justify-content-between">
        {
            testinomials&& testinomials.map((testinomial) =>
            {
                return(
                    <div className="my-2" style={{"width": "30%"}}>
                        <div className="border border-dark rounded h-100 d-flex flex-column justify-content-between">
                            <div className= "m-4 p-2">
                                <div className="border rounded" style={{"width":"max-content","boxShadow": "0px 2px 1px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.25)"}}>
                                    <div className="px-3 pt-3 pb-2">
                                        <Image src = {testinomial.logo_url} alt={testinomial.name} height = {65} width = {80}/>
                                    </div>
                                    <p className="description px-3 pb-3 mb-0" style ={{"fontSize":"1.2rem"}}><strong>{testinomial.name}</strong></p>
                                </div>
                                <div className="my-2 d-flex mb-0">
                                    <p className="mb-1 fs-6"><strong>{testinomial.product_name}</strong></p>
                                    <div className="mx-2">
                                        < GetRating ratings = {testinomial.ratings} />
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-1" style = {{"fontSize":"0.8em"}}>{testinomial.date}</p>
                                </div>
                                <div className="desciption">
                                    <p>" {testinomial.comments}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            )
        }
        </div>
        </div>
        <div className="row mt-5 d-flex">
            <div className="d-flex mt-2">
                {
                    reviewCard &&
                    <div className="col-md-4 mt-4 rounded" style={{"backgroundColor":"#3D3D3D"}}>
                        <div className="d-flex justify-content-center px-3 pt-5 text-center">
                            <h2 className="text-white"><q>{reviewCard.title}</q></h2>
                        </div>
                        <div className="description pt-2">
                                <p className="description px-5 pt-3 text-white text-center">{reviewCard.comments}</p>
                        </div>
                        <div className="pt-5 pb-4 justify-content-center d-flex">
                            <GetRating ratings = {reviewCard.ratings} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h4 className="text-white">{reviewCard.customer_name}</h4>
                        </div>
                        <div className="d-flex justify-content-center pb-5">
                            <h6 className="text-white">{reviewCard.designation}</h6>
                        </div>
                    </div>
                }
                <div className="d-flex pt-4 col-md-8">
                    {
                        reviewBottom &&
                        <div className="px-5">
                        <div className="pt-4 w-100 text-left">
                            <h1 className="heading">{reviewBottom.header}</h1>
                        </div>
                        <div className="pt-4">
                            <p className="text-uppercase fw-bold text-primary"><small>Why choose us // tagline</small></p>
                        </div>
                        <div className={`description ${CustomerTestinomialSectionCss.displaylinebreak}`}>
                            <p className="description pt-2 text-justify" style={{"fontWeight":"500", "fontSize":"1.2rem"}}>{reviewBottom.comments}</p>
                        </div>
                        <div className="mt-4 d-flex">
                                {
                                    reviewBottomCards.map((review_bottom_cards,index) => {
                                        return(
                                        index ==0 ? (
                                        <div className="pt-3 mx-2 col-md-6">
                                            <div className={`${CustomerTestinomialSectionCss.quotediv1}`}>
                                                <span className = {`mx-4 qoute-tag ${CustomerTestinomialSectionCss.circle} d-flex justify-content-center`}><p className={`${CustomerTestinomialSectionCss.reviewquote}`}>"</p></span>
                                            </div>     
                                            <div style = {{"background": "#94C2FF"}}>
                                                <p className="px-4 pt-2">{review_bottom_cards.comments}</p>
                                                <p className="px-4 pb-4"> - {review_bottom_cards.commentor}</p>
                                            </div>  
                                        </div>):(
                                        <div className="pt-3 mx-2 col-md-6">
                                            <div className={`${CustomerTestinomialSectionCss.quotediv2}`}>
                                                <span className = {`mx-4 qoute-tag ${CustomerTestinomialSectionCss.circle} d-flex justify-content-center`}><p className={`${CustomerTestinomialSectionCss.reviewquote}`}>"</p></span>
                                            </div>     
                                            <div style = {{"background": "#808191"}}>
                                                <p className="px-4 pt-2">{review_bottom_cards.comments}</p>
                                                <p className="px-4 pb-4"> - {review_bottom_cards.commentor}</p>
                                            </div>  
                                        </div> 
                                        )
                                        )
                                    })
                                }
                        </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        </div>
    )
};  

export default CustomersTestinomials;

{/* <div className="customer-logos d-flex mb-5">
        {
        logos && logos.map((logo) => 
        {   
            return(
                <div className="logo mx-3 px-5">
                <Image src = {logo.logo_url} alt={logo.id} height={80} width={110}/>
                </div>
            )
        })
    }
        </div> */}