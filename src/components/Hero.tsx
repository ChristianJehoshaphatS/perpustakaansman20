"use client";
import Link from "next/link";
import banner1 from "../../public/banner/IMG_5271.png";
import banner2 from "../../public/banner/IMG_5272.png";
import banner3 from "../../public/banner/IMG_5273.png";
import banner4 from "../../public/banner/IMG_5274.png";
import banner5 from "../../public/banner/IMG_5275.png";
import banner6 from "../../public/banner/IMG_5276.png";
import banner7 from "../../public/banner/IMG_5277.png";
import foto from "../../public/profilkepsek.jpg";
import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
	return (
		<>
			<Carousel
				showArrows={true}
				// onChange={onChange}
				// onClickItem={onClickItem}
				// onClickThumb={onClickThumb}
				showThumbs={false}
				infiniteLoop
				autoPlay={true}
				transitionTime={600}
				animationHandler={"slide"}
				interval={5000}
				dynamicHeight={true}
			>
				<div
					className="hero min-h-screen object-cover bg-base-200 mt-[4rem]"
					style={{backgroundImage: `url(${banner1.src})`}}
				>
					<div className="hero-content flex-col lg:flex-row-reverse bg-slate-200/90 p-10 text-black rounded-2xl">
						{/* <img
							src={foto.src}
							className="max-w-sm rounded-lg shadow-2xl h-screen object-cover"
						/> */}
						<div className="prose text-black">
							<h1 className="text-3xl font-bold text-black">
								Selamat Datang di Perpustakaan SMAN 20 Jakarta!
							</h1>
							<p className="py-6">
								Ayo Membaca dan Gunakan Perpustakaan! <br />
								Perpustakaan SMAN 20 Jakarta menyediakan akses gratis untuk
								semua orang, tanpa terkecuali.
							</p>
							<Link href="/main">
								<button className="btn bg-[#ffd31a] text-black hover:bg-white">
									Masuk Perpustakaan
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<img
						src={banner2.src}
						className="h-auto w-full max-h-screen object-cover"
					/>
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img
						src={banner3.src}
						className="h-auto w-full max-h-screen object-cover"
					/>
					<p className="legend">Legend 3</p>
				</div>
				<div>
					<img
						src={banner4.src}
						className="h-auto w-full max-h-screen object-cover"
					/>
					<p className="legend">Legend 4</p>
				</div>
				<div>
					<img
						src={banner5.src}
						className="h-auto w-full max-h-screen object-cover"
					/>
					<p className="legend">Legend 5</p>
				</div>
				<div>
					<img
						src={banner6.src}
						className="h-auto w-full max-h-screen object-cover"
					/>
					<p className="legend">Legend 6</p>
				</div>
				<div>
					<img
						src={banner7.src}
						className="h-auto w-full max-h-screen object-cover"
					/>
					<p className="legend">Legend 7</p>
				</div>
			</Carousel>
		</>
	);
};

export default HeroBanner;
