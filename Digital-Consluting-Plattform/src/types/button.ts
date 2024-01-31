import { buttonVariants } from "../layouts/button/button.style";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  OnChangeHandler?: () => void;
}
