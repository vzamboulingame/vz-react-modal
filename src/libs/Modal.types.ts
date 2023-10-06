export interface ModalProps {
  title: string;
  message: string;
  type: "basic" | "info" | "success" | "warning" | "error";
  isOpen: boolean;
  handleClose: () => void;
}

export const titleColorStyles = {
  basic: "bg-neutral-950",
  info: "bg-blue-600",
  success: "bg-green-600",
  warning: "bg-amber-500",
  error: "bg-red-600"
} as const;

export const buttonColorStyles = {
  basic: "bg-neutral-950 hover:bg-neutral-700",
  info: "bg-blue-600 hover:bg-blue-400",
  success: "bg-green-600 hover:bg-green-400",
  warning: "bg-amber-500 hover:bg-amber-300",
  error: "bg-red-600 hover:bg-red-400"
} as const;
