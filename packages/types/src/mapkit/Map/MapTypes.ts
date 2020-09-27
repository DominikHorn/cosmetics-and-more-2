/**
 * Constants representing the type of map to display.
 */
export enum MapTypes {
  /**
   * A street map that shows the position of all roads and some road names.
   * */
  Standard = "Standard",

  /**
   * A street map where your data is emphasized over the underlying map details.
   *
   * ### Discussion
   * In this style, map features are less prominent, which allows user features such
   * as annotations and overlays to stand out by comparison.
   */
  MutedStandard = "MutedStandard",

  /**
   * A satellite image of the area with road and road name information layered on top.
   */
  Hybrid = "Hybrid",

  /**
   * A satellite image of the area.
   */
  Satellite = "Satellite",
}
