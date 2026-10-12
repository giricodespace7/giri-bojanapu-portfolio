function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-content mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Giri Babu Bojanapu. All rights reserved.
        </p>
        <span className="hidden sm:inline text-gray-600">💜</span>
      </div>
    </footer>
  );
}

export default Footer;
