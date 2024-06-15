"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import faqsData from "./faqs.json";
import { useSearchParams } from "next/navigation";
import { OptionsMap, FaqItem } from "@/lib/types";

const optionsMap: OptionsMap = {
  "pregnant-person": [
    { start: 1, end: 12 },
    { start: 20, end: 63 },
    { start: 70, end: 74 },
    { start: 85, end: 91 },
  ],
  "doctor, lawyer, academic,other": [{ start: 1, end: Infinity }],
  cwc: [
    { start: 1, end: 63 },
    { start: 70, end: 73 },
    { start: 85, end: 91 },
  ],
  "police-officer": [
    { start: 1, end: 12 },
    { start: 20, end: 26 },
    { start: 33, end: 43 },
    { start: 54, end: 64 },
    { start: 70, end: 90 },
  ],
};

type OptionKeys = keyof OptionsMap;

function isValidOption(option: string): option is OptionKeys {
  return option in optionsMap;
}

export default function Faqs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  useEffect(() => {
    setFaqs(faqsData);
  }, []);

  const filteredFaqs =
    option && isValidOption(option)
      ? faqs.filter((faq) =>
          optionsMap[option].some(
            (range) =>
              faq.id >= range.start &&
              faq.id <= (range.end === "Infinity" ? Infinity : range.end) &&
              faq.question.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      : faqs.filter((faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4"
        />
        <ul>
          {filteredFaqs.map((faq) => (
            <li key={faq.id} className="mb-6">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
