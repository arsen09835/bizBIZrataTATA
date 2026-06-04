export function Divider() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
        <span aria-hidden className="w-16 sm:w-24 h-px bg-brand-navy/12" />
        <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-terracotta/70" />
        <span aria-hidden className="w-16 sm:w-24 h-px bg-brand-navy/12" />
      </div>
    </div>
  );
}
