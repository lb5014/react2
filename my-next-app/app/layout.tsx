// app/layout.tsx
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="Generated with Next.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}