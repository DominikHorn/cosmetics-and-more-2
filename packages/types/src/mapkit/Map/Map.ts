import { MapConstructorOptions } from "./MapConstructorOptions";
import { MapShowItemsOptions } from "./MapShowItemsOptions";
import { Event, EventIdentifiers } from "./Events";
import { Distances } from "./Distances";
import { Annotation } from "../Annotation";
import { Coordinate } from "../Coordinate";
import { MapRect } from "../MapRect";
import { CameraBoundaryDescription } from "../CameraBoundaryDescription";
import { CoordinateRegion } from "../CoordinateRegion";
import { CameraZoomRange } from "../CameraZoomRange";
import { Overlay } from "../Overlay";
import { ItemCollection } from "../ItemCollection";
import { TileOverlay } from "../TileOverlay";
import { FeatureVisibility } from "../FeatureVisibility";
import { Padding } from "../Padding";
import { PointOfInterestFilter } from "../PointOfInterestFilter";
import { ColorSchemes } from "./ColorSchemes";
import { MapTypes } from "./MapTypes";

/**
 * An embeddable interactive map that you add to a webpage.
 *
 * ### Overview
 * A map is a self-contained view object that you embed on a webpage. It's possible to
 * have multiple independent maps on a single webpage, although typically webpages only
 * need one interactive map.
 */
export declare class Map implements Required<MapConstructorOptions> {
  visibleMapRect: MapRect;
  region: CoordinateRegion;
  center: Coordinate;
  rotation: number;
  tintColor: string;
  colorScheme: ColorSchemes;
  mapType: MapTypes;
  padding: Padding;
  showsMapTypeControl: boolean;
  isRotationEnabled: boolean;
  showsCompass: FeatureVisibility;
  isZoomEnabled: Boolean;
  showsZoomControl: Boolean;
  isScrollEnabled: Boolean;
  showsScale: FeatureVisibility;
  annotationForCluster: (clusterAnnotation: Annotation) => void;
  annotations: Annotation[];
  selectedAnnotation: Annotation | null;
  overlays: Overlay[];
  selectedOverlay: Overlay | null;
  showsPointsOfInterest: boolean;
  pointOfInterestFilter: PointOfInterestFilter;
  showsUserLocation: Boolean;
  tracksUserLocation: Boolean;
  showsUserLocationControl: Boolean;

  /**
   * Creates a map you embed on a webpage and initializes the map with the
   * constructor options you choose.
   *
   * ### Parameters
   * - parent: A DOM element or the ID of a DOM element to use as your map's container.
   * - options: Options defined in MapConstructorOptions that initialize properties of your map.
   *
   * ### Return Value
   * A mapkit.Map instance.
   *
   * ### Discussion
   * The map's constructor takes a an optional parent argument and an optional options argument.
   * If you specify the parent argument, MapKit JS inserts the map element into the DOM as a
   * child of parent, styled to fill the size of its parent.
   *
   * A map defaults to showing the entire world.
   *
   * #### Example Usage
   * The following example demonstrates how to add a map to a DIV element:
   *
   * ##### HTML
   * ```
   * <body>
   *  <div id="mapContainer"></div>
   * </body>
   * ```
   *
   * ##### JavaScript
   * ```
   * var map = new mapkit.Map('mapContainer', { center: new mapkit.Coordinate(37.334883, -122.008977) });
   * ```
   */
  constructor(parent: string | Element, options: MapConstructorOptions);

  /**
   * ==================================
   *        Handling Map Events
   * ==================================
   */

