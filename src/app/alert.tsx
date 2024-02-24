import React, { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PersonIcon } from "@radix-ui/react-icons";

export const Notification = ({ onClose }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000); // Close the notification after 6 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  const title = "Conset saved";
  const desc = "Saved your consent. We won&apos;t ask it again.";
  return (
    <Alert className="max-w-md">
      <PersonIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
};
