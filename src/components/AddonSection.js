import { useEffect, useState } from "react";
import AddonSectionCss from './AddonSection.module.scss';

const AddonSection = (props) => {
	const [addOnCards, setAddOnCards] = useState(null);
	const [extraAddons, setExtraAddons] = useState([]);
	const [columnSize, setColumnSize] = useState(null);
	const [cardType, setCardType] = useState(null);

	useEffect(() => {
		setAddOnCards(props.addOnCardsData);
		setColumnSize(parseInt(12 / props.columns));
		if (props.extraAddons?.data) {
			setExtraAddons(props.extraAddons.data);
		}
		setCardType(props.cardType);
	}, [])

	return (
		<div className="row">
			{addOnCards && addOnCards.map((card, index) => {
				return (
					<div className={`col-lg-${columnSize} col-md-6 my-2`}>
						<div className="card border-0 shadow h-100 mo-card">
							<div className="card-body d-flex flex-column justify-content-between position-relative">
								{props.cardType === "WITH_BADGE_ACTIONS" && card &&
									<>
										<div>
											<h2>{card.price ? card.price : "Free"}</h2>
											{card.badge && <div className={`badge ${AddonSectionCss.customBadge} custom-badge-${card.badge.type} position-absolute`}>{card.badge.title}</div>}
										</div>
										<div className="heading">
											<h5>{card.title}</h5>
										</div>
										<div className="description">
											<p>{card.description}</p>
										</div>
										{card.action &&
											<button className="btn btn-primary text-white w-50" onClick={typeof card.action.buttonAction === "function" ? card.action.buttonAction : typeof card.action.buttonAction === "string" ? () => { window.location.href = card.action.buttonAction; } : null}>{card.action.buttonTitle}</button>
										}
									</>
								}
								{props.cardType === "WITH_ICONS" && card &&
									<>
										<div className={`position-absolute ${AddonSectionCss.customCardWrapper}`}>
											<div className={`${AddonSectionCss.customCardIcon} text-white`}>
												{card.icon}
											</div>
										</div>
										<div className="mt-3">
											<h2>{card.price ? card.price : "Free"}</h2>
											{card.badge && <div className={`badge ${AddonSectionCss.customBadge} custom-badge-${card.badge.type} position-absolute`}>{card.badge.title}</div>}
										</div>
										<div className="heading">
											<h5>{card.title}</h5>
										</div>
										<div className="description">
											<p>{card.description}</p>
										</div>
										{card.action &&
											<>
												{typeof card.action.buttonAction === "function" && <button className="btn btn-primary text-white width-40" onClick={card.action.buttonAction}>{card.action.buttonTitle}</button>}
												{typeof card.action.buttonAction === "string" && <span className="d-inline"><a href={card.action.buttonAction} className="mo-anchor">{card.action.buttonTitle}</a></span>}
											</>
										}
									</>
								}
								{props.cardType === "NO_PRICE" && card &&
									<>
										<div className="d-flex align-items-center">
											<div className={`${AddonSectionCss.customCardIcon} text-white`}>
												{card.icon}
											</div>
											<div className="heading px-3">
												<h5>{card.title}</h5>

												{card.guides &&
													<div className="guides">
														{card.guides.setupGuide &&
															<>
																<a className="mo-anchor" href={card.guides.setupGuide}>Setup Guide</a>
																{card.guides.videoGuide && " | "}
															</>
														}
														{card.guides.videoGuide &&
															<a className="mo-anchor" href={card.guides.videoGuide}>Setup Video</a>
														}
													</div>
												}
											</div>
										</div>
										{card.badge && <div className={`badge ${AddonSectionCss.customBadge} custom-badge-${card.badge.type} position-absolute`}>{card.badge.title}</div>}
									</>
								}
							</div>
						</div>
					</div>
				)
			})}
			{/* {extraAddons.length > 0 &&
				<div className="bg-light p-1 d-flex">
					{extraAddons.map((extraCard, index) => {
						return (
							<Card cardType={cardType} columnSize={columnSize} key={`extra-addon-card-${index}`}>
								<div className="d-flex align-items-center">
									<div className={`${AddonSectionCss.customCardIcon} text-white`}>
										{extraCard.icon}
									</div>
									<div className="heading px-3"><p>{extraCard.title}</p></div>
								</div>
							</Card>
						)
					})}
				</div>
			} */}
		</div>
	)
}

export default AddonSection;