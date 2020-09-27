/**
 * An object containing options for intializing an image annotation.
 */
export interface ImageAnnotationConstructorOptions {
  /**
   * An object containing URLs for the image assets in multiple resolutions.
   *
   * ### Discussion
   * An object literal containing absolute or relative URLs to standard,
   * 2×, and 3× Retina assets. Only the first URL is required:
   *
   * ```
   * {
   *   url: {
   *     1: "foo.png",
   *     2: "foo_2x.png",
   *     3: "foo_3x.png"
   *   }
   * }
   * ```
   *
   * If you choose not to provide standard and Retina resolution assets, you have two options:
   * - Set "1" to a URL to a standard resolution image. This results in blurry images on Retina displays.
   * - Set "1" to a URL to a Retina image. Set size to the desired size. This results in crisp images on
   * Retina displays and good images on standard displays (but less optimal than custom, pixel-fitted images).
   */
  url?: { [size: number]: string };
}
