import { PrimaryCtaLink } from "@/components/primary-cta-link";
import { SectionShell } from "@/components/sections/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about-us"
      aria-labelledby="about-heading"
      className="border-b border-rc-blue/10"
    >
      <h2
        id="about-heading"
        className="text-rc-blue mb-8 text-3xl font-semibold tracking-tight"
      >
        About us
      </h2>
      <div className="text-rc-blue/85 space-y-6 text-pretty leading-relaxed">
        <p>
          Roots Connect was founded by three lawyers united by a shared mission to make the
          legal profession more inclusive and representative.{" "}
          <strong className="text-rc-blue font-semibold">Redouan Lakhal</strong>{" "}
          (President-Director, Lawyer, Employment Law),{" "}
          <strong className="text-rc-blue font-semibold">Anass Arbage</strong>{" "}
          (VP Director, Lawyer, Corporate &amp; Commercial Law) and{" "}
          <strong className="text-rc-blue font-semibold">Houda Berrada</strong>{" "}
          (VP Director, Lawyer, Environmental Law) combine their professional expertise and personal
          experiences to bridge the gap between law students from underrepresented backgrounds
          and the legal sector.
        </p>
        <p>
          An analysis of the legal profession, and more specifically the profession of being a
          lawyer and the judiciary, shows that representation within these professional groups
          is limited compared to the multicultural and diverse society in which we live.
          Although law students increasingly come from diverse and multicultural backgrounds, they
          progress into legal careers less frequently than might be expected.
        </p>
        <p>
          This issue particularly affects first-generation law students in a broad sense: both
          students who are the first in their family to study law and students with diverse roots
          or a bicultural background.
        </p>
        <p>
          Conversations with these students reveal that they still perceive the legal sector as
          insufficiently diverse, that in their final years they do not always feel ready to apply
          for positions, and that they encounter invisible barriers due to a lack of information
          and guidance.
        </p>

        <div className="border-rc-brown/25 mt-10 border-l-4 pl-6">
          <h3 className="text-rc-blue mb-4 text-xl font-semibold tracking-tight">
            Our mission
          </h3>
          <p className="mb-4">
            We envision a legal sector that reflects the diversity of the society it serves, a
            world where background or heritage is never a barrier, and where young professionals
            from underrepresented communities are fully represented, including at the top.
          </p>
          <p>
            Based on our core values, we aim to build an inclusive network that removes barriers
            to entering the legal profession for law students. We are a non-profit association
            of legal professionals committed to empowering students and young professionals from
            underrepresented backgrounds, in particular those with bicultural roots and
            first-generation academic trajectories.
          </p>
        </div>

        <div className="pt-4">
          <PrimaryCtaLink href="#contact">Become our partner</PrimaryCtaLink>
        </div>
      </div>
    </SectionShell>
  );
}
