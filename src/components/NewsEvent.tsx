"use client";
import { NewsModel, getNewsEvents } from "@/db/models/News";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

const NewsEvents = () => {
  const [news, setNews] = useState([{}] as NewsModel[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecommended();
  }, []);

  const fetchRecommended = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home/news`,
        { method: "GET" }
      );
      const responseJson = await response.json();
      //   console.log(responseJson, "AAAAAAAAAAAAAAA");
      setNews(responseJson.data);
    } catch (error) {
      //   console.log(error, "ERRORRRRRRR");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    console.log(news);

    return <h1>Loading</h1>;
  }
  return (
    <>
      {/* {console.log(news)} */}
      <h1 className="text-3xl font-bold self-start ml-10 mt-10 text-black">
        Event dan Berita
      </h1>
      <div className="flex self-start p-10 w-full gap-10">
        {/* Card */}
        {news.length > 1 &&
          news.map((newsevent) => {
            console.log(newsevent, "<<<<<<<<<<");

            return (
              <EventCard
                key={newsevent._id.toString()}
                link={`/news/${newsevent?.news_id}`}
                title={newsevent?.title}
                image={newsevent?.thumbnailUrl}
              />
            );
          })}
      </div>
    </>
  );
};

export default NewsEvents;
