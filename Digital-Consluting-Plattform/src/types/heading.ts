import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { titleVariants } from "../layouts/heading/heading.style";
export interface IHeadingProps extends VariantProps<typeof titleVariants> {
  children?: ReactNode;
}
