import shortcuts from "./shortcuts";
import { useState, useEffect } from "react";
import { State } from "../Model/Types";

const ALLOWED_KEYS: string[] = [];
Object.values(shortcuts).forEach((command) => {
  const array = command.split(",");
  array.forEach((entry) => ALLOWED_KEYS.push(entry));
});

const useKeys = (state: State) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    // Calls onFocus when the window first loads
    onFocus();
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  const onFocus = () => {
    setPressedKeys([]);
  };

  const onBlur = () => {
    setPressedKeys([]);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (state.editing.modal) return;
      const key = e.key;
      if (key === "Enter") e.preventDefault();
      if (key === "ArrowLeft") e.preventDefault();
      if (key === "Alt") e.preventDefault();
      if (key === "Control") e.preventDefault();
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
        if (!state.editing) e.preventDefault();
        setPressedKeys((previousPressedKeys) => [...previousPressedKeys, key]);
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (state.editing.modal) return;

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
