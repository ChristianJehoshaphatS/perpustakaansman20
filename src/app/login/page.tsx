import {getUserByEmail} from "@/db/models/UserLogin";
import {comparePassword} from "@/utils/bcryptjs";
import {signToken} from "@/utils/jwt";
import {cookies} from "next/headers";
import Link from "next/link";
import {redirect} from "next/navigation";
import {z} from "zod";

let loading = false;
const LoginPage = () => {
	const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

	const handleLogin = async (data: FormData) => {
		"use server";

		loading = true;

		const email = data.get("email");
		const password = data.get("password");

		const loginInputSchema = z.object({
			email: z.string().email(),
			password: z.string(),
		});

		const parsedData = loginInputSchema.safeParse({
			email,
			password,
		});
		console.log(parsedData);

		if (!parsedData.success) {
			const errPath = parsedData.error.issues[0].path[0];
			const errMessage = parsedData.error.issues[0].message;
			const errFinalMessage = `${errPath} - ${errMessage}`;

			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/login?error=${errFinalMessage}`
			);
		}

		const foundUser = await getUserByEmail(parsedData.data.email);

		if (!foundUser) {
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/login?error=invalid%20email/password`
			);
		}

		const compare = comparePassword(
			parsedData.data.password,
			foundUser.password
		);

		if (!compare) {
			return redirect(
				`${NEXT_PUBLIC_SERVER_URL}/login?error=invalid%20email/password`
			);
		}

		const payload = {
			id: foundUser._id,
			email: foundUser.email,
			name: foundUser.name,
			username: foundUser.username,
		};

		const token = signToken(payload);

		cookies().set("token", token, {
			httpOnly: true,
			secure: false,
			expires: new Date(Date.now() + 1000 * 3600),
			sameSite: "strict",
		});

		loading = false;
		return redirect("/main");
	};
	return (
		<>
			<div className="relative flex flex-col justify-center h-screen overflow-hidden bg-slate-50 px-10">
				<div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
					<h1 className="text-3xl font-semibold text-center text-yellow-700">
						Login
					</h1>
					<form className="space-y-4" action={handleLogin}>
						<div>
							<label className="label">
								<span className="text-base label-text text-black">Email</span>
							</label>
							<input
								type="text"
								placeholder="Email Address"
								name="email"
								className="w-full input input-bordered input-warning bg-white"
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
								className="w-full input input-bordered input-warning bg-white"
							/>
						</div>
						<a
							href="#"
							className="text-xs text-gray-600 hover:underline hover:text-blue-600"
						>
							Forget Password?
						</a>
						<div className="flex justify-between items-center">
							<button className="btn btn-warning">Login</button>
							<Link
								href="/register"
								className="text-yellow-800 hover:text-yellow-500"
							>
								Belum punya Akun? Register
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
