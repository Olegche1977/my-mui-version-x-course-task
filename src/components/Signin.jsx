import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "./Context";
import { Button, Box, TextField } from "@mui/material";
import { PUBLIC_URL } from "../constants/constants";

export default function Signin() {
  const [inputValue, setInputValue] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const { userName, setUserName } = useContext(Context);

  const navigate = useNavigate();

  const validateName = (e) => {
    setInputValue(e.target.value);
    if (inputValue.length > 4 && inputValue.length < 16) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const buttonClickHandler = () => {
    setUserName(inputValue);
    navigate("booklist");
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <img
          className="signInUserFoto"
          src={`${PUBLIC_URL}/avatar.png`}
          width="150px"
          height="150px"
          alt="nothing"
        />
        <h4>{userName}</h4>

        <TextField
          label="your name:"
          value={inputValue}
          onChange={(e) => validateName(e)}
          placeholder="type Username"
          sx={{ mb: "1rem" }}
        />

        <Button
          variant="contained"
          onClick={() => buttonClickHandler()}
          disabled={disableButton}
          alignItems="center"
          sx={{ width: "210px" }}
        >
          Sign-In
        </Button>
      </Box>
    </>
  );
}
