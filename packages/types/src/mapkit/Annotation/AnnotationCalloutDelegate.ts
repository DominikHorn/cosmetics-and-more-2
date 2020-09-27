import { Annotation } from "./Annotation";

/**
 * Methods for customizing the behavior and appearance
 * of an annotation callout.
 *
 * ### Overview
 * You can customize an annotation callout by replacing the callout element,
 * or by providing custom content to display inside a standard callout bubble.
 * The callout delegate contains methods you implement to customize the appearance
 * and behavior of the callout. All the methods are optional, enabling you to
 * override any or all of the behavior.
 *
 * ### Creating a Custom Callout
 * This example shows how to replace the standard callout with a custom callout
 * for a mapkit.MarkerAnnotation.
 *
 * ```
 * var calloutDelegate = {
 *   // Return a div element and populate it with information from the
 *   // annotation, including a link to a review site.
 *   calloutElementForAnnotation: function(annotation) {
 *       var element = document.createElement("div");
 *       element.className = "review-callout";
 *       var title = element.appendChild(document.createElement("h1"));
 *       title.textContent = annotation.title;
 *       var link = element.appendChild(document.createElement("a"));
 *       link.href = annotation.data.reviewLink;
 *       link.textContent = "Review";
 *       // Add more content.
 *       element.style.width = "240px";
 *       element.style.height = "100px";
 *       return element;
 *   },
 * };
 *
 * // Create an annotation with a link to be displayed in the callout.
 * var annotation = new mapkit.MarkerAnnotation(
 *   new mapkit.Coordinate(35.7019272, 139.575628),
 *   {
 *       callout: calloutDelegate,
 *       title: "...",
 *       data: {
 *           reviewLink: "http://..."    // Link to review site.
 *           // More info like address, phone number, etc.
 *       }
 *   }
 * );
 * ```
 *
 * ### Customizing the Content in a Standard Callout
 * You may want to provide your own content to display inside the callout bubble,
 * without replacing the whole element as in the previous code listing.
 * The following example is similar to the previous one, but uses the standard
 * callout bubble to display custom content.
 *
 * ```
 * var calloutDelegate = {
 *   // Return a div element and populate it with information from the
 *   // annotation, including a link to a review site.
 *   calloutContentForAnnotation: function(annotation) {
 *       var element = document.createElement("div");
 *       element.className = "review-callout-content";
 *       var title = element.appendChild(document.createElement("h1"));
 *       title.textContent = annotation.title;
 *       var link = element.appendChild(document.createElement("a"));
 *       link.href = annotation.data.reviewLink;
 *       link.textContent = "Review";
 *       // Add more content.
 *       return element;
 *   }
 * };
 *
 * // Create an annotation with a link to be displayed in the callout.
 * var annotation = new mapkit.MarkerAnnotation(
 *   new mapkit.Coordinate(35.7019272, 139.575628),
 *   {
 *       callout: calloutDelegate,
 *       title: "...",
 *       data: {
 *           reviewLink: "http://..."    // Link to review site.
 *           // More info like address, phone number, etc.
 *       }
 *   }
 * );
 * ```
 */
export interface AnnotationCalloutDelegate {
  /**
   * Returns a point determining the callout's anchor offset.
   *
   * ### Parameters
   * - annotation: The annotation for the callout.
   * - size: The width and height of the callout element as determined by MapKit.
   *
   * ### Return Value
   * Must return a DOMPoint that will be set as the callout’s anchorOffset property.
   *
   * ### Discussion
   * This method is called after calloutElementForAnnotation on the annotation’s
   * callout delegate with annotation and size as parameters. The size parameter
   * represents the size of the callout element as determined by MapKit. It is an
   * object with two number properties, width and height, and may be used to
   * compute the anchor offset.
   *
   * Two offset values affect the position of the callout element:
   * - The calloutOffset property of the annotation, which is the offset of the
   *   callout element relative to the annotation element, and
   * - The anchor offset of the callout, which is the offset of the callout
   *   relative to the annotation's calloutOffset.
   *
   * The default value for the callout’s anchorOffset is (0, 0), which means that the
   * bottom center of the callout coincides with the callout offset of the selected annotation.
   *
   * To choose a different offset, provide a DOMPoint where positive x values move the element
   * to the left and positive y values move the element up.
   */
  calloutAnchorOffsetForAnnotation?: (
    annotation: Annotation,
    size: { width: number; height: number }
  ) => DOMPoint;

  /**
   * Determines whether the callout should appear for an annotation.
   *
   * ### Parameters
   * - annotation: The annotation for the callout
   *
   * ### Return Value
   * Must return a Boolean value, where a value of false prevents the callout from appearing.
   *
   * ### Discussion
   * When an annotation is selected, this method is called on the annotation’s callout delegate
   * (if the delegate is an object and its calloutShouldAppearForAnnotation property is a function)
   * with the annotation as a parameter.
   */
  calloutShouldAppearForAnnotation?: (annotation: Annotation) => boolean;

