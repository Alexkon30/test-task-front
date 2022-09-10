import React from "react";
import { observer } from "mobx-react-lite";
import { useGlobalState } from "~/screens/globalState";
import { find } from "lodash";
import { Tag } from "~/components";

interface StatusProps {
  code: string;
}

export const DeliveryType = observer(
  ({ code }: StatusProps): JSX.Element => {
    const globalState = useGlobalState();
    const name = find(globalState.deliveryTypes, { code })?.name || code;

    let color: "blue" | "grey" = "blue";
    switch (code) {
      case null:
      case "nondost":
        color = "grey";
    }
    return <Tag text={name} color={color} />;
  }
);
