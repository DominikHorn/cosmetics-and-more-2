import React, { CSSProperties } from "react";
import styles from "./fairylights.scss";

export const FairyLights = (
  props: {
    lightCount?: number;
  } & React.ComponentProps<"ul">
): React.ReactElement => (
  <ul {...props} className={styles["fairylights"] || "fairylights"}>
    {Array.from(Array(props.lightCount || 30).keys()).map((id) => (
      <li key={id} />
    ))}
  </ul>
);
