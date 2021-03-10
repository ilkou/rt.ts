export interface VectorProps {
  x: number;
  y: number;
  z: number;
}

class Vector {
  x: number;
  y: number;
  z: number;
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(v: Vector): Vector {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  sub(v: Vector): Vector {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  divide(v: Vector): Vector {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  multiply(v: Vector): Vector {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  normalize(): Vector {
    return this.divideScalar(this.length() || 1);
  }

  divideScalar(scalar: number): Vector {
    return this.multiplyScalar(1.0 / scalar);
  }

  multiplyScalar(scalar: number): Vector {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  cross(v: Vector, w: Vector): Vector {
    if (w !== undefined) {
      console.warn(
        "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
      );
      return this.crossVectors(v, w);
    }
    return this.crossVectors(this, v);
  }

  crossVectors(a: Vector, b: Vector): Vector {
    const ax: number = a.x,
      ay: number = a.y,
      az: number = a.z;
    const bx: number = b.x,
      by: number = b.y,
      bz: number = b.z;
    this.x = ay * bz - az * by;
    this.y = az * bx - ax * bz;
    this.z = ax * by - ay * bx;
    return this;
  }

  dot(v: Vector) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
}

export { Vector };
