import Link from "next/link";

type props = {
	title: string;
	image: string;
	link: string;
};

const EventCard = (props: props) => {
	return (
		<>
			<div className="card w-3/4 lg:w-1/5 bg-white shadow-xl shadow-yellow-300 rounded-2xl">
				<figure className="">
					<img src={props.image} alt="Shoes" className="rounded-t-2xl" />
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title text-black">{props.title}</h2>
					<div className="card-actions">
						<Link href={props.link} className="btn btn-warning">
							Detail
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventCard;
