import { Hero } from "./course/Hero";
import { Introduction } from "./course/Introduction";
import { KeyConcepts } from "./course/KeyConcepts";
import { Topic1 } from "./course/Topic1";
import { Topic2 } from "./course/Topic2";
import { Topic3 } from "./course/Topic3";
import { Topic4 } from "./course/Topic4";
import { Topic5 } from "./course/Topic5";
import { Conclusions } from "./course/Conclusions";
import { Activity } from "./course/Activity";
import { Navigation } from "./course/Navigation";
import { ProgressIndicator } from "./course/ProgressIndicator";

export function CourseTemplate() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <Navigation />
      <ProgressIndicator />
      
      <Hero />
      <Introduction />
      <KeyConcepts />
      <Topic1 />
      <Topic2 />
      <Topic3 />
      <Topic4 />
      <Topic5 />
      <Conclusions />
      <Activity />
    </div>
  );
}
