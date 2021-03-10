import { Vector } from "../vector/Vector";
import { add, cross, multiplyScalar, sub } from "../vector/Operations";

export type Camera = {
  lookFrom: Vector;
  lookAt: Vector;
  fov: number;
  half_h?: number;
  half_w?: number;
  origin?: Vector;
  w?: Vector;
  u?: Vector;
  v?: Vector;
  lowerLeftCorner?: Vector;
  horizontal?: Vector;
  vertical?: Vector;
};

export const init = (c: Camera, width: number, height: number): Camera => {
  let cam: Camera = { ...c };

  const vup: Vector = new Vector(0, 1, 0);
  cam.half_h = Math.tan((c.fov * Math.PI) / 180.0 / 2.0);
  cam.half_w = (width / height) * cam.half_h;
  cam.origin = c.lookFrom;
  cam.w = sub(c.lookAt, c.lookFrom).normalize();
  cam.u = cross(cam.w, vup).normalize();
  cam.v = cross(cam.u, cam.w);
  cam.lowerLeftCorner = sub(
    cam.origin,
    add(multiplyScalar(cam.v, cam.half_h), multiplyScalar(cam.u, cam.half_w))
  );
  cam.lowerLeftCorner.add(cam.w);
  cam.horizontal = multiplyScalar(cam.u, 2.0 * cam.half_w);
  cam.vertical = multiplyScalar(cam.v, 2.0 * cam.half_h);
  return cam;
};
