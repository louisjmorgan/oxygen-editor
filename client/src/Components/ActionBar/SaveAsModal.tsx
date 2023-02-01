import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import * as React from "react";
import { saveNewTree } from "src/Model/Server";
import { ACTIONTYPE, LoadedTree, State } from "src/Model/Types";

type SaveAsProps = {
  state: State;
  open: boolean;
  handleClose: () => void;
  dispatch: (action: ACTIONTYPE) => void;
};

function SaveAsModal({ open, handleClose, state, dispatch }: SaveAsProps) {
  const content = {
    header: "Save new tree",
    description: "You can access this later from the 'My Trees' menu",
    "primary-action": "Save",
    // 'secondary-action': 'Forgot your password?',
  };

  async function handleSaveAs(e: React.FormEvent) {
    e.preventDefault();

    dispatch({
      type: "edit root name",
      name: e.target[0].value,
    });

    saveNewTree(e.target[0].value, state.tree)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "set fetched trees",
          trees: res.fetched,
        });
        dispatch({
          type: "load tree",
          tree: res.tree,
          index: res.fetched.findIndex((t: LoadedTree) => t.id === res.tree.id),
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: "set error dialog",
          dialog: {
            isOpen: true,
            content: {
              title: "Error",
              text: `Save tree failed. Service may be unavailable. Please try again later.`,
              buttonTrue: "Close",
              buttonFalse: null,
            },
            action: () => {
              return;
            },
          },
        });
      });

    handleClose();
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="xs">
        <Box py={16}>
          <Card variant="outlined">
            <CardContent>
              <Box mt={2} px={4}>
                <Typography
                  variant="h5"
                  component="h3"
                  align="center"
                  gutterBottom={true}
                >
                  {content["header"]}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  align="center"
                >
                  {content["description"]}
                </Typography>
                <Box my={3}>
                  <form onSubmit={handleSaveAs}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl>
                          <InputLabel htmlFor="name">Name</InputLabel>
                          <Input
                            id="name"
                            aria-describedby="name-helper-text"
                            required
                          />
                          <FormHelperText id="name-helper-text"></FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Box alignItems="center" justifyContent="space-between">
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                          >
                            {content["primary-action"]}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Modal>
  );
}

export default SaveAsModal;
