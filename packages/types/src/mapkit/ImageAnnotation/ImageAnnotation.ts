import { Coordinate } from "../Coordinate";
import { ImageAnnotationConstructorOptions } from "./ImageAnnotationConstructorOptions";

/**
 * A customized annotation with image resources that you provide.
 *
 * ### Overview
 * There are times when you'll want to customize the look of an annotation.
 * The easiest way to do that is to use an mapkit.ImageAnnotation object,
 * which lets you specify your own image resources. Minimally, all you need
 * to provide is a URL to your asset (such as a PNG or JPEG image).
 *
 * To make your image to look crisp on Retina displays, provide URLs to the
 * Retina versions of your asset. You may want to define the anchor of your
 * asset with anchorOffset.
 *
 * The shape of your icon might affect the placement of the callout. You can
 * modify the position of the callout with calloutOffset.
 */
export declare class ImageAnnotation
  implements Required<ImageAnnotationConstructorOptions> {
  url: { [size: number]: string };

  /**
   * Initializes an image annotation with a URL to its image and a coordinate.
   *
   * ### Parameters
   * - coordinate:The coordinate at which this annotation should appear.
   * - options: A hash of properties that initialize the annotation. The options
   *   hash must include url. The optional title and subtitle are displayed in a
   *   callout if they are present.
   *
   * ### Discussion
   * This example shows two image annotations: one with a minimally defined image,
   * and one with more options filled in.
   *
   * ```
   * var coordinate = new mapkit.Coordinate(38.897957, -77.036560);
   *
   * // The house logo is a white square.
   * // The image size is 32x32. Since the default anchor point is the bottom center
   * // of the image, we offset the anchor by (0, -16) to make the center of the
   * // image the anchor point.
   * var houseOptions = {
   *     title: "The White House",
   *     subtitle: "1600 Pennsylvania Ave NW",
   *     url: { 1: "/images/house.png", 2: "/images/house_2x.png"},
   *     anchorOffset: new DOMPoint(0, -16)
   * };
   * var houseAnnotation = new mapkit.ImageAnnotation(coordinate, houseOptions);
   * map.addAnnotation(houseAnnotation);
   *
   * // This is how we might implement a red pin.
   * var pinOptions = {
   *     url: {
   *         1: "/images/pin-red.png",
   *         2: "/images/pin-red_2x.png"
   *     }
   * };
   * var pinAnnotation = new mapkit.ImageAnnotation(coordinate, pinOptions);
   * map.addAnnotation(pinAnnotation);
   * ```
   */
  constructor(
    coordinate: Coordinate,
    options: ImageAnnotationConstructorOptions
  );
}
