import Image from "next/image";

export default function TataTertib() {
	return (
		<main className="bg-white h-full w-full pt-[4rem] flex justify-center prose max-w-full">
			<div className="w-3/4 flex flex-col items-center">
				<h1 className="text-3xl font-bold self-start text-center mt-10 text-black  w-full">
					Tata Tertib Perputakaan SMAN 20 Jakarta
				</h1>
				<br />

				<Image
					src={"/profile/ttp.png"}
					width={800}
					height={800}
					alt="Visi dan Misi"
				/>
			</div>
		</main>
	);
}
