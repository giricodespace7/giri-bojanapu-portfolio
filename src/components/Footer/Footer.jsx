function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 pb-8">
      <div
        className="
          rounded-2xl bg-surface-2 border border-gray-100
          px-6 md:px-8 py-6
          flex flex-col sm:flex-row items-center justify-center gap-2
          text-sm text-ink-muted
        "
      >
        <p>
          © {new Date().getFullYear()} Giri Babu Bojanapu. All rights reserved.
        </p>
        <span className="hidden sm:inline text-primary">💜</span>
      </div>
    </footer>
  );
}

export default Footer;
