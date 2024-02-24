import React, { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PersonIcon } from "@radix-ui/react-icons";

export const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000); // Close the notification after 6 seconds

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <Alert className="max-w-md">
      <PersonIcon className="h-4 w-4" />
      <AlertTitle>Conset saved</AlertTitle>
      <AlertDescription>
        Saved your consent. We wont ask it again
      </AlertDescription>
    </Alert>
  );
};
