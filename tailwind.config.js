/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"bg-gradient":
					"linear-gradient(180deg, hsl(267deg 100% 7%) 0%, hsl(142deg 62% 16%) 0%, hsl(133deg 73% 21%) 0%, hsl(129deg 78% 25%) 1%, hsl(126deg 82% 28%) 2%, hsl(124deg 85% 31%) 3%, hsl(122deg 87% 33%) 5%, hsl(122deg 87% 31%) 8%, hsl(122deg 87% 29%) 12%, hsl(122deg 87% 26%) 17%, hsl(121deg 88% 23%) 24%, hsl(121deg 88% 19%) 35%, hsl(117deg 100% 14%) 50%, hsl(187deg 61% 19%) 65%, hsl(208deg 61% 27%) 76%, hsl(218deg 62% 33%) 83%, hsl(224deg 62% 38%) 88%, hsl(228deg 62% 42%) 92%, hsl(231deg 62% 46%) 95%, hsl(231deg 62% 42%) 97%, hsl(231deg 62% 38%) 98%, hsl(231deg 62% 33%) 99%, hsl(231deg 62% 27%) 100%, hsl(231deg 62% 19%) 100%, hsl(236deg 70% 4%) 100%)",
			},
		},
	},
	plugins: [],
};
