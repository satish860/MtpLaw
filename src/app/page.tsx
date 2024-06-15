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
    <Card className="w-full max-w-md mx-auto p-2 sm:p-6 md:p-4 lg:p-2">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Welcome to the Medical Terminology of Pregnancy, 1971 Act Application.
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
          This application is specially designed to answer legal doubts
          regarding the MTP Act!
        </p>
        <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-justify">
          To get a list of questions relevant to you, select who you are from
          the options below -
        </p>
        <RadioGroup
          value={selectedOption}
          onValueChange={(value) => setSelectedOption(value)}
          defaultValue="pregnant-person"
          className="space-y-2"
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="pregnant-person" id="pregnant-person" />
            <Label htmlFor="pregnant-person" className="text-sm sm:text-base">
              Pregnant Person/ Relative
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="rmp" id="cwc" />
            <Label htmlFor="rmp" className="text-sm sm:text-base">
              CWC
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="doctor" id="doctor" />
            <Label htmlFor="doctor" className="text-sm sm:text-base">
              Doctor / RMP/ Gynac
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="police-officer" id="police-officer" />
            <Label htmlFor="police-officer" className="text-sm sm:text-base">
              Police Officer
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="lawyer" id="lawyer" />
            <Label htmlFor="lawyer" className="text-sm sm:text-base">
              Lawyer / Judge/ Paralegal
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="academic" id="academic" />
            <Label htmlFor="academic" className="text-sm sm:text-base">
              Academic/ Researcher
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="text-sm sm:text-base">
              Don't fit into the above categories
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={handleSubmit} className="w-full sm:w-auto">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
