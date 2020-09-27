import { FeatureVisibility } from "../FeatureVisibility";

/**
 * An object containing the options that initialize
 * a marker annotation.
 */
export interface MarkerAnnotationConstructorOptions {
  /**
   * The background color of the balloon.
   *
   * ### Discussion
   * The default value is "#ff5b40" (a shade of red).
   */
  color?: string;

  /**
   * The fill color of the glyph.
   *
   * ## Discussion
   * The default value is "white".
   */
  glyphColor?: string;

  /**
   * The text to display in the marker balloon.
   *
   * ### Discussion
   * The text to display in the balloon instead of a glyph image.
   * The default value is "" (empty string).The amount of space
   * available for displaying glyph text is limited. Specify no
   * more than two or three characters.
   *
   * If you specify both a glyphImage and glyphText, the glyph image
   * is ignored, and the glyph text is displayed.
   */
  glyphText?: string;

  /**
   * The image to display in the marker balloon.
   *
   * ### Discussion
   * The glyph image values should be object literals containing
   * absolute or relative URLs to standard, 2x, and 3x Retina
   * display assets. Only "1" is required. The image should
   * be 20 x 20 pixels.
   *
   * The default glyph image of a pin is used if glyphImage is set
   * to null, undefined, or "" (empty). If you specify both a
   * glyphImage and glyphText, the glyph image is ignored, and the
   * glyph text is displayed.
   */
  glyphImage?: { [size: number]: string };

  /**
   * The image to display in the balloon when the marker is selected.
   *
   * ### Discussion
   * Provide glyph images as object literals containing absolute or
   * relative URLs to standard, 2x, and 3x Retina display assets.
   * Only "1" is required. The selected glyph image is displayed in
   * the balloon when the marker is in the selected state. If you
   * specify an image for this property, you should also specify an
   * image in the glyphImage property.
   *
   * Set the size of the selected glyph image size to 40 x 40 pixels.
   * MapKit JS scales glyph images to fit in the balloon. If selectedGlyphImage
   * is not set, then glyphImage is used when the marker is selected.
   * The default image is a pin.
   */
  selectedGlyphImage?: { [size: number]: string };

  /**
   * A value that determines the behavior of the title's visibility.
   *
   * ### Discussion
   * The title visibility controls the title rendered below the balloon
   * part of the marker. The default value is mapkit.FeatureVisibility.Adaptive.
   *
   * For adaptive visibility, the title is always visible in normal state,
   * by default. When the marker is selected, the title is visible unless
   * the marker's selected state requires a callout.
   */
  titleVisibility?: FeatureVisibility;

  /**
   * A value that determines the behavior of the subtitle's visibility.
   *
   * The subtitle visibility controls the subtitle rendered below the balloon
   * part of the marker. The default value is mapkit.FeatureVisibility.Adaptive.
   *
   * For adaptive visibility, the subtitle is always hidden in normal state,
   * by default. In selected state, the subtitle follows the same rules
   * as the title.
   */
  subtitleVisibility?: FeatureVisibility;
}
