/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-blue60": "var(--variable-collection-blue60)",
        "variable-collection-green60": "var(--variable-collection-green60)",
        "variable-collection-orange60": "var(--variable-collection-orange60)",
        "variable-collection-primarybg": "var(--variable-collection-primarybg)",
        "variable-collection-progress": "var(--variable-collection-progress)",
        "variable-collection-red60": "var(--variable-collection-red60)",
        "variable-collection-save": "var(--variable-collection-save)",
        "variable-collection-secondarybg":
          "var(--variable-collection-secondarybg)",
      },
    },
  },
  plugins: [],
};
