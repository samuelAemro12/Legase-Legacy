import Link from "next/link";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import { Building2, Hammer, Wrench, Landmark } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="container-custom py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Legase Construction Co.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
              Professional Construction Services Built on Trust and Excellence
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Legase Trading PLC delivers comprehensive construction solutions
              for government institutions and private sector clients across
              Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-block px-6 py-3 bg-(--color-primary) text-white font-medium text-center hover:bg-(--color-primary-dark) transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-medium text-center hover:bg-white hover:text-slate-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Trusted by Government and Private Institutions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            With years of experience in the construction industry, Legase
            Construction Co. has established a reputation for delivering
            projects on time, within budget, and to the highest standards of
            quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-(--color-primary) mb-2">
              15+
            </div>
            <p className="text-slate-600 font-medium">
              Years of Experience
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-(--color-primary) mb-2">
              100+
            </div>
            <p className="text-slate-600 font-medium">
              Projects Completed
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-(--color-primary) mb-2">
              100%
            </div>
            <p className="text-slate-600 font-medium">
              Compliance Record
            </p>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Core Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet the
            requirements of government tenders and institutional projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={<Building2 className="h-10 w-10" aria-hidden="true" />}
            title="Building Construction"
            description="Complete building construction services from foundation to finishing, including commercial, residential, and institutional structures."
          />
          <ServiceCard
            icon={<Hammer className="h-10 w-10" aria-hidden="true" />}
            title="Infrastructure & Civil Works"
            description="Roads, bridges, drainage systems, and other essential infrastructure projects for public and private development."
          />
          <ServiceCard
            icon={<Wrench className="h-10 w-10" aria-hidden="true" />}
            title="Renovation & Maintenance"
            description="Professional renovation, refurbishment, and ongoing maintenance services for existing buildings and facilities."
          />
          <ServiceCard
            icon={<Landmark className="h-10 w-10" aria-hidden="true" />}
            title="Government Projects"
            description="Specialized expertise in government contracts, institutional buildings, and public sector infrastructure development."
          />
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-(--color-primary) text-white font-medium hover:bg-(--color-primary-dark) transition-colors"
          >
            View All Services
          </Link>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Legase Construction Co.
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-(--color-primary) pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Commitment to Quality
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every project is executed with meticulous attention to detail,
                ensuring the highest standards of workmanship and materials.
              </p>
            </div>
            <div className="border-l-4 border-(--color-primary) pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Safety and Compliance
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We maintain strict adherence to safety regulations and building
                codes, with full documentation and certification for all
                projects.
              </p>
            </div>
            <div className="border-l-4 border-(--color-primary) pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Reliable Delivery
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our track record demonstrates consistent on-time, on-budget
                project completion with transparent communication throughout.
              </p>
            </div>
            <div className="border-l-4 border-(--color-primary) pl-6">
              <h3 className="text-xl font-semibold mb-2">
                Experienced Team
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our qualified engineers, project managers, and skilled workers
                bring decades of combined experience to every project.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today to discuss your construction requirements and
            receive a detailed proposal.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-(--color-primary) text-white font-medium text-lg hover:bg-(--color-primary-dark) transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </>
  );
}
