/**
 * @file Layer
 * @description How to use the z() component for layering
 * @difficulty 0
 * @tags basics, effects, comps
 * @ver 4000.0.0-alpha.18
 * @minver 3001.0
 * @category basics
 */

kaplay();

loadSprite("bean", "/sprites/bean.png");

// Create a parent node that won't be affected by camera (fixed) and will be drawn on top (z of 100)
const ui = add([
    fixed(),
    z(100),
]);

// This will be on top, because the parent node has z(100)
ui.add([
    sprite("bean"),
    scale(5),
    color(0, 0, 255),
]);

add([
    sprite("bean"),
    pos(100, 100),
    scale(5),
]);
