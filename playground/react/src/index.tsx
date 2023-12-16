import React from "react";
import ReactDOM from "react-dom";

import { Select } from "@ds.e/react";
import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Select.css";

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <Select
      label="Select Option"
      options={[
        { value: 101, label: "Sri Lanka" },
        { value: 102, label: "India" },
      ]}
      renderOption={({ option, getOptionRecommendedProps }) => (
        <p {...getOptionRecommendedProps()}>{option.label}</p>
      )}
    />
  </div>,
  document.querySelector("#root")
);
