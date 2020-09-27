import { Annotation } from "../Annotation";
import { Coordinate } from "../Coordinate";
import { CoordinateRegion } from "../CoordinateRegion";
import { FeatureVisibility } from "../FeatureVisibility";
import { MapRect } from "../MapRect";
import { Overlay } from "../Overlay";
import { Padding } from "../Padding";
import { PointOfInterestFilter } from "../PointOfInterestFilter";
import { ColorSchemes } from "./ColorSchemes";
import { MapTypes } from "./MapTypes";

/**
 * An object that contains options for initializing a map's features.
 */
export interface MapConstructorOptions {
  /**
   * The visible area of the map defined in map units.
   *
   * ### Discussion
   * The default value is new mapkit.MapRect(0, 0, 1, 1).
   */
  visibleMapRect?: MapRect;

  /**
   * The area currently displayed by the map.
   *
   * ### Discussion
   * This is the area currently displayed by the map, defined with a mapkit.CoordinateRegion:
   * ```
   * var center = new mapkit.Coordinate(48.8468, 2.3364),
   *  span = new mapkit.CoordinateSpan(0.016, 0.016),
   *  region = new mapkit.CoordinateRegion(center, span);
   * ```
   */
  region?: CoordinateRegion;

  /**
   * The map coordinate at the center of the map view.
   *
   * ### Discussion
   * There is no default value. When accessing center, MapKit JS
   * copies the mapkit.Coordinate instance.
   */
  center?: Coordinate;

  /**
   * The map's rotation, in degrees.
   *
   * ### Discussion
   * The default value is 0.
   *
   * The value 0 means that the top edge of the map view corresponds to true north.
   * The value 90 means the top of the map is pointing due east. The value 180
   * means the top of the map points due south, and so on.
   *
   * Setting the rotation property always rotates the map around its center.
   */
  rotation?: number;

  /**
   * The CSS color that MapKit JS paints the user interface controls on the map.
   *
   * ### Discussion
   * Use tintColor to color the outline of the controls, text, and glyphs.
   * Use any valid [CSS color value](https://www.w3.org/TR/css-color-3/).
   */
  tintColor: string;

  /**
   * The map’s color scheme when displaying standard or muted standard map types.
   *
   * ### Discussion
   *
   * Accepts a property from mapkit.Map.ColorSchemes to determine if the map will
   * display with a dark or light theme when mapkit.Map.MapTypes.Standard or
   * mapkit.Map.MapTypes.MutedStandard are the configured mapType. The default
   * is mapkit.Map.ColorSchemes.Light.
   *
   * The grid, user location accuracy ring, labels for marker annotations, and controls
   * of the map change appearance to complement the dark mode style.
   */
  colorScheme?: ColorSchemes;

  /**
   * The type of data displayed by the map view.
   *
   * ### Discussion
   * The map type determines whether the map shows a standard view, a satellite view, or a hybrid view.
   * The map type is a value of mapkit.Map.MapTypes.
   *
   * The map's initial view type can be one of the types defined by mapkit.Map.MapTypes.
   * The default map type is mapkit.Map.MapTypes.Standard.
   */
  mapType?: MapTypes;

  /**
   * The map's inset margins.
   *
   * ### Discussion
   * The padding affects the map's controls layout and the region drawn by the map which is
   * computed to fit within the inset frame as specified by the padding.
   *
   * The visibleMapRect is computed to fit within the inset frame with the constraint that the entire,
   * non-inset frame must be able to contain map data as well. Using the showItems method ensures that
   * all annotations and overlays are visible within the inset frame and the map region is modified when
   * an annotation's callout is displayed to ensure it is entirely visible within the inset frame.
   *
   * The default value is new mapkit.Padding(0, 0, 0, 0).
   */
  padding?: Padding;

  /**
   * A Boolean value that determines whether to display a control that lets users choose the map type.
   *
   * ### Discussion
   * The map type control enables users to select whether to show a standard, satellite, or hybrid map view.
   *
   * The default value is true.
   */
  showsMapTypeControl?: boolean;

