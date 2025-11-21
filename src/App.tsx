import { useState } from "react";
import { DatabaseCourse } from "./components/courses/DatabaseCourse";
import { AlgorithmsCourse } from "./components/courses/AlgorithmsCourse";

export default function App() {
  const [currentCourse, setCurrentCourse] = useState<"database" | "algorithms">("database");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {currentCourse === "database" && (
        <DatabaseCourse onNextCourse={() => setCurrentCourse("algorithms")} />
      )}
      {currentCourse === "algorithms" && (
        <AlgorithmsCourse onPreviousCourse={() => setCurrentCourse("database")} />
      )}
    </div>
  );
}
