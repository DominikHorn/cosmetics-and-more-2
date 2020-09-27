import { Coordinate } from "../Coordinate";

export type EventIdentifiers =
  | "select"
  | "deselect"
  | "drag-start"
  | "dragging"
  | "drag-end";

export interface Event<Type extends EventIdentifiers> {
  readonly target: object;

  readonly annotation: Type extends "select" | "deselect"
    ? Type | undefined
    : Type extends "drag-start" | "dragging" | "drag-end"
    ? Type
    : never;

  readonly coordinate: Type extends "dragging" ? Coordinate : never;
}

/**
 * The annotation's selected property was set to true.
 */
export type SelectEvent = Event<"select">;

/**
 * The annotation's selected property was set to false.
 */
export type DeselectEvent = Event<"deselect">;

/**
 * The user has initiated a drag on an annotation. A long press or click
 * without movement is not considered a drag.
 */
export type DragStartEvent = Event<"drag-start">;

/**
 * The user is dragging an annotation. This event has an extra coordinate
 * property for the coordinate of the annotation at the time when the event
 * occurs. This is different from the annotation’s own coordinate property
 * since that property is not updated until the annotation is dropped.
 */
export type DraggingEvent = Event<"dragging">;

/**
 * The user has ended a drag on an annotation.
 */
export type DragEndEvent = Event<"drag-end">;
