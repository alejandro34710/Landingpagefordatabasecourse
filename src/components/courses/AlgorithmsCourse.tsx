import { AlgoIntro } from "../algorithms/AlgoIntro";
import { BigONotation } from "../algorithms/BigONotation";
import { Arrays } from "../algorithms/Arrays";
import { LinkedLists } from "../algorithms/LinkedLists";
import { StacksQueues } from "../algorithms/StacksQueues";
import { Trees } from "../algorithms/Trees";
import { Sorting } from "../algorithms/Sorting";
import { Searching } from "../algorithms/Searching";
import { Graphs } from "../algorithms/Graphs";
import { FinalPracticeAlgo } from "../algorithms/FinalPracticeAlgo";
import { Navigation } from "../Navigation";
import { ProgressBar } from "../ProgressBar";

interface AlgorithmsCourseProps {
  onPreviousCourse: () => void;
}

export function AlgorithmsCourse({ onPreviousCourse }: AlgorithmsCourseProps) {
  return (
    <>
      <Navigation courseTitle="Algoritmos y Estructuras de Datos" />
      <ProgressBar />
      <AlgoIntro />
      <BigONotation />
      <Arrays />
      <LinkedLists />
      <StacksQueues />
      <Trees />
      <Sorting />
      <Searching />
      <Graphs />
      <FinalPracticeAlgo onPreviousCourse={onPreviousCourse} />
    </>
  );
}
