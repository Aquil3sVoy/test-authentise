import React from "react";
import RenderWithRedux from "./RenderWithRedux";
import RenderWithHook from "./RenderWithHook";

export default function RenderPage(props): JSX.Element {
  return (
    <>
      <RenderWithRedux /> <RenderWithHook />
    </>
  );
}
