import { createElement, useCallback, useState } from "react";
import { View, Switch, Text, Image } from "react-native";
import { Badge } from "./components/Badge";
import { AnimatableExplorer } from "./components/AnimatableExplorer";
import MakeItRain from "./components/MakeItRain";

export function Reanimated({ value, style, onClick }) {
    const onClickHandler = useCallback(() => {
        if (onClick && onClick.canExecute && !onClick.isExecuting) {
            onClick.execute();
        }
    }, [onClick]);

    // return <AnimatableExplorer style={style}></AnimatableExplorer>;
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            {isEnabled ? (
                <AnimatableExplorer style={style}></AnimatableExplorer>
            ) : (
                <MakeItRain style={style}></MakeItRain>
            )}
        </View>
    );
    // return <Badge style={style} onClick={onClickHandler} value={value?.displayValue || "Default2"} />;
}
