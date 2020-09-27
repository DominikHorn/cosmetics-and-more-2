/**
 * Attributes for initializing a tile overlay, including minimum
 * and maximum zoom, opacity, and custom data.
 */
export interface TileOverlayConstructorOptions {
  /**
   * The minimum zoom level of the overlay.
   *
   * ### Discussion
   * By default, the minimum zoom level for a tile overlay is the same as the
   * minimum zoom level for MapKit JS built-in tiles. MapKit JS requests the
   * overlay tiles when the map is above or at this zoom level.
   *
   * The default value is null.
   */
  minimumZ?: number | null;

  /**
   * The maximum zoom level of the overlay.
   *
   * ### Discussion
   * The maximumZ value defaults to the maximum zoom level of MapKit JS tiles.
   * The zoom level can go higher and expands the map's zoom range if necessary.
   * MapKit JS requests the overlay tiles when the map is below or at this zoom level.
   *
   * The default value is null.
   */
  maximumZ?: number | null;

  /**
   * A number from 0 to 1 that indicates a tile's opacity.
   *
   * ### Discussion
   * Opacity can be a decimal value ranging from 0 to 1, inclusive.
   * - An opacity value of 0 indicates tiles are not visible.
   * - An opacity value of 1 indicates tiles are completely opaque. 
   *   A tile overlay with an opacity of 1 can still have an alpha 
   *   channel and allow underlying overlays or the default tiles to 
   *   show through.

   * The default value is 1.
   */
  opacity?: number;

  /**
   * Custom data for populating the URL template.
   *
   * ### Discussion
   * The data object holds a dictionary of custom properties to fill
   * the urlTemplate.
   * - If the urlTemplate is a callback, MapKit JS passes the entire
   *   data object as a parameter.
   * - If the urlTemplate is a string, data key names should match up
   *   with the custom placeholder names. MapKit JS ignores the keys
   *   that don’t exist in the URL template string.
   *
   * The default value is {}.
   *
   * This example shows adding a customized tile overlay to a map.
   *
   * ```
   * var customOverlay = new mapkit.TileOverlay("https://{subdomain}.customtileserver.com/{z}/{x}/{y}?scale={scale}&lang={lang}&imageFormat=jpg");
   * customOverlay.data = {
   *   subdomain: "staging",
   *   lang: mapkit.language
   * };
   * map.addTileOverlay(customOverlay);
   * ```
   */
  data?: object;
}
