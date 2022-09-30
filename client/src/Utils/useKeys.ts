import commands from "./commands";
import { useState, useEffect } from "react";
import { State } from "../Model/Types";

const ALLOWED_KEYS: string[] = [];
Object.values(commands).forEach((command) => {
  const array = command.split(",");
  array.forEach((entry) => ALLOWED_KEYS.push(entry));
});

const useKeys = (state: State) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === "Enter") e.preventDefault();
      if (key === "ArrowLeft") e.preventDefault();
      if (
        key === "Tab" ||
        key === "Enter" ||
        (state.editing.name !== true &&
          state.editing.node !== true &&
          (key === " " || key === "ArrowUp" || key === "ArrowDown"))
      ) {
        e.preventDefault();
      }
      // && !pressedKeys.includes(key)
      if (ALLOWED_KEYS.includes(key)) {
        setPressedKeys((previousPressedKeys) => [...previousPressedKeys, key]);
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const key = e.key;
      if (ALLOWED_KEYS.includes(key)) {
        setPressedKeys((previousPressedKeys) =>
          previousPressedKeys.filter((k) => k !== key)
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [state.editing]);

  return pressedKeys;
};

export default useKeys;
