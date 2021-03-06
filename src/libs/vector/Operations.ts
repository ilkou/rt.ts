import { Vector } from "./Vector";

export const add = (a: Vector, b: Vector): Vector => {
  return new Vector(a.x + b.x, a.y + b.y, a.z + b.z);
};

export const sub = (a: Vector, b: Vector): Vector => {
  return new Vector(a.x - b.x, a.y - b.y, a.z - b.z);
};

export const multiply = (a: Vector, b: Vector): Vector => {
  return new Vector(a.x * b.x, a.y * b.y, a.z * b.z);
};

export const divide = (a: Vector, b: Vector): Vector => {
  return new Vector(a.x / b.x, a.y / b.y, a.z / b.z);
};

export const multiplyScalar = (v: Vector, scalar: number): Vector => {
  scalar = scalar || 1;
  return new Vector(v.x * scalar, v.y * scalar, v.z * scalar);
};

export const divideScalar = (v: Vector, scalar: number): Vector => {
  return multiplyScalar(v, 1.0 / scalar);
};

export const normalize = (v: Vector): Vector => {
  return divideScalar(v, v.length());
};

export const cross = (a: Vector, b: Vector): Vector => {
  return new Vector(
    a.y * b.z - a.z * b.y,
    a.z * b.x - a.x * b.z,
    a.x * b.y - a.y * b.x
  );
};
