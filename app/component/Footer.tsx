import Link from "next/link"

const year: number = new Date().getFullYear()

export default function Footer() {
	return (
		<footer className="m-8 h-4  sm:h-5 lg:h-6 flex items-center justify-center text-white/80 text-[10px]">
			<small>
				<p className="text-center text-sm">Copyright ©{year} {" - "}
					<Link
						href='https://danielcalderon.vercel.app/'
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium hover:underline text-purple-700"
					>
						Daniel Calderon
					</Link>
					. All rights reserved.
				</p>
			</small>
		</footer>
	)
}
