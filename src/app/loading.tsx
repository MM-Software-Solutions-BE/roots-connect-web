export default function Loading() {
  return (
    <div
      className="bg-rc-beige text-rc-blue flex min-h-[40vh] flex-col items-center justify-center gap-3 px-4 py-16"
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="border-primary size-9 animate-spin rounded-full border-2 border-t-transparent"
        aria-hidden
      />
      <p className="text-rc-blue/80 text-sm">Loading…</p>
    </div>
  );
}
