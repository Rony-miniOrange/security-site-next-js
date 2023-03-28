import TrialForm from '../components/TrialForm';
import UniqueSolutions from '@/components/UniqueSolutions/UniqueSolutions';
import { DM_Sans } from '@next/font/google';
import { useState } from 'react';
import { GoKey } from "react-icons/go";
import AddonSection from "../components/AddonSection";
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Single from "../components/PricingComponent/Single";
import Multiple from "../components/PricingComponent/Multiple";
import FaqSection from '../components/FaqSection';
import DownloadSection from '../components/DownloadSection';

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

  const downloadSection = [
    {
      sectionValue: <b>5000 <span className='text-primary'>+</span></b>,
      sectionTitle: "Downloads"
    },
    {
      sectionValue: <b>5000 <span className='text-primary'>+</span></b>,
      sectionTitle: "Active Installs"
    },
    {
      sectionValue: <b>9000 <span className='text-primary'>+</span></b>,
      sectionTitle: "Ratings"
    },
    {
      sectionValue: <b>24 <span className='text-primary'>x</span> 7</b>,
      sectionTitle: "Worldwide Support"
    },
  ]

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

      {/* DOWNLOADS SECTION */}
      <DownloadSection downloadSection={downloadSection} />

    </>

  )
}
