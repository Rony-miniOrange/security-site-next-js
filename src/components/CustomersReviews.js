import { useState,useEffect } from "react";
import Image from "next/image";
import {GetRating} from "@/components/CustomersTestinomials";
import CustomerReviewsCss from "./CustomerReviewsCss.module.scss";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const CustomersReviews = (props) =>{
    const [reviewCards, setReviewCards] = useState(null);
    const [customerComments, setCustomerComments] = useState(null);
    useEffect(()=>{
        setReviewCards(props.customersReviewData.customer_reviews_cards);
        setCustomerComments(props.customersReviewData.customer_comments);
    },[]);
    const CustomRightArrow = ({ onClick, ...rest }) => {
        return <button aria-label="Go to next slide" className={`${CustomerReviewsCss.arrowButton} react-multiple-carousel__arrow react-multiple-carousel__arrow--right`} type="button" onClick={() => onClick()} />;
      };
    const CustomLeftArrow = ({ onClick, ...rest }) => {
        return <button aria-label="Go to previous slide" className={`${CustomerReviewsCss.arrowButton} react-multiple-carousel__arrow react-multiple-carousel__arrow--left`} type="button" onClick={() => onClick()} />;
    };
    return (
        <div className="container-fluid my-5 px-5"> 
            <div className={`${CustomerReviewsCss.topReviewSection} row d-flex col-lg-12 pt-4 px-4 mx-0 justify-content-between flex-nowrap scrollable-container`}>
            {reviewCards && <Carousel 
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3.5,
                    partialVisibilityGutter: 20 
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                >
            {
                reviewCards && reviewCards.map((reviewCard,i)=> {
                return(
                <div className = {`${CustomerReviewsCss.reviewCardColumn}  mx-5 py-4 px-3`}>
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
            </Carousel>}
            </div>
            <div className={`${CustomerReviewsCss.bottomDiv} row d-flex mt-5 flex-nowrap mx-3`}>
                {customerComments &&<Carousel 
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 2.5,
                    partialVisibilityGutter: 50
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                customRightArrow={<CustomRightArrow />}
                customLeftArrow={<CustomLeftArrow />}
                > 
                {
                    customerComments && customerComments.map((commentcard,i)=>{
                        return(
                            <div className={`${CustomerReviewsCss.bottomCardsSection} border rounded text-center mx-1`} >
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
                </Carousel>}
            </div>
        </div>
    )
}
export default CustomersReviews;