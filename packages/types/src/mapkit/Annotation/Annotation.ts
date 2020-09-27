import { DOMElement } from "react";
import { Map } from "../Map";
import { Coordinate } from "../Coordinate";
import { AnnotationConstructorOptions } from "./AnnotationConstructorOptions";
import { Event, EventIdentifiers } from "./Events";
import { Padding } from "../Padding";
import { AnnotationCalloutDelegate } from "./AnnotationCalloutDelegate";
import { DisplayPriority } from "./DisplayPriority";

/**
 * MapKit JS allows single-point annotations to be shown on a map. This is done
 * by creating an mapkit.Annotation object and adding it to a map. The framework
 * provides two built-in objects for your convenience, mapkit.MarkerAnnotation,
 * mapkit.ImageAnnotation. mapkit.MarkerAnnotation is the easiest to use,
 * so it will be described first.
 *
 * It's important to highlight a difference between the way annotations work in
 * MapKit JS and native MapKit. In native MapKit, there are annotation objects
 * and annotation views. You can decide the annotation view that should be used
 * for a particular annotation by implementing mapView:viewForAnnotation in the
 * map's delegate. In MapKit JS, there is only the annotation, which is both model
 * and view. Annotations can still be initialized by supplying any object that has
 * coordinate, title and subtitle properties. The look of annotations can also be
 * customized. The difference is that we opted for a more direct approach of having
 * the developer create annotation views explicitly rather than through a delegate.
 *
 * A callout is a standard or custom element that can give more information about an
 * annotation. A standard callout displays the annotation’s title and subtitle, if one
 * is provided. A callout appears when an annotation is selected either programmatically
 * or interactively (by clicking or tapping). A callout goes away when the annotation is
 * deselected programmatically or interactively, either by tapping or clicking on the
 * map, or selecting another item on the map
 *
 * ### Overview
 * An annotation represents data that you want to display on the map's surface. Each
 * annotation is associated with a coordinate on the map. It is rare that you'll need to
 * create a mapkit.Annotation object; use the more common extended objects,
 * mapkit.MarkerAnnotation and mapkit.ImageAnnotation, instead.
 *
 * Use mapkit.Annotation when you need to customize a view in a way that can't be
 * accomplished with mapkit.ImageAnnotation.
 *
 * ### Create a Custom Annotation
 * In this example, we create a custom annotation to show a person on the map
 * using their initials. The initials are enclosed in a gray circle, which we
 * style using the following CSS:
 *
 * ```css
 * .circle-annotation {
 *   width: 32px;
 *   height: 32px;
 *   border-radius: 50%;
 *   color: #FFF;
 *   background-color: #CCC;
 *   text-align: center;
 *   line-height: 32px;
 * }
 * ```
 *
 * The following code creates the annotation:
 *
 * ```
 * var people = [
 *   { title: "John Appleseed",
 *     coordinate: new mapkit.Coordinate(37.3349, -122.0090201),
 *     role: "developer",
 *     building: "HQ" },
 *   { title: "Anne Johnson",
 *     coordinate: new mapkit.Coordinate(37.722319, -122.434979),
 *     role: "manager",
 *     building: "HQ" }
 * ];
 *
 * var factory = function(coordinate, options) {
 *   var div = document.createElement("div"),
 *       name = options.title,           // "John Appleseed"
 *       parts = name.split(' ');        // ["John", "Appleseed"]
 *   div.textContent = parts[0].charAt(0) + parts[1].charAt(0);    // "JA"
 *   div.className = "circle-annotation";
 *   return div;
 * };
 *
 * people.forEach(function(person) {
 *   var options = {
 *       title: person.title,
 *       data: { role: person.role, building: person.building }
 *   };
 *   var annotation = new mapkit.Annotation(person.coordinate, factory, options);
 *   map.addAnnotation(annotation);
 * });
 * ```
 */
export declare class Annotation
  implements Required<AnnotationConstructorOptions> {
  data: object;
  title: string;
  subtitle: string;
  anchorOffset: DOMPoint;
  appearanceAnimation: string;
  displayPriority: DisplayPriority;
  padding: Padding;
  size: { width: number; height: number };
  visible: boolean;
  animates: boolean;
  draggable: boolean;
  enabled: boolean;
  selected: boolean;
  callout: AnnotationCalloutDelegate | null;
  calloutEnabled: boolean;
  calloutOffset: DOMPoint;
  clusteringIdentifier: string;
  collisionMode: string;
  accessibilityLabel: string | null;

  /**
   * Creates a new annotation given its location and initialization options.
   *
   * ### Parameters
   * - coordinate: The coordinate at which this annotation should appear.
   * - factory: A factory function that returns a DOM element used
   *   to represent this annotation.
   * - options: A hash of properties with which to initialize the annotation.
   *
   * ### Return Value
   * A mapkit.Annotation instance
   *
   * ### Discussion
   * The factory function returns a DOM element used to represent this annotation.
   * It can be a single element or a parent element with children. This function
   * is called with the following two arguments:
   * - coordinate (mapkit.Coordinate). The annotation's coordinate.
   * - options (AnnotationConstructorOptions). Options passed to the annotation
   *   constructor that can be used to add context to the custom annotation.
   *
   * The options include title and subtitle, which are displayed in a callout if they are present.
   */
  constructor(
    coordinate: Coordinate,
    factory: (
      coordinate: Coordinate,
      options: AnnotationConstructorOptions
    ) => DOMElement<any, any>,
    options?: AnnotationConstructorOptions
  );

  /**
   * Adds an event listener to handle events triggered by user interactions with annotations.
   *
   * ### Parameters
   * - type: The event type of interest (e.g., "select").
   * - listener: The callback function to invoke. listener is passed an
   *   annotation event as its sole argument.
   * - thisObject
   * - An object to be set as the this keyword on the listener function.
   *
   * ### Discussion
   * Adds listener as a callback for an event of type type. Throws an error if type is invalid.
   */
  readonly addEventListener: <T extends EventIdentifiers, E extends Event<T>>(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * Removes an event listener.
   *
   * ### Parameters
   * - type: The event type of interest (e.g., "select").
   * - listener: The callback function to remove.
   * - thisObject: An object to be set as the this keyword on the listener function.
   *
   * ### Discussion
   * Removes listener as a callback for an event of type.
   */
  readonly removeEventListener: <
    T extends EventIdentifiers,
    E extends Event<T>
  >(
    type: T,
    listener: (event: E) => void,
    thisObject?: object
  ) => void;

  /**
   * The annotation's coordinate.
   */
  readonly coordinate: Coordinate;

  /**
   * The map to which the annotation was added.
   *
   * ### Discussion
   * This property is null if the annotation hasn't yet been
   * added to a map and after the annotation has been removed from a map.
   */
  readonly map: Map | null;

  /**
   * The annotation's element in the DOM.
   */
  readonly element: Element;

  /**
   * An array of annotations that are grouped together in a cluster.
   *
   * ### Discussion
   * The memberAnnotations array contains all of the annotations grouped together
   * by a cluster. This is a flat array. If multiple cluster annotations are
   * clustered, this array contains all of the individual annotations included
   * in those clusters; it does not contain any cluster annotations.
   */
  readonly memberAnnotations: Annotation[];
}
