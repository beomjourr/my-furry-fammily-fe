/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/my-furry-friend-fe/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/my-furry-friend-fe/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/my-furry-friend-fe/libs/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/ui-component/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/ui-component/base.scss",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

