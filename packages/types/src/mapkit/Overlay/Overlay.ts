import { Map } from "../Map";
import { Style } from "../Style";
import { Event, EventIdentifiers } from "./Events";
import { OverlayOptions } from "./OverlayOptions";

/**
 * An abstract base object that defines the methods and attributes for map overlays.
 *
 * ### Overview
 * Overlays inherit from an abstract base object, mapkit.Overlay, and share
 * some common properties with mapkit.Annotation that allow you control the
 * visibility and interaction with the map in the same way. This object is
 * abstract and you can't instantiate it.
 *
 * You can enhance your maps by adding overlays, shapes that
 * appear on top of the map. There are three overlay shapes:
 * - Circle (mapkit.CircleOverlay)
 * - Polyline (mapkit.PolylineOverlay)
 * - Polygon (mapkit.PolygonOverlay)
 *
 * These three objects can satisfy a wide variety of purposes,
 * such as outlining routes, highlighting map areas, enabling
 * users to make selections, and more.
 *
 * To display an overlay, you provide geometry data that
 * determines the overlay's shape, and a style that determines
 * its visual representation. For example, a circle's center
 * and radius define its geometry. The coordinates of a polygon's
 * vertices define its shape. The style specifies how to draw
 * the overlay, including its fill color, outline color, and
 * opacity.
 *
 * Overlays are dynamic. The system automatically redraws them
 * when their underlying geometry or style data changes. For
 * instance, a circle's radius can grow, or a polygon's fill
 * color can update dynamically. This makes overlays a powerful
 * visualization tool. For example, circle overlays can show the
 * spread of an infectious disease over a span of time.
 *
 * Overlays belong to their own layer that lies above map tiles
 * and below annotations. The order that you add overlays to a
 * map is significant. When multiple overlays overlap, overlays
 * that you add later are higher in the Z-order (that is,
 * closer to the foreground).
 *
 * ### See Also
 * [Adding Interactivity to Overlays](https://developer.apple.com/documentation/mapkitjs/mapkit/overlays/adding_interactivity_to_overlays)
 */
export declare abstract class Overlay implements Required<OverlayOptions> {
  data: any;
  visible: boolean;
  enabled: boolean;
  selected: boolean;

  /**
   * Starts listening for the specified type of event.
   *
   * ### Parameters
   * - type: A required string that represents the event type, such as select.
   * - listener: The required event listener (function or object that implements
   *   the EventListener interface) to invoke.
   * - thisObject: An optional object set as the this keyword on the listener function.
   *
   * ### Discussion
   * Adds listener as an event listener for an event of type. Throws an error if type is invalid.
   */
  readonly addEventListener: <T extends EventIdentifiers, E extends Event<T>>(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * Stops listening for the specified type of event.
   *
   * ### Parameters
   * - type: A required string that represents the event type, such as select.
   * - listener: The required event listener (function or object that implements
   *   the EventListener interface) to remove.
   * - thisObject: An optional object set as the this keyword on the
   *   listener function.
   *
   * ### Discussion
   * Removes listener as an event listener for an event of type
   */
  readonly removeEventListener: <
    T extends EventIdentifiers,
    E extends Event<T>
  >(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * Style properties to apply to the overlay.
   *
   * ### Discussion
   * The following example shows a new style object replacing
   * the current style properties for a circle overlay:
   *
   * ```
   * circleOverlay.style = new mapkit.Style({
   *   strokeColor: "#777",
   *   lineWidth: 3,
   *   fillColor: "#FFF",
   *   fillOpacity: .2
   * });
   * ```
   *
   * You can also change style properties individually, as this example shows:
   *
   * ```
   * circleOverlay.style.fillOpacity = .33;
   * circleOverlay.style.lineWidth = 4;
   * ```
   */
  readonly style: Style;

  /**
   * The map you add the overlay to.
   *
   * ### Discussion
   * This property is null if you haven’t added the overlay to a map,
   * or you have removed it from a map.
   */
  readonly map: Map | null;
}
