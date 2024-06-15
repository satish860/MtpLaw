"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "Is abortion legal in India?",
    answer:
      "Yes. The Medical Termination of Pregnancy (MTP) Act enacted in 1971 decriminalised abortion and made it legal subject to certain conditions. The object of the MTP Act is to protect the woman from the risks of unsafe and illegal methods of abortion.",
  },
  {
    question: "What does the MTP Act provide for?",
    answer:
      "The MTP Act regulates the manner in which pregnancies may be terminated to prohibit unsafe and forced abortions. The MTP Act regulates abortions by prescribing conditions for the following: i. Maternal/ Foetal conditions under which MTP can be done; ii. Place where it can be done; iii. Persons who can do it.",
  },
  {
    question: "Is the right to seek abortion a Fundamental Right?",
    answer:
      "Yes. In Suchitra Srivastava v. Chandigarh Administration, the Supreme Court recognised that the right to reproductive choice i.e. the right to choose whether to carry her pregnancy to full term is part of the woman's right to health, personal liberty and privacy guaranteed under Article 21 of the Constitution. The Supreme Court has in multiple decisions held that the right to abortion is a concomitant right of dignity, autonomy and reproductive choice. It is therefore imperative that the fundamental right of a pregnant person is not compromised for reasons other than to protect the physical and mental health of the pregnant person.",
  },
  {
    question: "Who is eligible to get an abortion?",
    answer:
      "Any pregnant person irrespective of age, marital status, disability, caste, sexual orientation, gender identity, profession or any other classification can seek an abortion, once the conditions under MTP Act are satisfied. After the pregnancy has crossed the gestational age of 20 weeks, the MTP Act provides for certain categories of persons who can seek termination, such as minors, survivors of sexual assault or rape, change in relationship status of a married or unmarried woman, disability, foetal anomaly, and pregnancy during a natural disaster or any emergency.",
  },
];

export default function Faqs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = searchQuery
    ? faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

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
          {filteredFaqs.map((faq, index) => (
            <li key={index} className="mb-6">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
