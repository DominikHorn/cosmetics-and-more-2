import { Event, EventIdentifiers } from "./Events";
import { MapKitInitOptions } from "./MapKitInitOptions";

/**
 * The JavaScript API for embedding Apple maps on your website.
 *
 * ### Overview
 *
 * The mapkit object is the main namespace for the [MapKit](https://developer.apple.com/documentation/mapkit)
 * JS framework. Similar to MapKit for apps, you can use the MapKit JS to display
 * interactive maps with customized annotations and overlays, and provide
 * directions and search services. Your app can supply step-by-step navigation,
 * and help a user find a location by autocompleting a search query.
 *
 * MapKit JS lets you customize the look of your map. You can choose style details
 * for overlays and annotations, display a standard street map or one that uses satellite
 * imagery, and adjust the visibility of map controls. Additionally, you can customize
 * a map's behavior by providing event handlers that scroll the map or respond when users
 * select items. You can also enable or disable panning, zooming, and rotation.
 */
export declare class mapkit extends MapKitInitOptions {
  /**
   * Initialize MapKit JS by providing an authorization callback function and optional language.
   *
   * ### Parameters
   * - options: MapKit JS initialization options.
   *
   * ### Discussion
   * Once you have created a JWT according to the guidelines in
   * [Creating and Using Tokens](https://developer.apple.com/documentation/mapkitjs/creating_and_using_tokens_with_mapkit_js)
   * with MapKit JS, you are ready to begin using MapKit JS. The first step is to initialize the
   * mapkit object with a token. To do this, set authorizationCallback to a function that
   * obtains a token and passes it to the done() function.
   *
   * If you have created a server endpoint to deliver new tokens to MapKit JS, make an
   * asynchronous request to this endpoint in your authorizationCallback function and call
   * done() with the result.
   *
   * ```
   * mapkit.init({
   *  authorizationCallback: function(done) {
   *    fetch("/gettoken")
   *      .then(res => res.text())
   *      .then(done);
   *  },
   *  language: "es"
   * });
   * ```
   *
   * If you haven't set up a server endpoint, you can alternately set authorizationCallback
   * to a function that simply provides a pre-generated token string.
   *
   * ```
   * mapkit.init({
   *  authorizationCallback: function(done) {
   *    done("your-token-string");
   *  },
   *  language: "es"
   * });
   * ```
   *
   * It is safe to call mapkit.init before the content of your page has fully loaded; in other
   * words, before the window.load event fires. A
   * [mapkit](https://developer.apple.com/documentation/mapkitjs/mapkit) object dispatches a
   * configuration-change event once it has been initialized, and an error event when initialization
   * fails. You can learn more about both of these events in
   * [Handling Initialization Events](https://developer.apple.com/documentation/mapkitjs/mapkit/handling_initialization_events).
   */
  static readonly init: (options: MapKitInitOptions) => void;

  /**
   * Subscribes a listener function to an event type.
   *
   * ### Parameters
   * - type: The type of event (e.g., "configuration-change").
   * - listener: The callback function to invoke. listener is passed an Event as its sole argument.
   * - thisObject: An object set as the this keyword on the listener function.
   */
  static readonly addEventListener: <
    T extends EventIdentifiers,
    E extends Event<T>
  >(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * Unsubscribes a listener function from an event type.
   *
   * ### Parameters
   * - type: The type of event (e.g., "configuration-change").
   * - listener: The callback function to remove.
   * - thisObject: An object set as the this keyword on the listener function.
   */
  static readonly removeEventListener: <
    T extends EventIdentifiers,
    E extends Event<T>
  >(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * The version of MapKit JS.
   *
   * ### Discussion
   * The version of MapKit JS that is running. This is a
   * dot-separated string with major, minor, and patch version numbers.
   */
  static readonly version: string;

  /**
   * The build string.
   *
   * ### Discussion
   * A build string that is used internally. It is helpful to
   * include this in bug reports.
   */
  static readonly build: string;
}