  /**
   * A Boolean value that determines whether the user may rotate the map using the
   * compass control or a rotate gesture.
   *
   * ### Discussion
   * When isRotationEnabled is set to false, the map can still be programmatically rotated by using
   * rotation or setRotationAnimated.
   *
   * The default value is true.
   */
  isRotationEnabled?: boolean;

  /**
   * A feature visibility setting that determines when the compass is visible.
   *
   * ### Discussion
   * By default, the compass is adaptive (mapkit.FeatureVisibility.Adaptive), meaning that it is not
   * visible when rotation is 0 on touch devices. Otherwise, the compass is visible.
   *
   * The default value is mapkit.FeatureVisibility.Adaptive. See mapkit.FeatureVisibility
   * for other settings.
   */
  showsCompass?: FeatureVisibility;

  /**
   * A Boolean value that determines whether the user may zoom in and out on the map using
   * pinch gestures or the zoom control.
   *
   * ### Discussion
   * Pinch-to-zoom with a trackpad requires browser touch event support. The map can be zoomed
   * programmatically when zoom is disabled by changing the region or visibleMapRect.
   *
   * The default value is true.
   */
  isZoomEnabled?: Boolean;

  /**
   * A Boolean value that determines whether to display a control for zooming in and
   * zooming out on a map.
   *
   * ### Discussion
   * The default value is true unless pinch-to-zoom is supported
   */
  showsZoomControl?: Boolean;

  /**
   * A Boolean value that determines whether the user may scroll the map with a
   * pointing device or gestures on a touchscreen.
   *
   * ### Discussion
   * The map can be scrolled programmatically when scroll is disabled by changing
   * the map's center and region coordinates.
   *
   * The default value is true.
   */
  isScrollEnabled?: Boolean;

  /**
   * A feature visibility setting that allows you to determine when to display the map’s scale.
   *
   * ### Discussion
   * The scale is never displayed above a specific zoom threshold (7500 meters per point).
   * The placement of the scale is handled automatically as follows:
   * - When the zoom control is shown, the scale is displayed in the opposite top corner.
   * - When the user location control already occupies the opposite corner, the scale shifts horizontally
   *   to prevent overlap.
   * - When the map has no zoom or user location control, the scale is positioned in the leading corner
   *   based on the text direction (top left for RTL and top right for RTL).
   *
   * Invalid values are ignored, but are reported to the console.
   *
   * The default value is mapkit.FeatureVisibility.Hidden. See mapkit.FeatureVisibility for other values
   * that determine when the map shows the scale.
   */
  showsScale?: FeatureVisibility;

  /**
   * A delegate method for modifying an annotation that represents a group of annotations that are combined
   * into a cluster.
   *
   * ### Parameters
   * - clusterAnnotation: An annotation that represents a group of annotations that are combined into a cluster.
   *
   * ### Discussion
   * This delegate method is invoked when a cluster annotation is created, or when a member annotation within
   * the cluster changes.
   *
   * You can return any of the following:
   * - The same cluster annotation, with its properties such as title or subtitle modified.
   * - A new annotation, such as an image annotation, to represent the cluster.
   * - No return value. If you return no annotation, the default annotation is used. You are not required to
   *   return a default annotation even if you modify it (as seen in the following code example for the cities
   *   cluster); the modifications will display.
   *
   * #### Example Usage
   * ```
   * map.addAnnotations(cities.map(city =>
   *  new mapkit.MarkerAnnotation(city.coordinate, {
   *    title: city.name,
   *    subtitle: city.population,
   *    glyphImage: city.landmarkImage,
   *    displayPriority: Math.max(city.population / 10000, 1000),
   *    clusteringIdentifier: "city"
   *  })
   * ));
   *
   * map.addAnnotations(parks.map(park =>
   *  new mapkit.ImageAnnotation(park.coordinate, {
   *    title: park.name,
   *    url: { 1: park.image },
   *    displayPriority: 250,
   *    clusteringIdentifier: "park"
   *  })
   * ));
   *
   * map.annotationForCluster = function(clusterAnnnotation) {
   *  if (clusterAnnotation.clusteringIdentifier === "city") {
   *    clusterAnnotation.title = "Cities";
   *    clusterAnnotation.subtitle = clusterAnnotation.memberAnnotations
   *      .reduce((total, clusterAnnotation) => total + clusterAnnotation.population, 0);
   *  } else if (clusterAnnotation.clusteringIdentifier === "park") {
   *    return new mapkit.ImageAnnotation(clusterAnnotation.coordinate, {
   *      title: "Parks",
   *      url: { 1: "tree.png" }
   *    });
   *  }
   * };
   * ```
   *
   * For more information, see [About Annotation Clustering](https://developer.apple.com/documentation/mapkitjs/mapkit/annotations/about_annotation_clustering).
   */
  readonly annotationForCluster?: (clusterAnnotation: Annotation) => void;