  /**
   * Add listener for events that a map object dispatches.
   *
   * ### Overview
   * MapKit JS uses events that developers can implement to hook into points in the life
   * cycle of the map and user interactions. Your code can respond to events by registering
   * an event listener.
   *
   * Events have a target property. The target of an event is the object dispatching that event.
   * When you add an event listener on a map, the target is the map itself. The select and deselect
   * events have an annotation or overlay property that reports the selected or deselected item.
   * The single-tap, double-tap, and long-press events have pointOnPage and domEvents properties
   * that provide more data about the user interactions.
   *
   * Event listeners receive a single argument that is an event object. The event objects are similar
   * to native event objects though calls to event.preventDefault() or event.stopPropagation() don’t
   * halt some actions that trigger these events. Scrolling, zooming, and panning, as well as zooming
   * or rotating after a long press, provide methods to halt or prevent interaction.
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
   * - type: The type of event to remove.
   * - listener: The callback function removed.
   * - thisObject: An object set as this keyword on the listener function
   *
   * ### Discussion
   * removeEventListener removes listener as a callback for the specified event type.
   * See [Handling Map Events](https://developer.apple.com/documentation/mapkitjs/mapkit/map/handling_map_events)
   * for a list of event types.
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
   * ==================================
   *  Accessing Interaction Properties
   * ==================================
   */

  /**
   * A Boolean value that indicates if map rotation is available.
   *
   * ### Discussion
   * MapKit JS determines whether it is possible to rotate the map, and sets isRotationAvailable to true or false.
   * When the value is true, users can rotate a map and any labels on the map will remain horizontal.
   *
   * The value for isRotationAvailable is:
   * - true: When the map is rendered by the client, such as by browsers that support WebGL.
   * - false: When the Apple Maps server renders the map with a grid of image tiles, or when you
   *   implement your own tile overlays (addTileOverlay).
   *
   * When isRotationAvailable is false, isRotationEnabled is always false and rotation is always 0.
   */
  readonly isRotationAvailable: Boolean;

  /**
   * =============================================
   *  Manipulating the Visible Portion of the Map
   * =============================================
   */

  /**
   * Centers the map to the provided coordinate, with optional animation.
   *
   * ### Parameters
   * - coordinate: The map's new center.
   * - animate: A Boolean value that determines whether the center change should be animated.
   *   The default value is true.
   *
   * ### Return Value
   * Returns this map object so calls can be chained.
   *
   * ### Discussion
   * By default, the pan is animated.
   */
  readonly setCenterAnimated: (
    coordinate: Coordinate,
    animate?: Boolean
  ) => Map;

  /**
   * Changes the map's region to the region provided, with optional animation.
   *
   * ### Parameters
   * - region: The map's new region.
   * - animate: A Boolean value that determines whether the region change should be animated.
   *   The default value is true.
   *
   * ### Return Value
   * Returns this map object so calls can be chained.
   *
   * ### Discussion
   * By default, the change is animated.
   */
  readonly setRegionAnimated: (
    region: CoordinateRegion,
    animate?: Boolean
  ) => Map;

  /**
   * Changes the map's rotation setting to the number of degrees specified.
   *
   * ### Parameters
   * - degrees: The map’s rotation in degrees.
   * - animate: A Boolean value that determines whether the rotation change animates.
   *   The default value is true.
   *
   * ### Return Value
   * Returns the map object so calls can be chained.
   *
   * ### Discussion
   * By default, the rotation change is animated. This function changes the map's rotation even
   * if isRotationEnabled is set to false
   */
  readonly setRotationAnimated: (degrees: number, animate?: Boolean) => Map;

  /**
   * Changes the map's visible map rectangle to the specified map rectangle.
   *
   * ### Parameters
   * - mapRect: The map's new visible area expressed in map units.
   * - animate: A Boolean value that determines whether the visible area change should be animated.
   *   The default value is true.
   *
   * ### Return Value
   * Returns this map object so calls can be chained.
   *
   * ### Discussion
   * By default, the change is animated.
   */
  readonly setVisibleMapRectAnimated: (
    mapRect: MapRect,
    animate?: Boolean
  ) => Map;

  /**
   * Sets a constraint for the enter of the map
   *
   * ### Return Value
   * An object containing both mapkit.CoordinateRegion and mapkit.MapRect instances.
   *
   * ### Discussion
   * Returns an object containing both mapkit.CoordinateRegion and mapkit.MapRect instances.
   */
  readonly cameraBoundary: CameraBoundaryDescription;

