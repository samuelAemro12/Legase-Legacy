import { Metadata } from "next";
import Section from "@/components/ui/Section";
import {
  Building2,
  Hammer,
  Wrench,
  Landmark,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Legase Construction Co.",
  description:
    "Professional construction services including building construction, infrastructure, civil works, renovation, and government projects.",
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-semibold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Comprehensive construction solutions for government and private
            sector clients
          </p>
        </div>
      </section>

      {/* Building Construction */}
      <Section id="building">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6 text-(--color-primary)">
              <Building2 className="h-14 w-14" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">
              Building Construction
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Complete building construction services from initial design
              consultation through final handover. We deliver commercial,
              residential, and institutional structures that meet all
              regulatory requirements.
            </p>
            <div className="aspect-video w-full overflow-hidden bg-slate-100 mb-6">
              <img
                src="https://images.pexels.com/photos/2566084/pexels-photo-2566084.jpeg"
                alt="Modern office building construction site - Sander Dalhuisen on Pexels"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Government office buildings and administrative facilities",
                "Educational institutions including schools and universities",
                "Healthcare facilities and medical centers",
                "Commercial buildings and retail spaces",
                "Residential complexes and housing projects",
                "Industrial facilities and warehouses",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4">Services Include</h3>
            <ul className="space-y-3">
              {[
                "Site preparation and foundation work",
                "Structural construction and masonry",
                "Roofing and waterproofing",
                "Electrical and mechanical systems installation",
                "Interior finishing and fixtures",
                "Exterior facades and landscaping",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Infrastructure & Civil Works */}
      <Section background="gray" id="infrastructure">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-semibold mb-4">Infrastructure Projects</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Road construction and asphalt paving",
                "Bridge construction and rehabilitation",
                "Drainage systems and flood control",
                "Water supply and distribution networks",
                "Sewerage and sanitation infrastructure",
                "Site development and earthworks",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4">Civil Engineering</h3>
            <ul className="space-y-3">
              {[
                "Concrete works and structural repairs",
                "Retaining walls and slope stabilization",
                "Underground utilities installation",
                "Site grading and compaction",
                "Pavement construction and maintenance",
                "Environmental mitigation measures",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 text-(--color-primary)">
              <Hammer className="h-14 w-14" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">
              Infrastructure & Civil Works
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Essential infrastructure development for public and private
              projects. We execute civil engineering works that support
              community development and economic growth.
            </p>
            <div className="aspect-video w-full overflow-hidden bg-slate-100 mb-6">
              <img
                src="https://images.pexels.com/photos/33029847/pexels-photo-33029847.jpeg"
                alt="Infrastructure road construction project - Cầu Đường Việt Nam on Pexels"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Renovation & Maintenance */}
      <Section id="renovation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-6 text-(--color-primary)">
              <Wrench className="h-14 w-14" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">
              Renovation & Maintenance
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Professional renovation, refurbishment, and maintenance services
              to extend the life of existing buildings and ensure continued
              operational efficiency.
            </p>
            <div className="aspect-video w-full overflow-hidden bg-slate-100 mb-6">
              <img
                src="https://images.unsplash.com/photo-1768321914149-5a6428ec2f82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8YnVpbGRpbmclMjByZW5vdmF0aW9uJTIwaW50ZXJpb3IlMjB3b3JrJTIwcHJvZmVzc2lvbmFsJTIwY29uc3RydWN0aW9ufGVufDB8MHx8fDE3NzA1NDUxMDB8MA&ixlib=rb-4.1.0&q=85"
                alt="Building renovation interior work - Olek Buzunov on Unsplash"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Renovation Services</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Building modernization and upgrades",
                "Interior remodeling and reconfiguration",
                "Structural repairs and reinforcement",
                "Facade restoration and improvement",
                "System upgrades (electrical, plumbing, HVAC)",
                "Accessibility improvements and code compliance",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4">
              Maintenance Programs
            </h3>
            <ul className="space-y-3">
              {[
                "Preventive maintenance contracts",
                "Emergency repair services",
                "Regular building inspections",
                "Painting and finishing touch-ups",
                "Roof maintenance and waterproofing",
                "Facility management support",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Government Projects */}
      <Section background="gray" id="government">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-semibold mb-4">Tender Capabilities</h3>
            <ul className="space-y-3 mb-6">
              {[
                "Registered contractor for government tenders",
                "Complete tender documentation preparation",
                "Competitive bidding and proposal development",
                "Compliance with procurement regulations",
                "Performance bond and insurance capacity",
                "Transparent project accounting and reporting",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4">
              Project Management
            </h3>
            <ul className="space-y-3">
              {[
                "Dedicated project managers for government contracts",
                "Regular progress reporting and documentation",
                "Quality assurance and compliance monitoring",
                "Stakeholder coordination and communication",
                "On-time delivery and budget management",
                "Post-completion warranty and support",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <CheckCircle
                    className="h-6 w-6 text-(--color-primary) shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-6 text-(--color-primary)">
              <Landmark className="h-14 w-14" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">
              Government & Institutional Projects
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Specialized expertise in government contracts and institutional
              construction. We understand the unique requirements, regulations,
              and documentation standards required for public sector projects.
            </p>
            <div className="aspect-video w-full overflow-hidden bg-slate-100 mb-6">
              <img
                src="https://images.pexels.com/photos/8961034/pexels-photo-8961034.jpeg"
                alt="Construction workers on site with safety equipment - Mikael Blomkvist on Pexels"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Quality Assurance */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Quality Assurance Across All Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Regardless of project type or scale, Legase Construction Co.
            maintains consistent quality standards throughout all our services.
            Every project benefits from:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="border-l-4 border-(--color-primary) pl-4">
              <h3 className="font-semibold mb-2">Qualified Personnel</h3>
              <p className="text-slate-600">
                Licensed engineers, certified project managers, and trained
                skilled workers
              </p>
            </div>
            <div className="border-l-4 border-(--color-primary) pl-4">
              <h3 className="font-semibold mb-2">Quality Materials</h3>
              <p className="text-slate-600">
                Sourcing from reputable suppliers with proper certification and
                testing
              </p>
            </div>
            <div className="border-l-4 border-(--color-primary) pl-4">
              <h3 className="font-semibold mb-2">Safety Protocols</h3>
              <p className="text-slate-600">
                Comprehensive safety measures and regular training for all site
                personnel
              </p>
            </div>
            <div className="border-l-4 border-(--color-primary) pl-4">
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-slate-600">
                Complete records, certifications, and as-built drawings for all
                work completed
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
