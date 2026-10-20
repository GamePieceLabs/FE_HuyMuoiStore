# HM Store

Nền tảng giao diện cho HM Store, được khởi tạo theo các quy ước trong
[`AGENTS.md`](./AGENTS.md).

## Công nghệ

- Next.js 16 với App Router
- React 19 và TypeScript strict
- Tailwind CSS v4
- shadcn/ui với CSS variables

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Kiểm tra chất lượng

```bash
npm run typecheck
npm run lint
npm run build
```

## Cấu trúc chính

```text
src/
  app/                  # Routes, layouts, loading/error boundaries
  components/
    ui/                 # shadcn/ui primitives dùng chung
    shared/             # Composition dùng chung giữa nhiều domain
  features/
    <domain>/
      components/
      data/
      hooks/
      types/
  lib/                  # Tiện ích và hạ tầng dùng chung
```

Chỉ tạo thư mục domain khi bắt đầu phát triển tính năng tương ứng để tránh các
abstraction và file giữ chỗ không cần thiết.