  /**
   * An array holding all the annotations on the map.
   *
   * ### Discussion
   * You can set this attribute to a new (possibly empty) array of annotations,
   * which updates all the annotations on the map.
   *
   * The default value is [] (empty array).
   */
  annotations?: Annotation[];

  /**
   * The selected annotation on the map.
   *
   * ### Discussion
   * The value of selectedAnnotation is either:
   * - A mapkit.Annotation object, if one is selected, or
   * - null, if no annotations are selected.
   *
   * An annotation is selected if its selected property is true.
   * To deselect all annotations, set this attribute to null.
   *
   * To select an annotation that is already part of the map,
   * set this attribute to the desired annotation.
   *
   * When the selected annotation is removed from the map
   * (as an effect of removeAnnotation, removeAnnotations,
   * or setting a new set of annotations with the
   * annotations property), it is deselected before being removed.
   *
   * The default value is null
   */
  selectedAnnotation?: Annotation | null;

  /**
   * An array that contains all of the map's overlays.
   *
   * ### Discussion
   * This attribute can be set to a new (possibly empty) array of overlays to
   * update or delete all the overlays on the map.
   *
   * The default value is [] (empty array).
   */
  overlays?: Overlay[];

  /**
   * The overlay on the map that is selected.
   *
   * ### Discussion
   * To deselect any currently selected overlay, set this attribute to null.
   *
   * To select an overlay that is already part of the map, set this attribute to the desired overlay.
   *
   * When the selected overlay is removed from the map (as an effect of removeOverlay, removeOverlays,
   * or setting a new set of overlays with the overlays property), it is deselected before being removed.
   *
   * The default value is null.
   */
  selectedOverlay?: Overlay | null;

  /**
   * A Boolean value that determines whether the map displays points of interest.
   *
   * ### Discussion
   * Determines whether points of interest are shown on the map in standard and hybrid modes.
   * A point of interest can be an airport, park, museum, hospital, etc., and is represented
   * with its name and a color-coded icon.
   *
   * The default value is true.
   */
  showsPointsOfInterest?: boolean;

  /**
   * The filter used to determine the points of interest shown on the map.
   *
   * ### Discussion
   * The filter specifies point of interest categories to include or exclude in a map.
   * If not specified, MapKit JS creates a default filter that shows all points of interest.
   */
  pointOfInterestFilter?: PointOfInterestFilter;

  /**
   * A Boolean value that determines whether to show the user's location on the map.
   *
   * ### Discussion
   * Set this property to true to determine the user's location and make it visible on the map
   * as a pulsing blue dot annotation.
   *
   * Set this property to false to remove the user location annotation and to stop
   * monitoring the user's location.
   *
   * The default value is false.
   *
   * ##### Note
   * While this property affects the annotation's visibility, it does not update the
   * visible region of the map to put the user's location into view.
   */
  showsUserLocation?: Boolean;

  /**
   * A Boolean value that determines whether to center the map on the user's location.
   *
   * ### Discussion
   * Set this property to true to keep the map centered on the user location annotation.
   * Enabling this property automatically enables showsUserLocation.
   *
   * Set this property to false to stop centering the map on the current location.
   *
   * A programmatic or user-initiated change to the map's region that moves the user
   * location annotation off center automatically disables tracksUserLocation.
   *
   * The default value is false.
   */
  tracksUserLocation?: Boolean;

  /**
   * A Boolean value that determines whether the user location control is visible.
   *
   * ### Discussion
   * The default value is false.
   */
  showsUserLocationControl?: Boolean;
}
