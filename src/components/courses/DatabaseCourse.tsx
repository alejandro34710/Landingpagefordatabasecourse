import { Introduction } from "../Introduction";
import { EntityRelationship } from "../EntityRelationship";
import { SQLBasics } from "../SQLBasics";
import { Normalization } from "../Normalization";
import { DatabaseTypes } from "../DatabaseTypes";
import { Indexes } from "../Indexes";
import { Transactions } from "../Transactions";
import { AdvancedSQL } from "../AdvancedSQL";
import { NoSQLvsSQL } from "../NoSQLvsSQL";
import { FinalPracticeDB } from "../FinalPracticeDB";
import { Navigation } from "../Navigation";
import { ProgressBar } from "../ProgressBar";

interface DatabaseCourseProps {
  onNextCourse: () => void;
}

export function DatabaseCourse({ onNextCourse }: DatabaseCourseProps) {
  return (
    <>
      <Navigation courseTitle="Bases de Datos" />
      <ProgressBar />
      <Introduction />
      <EntityRelationship />
      <SQLBasics />
      <Normalization />
      <DatabaseTypes />
      <Indexes />
      <Transactions />
      <AdvancedSQL />
      <NoSQLvsSQL />
      <FinalPracticeDB onNextCourse={onNextCourse} />
    </>
  );
}
