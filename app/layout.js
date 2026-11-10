import "./globals.css";

export const metadata = {
  title: "technews — tecnologia em pauta",
  description: "Notícias, ideias e conversas sobre tecnologia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
