import { LineGradient } from "../LineGradient";
import { StyleConstructorOptions } from "./StyleConstructorOptions";

/**
 * A set of observable attributes for overlays, including
 * color and opacity of stroke and fill, and line styles.
 *
 * ### Overview
 * You can assign a mapkit.Style object to an overlay to
 * customize its appearance, such as changing the opacity
 * of the fill or the thickness of the stroke. Style
 * properties are observable, so MapKit JS automatically
 * reflects any change to a style property on the
 * corresponding overlays.
 */
export declare class Style implements Required<StyleConstructorOptions> {
  strokeColor: string;
  strokeOpacity: number;
  strokeStart: number;
  strokeEnd: number;
  lineCap: "butt" | "round" | "square";
  lineDash: number[];
  lineDashOffset: number;
  lineJoin: "round" | "miter" | "bevel";
  lineWidth: number;
  lineGradient: LineGradient;
  fillColor: string | null;
  fillOpacity: number;
  fillRule: "nonzero" | "evenodd";

  /**
   * Creates and initializes a style object.
   *
   * ### Parameters
   * - options: A StyleConstructorOptions object of style properties
   */
  constructor(options?: StyleConstructorOptions);
}
