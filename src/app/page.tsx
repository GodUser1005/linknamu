import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import { GithubIcon, InstagramIcon, BlogIcon } from "@/components/icons";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/username",
    icon: <GithubIcon className="h-full w-full" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/username",
    icon: <InstagramIcon className="h-full w-full" />,
  },
  {
    label: "Blog",
    href: "https://blog.example.com",
    icon: <BlogIcon className="h-full w-full" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <Profile name="김클로" bio="세계 최강 바이브 코더" />
        <div className="flex w-full flex-col gap-5">
          {links.map((link) => (
            <LinkCard key={link.label} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
}
