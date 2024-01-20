import { cn } from "../../utilities/cn";
import { buttonVariants } from "./button.style";

import { IButtonProps } from "../../types/button";

export default function Button({
  children,
  variant,
  size,
  icons,
  OnChangeHandler,
  className,
  ...props
}: IButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, icons, className }))}
      onClick={OnChangeHandler}
      {...props}
    >
      {" "}
      {children}
    </button>
  );
}
