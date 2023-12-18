import tailwind from "tailwindcss"; import autoprefixer from "autoprefixer";
import TailwindConfig from "./tailwind.config.cjs"

export default {
	plugins: [tailwind(TailwindConfig), autoprefixer]
}