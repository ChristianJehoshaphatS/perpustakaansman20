export default function VideoProfil() {
	return (
		<main className="bg-white h-screen items-center  w-full pt-[4rem] flex justify-center prose max-w-full">
			<div className="w-3/4 flex flex-col items-center">
				<iframe
					className="rounded-lg h-[30rem] w-3/4"
					src={`https://drive.google.com/file/d/1oisfL_P52x4WWwcYASlbNjsBE8M_k11w/preview`}
					allow="autoplay"
				></iframe>
			</div>
		</main>
	);
}
