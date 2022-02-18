export type Difficulty = "easy" | "medium" | "hard";
export type SequenceType = "exercise" | "stretch" | "break";

export interface SequenceItem {
  slug: string;
  name: string;
  type: SequenceType;
  reps?: number;
  duration: number;
}

export interface Workout {
  slug: string;
  name: string;
  duration: number;
  difficulty: Difficulty;
  sequence: [SequenceItem];
}
