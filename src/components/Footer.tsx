export default function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap gap-4 px-12 py-7 bg-[#111111] border-t border-white/[0.08]">
      <div className="flex flex-col gap-[3px]">
        <span className="text-[15px] font-bold tracking-[0.1em] text-white" style={{ fontFamily: "var(--font-serif)" }}>
          BRYAN CHIAM
        </span>
        <span className="text-[9px] tracking-[0.18em] uppercase text-white/35" style={{ fontFamily: "var(--font-mono)" }}>
          Portfolio · Adelaide, SA
        </span>
      </div>

      <p className="text-[10px] tracking-[0.1em] uppercase text-white/30" style={{ fontFamily: "var(--font-mono)" }}>
        © {new Date().getFullYear()} Bryan Chiam. All rights reserved.
      </p>

      <div className="flex gap-7">
        {[
          { label: "GitHub",   href: "https://github.com/BCworkin" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/bryan-chiam-jf/" },
          { label: "Email",    href: "mailto:bryanchiamjf01@gmail.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noreferrer"}
            className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/50 no-underline transition-colors duration-200 hover:text-[#c9a84c]"
            style={{ fontFamily: "var(--font-cond)" }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
