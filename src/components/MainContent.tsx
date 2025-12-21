import Dashboard from "./dashboard";

export default function MainContent() {
  return (
    <main className="flex-1 overflow-x-auto">
      <div className="max-w-[1440px] mx-auto">
        <Dashboard />
      </div>
    </main>
  );
}
