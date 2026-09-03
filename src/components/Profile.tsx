type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-orange-200/70 to-transparent blur-xl dark:from-orange-500/20" />
        <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-200 shadow-[0_18px_35px_-14px_rgba(120,72,32,0.5)] ring-4 ring-white/80 sm:h-36 sm:w-36 dark:bg-zinc-800 dark:ring-white/10">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarUrl}
              alt={`${name} 프로필 사진`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-zinc-400 dark:text-zinc-600">
              {name.slice(0, 1)}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
          {name}
        </h1>
        <p className="text-sm text-[var(--foreground-muted)]">{bio}</p>
      </div>
    </div>
  );
}
