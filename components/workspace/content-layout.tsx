import Container from "./container";
import { Navbar } from "./navbar";

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container p-4 sm:px-8">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
