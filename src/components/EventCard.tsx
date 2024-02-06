import Link from "next/link";

type props = {
  title: string;
  image: string;
  link: string;
};

const EventCard = (props: props) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={props.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.title}</h2>
          <div className="card-actions">
            <Link href={props.link} className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
