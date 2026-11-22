import { tickerItems } from "@/lib/content";

/** Decorative skills strip. Hidden from assistive tech; the same skills are listed in the Skills section. */
export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
