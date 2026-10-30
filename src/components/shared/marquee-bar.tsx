"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Marquee from "react-fast-marquee";
import {
  Gift,
  Headphones,
  RefreshCw,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type MarqueeItem = { icon: LucideIcon; text: string };

const MESSAGES: MarqueeItem[] = [
  { icon: Truck, text: "Miễn phí vận chuyển đơn từ 500K" },
  { icon: RefreshCw, text: "Đổi trả dễ dàng trong 30 ngày" },
  { icon: ShieldCheck, text: "Cam kết chính hãng 100%" },
  { icon: Gift, text: "Giảm 10% đơn đầu tiên - Nhập mã: WELCOME" },
  { icon: Headphones, text: "Hỗ trợ khách hàng 24/7" },
];

function usePlayMarquee() {
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlay(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return play;
}

type MarqueeBarProps = {
  className?: string;
  items?: MarqueeItem[];
  speed?: number;
  /** Màu nhấn dạng "R G B". Mặc định: vàng champagne */
  accent?: string;
};

export function MarqueeBar({
  className,
  items = MESSAGES,
  speed = 40,
  accent = "245 200 110",
}: MarqueeBarProps) {
  const play = usePlayMarquee();

  return (
    <div
      style={{ "--mb-accent": accent } as CSSProperties}
      className={cn(
        "relative w-full select-none overflow-hidden border-y border-white/15",
        "bg-neutral-950/55 py-3 backdrop-blur-xl",
        "text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm",
        className,
      )}
    >
      <style>{`
        .mb-blob {
          position: absolute; top: 0; bottom: 0; width: 18rem;
          border-radius: 9999px; filter: blur(48px);
          animation: mb-drift 10s ease-in-out infinite alternate;
        }
        .mb-blob-a { left: 0;   background: rgb(var(--mb-accent) / 0.32); }
        .mb-blob-b { left: 40%; background: rgb(var(--mb-accent) / 0.18); animation-duration: 14s; animation-direction: alternate-reverse; }
        .mb-blob-c { right: 0;  background: rgb(255 255 255 / 0.08);       animation-duration: 17s; }
        @keyframes mb-drift {
          from { transform: translateX(-20%) scale(1); }
          to   { transform: translateX(60%) scale(1.3); }
        }

        .mb-sweep { animation: mb-sweep 7s ease-in-out infinite; }
        @keyframes mb-sweep {
          0%        { transform: translateX(-100%); }
          55%, 100% { transform: translateX(700%); }
        }

        .mb-metal {
          background-image: linear-gradient(
            100deg,
            #d4d4d8 0%, #ffffff 35%, rgb(var(--mb-accent)) 50%, #ffffff 65%, #d4d4d8 100%
          );
          background-size: 250% 100%;
          animation: mb-metal 5s linear infinite;
        }
        @keyframes mb-metal {
          from { background-position: 250% 0; }
          to   { background-position: -250% 0; }
        }

        .mb-icon  { color: rgb(var(--mb-accent)); filter: drop-shadow(0 0 6px rgb(var(--mb-accent) / 0.8)); }
        .mb-gem   { background: rgb(var(--mb-accent)); box-shadow: 0 0 10px 2px rgb(var(--mb-accent) / 0.7); }
        .mb-hline { background: linear-gradient(90deg, transparent, rgb(var(--mb-accent) / 0.9), transparent); }

        @media (prefers-reduced-motion: reduce) {
          .mb-blob, .mb-sweep, .mb-metal { animation: none; }
        }
      `}</style>

      {/* Lớp nền: đốm sáng + vệt quét + viền highlight */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="mb-blob mb-blob-a" />
        <div className="mb-blob mb-blob-b" />
        <div className="mb-blob mb-blob-c" />
        <div className="mb-sweep absolute inset-y-0 left-0 w-1/6 bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.18),transparent)]" />
        <div className="mb-hline absolute inset-x-0 top-0 h-px" />
        <div className="mb-hline absolute inset-x-0 bottom-0 h-px opacity-50" />
      </div>

      {/* Fade 2 bên mép */}
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Marquee autoFill pauseOnHover play={play} speed={speed}>
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center">
              <span className="mx-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
                <Icon className="mb-icon size-4 shrink-0" aria-hidden />
                {/* inline-block + py + leading: không bị cắt dấu tiếng Việt */}
                <span className="mb-metal inline-block bg-clip-text py-1 leading-relaxed text-transparent">
                  {text}
                </span>
              </span>
              <span aria-hidden className="mb-gem size-1.5 rotate-45" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
