import { certificates, profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { CertificateCard } from "./certificate-card";

const linkedinUrl =
  profile.socials.find((s) => s.icon === "linkedin")?.href ?? "#";

export function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={certificates.eyebrow}
          title={certificates.heading}
          description={
            <>
              Credentials and certifications I&apos;ve earned online. For more
              certificates, follow me on{" "}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
              >
                LinkedIn ↗
              </a>
              .
            </>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.items.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}