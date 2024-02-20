"use client";

import * as React from "react";
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

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="m-[0.5rem] absolute top-0 right-0"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
  return (
    <div>
      <div className="flex items-end">
        <ModeToggle />
      </div>

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
