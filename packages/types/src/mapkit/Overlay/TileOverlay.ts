import { Event, EventIdentifiers } from "./Events";
import { TileOverlayConstructorOptions } from "./TileOverlayConstructorOptions";
import { Overlay } from "./Overlay";

/**
 * An overlay that covers an area of the map with bitmapped tiles.
 *
 * ### Overview
 * You use tile overlay objects to represent your own tile-based
 * content and to coordinate the display of that content on a map.
 * Your tiles can supplement the underlying map content or replace
 * it completely. You can use a single tile overlay object to
 * represent all of the tiles at one or more zoom levels of the map.
 */
export declare class TileOverlay
  extends Overlay
  implements Required<TileOverlayConstructorOptions> {
  data: object;
  minimumZ: number | null;
  maximumZ: number | null;
  opacity: number;

  /**
   * Creates a tile overlay with a URL template and style options.
   *
   * ### Parameters
   * - urlTemplate: The urlTemplate can be in the format of a template URL string
   *   or a function that returns a URL string from a set of tile parameters.
   *   MapKit JS requests new tiles when the map zooms or pans, the display changes,
   *   or the custom data properties change.
   *
   *   The template string must be in the format: https://myserver/tile?x={x}&y={y}&z={z}&scale={scale}.
   *   MapKit JS replaces the x, y, z, and scale values depending on the displayed map region and screen
   *   resolution, then loads an image from that URL. You can also add custom values to the template
   *   string. For example, a template string could look like: https://{subdomain}.customtileserver.com/{z}/{x}/{y}?lang={lang}.
   *   In this case, you must define TileOverlay.data.subdomain and TileOverlay.data.lang for the placeholders
   *   to populate. Also, note that not all parameters are necessary in a template string.
   *   The scale parameter is absent in this example.
   *
   *   You can provide a callback function instead of the template string. When MapKit JS needs to request
   *   new tiles, it invokes the urlTemplate callback with the parameters x, y, z, scale, and data.
   *   The callback function must return a URL for the provided parameters. If the return value is
   *   anything but a nonempty string, MapKit JS doesn’t load any tiles for the requested region.
   *
   * - options: An optional object literal of properties for initializing the tile overlay.
   *   These properties include minimumZ, maximumZ, opacity, and data.
   */
  constructor(
    urlTemplate: string | ((...params: any) => string), // TODO: better type for params
    options?: TileOverlayConstructorOptions
  );

  /**
   * Reloads the tile overlay for the displayed map region with the latest data values.
   */
  readonly reload: () => void;

  /**
   * A string, or callback function that returns a string,
   * with a URL that provides the requested tile.
   *
   * MapKit JS sets the urlTemplate in the tile overlay constructor,
   * and accesses or overrides it on the mapkit.TileOverlay object directly.
   */
  urlTemplate: string | ((...params: any) => string); // TODO: better type for params

  /**
   * Listens for events of the specified type.
   *
   * ### Parameters
   * - type: The required event type, such as tile-error.
   * - listener: The required event listener function or delegate object to invoke.
   * - thisObject: An optional object set as the this keyword on the listener function.
   *
   * ### Discussion
   * Adds listener as a callback for an event of type type. Throws an error if type is invalid.
   */
  readonly addEventListener: <T extends EventIdentifiers, E extends Event<T>>(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * Stops listening for events of the specified type.
   *
   * ### Parameters
   * - type: The required event type, such as tile-error.
   * - listener: The required event listener function or delegate object to invoke.
   * - thisObject: An optional object set as the this keyword on the listener function.
   *
   * ### Discussion
   * Removes listener as a callback for an event of type
   */
  readonly removeEventListener: <
    T extends EventIdentifiers,
    E extends Event<T>
  >(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;
}
