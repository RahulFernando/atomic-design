import React from "react";
import ReactDOM from "react-dom";

import { Text, Margin } from "@ds.e/react";
import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Text.css";

ReactDOM.render(
  <div>
    <Margin space="xs" left>
      <Text size="xl">Hello World</Text>
    </Margin>
  </div>,
  document.querySelector("#root")
);
