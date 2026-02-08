import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Building Construction", href: "/services#building" },
    { name: "Infrastructure & Civil Works", href: "/services#infrastructure" },
    { name: "Renovation & Maintenance", href: "/services#renovation" },
    { name: "Government Projects", href: "/services#government" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Legase Construction Co.
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Legase Trading PLC - Professional construction services for
              government and private sector projects.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>+251 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a
                  href="mailto:info@legaseconstruction.com"
                  className="hover:text-white transition-colors"
                >
                  info@legaseconstruction.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" aria-hidden="true" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-400 text-center">
            &copy; {currentYear} Legase Trading PLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
