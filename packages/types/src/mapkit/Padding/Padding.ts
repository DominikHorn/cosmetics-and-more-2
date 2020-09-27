import { PaddingConstructorOptions } from "./PaddingConstructorOptions";

/**
 * The values that define content padding within the map view frame.
 *
 * ### Overview
 * Apply padding values to shrink the area represented by a frame.
 * You use a Padding object when setting the map’s padding property
 * or as an option of showItems. Positive values cause the frame to
 * be inset (or shrunk) by the specified amount. Negative values are
 * clipped to 0.
 */
export declare class Padding implements Required<PaddingConstructorOptions> {
  top: number;
  right: number;
  bottom: number;
  left: number;

  /**
   * Creates a padding object, and initializes its inset margin properties.
   *
   * ### Parameters
   * - options: An object literal (PaddingConstructorOptions) of inset margin properties
   */
  constructor(options?: PaddingConstructorOptions);

  /**
   * Creates a padding object, and initializes its inset margin properties.
   *
   * ### Parameters
   * - top: Top inset margin
   * - right: Right inset margin
   * - bottom: Bottom inset margin
   * - left: Left inset margin
   */
  constructor(top?: number, right?: number, bottom?: number, left?: number);
}
