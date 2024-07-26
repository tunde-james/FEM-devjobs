import Input from "./components/ui/input";

export default function Home() {
  return (
    <div>
      <div className="-mt-10 px-6">
        <Input
          type="text"
          placeholder="Filter by title…"
          className="rounded-md"
        />

        
      </div>
    </div>
  );
}
