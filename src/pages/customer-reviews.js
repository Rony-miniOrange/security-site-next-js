import Deloitte from "@/assets/customer-logo/deloitte-logo.png";
import CustomerReviews from "@/components/CustomersReviews";
import Reacon from "@/assets/customer-logo/Reacon-logo.png";
import Gordan from "@/assets/customer-logo/Gordan-logo.png";

const customer_reviews = () =>{
    const customers_reviews =   {
        customer_reviews_cards : [
            {
                logo:Deloitte,
                video:Deloitte,
                title: "Partnering with miniorange",
                tag : "53K views  •  2 weeks ago",
                comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange! ",
                customer_image: Deloitte,
                name:"Leo",
                ratings: 4,
                designation: "Software Developer at Deloitte"
            },
            {
                logo:Gordan,
                video:Deloitte,
                title: "Partnering with miniorange",
                tag : "53K views  •  2 weeks ago",
                comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
                customer_image: Deloitte,
                name:"James",
                ratings: 4,
                designation: "Software Developer at Deloitte"
            },
            {
                logo:Deloitte,
                video:Gordan,
                title: "Partnering with miniorange",
                tag : "53K views  •  2 weeks ago",
                comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
                customer_image: Reacon,
                name:"Jane",
                ratings: 4,
                designation: "Software Developer at Deloitte"
            },
            {
                logo:Deloitte,
                video:Reacon,
                title: "Partnering with miniorange",
                tag : "53K views  •  2 weeks ago",
                comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
                button_type:"Read more",
                button_url: "https://miniorange.com"
            },
            {
                logo:Reacon,
                video:Deloitte,
                title: "Partnering with miniorange",
                tag : "53K views  •  2 weeks ago",
                comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
                button_type:"Setup Guide",
                button_url: "https://miniorange.com"
            }
        ],
        customer_comments : [
            {
                title:"General Customer Service has been excellent",
                comments:"I just wanted to extend a big thank you from all of the folk at FIX for all your efforts over the last 15 months and especially over the last 72 hours. Your reaction to our requests and general customer service has been excellent. As you will know we went live with the new website in the last 24 hours. We would especially like to thank Swati for her efforts and being online until the early hours and making the migration go as smoothly as possible.",
                ratings:4,
                name:"Kathaleen Callahan",
                designation:"Software Developer at Deloitte"
            },
            {
                title:"Saved our company thousands of dollars",
                comments:"My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
                ratings:4,
                name:"Jenna Smathers",
                designation:"Software Developer at Deloitte"
            },
            {
                title:"2FA security for WordPress",
                comments:"To increase security, one necessary item in today's world is 2FA. If your email gets compromised, or you decide to use some lame password that's the same password on each site instead of using LastPass or another password manager, then you're most likely going to get hacked at some point. MiniOrange adds 2FA to the mix so even if an attacker knows your username and password, they must also have access to your phone in order to gain access to your account.",
                ratings:4,
                name:"Rick M",
                designation:"Software Developer at Deloitte"
            }
        ]  
    }
    return(
        <CustomerReviews CustomersReviewData = {customers_reviews} />
    )
}
export default customer_reviews;