  /**
   * Determines whether the callout should animate.
   *
   * ### Parameters
   * - annotation: The annotation for the callout
   *
   * ### Return Value
   * Must return a Boolean value that determines if the callout should be animated.
   *
   * ### Discussion
   * This method determines whether an appearance annotation should run. The animation
   * runs if the value is true.
   */
  calloutShouldAnimateForAnnotation?: (annotation: Annotation) => boolean;

  /**
   * Returns a CSS animation used when the callout appears.
   *
   * ### Parameters
   * - annotation: The annotation for the callout
   *
   * ### Return Value
   * Must return a string that describes the CSS animation to use for the callout appearance,
   * just like the appearanceAnimation property of mapkit.Annotation.
   *
   * ### Discussion
   * If the callout should animate, this method is called on the annotation’s callout delegate
   * with the annotation as a parameter. A standard callout (with or without custom content)
   * will use a default animation if the callout does not provide the appearance animation.
   *
   * A callout that uses a custom element can animate only if it provides the appearance animation.
   * The default animation does not apply to callouts with custom elements.
   */
  calloutAppearanceAnimationForAnnotation?: (annotation: Annotation) => string;

  /**
   * Returns custom content for the callout bubble.
   *
   * ### Parameters
   * - annotation: The annotation for the callout
   *
   * ### Return Value
   * Must return a DOM element, which is added as a child of the callout bubble.
   *
   * ### Discussion
   * This method can be used to provide custom content inside the callout bubble
   * without replacing the whole element, as in calloutElementForAnnotation.
   *
   * When a callout is created for a selected annotation and the annotation’s
   * callout delegate has no calloutElementForAnnotation method, the calloutContentForAnnotation
   * method is called instead (if it is defined) on the delegate with the annotation as a parameter.
   */
  calloutContentForAnnotation?: (annotation: Annotation) => Element;

  /**
   * Returns an element representing a custom callout.
   *
   * ### Parameters
   * - annotation: The annotation for the callout.
   *
   * ### Return Value
   * Must return a DOM element to be used as the callout element in place
   * of the standard callout bubble. This callout element should be populated
   * with the information to be displayed, including that provided by the annotation.
   *
   * ### Discussion
   * If the callout is not prevented from appearing, this method is called on the
   * annotation’s callout delegate (if the delegate is an object and its
   * calloutElementForAnnotation property is a function) with the annotation as
   * a parameter.
   */
  calloutElementForAnnotation?: (annotation: Annotation) => Element;

  /**
   * Returns an element used as a custom accessory on the left side of the
   * callout content area.
   *
   * ### Parameters
   * - annotation: The annotation for the callout
   *
   * ### Return Value
   * Must return a DOM element to be displayed as the left accessory.
   *
   * ### Discussion
   * This method can be used to provide a custom accessory to the left side of the
   * callout content area (the area occupied by the title and subtitle).
   *
   * Use CSS padding and margins to adjust the layout of accessory elements.
   * An accessory element that is shorter than the callout's other content is
   * vertically centered in the callout. The accessories' container does not
   * have padding, so a background that is set on an accessory element will
   * fully bleed to the border of the callout. The callout does clip its content,
   * so any background on the accessory won't bleed outside the rounded corners
   * of the callout.
   *
   * This method is ignored if you implement calloutElementForAnnotation.
   * In that case, you are responsible for the entirety of the callout.
   *
   * Note that callouts are language-aware. “Left” and “right” refer to the placement
   * of the accessories in a left-to-right language. If language is set to a right-to-left
   * language like Hebrew, the UI is mirrored. That is, the left accessory is placed on
   * the right-hand side and vice versa.
   */
  calloutLeftAccessoryForAnnotation?: (annotation: Annotation) => Element;

  /**
   * Returns an element used as a custom accessory on the right side of the
   * callout content area.
   *
   * ### Parameters
   * - annotation: The annotation for the callout
   *
   * ### Return Value
   * Must return a DOM element to be displayed as the right accessory.
   *
   * ### Discussion
   * This method can be used to provide a custom accessory to the right side of the
   * callout content area (the area occupied by the title and subtitle).
   *
   * Use CSS padding and margins to adjust the layout of accessory elements.
   * An accessory element that is shorter than the callout's other content is
   * vertically centered in the callout. The accessories' container does not
   * have padding, so a background that is set on an accessory element will
   * fully bleed to the border of the callout. The callout does clip its content,
   * so any background on the accessory won't bleed outside the rounded corners
   * of the callout.
   *
   * This method is ignored if you implement calloutElementForAnnotation.
   * In that case, you are responsible for the entirety of the callout.
   *
   * Note that callouts are language-aware. “Left” and “right” refer to the placement
   * of the accessories in a left-to-right language. If language is set to a right-to-left
   * language like Hebrew, the UI is mirrored. That is, the left accessory is placed on
   * the right-hand side and vice versa.
   */
  calloutRightAccessoryForAnnotation?: (annotation: Annotation) => Element;
}
