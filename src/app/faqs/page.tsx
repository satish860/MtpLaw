"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import faqsData from "./faqs.json";
import { useSearchParams } from "next/navigation";
import { OptionsMap, FaqItem } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Fuse from "fuse.js";

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
  const [filteredFaqs, setFilteredFaqs] = useState<FaqItem[]>([]);
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  useEffect(() => {
    try {
      setFaqs(faqsData as FaqItem[]);
    } catch (error) {
      console.error("Error loading FAQs:", error);
    }
  }, []);

  useEffect(() => {
    if (option && isValidOption(option)) {
      const ranges = optionsMap[option];
      const filtered = faqs.filter((faq) =>
        ranges.some(
          (range) =>
            faq.id >= range.start &&
            (range.end === "Infinity" || faq.id <= range.end)
        )
      );
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(faqs);
    }
  }, [faqs, option]);

  const fuseOptions = {
    keys: ["question", "answer"],
  };

  const fuse = new Fuse(filteredFaqs, fuseOptions);

  const searchResults = searchQuery ? fuse.search(searchQuery) : filteredFaqs;
  const finalFilteredFaqs = searchResults.map((result) => ('item' in result ? result.item : result));

  return (
    <Card className="max-w-full p-4 sm:p-6 md:p-8 lg:p-10">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 w-full p-2 sm:p-3 md:p-4 lg:p-5"
        />
        <ul>
          {finalFilteredFaqs.map((faq) => (
            <li key={faq.id} className="mb-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      className="text-xs sm:text-sm md:text-base lg:text-lg text-justify"
                    >
                      {faq.answer}
                    </ReactMarkdown>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
