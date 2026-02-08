interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  status?: "completed" | "ongoing";
}

export default function ProjectCard({
  title,
  category,
  description,
  imageUrl,
  imageAlt,
  status = "completed",
}: ProjectCardProps) {
  return (
    <article className="bg-white border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors">
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {category}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded ${
              status === "completed"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {status === "completed" ? "Completed" : "Ongoing"}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
