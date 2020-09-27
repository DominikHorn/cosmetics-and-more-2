/**
 * Constants that indicate whether an annotation collides and how
 * to interpret the collision-frame rectangle of an annotation view.
 */
export enum CollisionMode {
  /**
   * A constant indicating that the map should use a full
   * collision rectangle for detecting collisions.
   */
  Rectangle = "Rectangle",

  /**
   * A constant indicating that the map should use a circle
   * inscribed in the collision frame rectangle to determine collisions.
   */
  Circle = "Circle",

  /**
   * A constant that indicates the annotation doesn’t collide with
   * other annotations.
   */
  None = "None",
}
