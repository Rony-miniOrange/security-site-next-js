import CustomersTestinomials from "@/components/CustomersTestinomials";
import NasaLogo from "@/assets/customer-logo/Nasa-Logo.png";
import DeloitteLogo from "@/assets/customer-logo/deloitte-logo.png";
import WaltDisney from "@/assets/customer-logo/Walt-Disney-logo.png";
import Sony from "@/assets/customer-logo/Sony-logo.png";
import Gordan from "@/assets/customer-logo/Gordan-logo.png";
import Goldman from "@/assets/customer-logo/GS-logo.png";
import Reacon from "@/assets/customer-logo/Reacon-logo.png";
import CustomerLogos from "@/components/CustomerLogos";
const customerstestinomials  = () =>{
    const customer_reviews = { 
        testinomials :[
            {
                logo_url: WaltDisney, 
                name : "Ford Dealers",
                product_name : "Productx",
                ratings : "2",
                date : "June 8, 2021",
                comments : "Team was quick and effective with any customizations needed. The accessible customer support helps this app blossom into a very useful tool for single-sign-on. The basic functionality can be limiting depending on your business needs, but they can provide the customizations you need to connect your store. Overall would recommend using this app for SSO."
            },
            {
                logo_url: Reacon,
                name : "Excel with Business",
                product_name : "Product",
                ratings : "4",
                date : "October 22, 2021",
                comments : "I used this app to help me integrate through SSO with keycloak which we use as an IDP. It was very easy to use and managed to cover all use cases. On top of that, the support was top notch, helping us every step of the way. I completely recommend this plugin to anyone trying to do a SSO implementation."
            },
            {
                logo_url: Reacon,
                name : "Reacon.nl",
                product_name : "Product",
                ratings : "3",
                date : "August 26, 2021",
                comments : "The app is easy to use but this was my first encounter with sso setup so not an expert. But with the great support from Manish all was setup perfect. Even now when in need of support with questions get quick response en solutions. Positive about this!"
            },
        ],
        /*review card at bottom left section*/  
        reviewCard :{
            title : "General Customer Service has been excellent",
            comments : "I just wanted to extend a big thank you from all of the folk at FIX for all your efforts over the last 15 months and especially over the last 72 hours. Your reaction to our requests and general customer service has been excellent. As you will know we went live with the new website in the last 24 hours. We would especially like to thank Swati for her efforts and being online until the early hours and making the migration go as smoothly as possible.",
            ratings : "4",
            customer_name: "Kathaleen Callahaan",
            designation : "Program Manager at Fix Trading"
        },
        /*customer review heading at bottom right*/
        customer_review_bottom :{
            header : "See what our customers have to say about us // Header",
            comments : "miniOrange SSO product provides easy and seamless access to all enterprise resources with one set of credentials. We provide SSO to any type of devices and applications whether they are in the cloud or on- premise. \n miniOrange SSO product provides easy and seamless access to all enterprise resources with one set of credentials",
        },
        /*review cards at bottom*/
        customer_review_bottom_cards :[
            {
                comments : "We are using miniOrange solution for Single Sign-On (SSO) into Salesforce, Moodle and WordPress. Good product and Great Services.",
                commentor : "Wei Mieo, Software Engineer"
            },
            {
                comments : "We are using miniOrange solution for Single Sign-On (SSO) into Salesforce, Moodle and WordPress. Good product and Great Services.",
                commentor : "Wei Mieo, Software Engineer"
            }
        ]
    }
    /*customer-logos*/
    const customer_logos = {
        logos: [
        {   
            id:"deloitte1",
            logo_url: DeloitteLogo
        },
        {   
            id:"deloitte",
            logo_url: WaltDisney
        },
        {   
            id:"deloitte",
            logo_url: NasaLogo
        },
        {   
            id:"deloitte",
            logo_url: Sony
        },      
        {   
            id:"deloitte",
            logo_url: Gordan
        },
        {   
            id:"deloitte",
            logo_url: Goldman
        }
        ]
    }
    return(
        <>
        <CustomerLogos customerLogo = {customer_logos}/>
        <CustomersTestinomials customerData = {customer_reviews} />
        </>
    )
}
export default customerstestinomials;