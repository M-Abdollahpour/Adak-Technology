import { Outlet } from "react-router";
import Footer from "~/components/footer";
import Header from "~/components/header";

export default function MainLayout() {
  return (
    <>
      <div className="container mx-auto px-7 max-w-360">
        <Header />
      </div>
      <main className="pt-25 md:pt-33.5">
        <Outlet />
      </main>
      <div className="container mx-auto px-7 max-w-360">
        <Footer />
      </div>
    </>
  );
}
