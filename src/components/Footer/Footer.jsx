function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>© {new Date().getFullYear()} Giri Babu Bojanapu. All rights reserved.</p>
        <p className="font-mono text-xs">built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
