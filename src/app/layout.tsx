export const metadata = {
  title: "Tiktokenizer",
  description:
    "Online playground for openai/tiktoken, calculating the correct number of tokens for a given prompt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
