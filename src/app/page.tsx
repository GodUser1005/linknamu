import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/GodUser1005",
    icon: "🐙",
  },
  {
    label: "블로그",
    href: "https://velog.io/@goduser_1005/posts",
    icon: "✍🏼",
  },
  {
    label: "이메일",
    href: "mailto:jijone1005@naver.com",
    icon: "📬",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-16 sm:px-8 sm:py-20">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile
          name="여지호"
          bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
          avatarUrl="/profile.jpg"
        />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} {...link} />
          ))}
        </div>
      </main>
    </div>
  );
}
