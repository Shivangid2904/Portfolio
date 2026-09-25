export default function Footer() {
  return (
    <footer className="border-t border-lavender/8 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg text-lavender/40 italic">
          Shivangi Dubey<span className="text-pink-soft/60">.</span>
        </p>
        <p className="font-body text-xs text-lavender/25">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