  /**
   * Changes the map's camera boundary with an animated transition.
   *
   * ### Parameters
   * - boundary: This can be an instance of mapkit.CoordinateRegion or mapkit.MapRect.
   * - animate: A Boolean value that determines whether the visible area change should be animated.
   *   The default value is true.
   *
   * ### Return Value
   * Returns the parent map instance object so calls can be chained.
   *
   * ### Discussion
   * By default, the change of boundary animates.
   */
  readonly setCameraBoundaryAnimated: (
    boundary: CoordinateRegion | MapRect,
    animate?: boolean
  ) => Map;

  /**
   * Sets the altitude of the camera above the center of the map.
   *
   * ### Discussion
   * This method sets the altitude of the camera above the center of the map. The distance is a value in
   * meters and must be greater than or equal to 0.
   */
  readonly cameraDistance: number;

  /**
   * Changes the map's camera distance with an animated transition.
   *
   * ### Parameters
   * - distance: Altitude of the camera from the center of the map. Must be greater than or equal to 0.
   * - animate: A Boolean value that determines whether the visible area change should be animated.
   *   The default value is true.
   *
   * ### Return Value
   * Returns the parent map instance object so calls can be chained.
   *
   * ### Discussion
   * By default, the change of distance animates.
   */
  readonly setCameraDistanceAnimated: (
    distance: number,
    animate?: Boolean
  ) => Map;

  /**
   * Sets the minimum and maximum distance of the camera from the map center.
   *
   * ### Discussion
   * The return value of this getter is a mapkit.CameraZoomRange instance, which is an object
   * containing minCameraDistance and maxCameraDistance properties.
   */
  readonly cameraZoomRange: CameraZoomRange;

  /**
   * Changes the map's camera zoom range with an animated transition.
   *
   * ### Parameters
   * - cameraZoomRange: A mapkit.CameraZoomRange instance, which is an object containing minCameraDistance
   *   and maxCameraDistance properties.
   * - animate: A Boolean value that determines whether the visible area change should be animated.
   *   The default value is true.
   *
   * ### Return Value
   * Returns the parent map instance object so calls can be chained.
   *
   * ### Discussion
   * By default, the change of zoom range animates.
   */
  readonly setCameraZoomRangeAnimated: (
    cameraZoomRange: CameraZoomRange,
    animate?: Boolean
  ) => Map;

  /**
   * ==================================
   *     Showing the Map's Controls
   * ==================================
   */

  /**
   * ==================================
   *  Configuring the Map's Appearance
   * ==================================
   */

  /**
   * The system of measurement displayed on the map.
   *
   * ### Discussion
   * Sets the system of measurement used to display map distances. See mapkit.Map.Distances for accepted values.
   *
   * This property applies to the scale, if it is displayed. The default value is mapkit.Map.Distances.Adaptive,
   * which means that the measurement system is chosen depending on the map's set language. This property affects
   * displayed distances only; it does not affect data returned by a service such as Directions.
   */
  distances: Distances;

