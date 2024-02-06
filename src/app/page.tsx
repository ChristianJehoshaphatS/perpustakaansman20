import EventCard from "@/components/EventCard";
import HeroBanner from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white h-full w-full flex flex-col items-center">
      <div className="w-3/4">
        <HeroBanner />
      </div>
      {/* Kata Sambutan Kepala Sekolah */}
      <div className="flex gap-10 p-10 text-black">
        <Image
          src="/next.svg"
          alt="Foto Kepala Sekolah"
          width={600}
          height={1000}
        />
        <h1>Kata Sambutan</h1>
      </div>
      {/* Event dan Berita */}
      <div className="flex flex-col">
        <h1>Event dan Berita</h1>
        <div className="flex">
          {/* Card */}
          <EventCard
            link="google.com"
            title="New Event"
            image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </div>
      </div>
    </main>
  );
}
