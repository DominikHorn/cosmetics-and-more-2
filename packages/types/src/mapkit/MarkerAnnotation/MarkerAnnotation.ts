import { Coordinate } from "../Coordinate";
import { FeatureVisibility } from "../FeatureVisibility";
import { MarkerAnnotationConstructorOptions } from "./MarkerAnnotationConstructorOptions";

/**
 * An annotation that displays a balloon-shaped marker at the
 * designated location.
 *
 * ### Overview
 * A marker is a balloon-shaped annotation that contains a glyph
 * or text. On the map, the marker appears when its coordinate
 * is in view.
 *
 * The following example shows a customized marker that specifies
 * a color for the balloon background and the glyph, and provides
 * custom glyph images.
 *
 * ```
 * var portland = new mapkit.Coordinate(45.5231, -122.6765);
 * var customMarker = new MarkerAnnotation(portland, {
 *   color: "green",
 *   glyphColor: "brown",
 *   glyphImage: { 1: "glyphImage.png" },
 *   selectedGlyphImage: { 1: "detailedIcon.png", 2: "detailedIcon_2x.png", 3: "detailedIcon_3x.png" }
 * });
 * ```
 *
 * The following example shows a marker annotation with a custom
 * callout implemented by the callout delegate. In this example,
 * the annotation is a dot when it is selected because
 * selectedGlyphImage is not used.
 *
 * ```
 * var calloutDelegate = {
 *   calloutRightAccessoryForAnnotation: function() {
 *       var accessoryViewRight = document.createElement("a");
 *       accessoryViewRight.className = "right-accessory-view";
 *       accessoryViewRight.href = "https://www.nps.gov/stli/index.htm";
 *       accessoryViewRight.target = "_blank";
 *       accessoryViewRight.appendChild(document.createTextNode("ⓘ"));
 *
 *       return accessoryViewRight;
 *   }
 * };
 *
 * var annotation = new mapkit.MarkerAnnotation(new mapkit.Coordinate(40.6892, -74.0445), {
 *   title: "Title",
 *   subtitle: "Subtitle",
 *   callout: calloutDelegate
 * });
 * ```
 */
export declare class MarkerAnnotation
  implements Required<MarkerAnnotationConstructorOptions> {
  color: string;
  glyphColor: string;
  glyphText: string;
  glyphImage: { [size: number]: string };
  selectedGlyphImage: { [size: number]: string };
  titleVisibility: FeatureVisibility;
  subtitleVisibility: FeatureVisibility;

  /**
   * Creates a marker annotation at the coordinate location with provided options.
   *
   * ### Parameters
   * - coordinate: The coordinate at which this annotation should appear.
   * - options: A hash of properties with which to initialize the annotation.
   */
  constructor(
    coordinate: Coordinate,
    options?: MarkerAnnotationConstructorOptions
  );
}
