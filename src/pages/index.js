import TrialForm from '../components/TrialForm';
import UniqueSolutions from '@/components/UniqueSolutions/UniqueSolutions';
import { DM_Sans } from '@next/font/google';
import { useState } from 'react';
import { GoKey } from "react-icons/go";
import AddonSection from "../components/AddonSection";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Single from "../components/PricingComponent/Single";
import Multiple from "../components/PricingComponent/Multiple";
import FaqSection from '@/components/FaqSection';
import Deloitte from "@/assets/customer-logo/deloitte-logo.png";
import CustomerReviews from "@/components/CustomersReviews";
import Reacon from "@/assets/customer-logo/Reacon-logo.png";
import Gordan from "@/assets/customer-logo/Gordan-logo.png";
import CustomersTestinomials from "@/components/CustomersTestinomials";
import NasaLogo from "@/assets/customer-logo/Nasa-Logo.png";
import WaltDisney from "@/assets/customer-logo/Walt-Disney-logo.png";
import Sony from "@/assets/customer-logo/Sony-logo.png";
import Goldman from "@/assets/customer-logo/GS-logo.png";
import CustomerLogos from "@/components/CustomerLogos";

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
  const cardType1 = "WITH_ICONS";
  const cardType2 = "NO_PRICE";

  const [currentTab, setCurrentTab] = useState("single");
  const [single, setSingle] = useState("single");
  const [multiple, setMultiple] = useState("multiple");


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
      guides: {
        videoGuide: "https://youtu.be/6XGUvlvjeUQ",
        setupGuide: "https://plugins.miniorange.com/guide-to-setup-password-sync-with-ldap-add-on"
      },
      icon: <GoKey className="fs-3" />
    },
    {
      title: "WooCommerce SMS Notification",
      guides: {
        videoGuide: "https://youtu.be/6XGUvlvjeUQ",
      },
      icon: <GoKey className="fs-3" />
    },
    {
      title: "Ultimate Member Password Reset Over OTP",
      guides: {
        setupGuide: "https://plugins.miniorange.com/guide-to-setup-password-sync-with-ldap-add-on"
      },
      icon: <GoKey className="fs-3" />
    },
    {
      title: "Ultimate Member Password Reset Over OTP",
      icon: <GoKey className="fs-3" />
    }
  ];

  const extraAddons = {
    columns: 3,
    data: [
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
        dest: () => { alert("Clicked") }
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

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  }

  const pricingFeatureSingle = [
    {
      title: "Unlimited Authentication",
      featureOne: "-",
      featureTwo: "-",
      featureThree: "-",
      featureFour: "unlimited"
    },
    {
      title: "Basic Attribute Mapping",
      featureOne: "-",
      featureTwo: "-",
      featureThree: "-",
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Autoredirect to IDP",
      featureOne: "-",
      featureTwo: "-",
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Protect your complete site",
      featureOne: "-",
      featureTwo: "-",
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SAML single logout",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },


  ];


  const pricingFeatureMultiple = [
    {
      title: "Unlimited Authentication",
      featureOne: "-",
      featureTwo: "-",
      featureThree: "-",
      featureFour: "unlimited"
    },
    {
      title: "Basic Attribute Mapping",
      featureOne: "-",
      featureTwo: "-",
      featureThree: "-",
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Autoredirect to IDP",
      featureOne: "-",
      featureTwo: "-",
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Protect your complete site",
      featureOne: "-",
      featureTwo: "-",
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SAML single logout",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "Custom SP Certificate",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },
    {
      title: "SSO Login Audit",
      featureOne: <BsFillCheckCircleFill color="#eb5424" />,
      featureTwo: <BsFillCheckCircleFill color="#eb5424" />,
      featureThree: <BsFillCheckCircleFill color="#eb5424" />,
      featureFour: <BsFillCheckCircleFill color="#eb5424" />
    },


  ];

  const tabs = [
    {
      name: "About",
      id: "tab1",
      data: [{
        title: "What is About?",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Does miniOrange offer technical support?",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Does miniOrange store any user data?",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Does miniOrange store any user data?",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Does miniOrange store any user data?",
        solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      ]
    },
    {
      name: "Pricing",
      id: "tab2",
      data: [
        {
          title: "What is licsensing model?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange offer technical support?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange store any user data?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "What is refund policy?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange provide customization?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange provide developer license for paid plugin?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ]
    },
    {
      name: "Add Ons",
      id: "tab3",
      data: [
        {
          title: "What is licsensing addons?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange offer technical support for addons?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange store any user data addons?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange store any user data addons?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          title: "Does miniOrange store any user data addons?",
          solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ]
    }
  ];

  const [activeTab, setActivetab] = useState("tab1");

  const handleTab = (id) => {
    setActivetab(id);
  };

  const customers_reviews = {
    customer_reviews_cards: [
      {
        logo: Deloitte,
        video: Deloitte,
        title: "Partnering with miniorange",
        tag: "53K views  •  2 weeks ago",
        comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange! ",
        customer_image: Deloitte,
        name: "Leo",
        ratings: 4,
        designation: "Software Developer at Deloitte"
      },
      {
        logo: Gordan,
        video: Deloitte,
        title: "Partnering with miniorange",
        tag: "53K views  •  2 weeks ago",
        comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
        customer_image: Deloitte,
        name: "James",
        ratings: 4,
        designation: "Software Developer at Deloitte"
      },
      {
        logo: Deloitte,
        video: Gordan,
        title: "Partnering with miniorange",
        tag: "53K views  •  2 weeks ago",
        comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
        customer_image: Reacon,
        name: "Jane",
        ratings: 4,
        designation: "Software Developer at Deloitte"
      },
      {
        logo: Deloitte,
        video: Reacon,
        title: "Partnering with miniorange",
        tag: "53K views  •  2 weeks ago",
        comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
        button_type: "Read more",
        button_url: "https://miniorange.com"
      },
      {
        logo: Reacon,
        video: Deloitte,
        title: "Partnering with miniorange",
        tag: "53K views  •  2 weeks ago",
        comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
        button_type: "Setup Guide",
        button_url: "https://miniorange.com"
      }
    ],
    customer_comments: [
      {
        title: "General Customer Service has been excellent",
        comments: "I just wanted to extend a big thank you from all of the folk at FIX for all your efforts over the last 15 months and especially over the last 72 hours. Your reaction to our requests and general customer service has been excellent. As you will know we went live with the new website in the last 24 hours. We would especially like to thank Swati for her efforts and being online until the early hours and making the migration go as smoothly as possible.",
        ratings: 4,
        name: "Kathaleen Callahan",
        designation: "Software Developer at Deloitte"
      },
      {
        title: "Saved our company thousands of dollars",
        comments: "My company has been using miniOrange's cloud based services for over three years now and I have always had the best experience and support. Their team is always quick to respond and help when needed, and have also gone above and beyond in providing additional support even when I did not request it. It's so important to partner with a company you can trust and I highly recommend miniOrange!",
        ratings: 4,
        name: "Jenna Smathers",
        designation: "Software Developer at Deloitte"
      },
      {
        title: "2FA security for WordPress",
        comments: "To increase security, one necessary item in today's world is 2FA. If your email gets compromised, or you decide to use some lame password that's the same password on each site instead of using LastPass or another password manager, then you're most likely going to get hacked at some point. MiniOrange adds 2FA to the mix so even if an attacker knows your username and password, they must also have access to your phone in order to gain access to your account.",
        ratings: 4,
        name: "Rick M",
        designation: "Software Developer at Deloitte"
      }
    ]
  }

  const customer_reviews = {
    testinomials: [
      {
        logo_url: WaltDisney,
        name: "Ford Dealers",
        product_name: "Productx",
        ratings: "2",
        date: "June 8, 2021",
        comments: "Team was quick and effective with any customizations needed. The accessible customer support helps this app blossom into a very useful tool for single-sign-on. The basic functionality can be limiting depending on your business needs, but they can provide the customizations you need to connect your store. Overall would recommend using this app for SSO."
      },
      {
        logo_url: Reacon,
        name: "Excel with Business",
        product_name: "Product",
        ratings: "4",
        date: "October 22, 2021",
        comments: "I used this app to help me integrate through SSO with keycloak which we use as an IDP. It was very easy to use and managed to cover all use cases. On top of that, the support was top notch, helping us every step of the way. I completely recommend this plugin to anyone trying to do a SSO implementation."
      },
      {
        logo_url: Reacon,
        name: "Reacon.nl",
        product_name: "Product",
        ratings: "3",
        date: "August 26, 2021",
        comments: "The app is easy to use but this was my first encounter with sso setup so not an expert. But with the great support from Manish all was setup perfect. Even now when in need of support with questions get quick response en solutions. Positive about this!"
      },
    ],
    /*review card at bottom left section*/
    reviewCard: {
      title: "General Customer Service has been excellent",
      comments: "I just wanted to extend a big thank you from all of the folk at FIX for all your efforts over the last 15 months and especially over the last 72 hours. Your reaction to our requests and general customer service has been excellent. As you will know we went live with the new website in the last 24 hours. We would especially like to thank Swati for her efforts and being online until the early hours and making the migration go as smoothly as possible.",
      ratings: "4",
      customer_name: "Kathaleen Callahaan",
      designation: "Program Manager at Fix Trading"
    },
    /*customer review heading at bottom right*/
    customer_review_bottom: {
      header: "See what our customers have to say about us // Header",
      comments: "miniOrange SSO product provides easy and seamless access to all enterprise resources with one set of credentials. We provide SSO to any type of devices and applications whether they are in the cloud or on- premise. \n miniOrange SSO product provides easy and seamless access to all enterprise resources with one set of credentials",
    },
    /*review cards at bottom*/
    customer_review_bottom_cards: [
      {
        comments: "We are using miniOrange solution for Single Sign-On (SSO) into Salesforce, Moodle and WordPress. Good product and Great Services.",
        commentor: "Wei Mieo, Software Engineer"
      },
      {
        comments: "We are using miniOrange solution for Single Sign-On (SSO) into Salesforce, Moodle and WordPress. Good product and Great Services.",
        commentor: "Wei Mieo, Software Engineer"
      }
    ]
  }

  const customer_logos = {
    logos: [
      {
        id: "deloitte1",
        logo_url: Deloitte
      },
      {
        id: "deloitte",
        logo_url: WaltDisney
      },
      {
        id: "deloitte",
        logo_url: NasaLogo
      },
      {
        id: "deloitte",
        logo_url: Sony
      },
      {
        id: "deloitte",
        logo_url: Gordan
      },
      {
        id: "deloitte",
        logo_url: Goldman
      }
    ]
  }

  return (
    <>

      {/* ADDONS SECTION */}

      <div className="container-fluid my-5">
        <h5 className='mb-3'>Addons section with badge</h5>
        <AddonSection addOnCardsData={addOnsIntegrationWithBadge} columns={3} cardType={cardType} />
      </div>

      <div className="container-fluid my-5">
        <h5 className='mb-3'>Addons section with icons</h5>
        <AddonSection addOnCardsData={addOnsIntegrationWithIcons} columns={3} cardType={cardType1} />
      </div>

      <div className="container-fluid my-5">
        <h5 className='mb-3'>Addons section with no price</h5>
        <AddonSection addOnCardsData={addOnsIntegrationWithNoPrice} columns={3} cardType={cardType2} extraAddons={extraAddons} />
      </div>

      {/* UNIQUE SOLUTIONS */}

      <div className="container-fluid my-5">
        <UniqueSolutions uniqueSolutionItems={uniqueSolutionItems} />
      </div>

      {/* TRIAL FORM */}

      <div className="container-fluid my-5">
        <TrialForm />
      </div>

      {/* PRICING SECTION */}

      {/* <div className='container-fluid my-5'>
        <h2 className='text-center mt-5'>We've got a pricing plan that's perfect for you</h2>
        <p className='text-center mt-3'>No Surprise Fees. No Credit Card Required</p>
        <div className={`d-flex justify-content-center align-items-center ${styles.pricingTab}`}>
          <div className={(currentTab === single) ? `${styles.active}` : ""} onClick={handleTabChange} id={single} >Single Site</div>
          <div className={(currentTab === multiple) ? `${styles.active}` : ""} onClick={handleTabChange} id={multiple} >Multiple Site</div>
        </div>
        <div className='pricingSection d-flex justify-content-center align-items-center mt-5' style={{ flexDirection: "column" }} >
          {currentTab === "single" ? <Single pricingFeatures={pricingFeatureSingle} /> : <Multiple pricingFeatures={pricingFeatureMultiple} />}
        </div>
      </div> */}

      {/* FAQ SECTION */}

      <FaqSection faqs={tabs} />

      {/* CUSTOMER REVIEWS SECTION */}

      <CustomerReviews customersReviewData={customers_reviews} />

      {/* CUSTOMER TESTIMONIALS */}

      <CustomerLogos customerLogo={customer_logos} />
      <CustomersTestinomials customerData={customer_reviews} />

    </>

  )
}
