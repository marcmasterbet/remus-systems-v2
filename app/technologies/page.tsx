import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Technologies | LIMES & systèmes complexes",
  description: "Découvrez LIMES, la technologie REMUS Systems qui associe intelligence humaine et artificielle pour analyser, décider et agir dans des systèmes complexes.",
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    title: "Technologies | LIMES & systèmes complexes",
    description: "Découvrez LIMES, la technologie REMUS Systems qui associe intelligence humaine et artificielle pour analyser, décider et agir dans des systèmes complexes.",
    url: "https://www.remussystems.fr/technologies",
    type: "website",
    locale: "fr_FR",
    siteName: "REMUS Systems",
    images: [
      {
        url: "/visuals/hero-remus.png",
        alt: "REMUS Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies | LIMES & systèmes complexes",
    description: "Découvrez LIMES, la technologie REMUS Systems qui associe intelligence humaine et artificielle pour analyser, décider et agir dans des systèmes complexes.",
    images: ["/visuals/hero-remus.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const capabilities = [
  {
    icon: "lock",
    title: "INTÉGRATION INTELLIGENTE",
    text: "Fusion de l’expertise humaine et des capacités de l’IA dans des environnements critiques."
  },
  {
    icon: "layers",
    title: "ANALYSE AVANCÉE",
    text: "Traitement de données complexes pour une compréhension fine et contextualisée."
  },
  {
    icon: "dot",
    title: "DÉCISION AUGMENTÉE",
    text: "Aide à la décision en temps réel pour des actions pertinentes et sécurisées."
  },
  {
    icon: "hex",
    title: "SYSTÈMES ADAPTATIFS",
    text: "Des solutions évolutives qui apprennent, s’ajustent et créent de la valeur durable."
  }
];

export default function TechnologiesPage() {
  return (
    <main className="limes-page">
      <section className="remus-limes-v2-hero">
        <div className="remus-limes-v2-copy">
          <div className="remus-limes-v2-kicker">NOS TECHNOLOGIES</div>
          <div className="remus-limes-v2-rule" />
          <div className="remus-limes-v2-brand">LIMES</div>

          <h1>
            L’intelligence au service des<br />
            <span>systèmes complexes.</span>
          </h1>

          <p>
            LIMES intègre l’intelligence humaine et artificielle dans des architectures avancées
            pour analyser, décider et agir avec justesse.
          </p>

          <div className="remus-limes-v2-actions">
            <Link href="/solutions" className="remus-limes-v2-btn remus-limes-v2-btn-primary">
              DÉCOUVRIR NOS SOLUTIONS <span>→</span>
            </Link>
            <Link href="/a-propos" className="remus-limes-v2-btn remus-limes-v2-btn-secondary">
              NOTRE VISION <span>→</span>
            </Link>
          </div>
        </div>

        <div className="remus-limes-v2-art" aria-hidden="true">
          <Image
            src="/visuals/limes-hero-v2.jpeg"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 94vw, 55vw"
          />
        </div>
      </section>

      <section
        className="limes-capabilities"
        aria-label="Capacités LIMES"
      >
        {capabilities.map((item) => (
          <article
            className="limes-capability"
            key={item.title}
          >
            <div
              className={`limes-capability-icon limes-capability-icon--${item.icon}`}
            >
              <span />
            </div>

            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}

        <aside className="limes-capability-statement">
          <div className="limes-small-rule" />

          <strong>
            CONNECTER L’HUMAIN,
            <br />
            L’IA ET LA TECHNOLOGIE
            <br />
            POUR UN IMPACT RÉEL.
          </strong>
        </aside>
      </section>
    </main>
  );
}
