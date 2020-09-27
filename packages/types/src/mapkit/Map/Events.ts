import { Annotation } from "../Annotation";
import { Coordinate } from "../Coordinate";
import { Overlay } from "../Overlay";

export type EventIdentifiers =
  | "region-change-start"
  | "region-change-end"
  | "rotation-start"
  | "rotation-end"
  | "scroll-start"
  | "scroll-end"
  | "zoom-start"
  | "zoom-end"
  | "map-type-change"
  | "select"
  | "deselect"
  | "drag-start"
  | "dragging"
  | "drag-end"
  | "user-location-change"
  | "user-location-error"
  | "single-tap"
  | "double-tap"
  | "long-press";

export interface Event<Type extends EventIdentifiers> {
  readonly target: object;

  readonly annotation: Type extends "select" | "deselect"
    ? Annotation | undefined
    : Type extends "drag-start" | "dragging" | "drag-end"
    ? Annotation
    : never;

  readonly overlay: Type extends "select" | "deselect"
    ? Overlay | undefined
    : never;

  readonly coordinate: Type extends "dragging" | "user-location-change"
    ? Coordinate
    : never;

  readonly timestamp: Type extends "user-location-change" ? Date : never;

  readonly code: Type extends "user-location-error"
    ? UserLocationErrorCode
    : never;

  readonly message: Type extends "user-location-error" ? string : never;

  /**
   * A DOM point with the coordinates (x, y) of the event on the page.
   * You can use this property to derive a coordinate on the map using convertPointOnPageToCoordinate.
   */
  readonly pointOnPage: Type extends "single-tap" | "double-tap" | "long-press"
    ? DOMPoint
    : never;

  /**
   * An array of DOM event objects listing the pertinent low-level events that led to the recognized gesture.
   * You can inspect these and tailor the code to react according to the additional low-level events, such as
   * modifier keys for the events.
   */
  readonly domEvents: Type extends "single-tap" | "double-tap" | "long-press"
    ? any[] // TODO: better typing for DOM Events
    : never;
}

/**
 * The map’s visible region is about to change.
 */
export type RegionChangeStartEvent = Event<"region-change-start">;

/**
 * The map’s visible region finished changing.
 */
export type RegionChangeEndEvent = Event<"region-change-end">;

/**
 * The map’s rotation is about to change.
 */
export type RotationChangeStartEvent = Event<"rotation-start">;

/**
 * The map’s rotation finished changing.
 */
export type RotationChangeEndEvent = Event<"rotation-end">;

/**
 * The map is about to scroll as a result of user interaction.
 */
export type ScrollChangeStartEvent = Event<"scroll-start">;

/**
 * The map finished scrolling as a result of user interaction.
 */
export type ScrollChangeEndEvent = Event<"scroll-end">;

/**
 * The map is about to zoom as a result of user interaction.
 */
export type ZoomChangeStartEvent = Event<"zoom-start">;

/**
 * The map finished zooming as a result of user interaction.
 */
export type ZoomChangeEndEvent = Event<"zoom-end">;

/**
 * A program event or a user interaction has caused the map’s type (mapkit.Map.MapTypes) to change.
 */
export type MapTypeChangeEvent = Event<"map-type-change">;

/**
 * The user selected an annotation or an overlay. The event has either an
 * annotation (mapkit.Annotation) property or an overlay (mapkit.O
 */
export type SelectEvent = Event<"select">;

/**
 * The user deselected an annotation or an overlay. The event has either an annotation
 * (mapkit.Annotation) property or an overlay (mapkit.Overlay) property, containing the
 * previously selected annotation or overlay, respectively.
 */
export type DeselectEvent = Event<"deselect">;

/**
 * The user is starting to drag an annotation. The event has one property annotation
 * (mapkit.Annotation), the dragged annotation.
 */
export type DragStartEvent = Event<"drag-start">;

/**
 * The user is dragging an annotation. The event has two properties. The first is an annotation
 * (mapkit.Annotation) property, containing the dragged annotation. The second is a coordinate
 * (mapkit.Coordinate) property, containing the current coordinate of the annotation.
 * This coordinate property is different from the annotation’s own coordinate property,
 * which doesn’t update until the drag finishes.
 */
export type DraggingEvent = Event<"dragging">;

/**
 * The user finished dragging an annotation. The event has one property annotation (mapkit.Annotation),
 * the dragged annotation.
 */
export type DragEndEvent = Event<"drag-end">;

/**
 * MapKit JS sends this event when showsUserLocation is true and the map acquires the user’s location,
 * or after an automatic update. The event has two properties. The first is a coordinate (mapkit.Coordinate)
 * property, containing the current location. The second is a timestamp (Date) property, containing
 * the time corresponding to the location acquisition.
 */
export type UserLocationChangeEvent = Event<"user-location-change">;

/**
 * MapKit JS was unable to acquire the user’s location. The event has two properties. The first property is
 * code (Integer), indicating why location acquisition failed. The second is a message (String) property,
 * containing a human-readable string for the developer. This message isn’t for display to the user.
 *
 * Since this feature implements HTML 5’s geolocation API, the error codes mirror that API’s error codes with one
 * additional MapKit JS-specific error code:
 *
 * - Error.PERMISSION_DENIED (1) — The user refused permission to obtain location information.
 * - Error.POSITION_UNAVAILABLE (2) — The geolocation API returned an error.
 * - Error.TIMEOUT (3) — The operation timed out without acquiring the location.
 * - Error.MAPKIT_NOT_INITIALIZED (4) — The system hasn’t initialized MapKit JS.
 */
export type UserLocationErrorEvent = Event<"user-location-error">;

/**
 * HTML 5’s geolocation API error codes with one
 * additional MapKit JS-specific error code:
 */
export enum UserLocationErrorCode {
  /**
   * The user refused permission to obtain location information.
   */
  PERMISSION_DENIED = 1,

  /**
   * The geolocation API returned an error.
   */
  POSITION_UNAVAILABLE = 2,

  /**
   * The operation timed out without acquiring the location.
   */
  TIMEOUT = 3,

  /**
   * The system hasn’t initialized MapKit JS.
   */
  MAPKIT_NOT_INITIALIZED = 4,
}

/**
 * A single tap occurred on the map outside an annotation or an overlay. If the user had
 * previously selected an annotation or an overlay when a single tap occurs on the map,
 * MapKit JS deselects the annotation or the overlay and dispatches a single-tap event.
 */
export type SingleTapEvent = Event<"single-tap">;

/**
 * A double tap occurred on the map without zooming the map.
 */
export type DoubleTapEvent = Event<"double-tap">;

/**
 * A long press occurred on the map outside an annotation. A long press may be the beginning of a
 * panning or pinching gesture on the map. You can prevent the gesture from starting by calling the
 * preventDefault() method of the event. Annotations must be draggable to dispatch long-press events.
 */
export type LongPressEvent = Event<"long-press">;
