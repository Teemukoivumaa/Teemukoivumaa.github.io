"use client";

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
  { show, onConsent }: any,
  { ...props }: CardProps
) => {
  let consentGiven: string | null = null;
  const windowVisiblity = typeof window !== "undefined";
  if (windowVisiblity) {
    consentGiven = localStorage.getItem("consentGiven");
  }

  if (!windowVisiblity) return null;

  if (!show || consentGiven === "true" || consentGiven === "false") return null;

  const title = "Data Collection Consent";
  const desc =
    "I would like to collect some data for improving our services. Do you consent to this?";
  const yes = "I Consent";
  const no = "I don't consent";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Card className={cn("m-[2rem] max-w-screen-2xl")} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => onConsent(true)}>{yes}</Button>
          <Button
            variant="secondary"
            className="ml-2"
            onClick={() => onConsent(false)}
          >
            {no}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
