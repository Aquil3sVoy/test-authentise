import React from "react";
import { useCustomHook } from "src/modules/hooks/CustomHoook";
import ListComponent from "../../component/list/ListComponent";

export default function RenderWithHook(): JSX.Element {
  const [loading, img, { setOnClick }] = useCustomHook();
  return <ListComponent loading={loading} img={img} onCLick={setOnClick} />;
}
