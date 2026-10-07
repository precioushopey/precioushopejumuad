import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { LuFolderOpen } from "react-icons/lu";
import { projects } from "../data/projects";
import { DocumentWindow } from "./DocumentWindow";
import { ProjectContact } from "./ProjectContact";

// A project page as a window, like the blog posts. Title, tags and category come from `projects`
// (matched on the URL), so each project file only holds its own content.
export const ProjectLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  const project = projects.find((p) => p.url === path);

  return (
    <DocumentWindow
      icon={<LuFolderOpen size={14} />}
      fileName={`${path.split("/").pop() ?? "project"}.app`}
      backTo="/projects"
      backLabel="Back to Projects"
      crumbs={["Projects", project?.category]}
      title={project?.title}
      meta={
        project && (
          <>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-cream/10 px-3 py-0.5 text-cream/80"
              >
                {tag}
              </span>
            ))}
          </>
        )
      }
    >
      {children}
      {!project?.comingSoon && <ProjectContact />}
    </DocumentWindow>
  );
};