  /**
   * Adjusts the map’s visible region to bring the specified overlays and annotations into view.
   *
   * ### Parameters
   * - items: An array of annotations and/or overlays to make visible.
   * - options: Options defined by MapShowItemsOptions that let you determine animation,
   *   padding, and minimum span of the map’s region.
   *
   * ### Return Value
   * Returns the items array that was passed in.
   *
   * ### Discussion
   * showItems adjusts the map’s region to bring all of the specified items — annotations or
   * overlays — into view. Items are only added if they are not already in the map.
   *
   * The map’s adjusted region covers the smallest longitudinal span possible. In other words,
   * passing an array that consists of two annotations for the cities Tokyo and Los Angeles,
   * and a polyline that represents the flight path between them, to showItems will update the
   * region to cover the Pacific Ocean.
   *
   * The showItems method takes into account the size of the annotations specified when updating
   * the map’s region so the entirety of the annotations are visible. Similarly, it ensures that
   * an overlay with thick lines is shown in its entirety. In some cases it is possible that not
   * all items can be shown at once, or the actual padding does not match the requested padding.
   * This happens if:
   * - One or more items fall outside of the visible map region, even at the minimum zoom level.
   * - The zoom level, which determines the amount of padding, snaps to a level that has a different amount of padding than requested.
   *
   * This method throws an Error if the arguments to the method are invalid.
   *
   * The following example demonstrates how to use showItems:
   * ```
   * var park = new mapkit.MarkerAnnotation(new mapkit.Coordinate(37.749581, -119.524212), { title: "Yosemite" }),
   *  surf = new mapkit.MarkerAnnotation(new mapkit.Coordinate(37.49557, -122.496687), { title: "Mavericks" });
   * map.showItems([park, surf], { animate: true, padding: new mapkit.Padding(60, 25, 60, 25) });
   * ```
   */
  readonly showItems: (
    items: (Annotation | Overlay | ItemCollection)[],
    options?: MapShowItemsOptions
  ) => (Annotation | Overlay | ItemCollection)[];

  /**
   * ==================================
   *        Annotating the Map
   * ==================================
   */

  /**
   * Returns the list of annotation objects located in the specified map rectangle.
   *
   * ### Parameters
   * - mapRect: The portion of the map in which to look for annotations.
   *
   * ### Return Value
   * Returns an array of annotations that fall inside mapRect.
   */
  readonly annotationsInMapRect: (mapRect: MapRect) => Annotation[];

  /**
   * Adds an annotation to the map.
   *
   * ### Parameters
   * - annotation: The annotation to add.
   *
   * ### Return Value
   * Returns the annotation.
   */
  readonly addAnnotation: (annotation: Annotation) => Annotation;

  /**
   * Adds an array of annotations to the map.
   *
   * ### Parameters
   * annotations: An array of annotations to add.
   *
   * ### Return Value
   * Returns the array of annotations.
   *
   * ### Discussion
   * The map shows annotations that have their animates property set to true
   * in a staggered manner, in order of latitude.
   *
   * ##### Note
   * MapKitJS immediately adds the annotations to the annotations array,
   * then visually displays them on the map.
   */
  readonly addAnnotations: (annotations: Annotation[]) => Annotation[];

  /**
   * Removes an annotation from the map.
   *
   * ### Parameters
   * - annotation: The annotation to remove.
   *
   * ### Return Value
   * Returns the annotation.
   */
  readonly removeAnnotation: (annotation: Annotation) => Annotation;

  /**
   * Removes multiple annotations from the map.
   *
   * ### Parameters
   * - annotations: An array of annotations to remove
   *
   * ### Return Value
   * Returns the array of annotations.
   */
  readonly removeAnnotations: (annotations: Annotation[]) => Annotation[];

  /**
   * ==================================
   *    Adding and Removing Overlays
   * ==================================
   */

  /**
   * Returns an array of overlays at a given point on the webpage.
   *
   * ### Parameters
   * - point: A point in the page's coordinate system, such as new
   *   DOMPoint(event.pageX, event.pageY) when handling a mouse event.
   *
   * ### Return Value
   * Returns an array of overlays. If there are no overlays
   * at the point, the array is empty.
   *
   * ### Discussion
   * If the point is above an overlay fill or stroke, the overlay is returned.
   * Overlays are returned in the order they are displayed, with the first
   * overlay in the array closest to the background, and the last overlay
   * closest to the foreground.
   *
   * Similar to overlay selection events, this method considers the overlay's style at the point.
   *
   * ##### Note
   * The point must be above a non-null overlay fill or stroke to return the overlay.
   *
   * For example, the following cases do not return an overlay:
   * - The point is on an overlay's fill, but the fill color is null.
   * - The point is on an overlay's stroke, but the stroke color is null.
   * - The point is on an overlay's stroke, but the line width is 0.
   *
   * Opacity is not considered and can have any value. For example, if the point
   * is on an overlay whose opacity is set to 0, that overlay is returned.
   */
  readonly overlaysAtPoint: (point: DOMPoint) => Overlay[];

