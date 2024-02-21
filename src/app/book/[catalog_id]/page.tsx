import {BookModel, getDetail} from "@/db/models/Catalog";
import Link from "next/link";

const BookDetail = async ({params}: {params: {catalog_id: string}}) => {
	const {catalog_id} = params;
	//   console.log(catalog_id);
	const data = (await getDetail(catalog_id)) as BookModel;
	console.log(data);
	const id = data?.image?.split("/");

	return (
		<main className="flex flex-col items-center w-full px-10 pt-[6rem] mb-10">
			<div className="flex  flex-col md:flex-row justify-center gap-10 w-full py-10">
				<img
					crossOrigin="anonymous"
					src={
						data?.image
							? `https://drive.lienuc.com/uc?id=${id[5]}`
							: "/book404.svg"
					}
					width={400}
					height={800}
					alt="CardImage"
					className={
						data?.image
							? "hover:scale-150 hover:translate-y-1/4 transition ease-in-out duration-200 object-contain h-[22rem] w-full lg:w-1/5"
							: "rounded-2xl bg-yellow-400  w-full lg:w-1/4 h-[22rem]"
					}
				/>
				<section className="lg:pr-[10rem] lg:w-1/2 bg-[#8fe8ed] p-10 rounded-md w-full">
					<div className="overflow-x-auto">
						<h1 className="text-2xl font-bold">{data.title}</h1>
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th className="w-1/3"></th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr className="hover">
									<th>Penulis</th>
									<td className="font-semibold">{data?.author}</td>
								</tr>
								<tr className="hover">
									<th>Penerbit</th>
									<td className="font-semibold">{data?.publisher}</td>
								</tr>
								<tr className="hover">
									<th>Kota Diterbitkan</th>
									<td className="font-semibold">{data?.city}</td>
								</tr>
								<tr className="hover">
									<th>Tahun Diterbitkan</th>
									<td className="font-semibold">{data?.year}</td>
								</tr>
								<tr className="hover">
									<th>Fisik Buku</th>
									<td className="font-semibold">{data?.fisik}</td>
								</tr>
								<tr className="hover">
									<th>Nomor Panggil</th>
									<td className="font-semibold">{data?.no_panggil}</td>
								</tr>
								<tr className="hover">
									<th>Jumlah Eksemplar</th>
									<td className="font-semibold">{data?.eksemplar}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
			<div className="self self-end pr-[12.5rem]">
				<Link href={"/layanan/e-catalog"}>
					<button className="btn btn-warning text-[#1e2728] text-lg">
						Kembali
					</button>
				</Link>
			</div>
		</main>
	);
};

export default BookDetail;
