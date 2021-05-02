import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import QuestionAnswer from "./QuestionAnswer";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));
export default function Form({ data }) {
  const classes = useStyles();

  return (
    <form>
      <FormControl component="fieldset" className={classes.formControl}>
        {data.map((mcqData) => (
          <QuestionAnswer
            question={mcqData.question}
            options={mcqData.answer}
          />
        ))}
      </FormControl>
    </form>
  );
}
