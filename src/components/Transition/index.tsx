import { ReactNode } from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import cx from "classnames";

type Props = {
  transitionKey?: string | number;
  children?: ReactNode;
};

const timeout = 150;

export default function Transition({ transitionKey, children }: Props) {
  return (
    <TransitionGroup>
      <ReactTransition timeout={timeout} key={transitionKey}>
        {(state) => (
          <div
            className={cx(`opacity-0 duration-${timeout} transition-opacity`, {
              "opacity-0": state === "entering",
              hidden: state === "exiting",
              "opacity-100": state === "entered",
            })}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
}
