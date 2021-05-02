import React, { useState } from "react";

import UploadButton from "./UploadButton";
import AppBar from "./AppBar";
import Form from "./Form";
import Loader from "./loader";

function Main() {
  const [isLoading, setLoader] = useState(false);
  const [data, setData] = useState([]);
  return (
    <div>
      <AppBar />
      <UploadButton setLoader={setLoader} setData={setData} />
      {isLoading ? <Loader /> : null}

      <Form data={data} />
    </div>
  );
}

export default Main;
