import { ProjectCard } from './components/projectCard';
import { projects } from '.././projects';

export default function App() {
  return (
    <div class="m-auto flex w-full max-w-5xl flex-col items-center">
      <h1 class="text-center text-2xl font-bold sm:text-4xl">
        Frontend Mentor Challenges
      </h1>

      <ul class="mt-8 grid gap-4" id="projectList">
        {projects.map((i) => (
          <ProjectCard
            title={i.id.split('-').join(' ')}
            image={i.image}
            liveURL={i.liveURL}
            repoURL={i.repoURL}
          />
        ))}
      </ul>
    </div>
  );
}
