import CategoryTabs from "@/components/ui/categorytab";
import VideoGrid from "@/components/videogrid";

import { Suspense } from "react";


export default function Home() {
  return (
    <main className="flex-1 p-4">
      <CategoryTabs />
      <Suspense><div>loading videos...</div>
      <VideoGrid /></Suspense>
    </main>
  );
}