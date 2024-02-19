"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const tooltips = [
  "Pressing these buttons won't crash your system...",
  "Unlock achievements in social networking! Click to level up!",
];

export function SocialMediaButtons() {
  return (
    <div className="flex flex-col space-y-4 mt-12">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button>
              <GitHubLogoIcon className="mr-2 h-4 w-4" />{" "}
              <Link href="https://github.com/Teemukoivumaa">
                Check me out on GitHub!
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltips[0]}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button>
              <LinkedInLogoIcon className="mr-2 h-4 w-4" />{" "}
              <Link href="https://linkedin.com/in/teemukoivumaa">
                Follow me on LinkedIn!
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltips[1]}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
