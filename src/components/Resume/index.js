import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Resume() {
  return (
    <section>
      <iframe
        title="resume"
        src="https://docs.google.com/document/d/1hTT-GSN-Xrf3x9-nDLHoc67ow0xQsnBR7_1wyV_xbzs/edit?usp=sharing"
        height="1200px"
        width="1200px"
      ></iframe>
    </section>
  );
}

export default Resume;
