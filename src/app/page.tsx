import { ArrowUpRight, CheckCircle2, Store } from "lucide-react";

import { Button } from "@/components/ui/button";

const foundations = [
  "Next.js 16 App Router",
  "TypeScript strict",
  "Tailwind CSS v4",
  "shadcn/ui",
];

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-16 sm:px-6">
      <section className="w-full max-w-2xl rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-10">
        <div className="mb-8 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Store aria-hidden="true" className="size-6" />
        </div>

        <p className="mb-3 text-sm font-medium text-muted-foreground">
          HM Store
        </p>
        <h1 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Nền tảng dự án đã sẵn sàng.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
          Cấu trúc ban đầu tuân theo quy ước trong AGENTS.md và sẵn sàng để
          phát triển các tính năng theo từng domain.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {foundations.map((foundation) => (
            <li
              key={foundation}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2
                aria-hidden="true"
                className="size-4 text-foreground"
              />
              {foundation}
            </li>
          ))}
        </ul>

        <div className="mt-10 border-t border-border pt-6">
          <Button
            render={
              <a
                href="https://nextjs.org/docs/app"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            Tài liệu App Router
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
        </div>
      </section>
    </main>
  );
}
