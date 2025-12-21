import MainContent from "@/components/MainContent";
import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0b0f1a]">
      <NavBar />
      <MainContent />
    </div>
  );
}
