import { HTMLProps, useState } from "react";
import cx from "classnames";

type Option = {
  label: string;
  value: string | number;
};

type Props = {
  className?: string;
  options: Option[];
  onChange?: (selected: Option) => void;
};

export default function Select({
  options,
  className,
  onChange,
  ...props
}: Props) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className={cx("relative w-max-content", className)}>
      <select
        {...props}
        className="px-6 py-2 appearance-none text-white bg-transparent border border-white rounded-full outline-none focus:shadow-outline"
        value={selected.value}
        onChange={(event) => {
          const option = options.find(
            (item) => item.value === event.target.value
          );
          setSelected(option);
          onChange(option);
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
