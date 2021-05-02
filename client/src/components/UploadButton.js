import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "40%",
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButton({ setLoader, setData }) {
  const classes = useStyles();
  const fileInput = React.useRef();

  const handleUpload = (event) => {
    console.log("inside handel upload");
    setLoader(true);
    const url = "http://localhost:8000/audio-to-questions/";
    const formData = new FormData();
    formData.append("audio_file", event.target.files[0]);
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("data", res.data.questions);
        setData(res.data.questions);
        setLoader(false);
      })
      .catch((err) => {
        console.log("error on upload", err);
        setLoader(false);
      });
  };
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={() => fileInput.current.click()}
      >
        Upload
        <input
          ref={fileInput}
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleUpload(e)}
        />
      </Button>
    </div>
  );
}
