import { Metadata } from "next";
import Section from "@/components/ui/Section";
import { Award, Shield, Users, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Legase Construction Co.",
  description:
    "Learn about Legase Trading PLC, our mission, values, and commitment to delivering exceptional construction services.",
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-semibold mb-4">About Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Legase Trading PLC - Building Ethiopia&apos;s Future Through Quality
            Construction
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Our Company</h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Legase Trading PLC, operating as Legase Construction Co., is a
              licensed construction company registered in Ethiopia. We
              specialize in delivering comprehensive construction services to
              government institutions, private enterprises, and development
              organizations.
            </p>
            <p>
              With over a decade of experience in the Ethiopian construction
              industry, we have built a reputation for reliability,
              professionalism, and unwavering commitment to quality. Our
              portfolio includes successful completion of building
              construction, infrastructure development, and civil works
              projects across the country.
            </p>
            <p>
              As a registered contractor eligible for government tenders, we
              maintain full compliance with all regulatory requirements,
              including proper licensing, tax registration, and adherence to
              national construction standards.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission and Vision */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="mb-4 text-(--color-primary)">
              <Target className="h-12 w-12" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To deliver exceptional construction services that meet the
              highest standards of quality, safety, and professionalism while
              contributing to Ethiopia&apos;s infrastructure development and
              economic growth.
            </p>
          </div>
          <div>
            <div className="mb-4 text-(--color-primary)">
              <Award className="h-12 w-12" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be recognized as Ethiopia&apos;s most trusted construction
              partner for government and institutional projects, known for our
              reliability, technical excellence, and commitment to client
              satisfaction.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0 text-(--color-primary)">
                <Shield className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-slate-600 leading-relaxed">
                  We conduct business with honesty, transparency, and ethical
                  practices in all our dealings with clients, partners, and
                  stakeholders.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 text-(--color-primary)">
                <Award className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-slate-600 leading-relaxed">
                  We are committed to delivering work that exceeds expectations
                  through skilled craftsmanship, quality materials, and rigorous
                  quality control processes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 text-(--color-primary)">
                <Shield className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Safety</h3>
                <p className="text-slate-600 leading-relaxed">
                  The safety of our workers, clients, and the public is our top
                  priority. We implement comprehensive safety protocols on every
                  project site.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 text-(--color-primary)">
                <Users className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-slate-600 leading-relaxed">
                  We honor our commitments, complete projects on schedule, and
                  maintain open communication throughout the construction
                  process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 text-(--color-primary)">
                <Target className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-slate-600 leading-relaxed">
                  We continuously improve our capabilities, adopt best
                  practices, and strive for excellence in every aspect of our
                  operations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 text-(--color-primary)">
                <Users className="h-8 w-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-slate-600 leading-relaxed">
                  We build long-term relationships with our clients based on
                  trust, mutual respect, and shared success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            Our Capabilities
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Legase Construction Co. maintains the technical capacity,
              equipment, and qualified personnel necessary to execute projects
              of varying scales and complexity:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Registered and licensed construction contractor in good
                  standing with relevant government authorities
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Experienced project managers and site supervisors with proven
                  track records
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Qualified engineers and technical staff certified in their
                  respective fields
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Skilled workforce trained in modern construction methods and
                  safety practices
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Access to construction equipment and machinery for various
                  project requirements
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Established relationships with reliable suppliers and
                  subcontractors
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Comprehensive insurance coverage and bonding capacity
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Our Commitment to Quality and Safety
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Quality and safety are not negotiable at Legase Construction Co.
              We implement rigorous quality control measures at every stage of
              construction, from material procurement to final inspection.
            </p>
            <p>
              Our safety protocols comply with Ethiopian national standards and
              international best practices. We provide ongoing safety training
              to all personnel and maintain comprehensive documentation of all
              safety procedures and incidents.
            </p>
            <p>
              Every project undergoes regular inspections and quality audits to
              ensure compliance with specifications, building codes, and client
              requirements.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
