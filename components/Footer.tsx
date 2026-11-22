export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p className="mono">&copy; {new Date().getFullYear()} Aditya Kapoor</p>
        <p className="mono">
          <a href="#top">Back to top &uarr;</a>
        </p>
      </div>
      <p className="wordmark" aria-hidden="true" />
    </footer>
  );
}
