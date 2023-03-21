import TrialForm from '@/components/trialform';
import UniqueSolutions from '@/components/UniqueSolutions/UniqueSolutions';
import { DM_Sans } from '@next/font/google';
import { GoKey } from "react-icons/go";
import AddonSection from "../components/AddonSection";

// const inter = Inter({ subsets: ['latin'] });
const inter = DM_Sans({ subsets: ['latin'], weight: ['400'] });

/** EXAMPLE DATA
 * 
 * ADDONS SECTION WITH BADGE AND BUTTON ACTIONS
 * 
 * const addOnsIntegrationWithBadge = [
		{
			title: "Ultimate Member SMS Notification",
			description: "Allows your website to send custom SMS Notifications to the customer/admins on new user registrations.",
			action: {
				buttonTitle: "Contact Us",
				buttonAction: "https://google.com"
			},
			badge: {
				title: "Featured",
				type: "primary"
			}
		},
		{
			title: "wooCommerce SMS Notification",
			description: (<p>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read more</a></p>),
			price: "19 $",
			action: {
				buttonTitle: "Buy Now",
				buttonAction: () => {alert("Go To buy page");}
			},
			badge: {
				title: "Recomended",
				type: "success-outlined"
			}
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			description: (<p>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read More</a></p>),
			price: "29 $",
			action: {
				buttonTitle: "Custom Action",
				buttonAction: () => {alert("Custom Action Called");}
			},
		}
	];
 * 
 */

export default function Home() {
  const cardType = "WITH_BADGE_ACTIONS";
	// const cardType = "WITH_ICONS";
	// const cardType = "NO_PRICE";

	
	const addOnsIntegrationWithBadge = [
		{
			title: "Ultimate Member SMS Notification",
			description: "Allows your website to send custom SMS Notifications to the customer/admins on new user registrations.",
			action: {
				buttonTitle: "Contact Us",
				buttonAction: "https://google.com"
			},
			badge: {
				title: "Featured",
				type: "primary-outlined"
			}
		},
		{
			title: "WooCommerce SMS Notification",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read more</a></>),
			price: "19 $",
			action: {
				buttonTitle: "Buy Now",
				buttonAction: () => { alert("Go To buy page"); }
			},
			badge: {
				title: "Recomended",
				type: "success-outlined"
			}
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read More</a></>),
			price: "29 $",
			action: {
				buttonTitle: "Custom Action",
				buttonAction: () => { alert("Custom Action Called"); }
			},
		}
	];

	const features = [
		{
			title: "Ultimate Member SMS Notification",
			description: "Allows your website to send custom SMS Notifications to the customer/admins on new user registrations.",
			action: {
				buttonTitle: "Contact Us",
				buttonAction: "https://google.com"
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "WooCommerce SMS Notification",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a className="" href='https://miniorange.com'>Read more</a></>),
			price: "19 $",
			action: {
				buttonTitle: "Buy Now",
				buttonAction: () => { alert("Go To buy page"); }
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read More</a></>),
			price: "29 $",
			action: {
				buttonTitle: "Custom Action",
				buttonAction: () => { alert("Custom Action Called"); }
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read More</a></>),
			price: "29 $",
			action: {
				buttonTitle: "Custom Action",
				buttonAction: () => { alert("Custom Action Called"); }
			},
			icon: <GoKey className="fs-3" />
		}
	];
	
	const addOnsIntegrationWithIcons = [
		{
			title: "Ultimate Member SMS Notification",
			description: "Allows your website to send custom SMS Notifications to the customer/admins on new user registrations.",
			action: {
				buttonTitle: "Contact Us",
				buttonAction: "https://google.com"
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "WooCommerce SMS Notification",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a className="" href='https://miniorange.com'>Read more</a></>),
			price: "19 $",
			action: {
				buttonTitle: "Buy Now",
				buttonAction: () => { alert("Go To buy page"); }
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read More</a></>),
			price: "29 $",
			action: {
				buttonTitle: "Custom Action",
				buttonAction: () => { alert("Custom Action Called"); }
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			description: (<>Allows your website to send custom SMS Notifications to the customer/admins on new user registrations. <a href='https://miniorange.com'>Read More</a></>),
			price: "29 $",
			action: {
				buttonTitle: "Custom Action",
				buttonAction: () => { alert("Custom Action Called"); }
			},
			icon: <GoKey className="fs-3" />
		}
	];

	const addOnsIntegrationWithNoPrice = [
		{
			title: "Ultimate Member SMS Notification",
			guides:{
				videoGuide: "https://youtu.be/6XGUvlvjeUQ",
				setupGuide: "https://plugins.miniorange.com/guide-to-setup-password-sync-with-ldap-add-on"
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "WooCommerce SMS Notification",
			guides:{
				videoGuide: "https://youtu.be/6XGUvlvjeUQ",
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			guides:{
				setupGuide: "https://plugins.miniorange.com/guide-to-setup-password-sync-with-ldap-add-on"
			},
			icon: <GoKey className="fs-3" />
		},
		{
			title: "Ultimate Member Password Reset Over OTP",
			icon: <GoKey className="fs-3" />
		}
	];

  const uniqueSolutionItems = [
    {
      img: "./UniqueSolutionImages/img_0.png",
      title: "Create a website using Html CSS and JavaScript",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
      action: {
        text: "Go somewhere >>",
        dest: 'https://google.com'
      },
    },
    {
      img: "./UniqueSolutionImages/img_0.png",
      title: "Complete portfolio website tutorial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
      action: {
        text: "Go somewhere >>",
        dest: () => {alert("Clicked")}
      },
    },
    {
      img: "/UniqueSolutionImages/img_0.png",
      title: "Bootstrap 5 Complete tutorial",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
      action: {
        text: "Go somewhere >>",
      },
    },
  ];

	

	const extraAddons = {
		columns: 3,
		data:[
			{
				title: "Ultimate Member SMS Notification",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "WooCommerce SMS Notification",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "Ultimate Member Password Reset Over OTP",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "Ultimate Member Password Reset Over OTP",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "Ultimate Member SMS Notification",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "WooCommerce SMS Notification",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "Ultimate Member Password Reset Over OTP",
				icon: <GoKey className="fs-6" />
			},
			{
				title: "Ultimate Member Password Reset Over OTP",
				icon: <GoKey className="fs-6" />
			}
		]
	}

	return (
    <>
      <div className="container-fluid my-5">
        <AddonSection addOnCardsData={addOnsIntegrationWithBadge} columns={3} cardType={cardType} />
        {/* <AddonSection addOnCardsData={addOnsIntegrationWithIcons} columns={3} cardType={cardType} /> */}
        {/* <AddonSection addOnCardsData={addOnsIntegrationWithNoPrice} columns={3} cardType={cardType} extraAddons={extraAddons} /> */}
      </div>
      
      <div className="container-fluid my-5">
        <UniqueSolutions uniqueSolutionItems={uniqueSolutionItems} />
      </div>
      
      <div className="container-fluid my-5">
        <TrialForm />
      </div>
    </>

	)
}
