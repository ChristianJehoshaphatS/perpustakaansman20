import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "SMAN20 SMART LIBRARY",
	description: "Aplikasi Perpustakaan Digital SMAN 20 Jakarta",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
