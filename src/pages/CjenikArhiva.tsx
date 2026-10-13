const files = [
  "Vila_Ivanoviceva-47b-Zagreb_GTI_001_13.10.2026_14-19.csv",
];

const CjenikArhiva = () => (
  <main className="min-h-screen bg-background section-padding">
    <div className="max-w-3xl mx-auto">
      <h1 className="font-display text-4xl font-bold text-foreground mb-8">Arhiva cjenika</h1>
      <ul className="space-y-3">
        {files.map((f) => (
          <li key={f}>
            <a href={`/cjenik-arhiva/${f}`} download className="text-primary underline font-body break-all">{f}</a>
          </li>
        ))}
      </ul>
      <a href="/" className="inline-block mt-10 text-muted-foreground font-body text-sm underline">← Natrag na početnu</a>
    </div>
  </main>
);

export default CjenikArhiva;
