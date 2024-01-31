import { cn } from "../../utilities/cn";
import { titleVariants } from "./heading.style";

import { IHeadingProps } from "../../types/heading";
export default function Heading({ children, variant }: IHeadingProps) {
  return <h1 className={cn(titleVariants({ variant }))}>{children}</h1>;
}
