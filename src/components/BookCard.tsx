import Link from "next/link";

export type bookProps = {
	catalog_id: number;
	title: string;
	author: string;
	city: string;
	year: number;
	publisher: string;
	fisik: string;
	no_panggil: string;
	eksemplar: number;
	image: string;
	link: string;
};

const BookCard = (props: bookProps) => {
	const id = props?.image?.split("/");

	const limitStr = (str: string) => {
		if (str?.length > 30) {
			return `${str.substring(0, 30)}...`;
		} else {
			return str;
		}
	};

	return (
		<>
			<div className="card min-w-[18rem] w-[18rem] bg-white shadow-xl shadow-slate-300 rounded-2xl">
				<figure className="">
					<img
						crossOrigin="anonymous"
						src={
							props?.image
								? `https://drive.lienuc.com/uc?id=${id[5]}`
								: "/book404.svg"
						}
						width={400}
						height={400}
						alt="CardImage"
						className={
							props.image
								? "hover:scale-110 transition ease-in-out duration-200 object-contain h-[22rem]"
								: "rounded-t-2xl bg-yellow-400"
						}
					/>
				</figure>
				<div className="card-body items-center text-center flex flex-col justify-between h-[10rem]">
					<h3 className="card-title text-black text-lg">
						{limitStr(props.title)}
					</h3>
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

export default BookCard;
