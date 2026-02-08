import { Metadata } from "next";
import Section from "@/components/ui/Section";
import { Mail, Phone, MapPin, Clock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Legase Construction Co.",
  description:
    "Get in touch with Legase Trading PLC for construction project inquiries, tender submissions, and general information.",
};

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Get in touch with our team for project inquiries, tender
            submissions, or general information
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Legase Construction Co.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Legase Trading PLC - Licensed construction contractor serving
              government and private sector clients throughout Ethiopia.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 text-(--color-primary)">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Head Office</h3>
                  <p className="text-slate-600">
                    [Street Address]
                    <br />
                    [District/Subcity]
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-(--color-primary)">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-slate-600">
                    Office: +251 XX XXX XXXX
                    <br />
                    Mobile: +251 9XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-(--color-primary)">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-600">
                    General Inquiries:{" "}
                    <a
                      href="mailto:info@legaseconstruction.com"
                      className="text-(--color-primary) hover:underline"
                    >
                      info@legaseconstruction.com
                    </a>
                    <br />
                    Tenders:{" "}
                    <a
                      href="mailto:tenders@legaseconstruction.com"
                      className="text-(--color-primary) hover:underline"
                    >
                      tenders@legaseconstruction.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 text-(--color-primary)">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-slate-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 8:00 AM - 12:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <div className="bg-slate-50 p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold mb-6">
                Company Information
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Legal Name
                  </h4>
                  <p>Legase Trading PLC</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Business Registration Number
                  </h4>
                  <p>[Registration Number]</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Tax Identification Number (TIN)
                  </h4>
                  <p>[TIN Number]</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Construction License
                  </h4>
                  <p>[License Number and Grade]</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-300">
                <h4 className="font-semibold text-slate-900 mb-3">
                  QR Code for Digital Contact Card
                </h4>
                <div className="bg-white p-4 inline-block border border-slate-200">
                  <div className="w-48 h-48 bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
                    [QR Code Placeholder]
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  Scan to save contact information
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Tender Submissions */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4 mb-6">
            <div className="shrink-0 text-(--color-primary)">
              <FileText className="h-10 w-10" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Tender Submissions & Project Inquiries
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For government tender submissions, project proposals, or
                detailed construction inquiries, please send comprehensive
                documentation to our dedicated email address.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">
              Required Information for Project Inquiries
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex gap-2">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Project type and scope (building, infrastructure, renovation,
                  etc.)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>Project location and site details</span>
              </li>
              <li className="flex gap-2">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Estimated project value or budget range (if available)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>Desired timeline for project completion</span>
              </li>
              <li className="flex gap-2">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>
                  Technical specifications or design documents (if available)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-(--color-primary) font-bold">•</span>
                <span>Contact information for follow-up communication</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200">
            <p className="text-slate-700">
              <strong>Response Time:</strong> We typically respond to project
              inquiries within 2-3 business days. For urgent matters, please
              indicate &quot;URGENT&quot; in the email subject line.
            </p>
          </div>
        </div>
      </Section>

      {/* Visit Our Office */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Visit Our Office
          </h2>
          <p className="text-lg text-slate-600 text-center mb-8">
            We welcome visitors to our head office in Addis Ababa. For project
            consultations or document submissions, we recommend scheduling an
            appointment in advance to ensure availability of the appropriate
            personnel.
          </p>
          <div className="bg-slate-100 p-8 text-center">
            <p className="text-slate-700 mb-4">
              <strong>To schedule an appointment:</strong>
            </p>
            <p className="text-slate-600">
              Call{" "}
              <span className="font-semibold text-slate-900">
                +251 XX XXX XXXX
              </span>{" "}
              or email{" "}
              <a
                href="mailto:info@legaseconstruction.com"
                className="text-(--color-primary) hover:underline font-semibold"
              >
                info@legaseconstruction.com
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* Professional Notice */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-600 leading-relaxed">
            Legase Trading PLC is a registered construction company in Ethiopia,
            licensed to undertake construction projects for government and
            private clients. All communications are handled professionally and
            confidentially. We maintain complete documentation for all projects
            and comply fully with Ethiopian construction regulations and
            government procurement requirements.
          </p>
        </div>
      </Section>
    </>
  );
}
