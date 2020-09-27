/**
 * Constants indicating the visibility of different adaptive map features.
 *
 * ### Overview
 * Indicates whether adaptive features like the scale, compass, and annotation
 * title and subtitle text are hidden, visible, or adaptive. The display of an adaptive
 * feature depends on the current map state. Controls that are not adaptive, such as
 * the map type control or zoom controls, can be shown or hidden by setting map properties
 * to true or false, respectively.
 *
 * To show the compass only when map rotation is changing and hide the zoom controls:
 * ```
 * // Create a map.
 * var map = new mapkit.Map("my-map-element-id");
 *
 * // Show the compass only when rotation is actively changing.
 * map.showsCompass = mapkit.FeatureVisibility.Adaptive;
 *
 * // Hide the zoom controls.
 * map.showsZoomControl = false;
 * ```
 */
export enum FeatureVisibility {
  /**
   * A constant indicating that feature visibility adapts to the current map state.
   *
   * ### Discussion
   * Use mapkit.FeatureVisibility.Adaptive to show adaptive controls only when the
   * map is in a given state. Controls that are not adaptive can be shown or hidden by
   * setting map properties to true or false, respectively.
   *
   * To set adaptive visibility for the compass and scale, and hide the map type and zoom controls:
   * ```
   * // Create a map.
   * var map = new mapkit.Map("my-map-element-id");
   *
   * // Show the compass only when rotation is actively changing.
   * map.showsCompass = mapkit.FeatureVisibility.Adaptive;
   *
   * // Show the scale only when zoom level is actively changing.
   * map.showsCompass = mapkit.FeatureVisibility.Adaptive;
   *
   * // Hide the map type and zoom controls.
   * map.showsMapTypeControl = false;
   * map.showsZoomControl = false;
   * ```
   */
  Adaptive = "Adaptive",

  /**
   * A constant indicating that the feature is always hidden.
   *
   * ### Discussion
   * Use mapkit.FeatureVisibility.Hidden to hide adaptive map controls
   * such as the compass and scale. Controls that are not adaptive can
   * be shown or hidden by setting map properties to true or false,
   * respectively.
   *
   * To always hide the compass and hide the map type and zoom controls:
   * ```
   * // Create a map.
   * var map = new mapkit.Map("my-map-element-id");
   *
   * // Always hide the compass.
   * map.showsCompass = mapkit.FeatureVisibility.Hidden;
   *
   * // Hide the map type and zoom controls.
   * map.showsMapTypeControl = false;
   * map.showsZoomControl = false;
   * ```
   */
  Hidden = "Hidden",

  /**
   * A constant indicating that the feature is always visible.
   *
   * ### Discussion
   * Use mapkit.FeatureVisibility.Visible to always show adaptive map controls
   * such as the compass and scale, regardless of the map's current state.
   * Controls that are not adaptive can be shown or hidden by setting map
   * properties to true or false, respectively.
   *
   * To always show the compass and show the user location control:
   * ```
   * // Create a map.
   * var map = new mapkit.Map("my-map-element-id");
   *
   * // Always show the compass, regardless of map state.
   * map.showsCompass = mapkit.FeatureVisibility.Visible;
   *
   * // Show the user location control.
   * map.showsUserLocationControl = true;
   * ```
   */
  Visible = "Visible",
}
