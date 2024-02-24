"use client";

import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import "./globals.css";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { WorkExperienceCard } from "./workExperience";
import { SocialMediaButtons } from "./button";
import { FloatingCard } from "./consent";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Notification } from "./alert";

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="m-[1rem] h-[2.8rem] w-[2.8rem] absolute top-0 right-0"
        >
          <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Home() {
  const [showFloatingCard, setShowFloatingCard] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleConsent = (consentStatus) => {
    setConsentGiven(consentStatus);
    setShowNotification(true);
  };

  const handleCloseFloatingCard = () => {
    setShowFloatingCard(false);
    localStorage.setItem("consentGiven", "false");
    handleConsent(false);
  };

  return (
    <div>
      <div className="flex items-end">
        <ModeToggle />
      </div>

      <FloatingCard
        show={showFloatingCard && !consentGiven}
        onClose={handleCloseFloatingCard}
        onConsent={handleConsent}
      />
      {consentGiven && <GoogleAnalytics gaId="UA-154155038-1" />}
      {showNotification && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center justify-center">
          <Notification
            message="Consent saved!"
            onClose={() => setShowNotification(false)}
          />
        </div>
      )}

      <div className="h-[32rem] flex justify-center items-center flex-col space-y-4">
        <h1 className="text-5xl font-bold text-lightRed">Teemu</h1>
        <h1 className="text-5xl font-bold text-lightRed">Koivumaa</h1>

        <Separator className="w-[10rem] m-[2rem]" />

        <h2 className="text-3xl font-semibold text-lightRed">
          Software Developer
        </h2>
        <h3 className="text-2xl font-semibold text-lightRed">
          BEng, Information Technology
        </h3>
        <div>
          <SocialMediaButtons />
        </div>
      </div>
      <div className="h-[20rem] flex justify-center items-center flex-col space-y-4">
        <h2 className="text-4xl font-bold text-lightRed">Main Technologies</h2>
        <div className="grid gap-2 grid-cols-4">
          <code>
            <img
              width="50"
              src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
              alt="JavaScript"
              title="JavaScript"
            />
          </code>
          <code>
            <img
              width="50"
              src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
              alt="React"
              title="React"
            />
          </code>
          <code>
            <img
              width="50"
              src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png"
              alt="Jest"
              title="Jest"
            />
          </code>
          <code>
            <img
              width="50"
              src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png"
              alt="AWS"
              title="AWS"
            />
          </code>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col m-[2rem] ">
        <h2 className="text-4xl font-bold text-lightRed">Experience</h2>
        <WorkExperienceCard />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-8 flex items-center justify-center bg-backgroundColor">
        <p className="text-white text-xs">
          &copy; {new Date().getFullYear()} Teemu Koivumaa. All rights reserved.
        </p>
      </div>
    </div>
  );
}
