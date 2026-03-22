import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="bg-rc-beige text-rc-blue flex min-h-[60vh] flex-col items-center justify-center px-4 py-16"
    >
      <p className="text-rc-brown mb-2 text-sm font-medium">
        Error 404
      </p>
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-rc-blue/80 mb-8 max-w-md text-center text-pretty">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-rc-blue focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
      >
        Back to home
      </Link>
    </main>
  );
}
