export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

type IdRange = {
  start: number;
  end: number | "Infinity"; // Adjust type to allow for "Infinity"
};

export interface OptionsMap {
  "pregnant-person": IdRange[];
  "doctor, lawyer, academic,other": IdRange[];
  cwc: IdRange[];
  "police-officer": IdRange[];
}
