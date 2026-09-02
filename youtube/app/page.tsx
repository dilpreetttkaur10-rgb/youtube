import Videogrid from "@/components/videogrid";
import CategoryTabs from "@/components/ui/categorytab";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <CategoryTabs />
      <Suspense fallback={<div>loading videos...</div>}>
        <Videogrid />
      </Suspense>
    </div>
  );
}