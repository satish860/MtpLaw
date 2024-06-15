export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface IdRange {
  start: number;
  end: number | "Infinity";
}

export interface OptionsMap {
  "pregnant-person": IdRange[];
  "doctor, lawyer, academic,other": IdRange[];
  cwc: IdRange[];
  "police-officer": IdRange[];
}