  /**
   * Returns the topmost overlay at a given point on the webpage.
   *
   * ### Parameters
   * - point: A point in the page's coordinate system, such as new
   *   DOMPoint(event.pageX, event.pageY) when handling a mouse event.
   *
   * ### Return Value
   * Returns the topmost overlay or null.
   *
   * ### Discussion
   * If there are multiple overlays at a point, the overlay closest to the
   * foreground is returned. If an overlay is selected, the selected overlay
   * is returned. Selected overlays are drawn on top of all other overlays.
   *
   * The following code example identifies the topmost overlay during a mouse move event:
   * ```
   * document.querySelector(".mk-map-view").addEventListener("mousemove", function(event) {
   *   var targetOverlay = map.topOverlayAtPoint(new DOMPoint(event.pageX, event.pageY));
   *   // Add special styling to the overlay to indicate its hover state or whatever you'd like.
   *   // ...
   * });
   * ```
   */
  readonly topOverlayAtPoint: (point: DOMPoint) => Overlay | null;

  /**
   * Adds an overlay to the map.
   *
   * ### Parameters
   * - overlay: The overlay to add
   *
   * ### Return Value
   * Returns the overlay.
   *
   * ### Discussion
   * The overlay is added to the end of the map's overlays array
   */
  readonly addOverlay: (overlay: Overlay) => Overlay;

  /**
   * Adds multiple overlays to the map.
   *
   * ### Parameters
   * - overlays: An array of overlays to add
   *
   * ### Return Value
   * Returns the array of overlays.
   *
   * ### Discussion
   * The overlays are added to the end of the map's overlays array
   */
  readonly addOverlays: (overlays: Overlay[]) => Overlay[];

  /**
   * Removes an overlay from the map.
   *
   * ### parameters
   * - overlay: the overlay to remove.
   *
   * ### return value
   * returns the overlay.
   */
  readonly removeOverlay: (overlay: Overlay) => Overlay;

  /**
   * Removes multiple overlays from the map.
   *
   * ### parameters
   * - overlays: An array of overlays to remove.
   *
   * ### return value
   * returns the array of overlays.
   */
  readonly removeOverlays: (overlays: Overlay[]) => Overlay[];

  /**
   * ===========================================
   *  Adding and Removing Geographical Features
   * ===========================================
   */

  /**
   * Adds a collection of annotations, overlays, or other item collections to the map.
   *
   * ### Parameters
   * - items: An array of annotations, overlays, or the data returned from
   *   importGeoJSON to display on the map.
   *
   * ### Return Value
   * Returns and array of items added to the map
   *
   * ### Discussion
   * Use addItems to add elements to the map after importing them from importGeoJSON.
   *
   * This method doesn’t change the map’s visible region. Use showItems with the list
   * of items to change the map’s view.
   */
  readonly addItems: (
    items: (Annotation | Overlay | ItemCollection)[] | ItemCollection
  ) => (Annotation | Overlay | ItemCollection)[] | ItemCollection;

  /**
   * Removes a collection of annotations, overlays, or other item collections from the map.
   *
   * ### Parameters
   * - items: An array of annotations, overlays, or the data returned from importGeoJSON
   *   to display on the map.
   *
   * ### Return Value
   * Returns an array of items removed from the map.
   *
   * ### Discussion
   * This method doesn't change the map's visible region. Use showItems with a list of items
   * to focus on to update the map's view.
   */
  readonly removeItems: (
    items: (Annotation | Overlay | ItemCollection)[] | ItemCollection
  ) => (Annotation | Overlay | ItemCollection)[] | ItemCollection;

