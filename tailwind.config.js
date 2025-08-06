import { tailwindTheme } from "./src/features/ui/theme/tailwind-theme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: tailwindTheme.extend,
  },
  plugins: [],
};
