import { useState, useEffect } from "react";

function Footer() {
  const STORAGE_KEY = "appreciate_developer_count";

  const [count, setCount] = useState(() => {
    try {
      return Number(localStorage.getItem(STORAGE_KEY)) || 0;
    } catch {
      return 0;
    }
  });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Restore "clicked" state if the user has appreciated before
    if (count > 0) setClicked(true);
  }, []);

  const handleAppreciate = () => {
    const next = count + 1;
    setCount(next);
    setClicked(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      // localStorage may be unavailable in some contexts
    }
  };

  return (
    <footer className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 pb-8">
      <div
        className="
          rounded-2xl bg-surface-2 border border-gray-100
          px-6 md:px-8 py-6
          flex flex-col items-center justify-center gap-4
          text-sm text-ink-muted
        "
      >
        {/* ── Appreciate the Developer ── */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-ink-muted">
            Enjoying your little visit? 👀
          </p>

          <button
            onClick={handleAppreciate}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5 rounded-full
              bg-gradient-to-r from-pink-500 to-rose-500
              text-white font-semibold text-sm
              shadow-md hover:shadow-lg
              hover:from-pink-600 hover:to-rose-600
              hover:-translate-y-0.5
              active:scale-95
              transition-all duration-300
              cursor-pointer
            "
          >
            <span className="text-base">♡</span>
            Appreciate the Developer
          </button>

          <p className="text-xs text-ink-muted mt-1">
            {clicked
              ? "Aww, you made my day! 🥹❤️"
              : "No purchase, no signup — just a little love. Tap the heart! 🥹❤️"}
          </p>
        </div>

        {/* ── Copyright ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <p>
            © {new Date().getFullYear()} Giri Babu Bojanapu. All rights
            reserved.
          </p>
          <span className="hidden sm:inline text-primary">💜</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
