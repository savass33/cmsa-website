import type { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type LayoutProps = {
  children?: ReactNode; // in that case, the children will be a page
};

function MainLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
