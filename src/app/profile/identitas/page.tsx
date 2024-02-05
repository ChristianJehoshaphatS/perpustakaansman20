import HeroBanner from "@/components/Hero";
import Image from "next/image";

export default function Home() {
	return (
		<main className="bg-white h-full w-full">
			<HeroBanner />
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
					<div className="flex flex-col w-20">
						<Image
							src="/next.svg"
							alt="Foto Kepala Sekolah"
							width={600}
							height={1000}
						/>
						<h1>Event1</h1>
					</div>
					<div className="flex flex-col w-20">
						<Image
							src="/next.svg"
							alt="Foto Kepala Sekolah"
							width={600}
							height={1000}
						/>
						<h1>Event1</h1>
					</div>
					<div className="flex flex-col w-20">
						<Image
							src="/next.svg"
							alt="Foto Kepala Sekolah"
							width={600}
							height={1000}
						/>
						<h1>Event1</h1>
					</div>
				</div>
			</div>
		</main>
	);
}
