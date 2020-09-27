import { LineGradient } from "../LineGradient";

export interface StyleConstructorOptions {
  /**
   * The stroke color of a line.
   *
   * ### Discussion
   * This can be any valid CSS color value.
   * Set to null for no stroke. The default
   * stroke color is rgb(0, 122, 255).
   */
  strokeColor?: string;

  /**
   * The opacity of the stroke color.
   *
   * ### Discussion
   * The value of this property can be in the range of 0
   * (fully transparent) to 1 (fully opaque). The default
   * stroke opacity is 1.
   */
  strokeOpacity?: number;

  /**
   * The unit distance along the line where a stroke begins.
   *
   * ### Discussion
   * The value of this property must be a number between 0 and 1.
   * A value of 0, the default, represents the beginning of the polyline,
   * and a value of 1 represents the end. MapKit JS interprets values
   * between 0 and 1 linearly along the length of the polyline.
   *
   * The stroke is only visible for the overlay when strokeStart is
   * less than strokeEnd.
   */
  strokeStart?: number;

  /**
   * The unit distance along the line where a stroke ends.
   *
   * ### Discussion
   * The value of this property must be a number between 0 and 1.
   * A value of 0 represents the beginning of the polyline, and a
   * value of 1, the default, represents the end. MapKit JS
   * interprets values between 0 and 1 linearly along the length
   * of the polyline.
   *
   * The stroke is only visible for the overlay when strokeStart is
   * less than strokeEnd.
   */
  strokeEnd?: number;

  /**
   * The style to use when drawing line endings.
   *
   * ### Discussion
   * The three options for line endings are butt (squared-off ends),
   * round (rounded ends), or square (ends that have a half-square extension).
   * The default line cap is round.
   */
  lineCap?: "butt" | "round" | "square";

  /**
   * An array of line and gap lengths for creating a dashed line.
   *
   * ### Discussion
   * This property provides an array to use as the line's dash pattern where
   * the numbers represent line and gap lengths in CSS pixels. For example,
   * [10, 5] means draw for 10 pixels, leave a 5-pixel gap, then repeat.
   * If there is an odd number of elements in the array, MapKit JS copies
   * and duplicates it. Set to an empty array ([]), to draw solid lines.
   * The default line dash array is [].
   */
  lineDash?: number[];

  /**
   * The number of CSS pixels to offset drawing of a line's dash pattern.
   *
   * ### Discussion
   * This has no effect if lineDash is set to draw solid lines.
   *  The default line dash offset is 0.
   */
  lineDashOffset?: number;

  /**
   * The style to use when drawing joins between line segments.
   *
   * ### Discussion
   * The three options for line joins are miter (join is a sharp corner),
   * round (join is a rounded corner), or bevel (join is a beveled corner).
   * The default line join is round.
   */
  lineJoin?: "miter" | "round" | "bevel";

  /**
   * The width of a line's stroke in CSS pixels.
   *
   * ### Discussion
   * The default line width is 1.
   */
  lineWidth?: number;

  /**
   * The gradient to apply along the line.
   *
   * ### Discussion
   * If a style has both strokeColor and lineGradient definitions,
   * lineGradient takes precedence and displays. If you don’t define
   * a color at the start or end location within the gradient, MapKit
   * JS uses the style’s strokeColor.
   */
  lineGradient?: LineGradient;

  /**
   * The fill color of a shape.
   *
   * ### Discussion
   * This can be any valid CSS color value. Set to null for no fill.
   * The default fill color is rgb(0, 122, 255).
   */
  fillColor?: string | null;

  /**
   * The opacity of the fill color.
   *
   * ### Discussion
   * The value of this property can be in the range of 0 (fully transparent)
   * to 1 (fully opaque). The default fill opacity is 0.1.
   */
  fillOpacity?: number;

  /**
   * A rule for determining whether a point is inside or outside a polygon.
   *
   * ### Discussion
   * This can be either the nonzero winding rule (nonzero),
   *  or the even-odd rule (evenodd). The default fill rule is nonzero.
   */
  fillRule?: "nonzero" | "evenodd";
}
