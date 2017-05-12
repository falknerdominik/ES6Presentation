// public class Point {
//     private int x;
//     private int y;
//     public Point(int x, int y) {
//         this.x = x;
//         this.y = y;
//     }
//     public Point(Point coord) {
//         this.x = coord.charAt(0);
//         this.y = coord.charAt(1);
//     }
//     //...
// }
module.exports = class Point {
  constructor({x = 0.0, y = 0.0, point = null} = {}) {
    if(point == null) {
      this.x = x;
      this.y = y;
    } else {
      this.x = point.x;
      this.y = point.y;
    }
  }
}
