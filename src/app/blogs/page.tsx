import { BlogList } from "@/features/blogs/components/blog-list";
import { Wrapper } from "@/components/shared/wrapper";
import { TiktokShowcase } from "@/components/shared/tiktok-showcase";

export default function BlogsPage() {
  return (
    <Wrapper>
      <BlogList />
      <TiktokShowcase />
    </Wrapper>
  );
}
