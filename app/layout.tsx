import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:{default:"The Lizard Lab",template:"%s · The Lizard Lab"},description:"Behaviour, ecology and evolution research at Macquarie University.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
