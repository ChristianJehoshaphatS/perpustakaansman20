import {createUser} from "@/db/models/UserRegister";
import Link from "next/link";
import {redirect} from "next/navigation";

const RegisterPage = () => {
	const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

	const handleSubmit = async (data: FormData) => {
		"use server";
		// try {
		// console.log(data);

		const inputData = {
			name: data.get("name") as string,
			username: data.get("username") as string,
			email: data.get("email") as string,
			password: data.get("password") as string,
		};

		const newUser = await createUser(inputData);
		// console.log(newUser);

		return redirect("/login");
		// } catch (error) {
		// 	console.log(error);
		// }
	};
	return (
		<>
			<div className="relative flex flex-col justify-center h-screen overflow-hidden bg-slate-50 px-10">
				<div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
					<h1 className="text-3xl font-semibold text-center text-yellow-700">
						Pendaftaran Akun
					</h1>
					<form className="space-y-4" action={handleSubmit}>
						<br />
						<div>
							<label className="label">
								<span className="text-base label-text text-black">
									Username
								</span>
							</label>
							<input
								type="text"
								placeholder="Username..."
								name="username"
								className="bg-white w-full input input-bordered input-warning"
							/>
						</div>

						<div>
							<label className="label">
								<span className="text-base label-text text-black">Email</span>
							</label>
							<input
								type="text"
								placeholder="Email Address"
								name="email"
								className="bg-white w-full input input-bordered input-warning"
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text text-black">
									Password
								</span>
							</label>
							<input
								type="password"
								placeholder="Enter Password"
								name="password"
								className="bg-white w-full input input-bordered input-warning"
							/>
						</div>
						<div className="flex justify-between items-center">
							{process ? (
								<button className="btn btn-warning disabled">Register</button>
							) : (
								<button className="btn btn-warning">Register</button>
							)}
							<Link
								href="/login"
								className="text-yellow-800 hover:text-yellow-500"
							>
								Sudah punya Akun? Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default RegisterPage;
