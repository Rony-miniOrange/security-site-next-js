import { useState,useEffect } from "react";
import Image from "next/image";
import {GetRating} from "@/components/CustomersTestinomials";
import CustomerReviewsCss from "./CustomerReviewsCss.module.scss";
const CustomersReviews = (props) =>{
    const [reviewCards, setReviewCards] = useState(null);
    const [customerComments, setCustomerComments] = useState(null);
    useEffect(()=>{
        setReviewCards(props.CustomersReviewData.customer_reviews_cards);
        setCustomerComments(props.CustomersReviewData.customer_comments);
    },[]);
    return (
        <div className="container-fluid my-5 px-5">
            <div className={`${CustomerReviewsCss.topReviewSection} row d-flex col-lg-12 pt-4 justify-content-between flex-nowrap mx-3`}>
            {
                reviewCards && reviewCards.map((reviewCard)=> {
                return(
                <div className = {`${CustomerReviewsCss.reviewCardColumn} col-lg-3 mx-4 py-4`}>
                    {reviewCard.logo &&
                    <div className="image">
                        <Image src ={reviewCard.logo} alt = "image" width={110} height={60}/>
                    </div>
                    }
                    {
                    reviewCard.video &&
                    <div className={`${CustomerReviewsCss.mediaCard} d-flex justify-content-center rounded mb-3 mx-3 px-2 my-1`}>
                        <div className="px-3 pt-3 pb-2">
                            {/* used logo as media*/}
                            <Image src = {reviewCard.video} alt= "image"/>
                        </div>
                    </div>
                    }
                    <div className="px-3">
                    <div className="content">
                        <p className="mb-0 fw-bold fs-5">{reviewCard.title}</p>
                        <div className="d-flex">
                            <p className={`${CustomerReviewsCss.topReviewCardTag}`}>{reviewCard.tag}</p>
                        </div>
                        <p><q>{reviewCard.comments}</q></p>
                        {
                            reviewCard.name && reviewCard.designation &&
                            <div className="d-flex py-4">    
                                <div className="image">
                                    { reviewCard.customer_image &&
                                    <Image src = {reviewCard.customer_image} alt= "image" width={50} height={50} className="rounded-circle"/>
                                    }
                                </div>
                                <div>
                                    <div className="d-flex m-0 p-0">
                                        <p className="mx-2 m-0 p-0 fw-bold fs-5">{reviewCard.name}</p>
                                        <GetRating ratings = {reviewCard.ratings}/>
                                    </div>
                                    <p className="mx-2 m-0 p-0"><small>{reviewCard.designation}</small></p>
                                </div>
                            </div>
                        }
                        {
                            reviewCard.button_url && reviewCard.button_type &&
                            <div className="py-4">
                                <button className="btn btn-primary text-white w-100 h-50 fs-5" style={{"borderRadius":"2px"}} onClick={() => {window.location.href = reviewCard.button_url}}>{reviewCard.button_type}</button>
                            </div>
                        }
                    </div>
                    </div>
                </div>
                )
                })
            }
            </div>
            <div className={`${CustomerReviewsCss.bottomDiv} row d-flex my-5 flex-nowrap mx-3`}>
                {
                    customerComments && customerComments.map((commentcard)=>{
                        return(
                            <div className={`${CustomerReviewsCss.bottomCardsSection} border rounded text-center mx-4`} >
                                <div className="mx-2 py-5 px-4">
                                    <p className="fw-bold">"{commentcard.title}"</p>
                                    <p>{commentcard.comments}</p> 
                                    <div className="justify-content-center d-flex">  
                                        < GetRating ratings = {commentcard.ratings} />
                                    </div>
                                    <p className={`${CustomerReviewsCss.commentcardname} m-0 fs-5 fw-bold`} >{commentcard.name}</p>
                                    <p className = "fw-bold"><small>{commentcard.designation}</small></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CustomersReviews;