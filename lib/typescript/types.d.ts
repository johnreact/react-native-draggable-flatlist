import React from "react";
import { FlatListProps, LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
import { useAnimatedValues } from "./context/animatedValueContext";
import { FlatList } from "react-native-gesture-handler";
import Animated, { AnimateProps, WithSpringConfig } from "react-native-reanimated";
import { DEFAULT_PROPS } from "./constants";
export declare type DragEndParams<T> = {
    data: T[];
    from: number;
    to: number;
};
declare type Modify<T, R> = Omit<T, keyof R> & R;
declare type DefaultProps = Readonly<typeof DEFAULT_PROPS>;
export declare type DraggableFlatListProps<T> = Modify<FlatListProps<T>, {
    data: T[];
    activationDistance?: number;
    animationConfig?: Partial<WithSpringConfig>;
    autoscrollSpeed?: number;
    autoscrollThreshold?: number;
    containerStyle?: StyleProp<ViewStyle>;
    debug?: boolean;
    dragItemOverflow?: boolean;
    keyExtractor: (item: T, index: number) => string;
    onDragBegin?: (index: number) => void;
    onDragEnd?: (params: DragEndParams<T>) => void;
    onPlaceholderIndexChange?: (placeholderIndex: number) => void;
    onRelease?: (index: number) => void;
    onScrollOffsetChange?: (scrollOffset: number) => void;
    renderItem: RenderItem<T>;
    renderPlaceholder?: RenderPlaceholder<T>;
    simultaneousHandlers?: React.Ref<any> | React.Ref<any>[];
    outerScrollOffset?: Animated.SharedValue<number>;
    onAnimValInit?: (animVals: ReturnType<typeof useAnimatedValues>) => void;
    itemEnteringAnimation?: AnimateProps<Animated.View>["entering"];
    itemExitingAnimation?: AnimateProps<Animated.View>["exiting"];
    itemLayoutAnimation?: AnimateProps<Animated.View>["layout"];
    enableLayoutAnimationExperimental?: boolean;
    onContainerLayout?: (params: {
        layout: LayoutChangeEvent["nativeEvent"]["layout"];
        containerRef: React.RefObject<Animated.View>;
    }) => void;
} & Partial<DefaultProps>>;
export declare type RenderPlaceholder<T> = (params: {
    item: T;
    index: number;
}) => JSX.Element;
export declare type RenderItemParams<T> = {
    item: T;
    getIndex: () => number | undefined;
    drag: () => void;
    isActive: boolean;
};
export declare type RenderItem<T> = (params: RenderItemParams<T>) => React.ReactNode;
export declare type AnimatedFlatListType = <T>(props: Animated.AnimateProps<FlatListProps<T> & {
    ref: React.Ref<FlatList<T>>;
    simultaneousHandlers?: React.Ref<any> | React.Ref<any>[];
}>) => React.ReactElement;
export declare type CellData = {
    measurements: {
        size: number;
        offset: number;
    };
};
export {};
