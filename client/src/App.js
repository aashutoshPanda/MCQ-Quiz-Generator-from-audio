import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{
              backgroundColor: "#cfe8fc",
              height: "100%",
              minHeight: "100vh",
            }}
          >
            <Main />
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
