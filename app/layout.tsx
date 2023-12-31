import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
	title: "Airbnb",
	description: "Airbnb Clone",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<Navbar />
				</ClientOnly>
				<div className="pb-20 pt-28">{children}</div>
			</body>
		</html>
	);
}
