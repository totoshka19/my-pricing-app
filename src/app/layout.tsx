import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["cyrillic", "latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat",
});

const raleway = Raleway({
    subsets: ["cyrillic", "latin"],
    weight: ["700"], // Bold
    variable: "--font-raleway",
});

const gilroy = localFont({
    src: '../fonts/Gilroy-Medium.woff2',
    weight: '500',
    variable: '--font-gilroy',
});

export const metadata: Metadata = {
    title: "Тарифы",
    description: "Тестовое задание на Frontend-разработчика",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={`${montserrat.variable} ${raleway.variable} ${gilroy.variable}`}>
            <body className={`${montserrat.className} bg-brand-dark text-white`}>
                {children}
            </body>
        </html>
    );
}
