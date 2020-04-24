// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
 }
  volume() {
    return this.length * this.width * this.height
  };
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    };
}
class CubeMaker extends CuboidMaker2{
    constructor(length, width, height){
        super(length, width, height);
    }
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6 * (this.length * this.width);
    }
}
const cuboid2 = new CuboidMaker2(4, 5, 5);
const cube = new CubeMaker(5, 5, 5);
// console.log(cube.volume());
// console.log(cube.surfaceArea());

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid2.volume()); // 100
// console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.