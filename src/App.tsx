import React, { useState } from "react";
import Canvas from "./components/Canvas";
import { init } from "./libs/camera/Camera";
import type { Camera } from "./libs/camera/Camera";
import { Vector } from "./libs/vector/Vector";
import { multiplyScalar, sub, add, multiply } from "./libs/vector/Operations";

type Ray = {
  origin: Vector;
  dir: Vector;
};

type Rec = {
  oc?: Vector;
  a?: number;
  b?: number;
  c?: number;
  delta?: number;
  t0?: number;
  t1?: number;
};

type Obj = {
  pos: Vector;
  dir: Vector;
  size: number;
};

const App: React.FC = () => {
  const setPixel = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    g: number,
    b: number,
    a: number
  ) => {
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a / 255 + ")";
    ctx.fillRect(x, y, 1, 1);
  };
  const hitSphere = (r: Ray, closest: number): boolean => {
    let rec: Rec = {};
    let o: Obj = {
      size: 1.0,
      pos: new Vector(0, 0, 0),
      dir: new Vector(0, 1, 0),
    };

    rec.oc = sub(r.origin, o.pos);
    rec.a = r.dir.dot(r.dir);
    rec.b = 2 * rec.oc.dot(r.dir);
    rec.c = rec.oc.dot(rec.oc) - o.size * o.size;
    rec.delta = rec.b * rec.b - 4 * rec.a * rec.c;
    if (rec.delta <= 0) return false;
    rec.t0 = (-rec.b - Math.sqrt(rec.delta)) / (2 * rec.a);
    rec.t1 = (-rec.b + Math.sqrt(rec.delta)) / (2 * rec.a);
    if (rec.t0 < rec.t1 && rec.t0 < closest && rec.t0 > 0.001) return true;
    return false;
  };
  const getRay = (p: Camera, u: number, v: number): Ray => {
    return {
      origin: p.origin as Vector,
      dir: sub(
        add(
          p.lowerLeftCorner as Vector,
          add(
            multiplyScalar(p.horizontal as Vector, u),
            multiplyScalar(p.vertical as Vector, v)
          )
        ),
        p.origin as Vector
      ).normalize(),
    };
  };
  const raytracer = (
    ctx: CanvasRenderingContext2D,
    col: number,
    row: number
  ): Vector => {
    let cam: Camera = init(
      { fov: 60, lookAt: new Vector(0, 10, 0), lookFrom: new Vector(0, 0, 0) },
      ctx.canvas.width,
      ctx.canvas.height
    );
    let ray: Ray = getRay(
      cam,
      (col + 0.5) / ctx.canvas.width,
      (row + 0.5) / ctx.canvas.height
    );
    if (hitSphere(ray, 50000000.0)) return new Vector(255, 0, 0);
    return new Vector(0, 0, 0);
  };

  const draw = (ctx: CanvasRenderingContext2D): void => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let row = 0; row < ctx.canvas.height; row++)
      for (let col = 0; col < ctx.canvas.width; col++) {
        let color: Vector = raytracer(ctx, col, row);
        setPixel(ctx, col, row, color.x, color.y, color.z, 255);
      }
  };

  return (
    <>
      <Canvas draw={draw} />
    </>
  );
};

export default App;
