// app/contact/layout.tsx
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact • Raphael Dias",
  description: "Get in touch – open to new opportunities in healthcare analytics",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}