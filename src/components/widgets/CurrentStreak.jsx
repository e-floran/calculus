import { useContext } from "react";

import { MathContext } from "../../context/MathContext";
import "../../styles/widgets.css";

export default function CurrentStreak() {
  const { userStreak } = useContext(MathContext);

  return (
    <article
      className="streakContainer"
      style={{
        width: `${1 + userStreak.toString().length / 2}rem`,
        height: `${1 + userStreak.toString().length / 2}rem`,
        borderRadius: `${(1 + userStreak.toString().length / 2) / 2}rem`,
      }}
    >
      <p>{userStreak}</p>
    </article>
  );
}
