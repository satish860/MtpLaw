"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("pregnant-person");

  const handleSubmit = () => {
    router.push(`/faqs?option=${selectedOption}`);
  };
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>
          Welcome to the Medical Terminology of Pregnancy, 1971 Act Application.
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          This application is specially designed to answer legal doubts
          regarding the MTP Act!
        </p>
        <p className="mb-6">
          To get a list of questions relevant to you, select who you are from
          the options below -
        </p>
        <RadioGroup
          value={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
          defaultValue="pregnant-person"
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="pregnant-person" id="pregnant-person" />
            <Label htmlFor="pregnant-person">Pregnant Person/ Relative</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="rmp" id="cwc" />
            <Label htmlFor="rmp">CWC</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="doctor" id="doctor" />
            <Label htmlFor="doctor">Doctor / RMP/ Gynac</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="police-officer" id="police-officer" />
            <Label htmlFor="police-officer">Police Officer</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="lawyer" id="lawyer" />
            <Label htmlFor="lawyer">Lawyer / Judge/ Paralegal</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="academic" id="academic" />
            <Label htmlFor="academic">Academic/ Researcher</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Dont fit into the above categories</Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  );
}
