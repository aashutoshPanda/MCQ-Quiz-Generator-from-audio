import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

import Paper from "./Paper";

function QuestionAnswer({ question, options }) {
  const [value, setValue] = React.useState("");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    //   setHelperText(" ");
    //   setError(false);
  };
  return (
    <div>
      <Paper>
        <Typography variant="h5" gutterBottom>
          {question}
        </Typography>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option.answer}
              control={<Radio />}
              label={option.answer}
            />
          ))}
        </RadioGroup>
      </Paper>
    </div>
  );
}

export default QuestionAnswer;
