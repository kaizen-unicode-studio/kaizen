import type { Metadata } from "next";
import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "Kaizen",
  description: "Powered by UniCode",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          <div id="modal"></div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
