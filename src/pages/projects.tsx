import { PillTabs } from "../components/PillTabs";
import { ThumbnailGallery } from "../components/ThumbnailGallery";
import { useFilteredProjects } from "../hooks/use-filtered-projects";

// A "Projects" heading with the category pills (same look as Home's Featured header), then the
// shared thumbnail gallery with the name and tags underneath.
const ProjectsPage = () => {
  const { active, projects } = useFilteredProjects();

  return (
    <ThumbnailGallery
      title="Projects"
      activeKey={active}
      emptyText="No projects in this category yet."
      pills={<PillTabs active={active} markCurrent />}
      items={projects.map((project) => ({
        key: project.title,
        to: project.url,
        image: project.image,
        title: project.title,
        subtitle: project.details,
      }))}
    />
  );
};

export default ProjectsPage;
