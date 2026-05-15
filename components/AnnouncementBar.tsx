export default function AnnouncementBar() {
  return (
    <div className="bg-dark-section text-ivory/50 text-[11px] font-sans tracking-wide">
      <div className="max-w-container mx-auto px-4 sm:px-6 h-9 flex items-center justify-between gap-3">
        <span className="truncate min-w-0">
          <span className="hidden sm:inline">Mirar Beta is closed. The next version is being rebuilt.</span>
          <span className="sm:hidden">Beta is closed — v2 incoming.</span>
        </span>
        <a
          href="https://substack.com/@mirarlife"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-peach/70 hover:text-peach transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
        >
          <span className="hidden sm:inline">Follow the rebuild</span>
          <span className="sm:hidden">Follow</span>
          <span aria-hidden> →</span>
        </a>
      </div>
    </div>
  )
}
