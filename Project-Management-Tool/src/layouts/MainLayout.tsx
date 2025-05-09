
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
