"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export const ConfirmModal = ({ children, onConfirm }: ConfirmModalProps) => {
  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onConfirm();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
        asChild
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely Sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
