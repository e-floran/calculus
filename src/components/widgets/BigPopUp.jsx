import { useContext } from "react";

import { MathContext } from "../../context/MathContext";
import "../../styles/widgets.css";

export default function BigPopUp() {
  const { userStreak } = useContext(MathContext);

  return (
    <article className="congratContainer">
      <p className={userStreak % 2 === 1 ? "popPrimary" : "popSecondary"}>
        {userStreak}
      </p>
    </article>
  );
}
