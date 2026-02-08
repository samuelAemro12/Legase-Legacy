import { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Legase Construction Co.",
  description:
    "View completed and ongoing construction projects by Legase Trading PLC including building construction, infrastructure, and civil works.",
};

export default function Projects() {
  const completedProjects = [
    {
      title: "Commercial Office Complex",
      category: "Building Construction",
      description:
        "Multi-story commercial building featuring modern office spaces, retail areas, and underground parking. Completed on schedule with full compliance to building codes and specifications.",
      imageUrl:
        "https://images.pexels.com/photos/4067525/pexels-photo-4067525.jpeg",
      imageAlt:
        "Modern glass office building against clear blue sky - Kenrick Baksh on Pexels",
      status: "completed" as const,
    },
    {
      title: "Highway Infrastructure Development",
      category: "Infrastructure & Civil Works",
      description:
        "Major road construction project including asphalt paving, drainage systems, and roadside facilities. Delivered to specification with proper quality control and safety measures.",
      imageUrl:
        "https://images.pexels.com/photos/33029847/pexels-photo-33029847.jpeg",
      imageAlt:
        "Highway construction with vehicles and residential area - Cầu Đường Việt Nam on Pexels",
      status: "completed" as const,
    },
    {
      title: "Educational Institution Building",
      category: "Government Projects",
      description:
        "Construction of a modern educational facility including classrooms, laboratories, administrative offices, and recreational spaces. Completed under government contract with full documentation.",
      imageUrl:
        "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
      imageAlt:
        "Contemporary office building with reflective glass and greenery - Pixabay on Pexels",
      status: "completed" as const,
    },
    {
      title: "Residential Complex Renovation",
      category: "Renovation & Maintenance",
      description:
        "Comprehensive renovation of existing residential buildings including structural repairs, interior upgrades, electrical and plumbing system improvements, and exterior facade restoration.",
      imageUrl:
        "https://images.pexels.com/photos/14447085/pexels-photo-14447085.jpeg",
      imageAlt:
        "Contemporary office building exterior with glass facades - Mehmet Turgut Kirkgoz on Pexels",
      status: "completed" as const,
    },
    {
      title: "Bridge Construction Project",
      category: "Infrastructure & Civil Works",
      description:
        "Construction of reinforced concrete bridge structure including foundation work, structural elements, and approach roads. Executed with proper engineering oversight and quality testing.",
      imageUrl:
        "https://images.pexels.com/photos/33029854/pexels-photo-33029854.jpeg",
      imageAlt:
        "Bridge construction site with cranes and materials - Cầu Đường Việt Nam on Pexels",
      status: "completed" as const,
    },
    {
      title: "Medical Center Facility",
      category: "Building Construction",
      description:
        "Purpose-built medical facility with specialized rooms, diagnostic areas, and patient care spaces. Completed with attention to healthcare-specific requirements and regulations.",
      imageUrl:
        "https://images.pexels.com/photos/14468094/pexels-photo-14468094.jpeg",
      imageAlt:
        "Contemporary office building with glass windows under clear blue sky - Mehmet Turgut Kirkgoz on Pexels",
      status: "completed" as const,
    },
  ];

  const ongoingProjects = [
    {
      title: "Government Administrative Building",
      category: "Government Projects",
      description:
        "Multi-floor administrative facility under construction for government department. Features include modern office layouts, conference facilities, and secure document storage areas.",
      imageUrl:
        "https://images.pexels.com/photos/2566084/pexels-photo-2566084.jpeg",
      imageAlt:
        "Cityscape featuring skyscrapers under construction with cranes - Sander Dalhuisen on Pexels",
      status: "ongoing" as const,
    },
    {
      title: "Commercial Plaza Development",
      category: "Building Construction",
      description:
        "Large-scale commercial development including retail spaces, offices, and public areas. Currently in structural construction phase with completion scheduled for next fiscal year.",
      imageUrl:
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg",
      imageAlt:
        "Cityscape featuring high-rise buildings under construction during sunset - Quang Nguyen Vinh on Pexels",
      status: "ongoing" as const,
    },
    {
      title: "Urban Road Expansion",
      category: "Infrastructure & Civil Works",
      description:
        "Widening and upgrading of urban road network including new asphalt surfaces, improved drainage systems, sidewalks, and street lighting infrastructure.",
      imageUrl:
        "https://images.unsplash.com/photo-1665631154001-5f921d61a1a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxpbmZyYXN0cnVjdHVyZSUyMHJvYWQlMjBjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwcHJvZmVzc2lvbmFsJTIwY29uc3RydWN0aW9ufGVufDB8MHx8fDE3NzA1NDUwOTl8MA&ixlib=rb-4.1.0&q=85",
      imageAlt:
        "Group of workers in safety vests working on road - nanang adi on Unsplash",
      status: "ongoing" as const,
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="container-custom py-16">
          <h1 className="text-4xl font-semibold mb-4">Our Projects</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A portfolio of completed and ongoing construction projects
            demonstrating our commitment to quality and reliability
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-600 leading-relaxed">
            Our project portfolio reflects years of successful construction
            delivery across diverse sectors. Each project showcases our
            technical capabilities, attention to detail, and commitment to
            meeting client requirements while maintaining the highest standards
            of quality and safety.
          </p>
        </div>
      </Section>

      {/* Completed Projects */}
      <Section background="gray">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Completed Projects</h2>
          <p className="text-lg text-slate-600">
            Successfully delivered projects across building construction,
            infrastructure development, and renovation services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      {/* Ongoing Projects */}
      <Section>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Ongoing Works</h2>
          <p className="text-lg text-slate-600">
            Current projects under construction, scheduled for completion in
            accordance with contract timelines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      {/* Project Approach */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Project Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Planning Phase</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Detailed review of project specifications</li>
                <li>• Site assessment and feasibility analysis</li>
                <li>• Resource allocation and scheduling</li>
                <li>• Risk identification and mitigation planning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Execution Phase</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Mobilization of qualified personnel and equipment</li>
                <li>• Implementation of quality control procedures</li>
                <li>• Regular progress monitoring and reporting</li>
                <li>• Coordination with stakeholders and authorities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Quality Assurance
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Material testing and verification</li>
                <li>• Workmanship inspections at each stage</li>
                <li>• Compliance verification with specifications</li>
                <li>• Documentation of all quality checks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Completion & Handover
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Final inspections and punch list completion</li>
                <li>• Preparation of as-built documentation</li>
                <li>• Client walkthrough and acceptance</li>
                <li>• Warranty support and maintenance guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Discuss Your Project Requirements
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We welcome inquiries for new construction projects. Contact us to
            discuss your requirements and receive a detailed proposal.
          </p>
        </div>
      </Section>
    </>
  );
}
