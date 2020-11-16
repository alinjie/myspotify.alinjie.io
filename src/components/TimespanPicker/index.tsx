import { HTMLProps, useState } from "react";
import cx from "classnames";
import { Timespan } from "types/Timespan";
import { timeSpans } from "consts";

type Props = {
  onChange?: (timespan: Timespan) => void;
};

type TimespanButtonProps = HTMLProps<HTMLButtonElement> & {
  active?: boolean;
};

const map: { [Key in Timespan]: string } = {
  long_term: "All time",
  medium_term: "Last 6 months",
  short_term: "Last 4 weeks",
};

function TimespanButton({
  type = "button",
  children,
  active,
  ...props
}: TimespanButtonProps) {
  return (
    <button
      {...props}
      className={cx("font-semibold text-sm", active && "text-spotify-green")}
    >
      {children}
    </button>
  );
}

export function TimespanPicker({ onChange }: Props) {
  const [activeTimespan, setActiveTimespan] = useState<Timespan>(timeSpans[0]);
  return (
    <div className="flex flex-col text-center p-4 bg-spotify-dark items-center space-y-4">
      <h2 className="text-xl font-semibold">Pick a timespan</h2>
      <p className="font-light text-gray-200 text-sm">
        Change timespan to view data from different time ranges
      </p>
      <div className="flex space-x-4">
        {Object.keys(map).map((key) => (
          <TimespanButton
            active={activeTimespan === key}
            onClick={() => {
              const timespan = key as Timespan;
              setActiveTimespan(timespan);
              onChange && onChange(timespan);
            }}
          >
            {map[key]}
          </TimespanButton>
        ))}
      </div>
    </div>
  );
}