  /**
   * ===================================
   *  Adding and Removing Tile Overlays
   * ===================================
   */

  /**
   * An array of all of the map's tile overlays.
   *
   * ### Discussion
   * You can set this attribute to a new (possibly empty) array of tile overlays,
   * to update or remove all the tile overlays on the map.
   */
  tileOverlays: TileOverlay[];

  /**
   * Adds a tile overlay to the map.
   *
   * ### Parameters
   * - tileOverlay: The tile overlay to add
   *
   * ### Return Value
   * Returns the tile overlay.
   *
   * ### Discussion
   * This overlay is added to the end of the map's tileOverlays array.
   */
  readonly addTileOverlay: (tileOverlay: TileOverlay) => TileOverlay;

  /**
   * Adds an array of tile overlays to the map.
   *
   * ### Parameters
   * - tileOverlay: An array of tile overlays to add.
   *
   * ### Return Value
   * Returns the array of tile overlays.
   *
   * ### Discussion
   * This overlay is added to the end of the map's tileOverlays array.
   */
  readonly addTileOverlays: (tileOverlays: TileOverlay[]) => TileOverlay[];

  /**
   * Removes a tile overlay from the map.
   *
   * ### Parameters
   * - tileOverlay: The tile overlay to remove.
   *
   * ### Return Value
   * Returns the tile overlay.
   */
  readonly removeTileOverlay: (tileOverlay: TileOverlay) => TileOverlay;

  /**
   * Removes an array of tile overlays from the map.
   *
   * ### Parameters
   * - tileOverlays: An array of tile overlays to remove
   *
   * ### Return Value
   * Returns the array of tile overlays.
   */
  readonly removeTileOverlays: (tileOverlays: TileOverlay[]) => TileOverlay[];

  /**
   * ===================================
   *   Displaying the User's Location
   * ===================================
   */

  /**
   * An annotation that indicates the user's location on the map.
   *
   * ### Discussion
   * This is the annotation, or blue dot, that indicates user location on the map.
   * This property is null if:
   * - showsUserLocation is false.
   * - The location has not yet been acquired.
   * - MapKit JS failed to acquire the user's location.
   *
   * The Map's annotations property only holds annotations you can modify.
   * MapKit JS does not add the userLocationAnnotation property to the annotations
   * array, and you can’t remove it by using removeAnnotation. Use selectedAnnotation
   * to reference the user location annotation when it is selected.
   *
   * The default value of the collisionMode property on the user location annotation
   * is mapkit.Annotation.CollisionMode.None. The user location annotation will not
   * collide with other annotations, unless you set the collision mode property
   * to other a value other than None.
   */
  readonly userLocationAnnotation: Annotation | null;

  /**
   * ===================================
   *     Converting Map Coordinates
   * ===================================
   */

  /**
   * Converts a coordinate on the map to a point in the page's coordinate system.
   *
   * ### Parameters
   * - coordinate: The coordinate shown on the map.
   *
   * ### Return Value
   * A DOMPoint in the page coordinates that corresponds to the provided map coordinate.
   */
  readonly convertCoordinateToPointOnPage: (coordinate: Coordinate) => DOMPoint;

  /**
   * Converts a point in page coordinates to the corresponding map coordinate.
   *
   * ### Parameters
   * - point: A point in the page's coordinate system, such as new
   *   DOMPoint(event.pageX, event.pageY) when handling a mouse event.
   *
   * ### Return Value
   * A mapkit.Coordinate in the map at the provided point (DOMPoint) of the page.
   */
  readonly convertPointOnPageToCoordinate: (point: DOMPoint) => Coordinate;

  /**
   * ===================================
   *          Destroying a Map
   * ===================================
   */

  /**
   * Removes the map's element from the DOM and releases internal references
   * to the map to free up memory.
   */
  readonly destroy: () => void;

  /**
   * ===================================
   *       Accessing the Element
   * ===================================
   */

  /**
   * The map's DOM element.
   */
  readonly element: Element;
}
