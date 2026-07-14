import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blacksoft - Transforming Ideas Into Intelligent Digital Products",
  description: "Blacksoft is a next-generation AI software development agency for startups and enterprises. We design, build, and scale custom AI agents, LLM specializations, and high-performance workflow automation.",
  keywords: ["AI Development", "Custom AI Agents", "LLM Specialization", "Workflow Automation", "Enterprise Web", "Blacksoft"],
  authors: [{ name: "Blacksoft Team" }],
  openGraph: {
    title: "Blacksoft - Transforming Ideas Into Intelligent Digital Products",
    description: "Award-winning AI software development for startups and enterprise. We design, develop, and deploy intelligent systems that scale at speed.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
