import { createElement, useCallback } from "react";

import { Badge } from "./components/Badge";
import { Demo } from "./components/Demo";

export function Reanimated({ value, style, onClick }) {
    const onClickHandler = useCallback(() => {
        if (onClick && onClick.canExecute && !onClick.isExecuting) {
            onClick.execute();
        }
    }, [onClick]);

    return <Demo style={style}></Demo>;
    // return <Badge style={style} onClick={onClickHandler} value={value?.displayValue || "Default2"} />;
}
