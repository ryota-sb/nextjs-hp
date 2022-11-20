import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "HP by Next.js " }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex h-14 items-center pl-8">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href="/blog-page"
                className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
              >
                Blog
              </Link>
              <Link
                href="/contact-page"
                className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
        </a>
      </footer>
    </div>
  );
}
