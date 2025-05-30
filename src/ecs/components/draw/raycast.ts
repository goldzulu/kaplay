import type { RaycastResult } from "../../../math/math";
import type { Vec2 } from "../../../math/Vec2";
import { _k } from "../../../shared";

// this is not a component lol
export function raycast(
    origin: Vec2,
    direction: Vec2,
    exclude?: string[],
) {
    let minHit: RaycastResult;

    const shapes = _k.game.root.get("area");

    shapes.forEach(s => {
        if (exclude && exclude.some(tag => s.is(tag))) return;
        const shape = s.worldArea();
        const hit = shape.raycast(origin, direction);
        if (hit) {
            if (minHit) {
                if (hit.fraction < minHit.fraction) {
                    minHit = hit;
                    minHit!.object = s;
                }
            }
            else {
                minHit = hit;
                minHit!.object = s;
            }
        }
    });

    return minHit!;
}
