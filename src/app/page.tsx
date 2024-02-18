"use client";
import EventCard from "@/components/EventCard";
import HeroBanner from "@/components/Hero";
import Image from "next/image";
import foto from "../../public/profilkepsek.jpg";

import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import bedahbukuthumb from "../../public/events/bedahbukuthumb.png";
import { useEffect, useState } from "react";
import { BookModel } from "@/db/models/Catalog";
import BookCard from "@/components/BookCard";

export default function Home() {
  //   console.log(process.env.NEXT_PUBLIC_SERVER_URL);
  const [recommend, setRecommend] = useState([{}] as BookModel[]);

  useEffect(() => {
    fetchRecommended();
  }, []);

  const fetchRecommended = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/home`,
      { method: "GET" }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    setRecommend(responseJson.data);
  };

  return (
    <>
      <div className="w-full">
        <HeroBanner />
      </div>
      <main className="bg-white h-full flex flex-col items-center p-2 lg:p-10">
        {/* Kata Sambutan Kepala Sekolah */}

        <h1 className="text-3xl font-bold self-start lg:ml-10 text-center mt-10 text-black">
          Kata Sambutan Kepala Sekolah
        </h1>

        <div className="flex gap-10 p-10 text-black items-start flex-col lg:flex-row w-full">
          <Image
            src={foto.src}
            alt="Foto Kepala Sekolah"
            width={600}
            height={1000}
            className="object-contain "
          />
          <ScrollContainer activeSmoothScrollOnTouchDevice={true}>
            <p>
              <br /> Assalamualaikum warahmatullahi wabarakatuh,
              <br />
              Shalom,
              <br />
              Om Swastiastu,
              <br />
              Namo Buddhaya,
              <br />
              Rahayu,
              <br />
              Salam kebajikan bagi kita
              <br />
              <br />
              Segala puji dan syukur kita panjatkan ke hadirat Tuhan Yang Maha
              Esa atas rahmat dan karunia-Nya kita masih berkesempatan berkarya
              demi masa depan pendidikan Indonesia yang lebih baik.
              <br />
              <br />
              Selamat datang di Website Perpustakaan SMA Negeri 20 Jakarta.
              <br />
              <br />
              Dalam mewujudkan visi misi perpustakaan SMA Negeri 20 Jakarta di
              era revolusi industri 4.0 ini dibutuhkan sarana pelayanan yang
              tepat dan prima. Salah satunya adalah melalui website. Website
              perpustakaan sekolah ini menjadi pusat informasi sumber belajar
              sekaligus informasi program dan kegiatan perpustakaan dalam upaya
              mendukung Kegiatan Belajar Mengajar (KBM) guru dan peserta didik
              serta peningkatan Literasi dan Numerasi peserta didik SMA Negeri
              20 Jakarta. Website sekolah ini juga memberi ruang kepada
              masyarakat untuk aktif berpartisipasi dan berkontribusi positif
              demi peningkatan mutu perpustakaan di SMA Negeri 20 Jakarta.
              <br />
              <br />
              Kami mengucapkan terima kasih kepada semua pihak yang telah
              berkontribusi terhadap pengembangan website Perpustakaan SMA
              Negeri 20 Jakarta ini. Semoga Website ini bermanfaat bagi
              masyarakat pada umumnya dan khususnya warga SMA Negeri 20 Jakarta.
              Semoga Tuhan yang Maha Esa memberkati setiap upaya peningkatan
              mutu perpustakaan di SMA Negeri 20 Jakarta. Aamiin.
              <br />
              <br />
              SMA Negeri 20 Jakarta
              <br />
              Satu cita, Satu rasa
              <br />
              Jaya Jaya Jaya
              <br />
              <br />
              Wassalamualaikum warahmatullahi wabarakatuh.
            </p>
          </ScrollContainer>
        </div>
        {/* Event dan Berita */}
        <div className="w-full px-1 h-1 bg-[#ffd31a]"></div>

        <h1 className="text-3xl font-bold self-start ml-10 mt-10 text-black">
          Jam Layanan
        </h1>
        <ul className="steps steps-vertical lg:steps-horizontal w-1/2">
          <li className="step step-primary w-full">Buka: 07.00 WIB</li>
          <li className="step">Tutup: 15.00 WIB</li>
        </ul>
        <br />
        <div className="w-full px-1 h-1 bg-[#ffd31a]"></div>

        <h1 className="text-3xl font-bold self-start ml-10 mt-10 text-black">
          Rekomendasi Bacaan
        </h1>
        <div className="flex self-start p-10 gap-3">
          {/* Card */}
          {recommend &&
            recommend?.map((data, i) => (
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
            ))}
        </div>

        <div className="w-full px-1 h-1 bg-[#ffd31a]"></div>

        <h1 className="text-3xl font-bold self-start ml-10 mt-10 text-black">
          Event dan Berita
        </h1>
        <div className="flex self-start p-10">
          {/* Card */}
          <EventCard
            link="google.com"
            title="Bedah Buku"
            image={bedahbukuthumb.src}
          />
        </div>
      </main>
    </>
  );
}
