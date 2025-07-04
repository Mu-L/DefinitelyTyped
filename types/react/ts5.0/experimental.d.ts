/**
 * These are types for things that are present in the `experimental` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/experimental"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/experimental'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/experimental" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with `__EXPERIMENTAL__`.
//
// For the inputs of types exported as simply a fiber tag, the `beginWork` function of ReactFiberBeginWork.js
// is a good place to start looking for details; it generally calls prop validation functions or delegates
// all tasks done as part of the render phase (the concurrent part of the React update cycle).
//
// Suspense-related handling can be found in ReactFiberThrow.js.

import React = require("./canary");

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

declare module "." {
    export interface SuspenseProps {
        /**
         * The presence of this prop indicates that the content is computationally expensive to render.
         * In other words, the tree is CPU bound and not I/O bound (e.g. due to fetching data).
         * @see {@link https://github.com/facebook/react/pull/19936}
         */
        unstable_expectedLoadTime?: number | undefined;
    }

    export type SuspenseListRevealOrder = "forwards" | "backwards" | "together" | "independent";
    export type SuspenseListTailMode = "collapsed" | "hidden" | "visible";

    export interface SuspenseListCommonProps {
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Note that SuspenseList require more than one child;
         * it is a runtime warning to provide only a single child.
         *
         * It does, however, allow those children to be wrapped inside a single
         * level of `<React.Fragment>`.
         */
        children: Iterable<ReactElement> | AsyncIterable<ReactElement>;
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder: "forwards" | "backwards" | "unstable_legacy-backwards";
        /**
         * Dictates how unloaded items in a SuspenseList is shown.
         *
         * - By default, `SuspenseList` will show all fallbacks in the list.
         * - `collapsed` shows only the next fallback in the list.
         * - `hidden` doesn't show any unloaded items.
         * - `visible` shows all fallbacks in the list.
         */
        tail: SuspenseListTailMode;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        children: ReactNode;
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps["revealOrder"]> | undefined;
        /**
         * The tail property is invalid when not using the `forwards` or `backwards` reveal orders.
         */
        tail?: never;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    /**
     * `SuspenseList` helps coordinate many components that can suspend by orchestrating the order
     * in which these components are revealed to the user.
     *
     * When multiple components need to fetch data, this data may arrive in an unpredictable order.
     * However, if you wrap these items in a `SuspenseList`, React will not show an item in the list
     * until previous items have been displayed (this behavior is adjustable).
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist
     * @see https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist
     */
    export const unstable_SuspenseList: ExoticComponent<SuspenseListProps>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    export function experimental_useEffectEvent<T extends Function>(event: T): T;

    type Reference = object;
    type TaintableUniqueValue = string | bigint | ArrayBufferView;
    function experimental_taintUniqueValue(
        message: string | undefined,
        lifetime: Reference,
        value: TaintableUniqueValue,
    ): void;
    function experimental_taintObjectReference(message: string | undefined, object: Reference): void;

    export interface ViewTransitionInstance {
        /**
         * The {@link ViewTransitionProps name} that was used in the corresponding {@link ViewTransition} component or `"auto"` if the `name` prop was omitted.
         */
        name: string;
    }

    export type ViewTransitionClassPerType = Record<"default" | (string & {}), "none" | "auto" | (string & {})>;
    export type ViewTransitionClass = ViewTransitionClassPerType | ViewTransitionClassPerType[string];

    export interface ViewTransitionProps {
        children?: ReactNode | undefined;
        /**
         * Assigns the {@link https://developer.chrome.com/blog/view-transitions-update-io24#view-transition-class `view-transition-class`} class to the underlying DOM node.
         */
        default?: ViewTransitionClass | undefined;
        /**
         * Combined with {@link className} if this `<ViewTransition>` or its parent Component is mounted and there's no other with the same name being deleted.
         * `"none"` is a special value that deactivates the view transition name under that condition.
         */
        enter?: ViewTransitionClass | undefined;
        /**
         * Combined with {@link className} if this `<ViewTransition>` or its parent Component is unmounted and there's no other with the same name being deleted.
         * `"none"` is a special value that deactivates the view transition name under that condition.
         */
        exit?: ViewTransitionClass | undefined;
        /**
         * "auto" will automatically assign a view-transition-name to the inner DOM node.
         * That way you can add a View Transition to a Component without controlling its DOM nodes styling otherwise.
         *
         * A difference between this and the browser's built-in view-transition-name: auto is that switching the DOM nodes within the `<ViewTransition>` component preserves the same name so this example cross-fades between the DOM nodes instead of causing an exit and enter.
         * @default "auto"
         */
        name?: "auto" | (string & {}) | undefined;
        /**
         * The `<ViewTransition>` or its parent Component is mounted and there's no other `<ViewTransition>` with the same name being deleted.
         */
        onEnter?: (instance: ViewTransitionInstance, types: Array<string>) => void;
        /**
         * The `<ViewTransition>` or its parent Component is unmounted and there's no other `<ViewTransition>` with the same name being deleted.
         */
        onExit?: (instance: ViewTransitionInstance, types: Array<string>) => void;
        /**
         * This `<ViewTransition>` is being mounted and another `<ViewTransition>` instance with the same name is being unmounted elsewhere.
         */
        onShare?: (instance: ViewTransitionInstance, types: Array<string>) => void;
        /**
         * The content of `<ViewTransition>` has changed either due to DOM mutations or because an inner child `<ViewTransition>` has resized.
         */
        onUpdate?: (instance: ViewTransitionInstance, types: Array<string>) => void;
        ref?: Ref<ViewTransitionInstance> | undefined;
        /**
         * Combined with {@link className} if this `<ViewTransition>` is being mounted and another instance with the same name is being unmounted elsewhere.
         * `"none"` is a special value that deactivates the view transition name under that condition.
         */
        share?: ViewTransitionClass | undefined;
        /**
         * Combined with {@link className} if the content of this `<ViewTransition>` has changed either due to DOM mutations or because an inner child has resized.
         * `"none"` is a special value that deactivates the view transition name under that condition.
         */
        update?: ViewTransitionClass | undefined;
    }

    /**
     * Opt-in for using {@link https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API View Transitions} in React.
     * View Transitions only trigger for async updates like {@link startTransition}, {@link useDeferredValue}, Actions or <{@link Suspense}> revealing from fallback to content.
     * Synchronous updates provide an opt-out but also guarantee that they commit immediately which View Transitions can't.
     *
     * @see {@link https://github.com/facebook/react/pull/31975}
     */
    export const unstable_ViewTransition: ExoticComponent<ViewTransitionProps>;

    export function unstable_addTransitionType(type: string): void;

    // @enableGestureTransition
    // Implemented by the specific renderer e.g. `react-dom`.
    // Keep in mind that augmented interfaces merge their JSDoc so if you put
    // JSDoc here and in the renderer, the IDE will display both.
    export interface GestureProvider {}
    export interface GestureOptions {
        rangeStart?: number | undefined;
        rangeEnd?: number | undefined;
    }
    /** */
    export function unstable_startGestureTransition(
        provider: GestureProvider,
        scope: () => void,
        options?: GestureOptions,
    ): () => void;

    // @enableFragmentRefs
    export interface FragmentInstance {}

    export interface FragmentProps {
        ref?: Ref<FragmentInstance> | undefined;
    }

    // @enableActivity
    export interface ActivityProps {
        /**
         * @default "visible"
         */
        mode?:
            | "hidden"
            | "visible"
            | undefined;
        children: ReactNode;
    }

    /** */
    export const unstable_Activity: ExoticComponent<ActivityProps>;

    // @enableSrcObject
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_IMG_SRC_TYPES {
        srcObject: Blob;
    }

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_MEDIA_SRC_TYPES {
        srcObject: Blob | MediaSource | MediaStream;
    }
}
