import * as React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Modal,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import {  login } from "../../Utils/auth";
import { ACTIONTYPE, LoginError } from "src/Model/Types";


type SignInProps = {
  open: boolean;
  handleClose: () => void;
  dispatch: (action: ACTIONTYPE) => void
};

type errorState = {
  username: string | boolean;
  password: string | boolean;
};

export default function SignInModal({ open, handleClose, dispatch }: SignInProps) {
  const content = {
    header: "Sign In",
    description: "You can save your trees and access them later.",
    "primary-action": "Sign in",
    // 'secondary-action': 'Forgot your password?',
  };

  const [error, setError] = React.useState<errorState>({
    username: false,
    password: false,
  });
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(e.target[0].value, e.target[1].value)
      .then((res) => {
        if (res.success) {
          setError({
            username: false,
            password: false,
          });
          dispatch({
            type: 'set fetched trees',
            trees: res.trees,
          })
          dispatch({
            type: 'set user',
            user: res.token,
          })
          handleClose()
        } else {
          setError({
            username: false,
            password: false,
          });
          res.errors.forEach((err: LoginError) => {
            if (err.param === "password")
              setError((prev) => ({ ...prev, password: err.msg }));
            if (err.param === "username")
              setError((prev) => ({ ...prev, username: err.msg }));
          });
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: 'set error dialog',
          dialog: {
            isOpen: true,
            content: {
              title: 'Error',
              text: `${err}`,
              buttonTrue: 'Close',
              buttonFalse: null,
            },
            action: () => { return }
          }
        })
      })
  };

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
              <Box display="flex" mt={3}>
                <Box mx="auto">
                  <Avatar variant="rounded">
                    {/* <AssignmentIndIcon /> */}
                  </Avatar>
                </Box>
              </Box>
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
                  <form onSubmit={handleSignIn}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <FormControl error={error.username as boolean}>
                          <InputLabel htmlFor="username">Username</InputLabel>
                          <Input
                            id="username"
                            aria-describedby="username-helper-text"
                          />
                          <FormHelperText id="username-helper-text">
                            {error.username}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl error={error.password as boolean}>
                          <InputLabel htmlFor="password">Password</InputLabel>
                          <Input
                            id="password"
                            type="password"
                            aria-describedby="password-helper-text"
                          />
                          <FormHelperText id="password-helper-text">
                            {error.password}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Box alignItems="center" justifyContent="space-between">
                          {/* <Link href="#" color="textSecondary">{content['secondary-action']}</Link> */}
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
