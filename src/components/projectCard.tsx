import { createSignal } from 'solid-js';

interface Props {
  title: string;
  image?: string;
  liveURL?: string;
  repoURL?: string;
}

export function ProjectCard({ title, image, liveURL, repoURL }: Props) {
  const [showUnknown, setShowUnknown] = createSignal(!image);

  return (
    <li class="rounded-md  bg-white shadow-xl">
      <h3 class="pt-4 text-center font-bold capitalize">{title}</h3>

      <div class="flex justify-center p-4">
        {showUnknown() ? (
          <div class="flex h-44 w-full items-center rounded-lg bg-white text-center">
            <span class="w-full whitespace-pre text-3xl font-medium">
              - NO PREVIEW - {'\n'} :c
            </span>
          </div>
        ) : (
          <img
            class="h-44 rounded-md"
            src={image}
            alt={`${title} preview image`}
            onError={() => setShowUnknown(true)}
          />
        )}
      </div>

      <footer class="flex text-center">
        <a
          class="w-full cursor-pointer rounded-bl-md bg-lime-600 px-4 py-2 font-semibold text-white hover:bg-lime-700"
          href={liveURL}
        >
          Live Demo
        </a>
        <a
          class="w-full cursor-pointer rounded-br-md bg-purple-600 px-4 py-2 font-semibold text-white hover:bg-purple-700"
          href={repoURL}
        >
          Repository
        </a>
      </footer>
    </li>
  );
}
