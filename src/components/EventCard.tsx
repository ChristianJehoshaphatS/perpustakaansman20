import Link from "next/link";

type props = {
  title: string;
  image: string;
  link: string;
};

const EventCard = (props: props) => {
  const id = props?.image?.split("/");
  console.log(id[5], "AAAAAAAA");

  return (
    <>
      <div className="card w-3/4 lg:w-1/5 bg-white shadow-lg shadow-slate-300 rounded-2xl">
        <figure className="">
          <img
            crossOrigin="anonymous"
            src={`https://lh3.googleusercontent.com/d/${id[5]}`}
            alt="News"
            className="rounded-t-2xl max-h-40 w-full object-cover"
          />
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
