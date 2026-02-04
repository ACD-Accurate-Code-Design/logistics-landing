export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 text-sm text-[rgb(var(--muted))]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} LogiSwift. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="hover:text-[rgb(var(--text))]" href="#services">Services</a>
            <a className="hover:text-[rgb(var(--text))]" href="#contact">Support</a>
            <a className="hover:text-[rgb(var(--text))]" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
