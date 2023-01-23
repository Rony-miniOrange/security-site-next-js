import { useEffect, useState } from "react";

const Card = (props) => {
	return (
		<div className="card border-0 shadow h-100 mo-card">
			<div className="card-body d-flex flex-column justify-content-between position-relative">
				{props.children}
			</div>
		</div>
	)
}

export default Card;