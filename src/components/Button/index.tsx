import { HTMLProps } from "react";
import cx from "classnames";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Variant = "outlined" | "primary";

type Props = HTMLProps<HTMLButtonElement> & {
  variant?: Variant;
  icon?: IconProp;
};

export default function Button({
  children,
  type = "button",
  className,
  variant = "primary",
  icon,
  ...props
}: Props) {
  return (
    <div
      className={cx(
        "relative transition-all duration-100 rounded-full text-sm",
        {
          "border border-white hover:bg-white hover:text-black":
            variant == "outlined",
          "bg-spotify-green text-white hover:text-spotify-green hover:bg-white":
            variant == "primary",
        },
        className
      )}
    >
      {icon && (
        <Icon
          className="absolute top-0 bottom-0 my-auto ml-4 text-xl"
          icon={icon}
        />
      )}
      <button
        className={cx("px-6 h-10 disabled:opacity-25", icon && "pl-12")}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
