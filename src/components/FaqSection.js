import { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus } from "react-icons/ai";
const FaqSection = (props) => {
    const [faqs, setFaqs] = useState(null);
    const [activeTab, setActivetab] = useState(0);
    const [open, setOpen] = useState(null);

    useEffect(() => {
        console.log(props.faqs);
        setFaqs(props.faqs);
    }, []);

    const toggle = (index) => {
        if (open == index) {
            setOpen(null);
        }
        else {
            setOpen(index);
        }
    };

    const handleTab = (id) => {
        setActivetab(id);
    };

    return (
        <div className="container-fluid my-5 px-5">
            <div className="row d-flex">
                <div className="col-md-8">
                    <h2> Frequently Asked Questions</h2>
                </div>
                <div className="col-md-4 d-flex px-5">
                    {
                        faqs && faqs.map((tab,index) => (
                            <div role="button" key={`faq-section-tab-${tab.id}`} className={"border rounded-1 col-md-4 mx-2 d-flex justify-content-center align-items-center " + (activeTab === index ? "bg-dark" : "bg-white")} onClick={() => handleTab(index)}>
                                <a className={"nav-link " + (activeTab == index ? "text-white" : "text-muted")} id={tab.id}>{tab.name}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="border rounded-3 my-4 w-100">
                {faqs && faqs[activeTab]?.data.map((faq, index) => {
                        return (
                            <div className="py-4 mx-5 border-bottom ">
                                <div className="heading d-flex ">
                                    <div className="title w-75 ">
                                        <h5 className={"font-weight-normal heading " + (open == index ? "text-primary" : "text")}>{faq.title}</h5>
                                    </div>
                                    <div className="expand w-25 d-flex justify-content-end">
                                        <button className="btn toggle" onClick={() => toggle(index)}>
                                            {
                                                open !== null && open == index &&
                                                <AiOutlineMinus className="fs-5" />
                                            }
                                            {
                                                open !== null && open !== index &&
                                                <GrAdd className="fs-5" />
                                            }
                                            {
                                                open == null &&
                                                <GrAdd className="fs-5" />
                                            }
                                        </button>
                                    </div>
                                </div>
                                {
                                    open == index && <div className="description w-75">
                                        <p>{faq.solution}</p>
                                    </div>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
};
export default FaqSection;