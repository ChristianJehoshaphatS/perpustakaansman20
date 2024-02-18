"use client";
import BookCard, { bookProps } from "@/components/BookCard";
import { getCatalog } from "@/db/models/Catalog";
import React, { useEffect, useState } from "react";

export default function ECatalog() {
  const [catalog, setCatalog] = useState([{}] as bookProps[]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [input, setInput] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
  });
  useEffect(() => {
    queryCatalog();
  }, [page]);

  const prevPage = () => {
    page <= 1 ? setPage(1) : setPage(page - 1);
    console.log(page);
  };
  const nextPage = () => {
    page >= totalPage ? setPage(totalPage) : setPage(page + 1);
    console.log(page);
  };

  const queryCatalog = async (e?: React.SyntheticEvent) => {
    if (e) e.preventDefault();
    const formData = new FormData();

    formData.append("title", input.title);
    formData.append("author", input.author);
    formData.append("year", input.year);
    formData.append("publisher", input.publisher);
    formData.append("pageNumber", page.toString());
    formData.append("pageSize", "20");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/catalog`,
      {
        method: "POST",
        body: formData,
        cache: "no-cache",
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    setCatalog(responseJson.data.data);
    setTotalPage(responseJson.data.totalPages);
    if (responseJson.data.data.length == 0) {
      setPage(1);
    } else if (page >= totalPage) {
      setPage(totalPage);
    }
  };

  //   const fetchCatalog = async () => {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_SERVER_URL}/api/catalog`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const responseJson = await response.json();
  //     console.log(responseJson);
  //     setCatalog(responseJson.data.data);
  //     setTotalPage(responseJson.data.totalPages);
  //   };
  //   console.log(catalog ?? catalog);

  return (
    <main className="bg-white h-full w-full pt-[4rem] flex justify-center items-center flex-col max-w-full">
      <div className="py-4">Catalog Buku</div>
      <div className="join flex flex-wrap justify-center">
        <div>
          <div>
            <input
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              className="input input-bordered join-item w-full"
              placeholder="Judul"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              value={input.author}
              onChange={(e) => setInput({ ...input, author: e.target.value })}
              className="input input-bordered join-item w-full"
              placeholder="Penulis"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              value={input.publisher}
              onChange={(e) =>
                setInput({ ...input, publisher: e.target.value })
              }
              className="input input-bordered join-item w-full"
              placeholder="Penerbit"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              value={input.year}
              onChange={(e) => setInput({ ...input, year: e.target.value })}
              className="input input-bordered join-item w-full"
              placeholder="Tahun Terbit"
            />
          </div>
        </div>

        <div className="indicator">
          {/* <span className="indicator-item badge badge-secondary">new</span> */}
          <button className="btn lg:join-item w-full" onClick={queryCatalog}>
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center my-10">
        {catalog &&
          catalog.map((data, i) => {
            return (
              <BookCard
                key={`book${data.catalog_id}`}
                title={data.title}
                author={data.author}
                city={data.city}
                year={data.year}
                publisher={data.publisher}
                fisik={data.fisik}
                no_panggil={data.no_panggil}
                eksemplar={data.eksemplar}
                image={data.image}
                catalog_id={data.catalog_id}
                link={`/book/${data.catalog_id}`}
              />
            );
          })}
      </div>
      <div className="join mb-10">
        <button className="join-item btn" onClick={prevPage}>
          «
        </button>
        <button className="join-item btn">Page {page}</button>
        <button className="join-item btn" onClick={nextPage}>
          »
        </button>
      </div>
    </main>
  );
}
