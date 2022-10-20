/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import * as React from "react";
import Node from "./Components/Node";
import { treeReducer } from "./Model/Tree";
import { State, ACTIONTYPE } from "./Model/Types";
import keyHandler from "./Utils/keyHandler";
import useKeys from "./Utils/useKeys";
import { Box } from "@mui/material";
import { getUser } from "./Utils/auth";
import ActionBar from "./Components/ActionBar/ActionBar";
import { fetchTrees } from "./Model/Server";
import { ThemeProvider, createTheme } from "@mui/material";

const { useState, useEffect, useReducer } = React;

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFF",
    },
  },
});

const code =
  "views\n\tbuy\n\t\thome\n\t\t\ttickets\n\t\t\t\ticon\n\t\t\t\t\tticket\n\t\t\t\tmy tickets\n\t\t\t\t\ttype\n\t\t\t\t\t\tbutton\n\t\t\t\t\taction\n\t\t\t\t\t\t. nav\n\t\t\t\t\t\t\tusers tickets\n\t\t\tevents\n\t\t\t\ticon\n\t\t\t\t\tusers\n\t\t\t\t. map\n\t\t\t\t\titems\n\t\t\t\t\t\t. sort\n\t\t\t\t\t\t\titems\n\t\t\t\t\t\t\t\t. data, events\n\t\t\t\t\t\t\tfunc\n\t\t\t\t\t\t\t\ta date\n\t\t\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t\t\t. a, $1, date\n\t\t\t\t\t\t\t\tb date\n\t\t\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t\t\t. b, $1, date\n\t\t\t\t\t\t\t\tout\n\t\t\t\t\t\t\t\t\t. smaller\n\t\t\t\t\t\t\t\t\t\t. a date\n\t\t\t\t\t\t\t\t\t\t. b date\n\t\t\t\t\tfunc\n\t\t\t\t\t\tevent date\n\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t. in, $1, date\n\t\t\t\t\t\tcurrent date\n\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t. now date\n\t\t\t\t\t\tout\n\t\t\t\t\t\t\t. if\n\t\t\t\t\t\t\t\tis\n\t\t\t\t\t\t\t\t\t. and\n\t\t\t\t\t\t\t\t\t\t. not\n\t\t\t\t\t\t\t\t\t\t\t. in, $1, private\n\t\t\t\t\t\t\t\t\t\t. >=\n\t\t\t\t\t\t\t\t\t\t\t. event date\n\t\t\t\t\t\t\t\t\t\t\t. current date\n\t\t\t\t\t\t\t\t\t\t. data, sellers, . data,events,. in,seller , verified\n\t\t\t\t\t\t\t\tthen\n\t\t\t\t\t\t\t\t\t. event preview\n\t\t\t\t\t\t\t\t\t\tevent id\n\t\t\t\t\t\t\t\t\t\t\t. in";

function App() {
  // initialize state handlers
  const [state, dispatchTree] = useReducer(treeReducer, {} as State);
  const [history, setHistory] = useState<State[]>([]);
  const [undos, setUndos] = useState(0);

  const dispatch = (action: ACTIONTYPE) => {
    if (action.type === "undo") {
      if (history.length > undos + 1 && history[0].tree) {
        const newState = history[undos];
        setUndos((prev) => prev + 1);
        dispatchTree({
          type: "replace state",
          newState: newState,
        });
      }
      return;
    } else {
      if (
        action.type !== "focus node" &&
        action.type !== "unfocus node" &&
        action.type !== "unfocus all" &&
        action.type !== "input name" &&
        action.type !== "edit name" &&
        action.type !== "edit node" &&
        action.type !== "input node" &&
        action.type !== "set display children" &&
        action.type !== "set collapse all" &&
        action.type !== "copy node" &&
        action.type !== "copy address" &&
        action.type !== "change insert target"
      ) {
        if (undos > 0) {
          const newHistory = history.splice(0, undos);
          setHistory(() => newHistory);
          setUndos(() => 0);
        }
        setHistory((prev) => [state, ...prev]);
      }
      dispatchTree(action);
    }
  };

  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch({
      type: "initialize",
      code: code,
    });
    setLoaded(() => true);
  }, []);

  // initialize user authentication
  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) return;
    dispatch({
      type: "set user",
      user: currentUser,
    });
    fetchTrees().then((res) =>
      dispatch({
        type: "set fetched trees",
        trees: res.trees,
      })
    );
  }, []);

  // intitialize ui handlers
  const [collapsed, setCollapse] = useState(true);

  function collapseAll() {
    dispatch({
      type: "set collapse all",
      displayChildren: !collapsed,
    });
    setCollapse(!collapsed);
  }

  function findFocusIndex(address: string[]) {
    let index = -1;
    state.focus.forEach((item, i) => {
      if (item.toString() === address.toString()) index = i;
    });
    return index;
  }
  // initialize key handlers
  const pressedKeys = useKeys(state);
  useEffect(() => {
    keyHandler(dispatch, pressedKeys, state, collapseAll);
  }, [pressedKeys]);
  return (
    <ThemeProvider theme={theme}>
      {isLoaded && (
        <>
          <ActionBar
            state={state}
            dispatch={dispatch}
            collapseAll={collapseAll}
          />
          <main className="App-main">
            <Box sx={{overflow: 'auto', width: '100%', padding: '2rem 1rem'}}>
            <Node
              node={state.tree}
              key="root"
              isRoot={true}
              focussed={findFocusIndex(state.tree.address)}
              findFocusIndex={findFocusIndex}
              addressMap={state.addressMap}
              displayChildren={
                state.addressMap.get(state.tree.address.toString())
                  ?.display as boolean
              }
              visible={true}
              dispatch={dispatch}
              deleteFromParent={() => {}}
            />
            </Box>
          </main>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
