import * as PIXI from "pixi.js";
import { Canvas } from "skia-canvas";

export function convertPixiContainerToSkia(container: PIXI.Container) {
  const canvas = new Canvas(800, 600);
  const ctx = canvas.getContext("2d");

  container.children.forEach((child) => {
    if (child instanceof PIXI.Graphics) {
      // Преобразование графических объектов
      const { x, y, rotation } = child;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      child.geometry.graphicsData.forEach(
        (graphic: {
          shape: any;
          fillStyle: { toString: (arg0: number) => any };
        }) => {
          const shape = graphic.shape;
          ctx.beginPath();
          if (shape.type === PIXI.SHAPES.RECT) {
            ctx.rect(shape.x, shape.y, shape.width, shape.height);
          } else if (shape.type === PIXI.SHAPES.ELLIPSE) {
            ctx.ellipse(
              shape.x,
              shape.y,
              shape.width / 2,
              shape.height / 2,
              0,
              0,
              2 * Math.PI
            );
          }
          ctx.fillStyle = `#${graphic.fillStyle.toString(16)}`;
          ctx.fill();
        }
      );
      ctx.restore();
    }
  });

  // Экспорт в PDF
  canvas.pdf("output.pdf").then(() => console.log("PDF exported"));
}
