import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namisoft - Transforming Ideas Into Intelligent Digital Products",
  description: "Namisoft is a next-generation AI software development agency for startups and enterprises. We design, build, and scale custom AI agents, LLM specializations, and high-performance workflow automation.",
  keywords: ["AI Development", "Custom AI Agents", "LLM Specialization", "Workflow Automation", "Enterprise Web", "Namisoft"],
  authors: [{ name: "Namisoft Team" }],
  openGraph: {
    title: "Namisoft - Transforming Ideas Into Intelligent Digital Products",
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
