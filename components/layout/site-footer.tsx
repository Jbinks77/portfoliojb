export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-white/70 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-semibold text-white">Studio [TON NOM]</p>
          <p className="mt-2">Des sites web qui font vendre — design, performance, conversion.</p>
        </div>
        <div>
          <p className="font-medium text-white">Liens</p>
          <div className="mt-2 flex flex-col gap-1">
            <a href="#">Instagram (placeholder)</a>
            <a href="#">LinkedIn (placeholder)</a>
            <a href="#">Mentions légales (placeholder)</a>
          </div>
        </div>
        <div>
          <p className="font-medium text-white">Contact</p>
          <p className="mt-2">hello@studio-tonnom.fr</p>
        </div>
      </div>
    </footer>
  );
}
