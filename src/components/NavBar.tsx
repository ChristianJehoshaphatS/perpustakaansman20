import Link from "next/link";
import {cookies} from "next/headers";

const NavBar = () => {
	const cookieStore = cookies();
	const token = cookieStore.get("token");
	return (
		<div className="navbar bg-[#ffd31a] fixed text-black z-20">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={1}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
					>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<a>Profil</a>
							<ul className="p-2">
								<li>
									<Link href={"/profile/visi-misi"}>Visi dan Misi</Link>
								</li>
								<li>
									<Link href={"/profile/struktur"}>Struktur</Link>
								</li>
								<li>
									<Link href={"/profile/identitas"}>Identitas</Link>
								</li>
								<li>
									<Link href={"/profile/tata-tertib"}>Tata Tertib</Link>
								</li>
								<li>
									<Link href={"/profile/video"}>Video Profil</Link>
								</li>
							</ul>
						</li>
						<li>
							<a>Layanan</a>
							<ul className="p-2">
								<li>
									<a>E-Catalog</a>
								</li>

								<li>
									<a>E-Resource</a>
								</li>
								<li>
									<a>E-Book</a>
								</li>
								<li>
									<a>Smart Library</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Statistik</a>
							<ul className="p-2">
								<li>
									<a>Jumlah Anggota</a>
								</li>
								<li>
									<a>Jumlah Pengunjung</a>
								</li>
								<li>
									<a>Jumlah Bahan Pustaka</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Aktivitas</a>
							<ul className="p-2">
								<li>
									<a>Gerakan Literasi Zwanzig</a>
								</li>
								<li>
									<a>Karya Murid</a>
								</li>
								<li>
									<a>Karya Guru</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Media Sosial</a>
							<ul className="p-2">
								<li>
									<a>Instagram</a>
								</li>
								<li>
									<a>TikTok</a>
								</li>
								<li>
									<a>WhatsApp</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost text-xl hidden sm:inline-flex">
					Perpustakaan SMAN 20 Jakarta
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 ">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<details>
							<summary>Profil</summary>
							<ul className="p-2 lg:min-w-max bg-white">
								<li>
									<Link href={"/profile/visi-misi"}>Visi dan Misi</Link>
								</li>
								<li>
									<Link href={"/profile/struktur"}>Struktur</Link>
								</li>
								<li>
									<Link href={"/profile/identitas"}>Identitas</Link>
								</li>
								<li>
									<Link href={"/profile/tata-tertib"}>Tata Tertib</Link>
								</li>
								<li>
									<Link href={"/profile/video"}>Video Profil</Link>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Layanan</summary>
							<ul className="p-2 lg:min-w-max bg-white">
								<li>
									<a>E-Catalog</a>
								</li>

								<li>
									<a>E-Resource</a>
								</li>
								<li>
									<a>E-Book</a>
								</li>
								<li>
									<a> Smart Library</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Statistik</summary>
							<ul className="p-2  lg:min-w-max bg-white">
								<li>
									<a>Jumlah Anggota</a>
								</li>
								<li>
									<a>Jumlah Pengunjung</a>
								</li>
								<li>
									<a>Jumlah Bahan Pustaka</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Aktivitas</summary>
							<ul className="p-2 lg:min-w-max bg-white">
								<li>
									<a>Gerakan Literasi Zwanzig</a>
								</li>
								<li>
									<a>Karya Murid</a>
								</li>
								<li>
									<a>Karya Guru</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className="navbar-end ">
				{token ? (
					<Link
						href="/login"
						className="btn bg-white border-0 text-black hover:bg-[#fef7c0]"
					>
						Logout
					</Link>
				) : (
					<Link
						href="/login"
						className="btn bg-white border-0 text-black hover:bg-[#fef7c0]"
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default NavBar;
