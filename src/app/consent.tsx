import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export const FloatingCard = (
  { show, onClose, onConsent },
  { ...props }: CardProps
) => {
  let consentGiven: string | null = null;
  if (typeof window !== "undefined") {
    consentGiven = localStorage.getItem("consentGiven");
  }

  const [consented, setConsented] = useState(false);

  const handleConsent = () => {
    setConsented(true);
    localStorage.setItem("consentGiven", "true");
    onConsent(true);
  };

  if (
    !show ||
    consentGiven ||
    consentGiven === "true" ||
    consentGiven === "false"
  )
    return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Card className={cn("m-[2rem] max-w-screen-2xl")} {...props}>
        <CardHeader>
          <CardTitle>Data Collection Consent</CardTitle>
          <CardDescription>
            I would like to collect some data for improving our services. Do you
            consent to this?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleConsent}>I Consent</Button>
          <Button variant="secondary" className="ml-2" onClick={onClose}>
            I don't consent
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
