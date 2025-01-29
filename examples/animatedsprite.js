kaplay({
    background: [0, 0, 0],
});

// List of all characters
const CHARACTERS = [
    "vtbiden", "vtC3PO", "vtcaptainamerica", "vtcaptainmarvel",
    "vtdrstrange", "vtfan", "vtgroot", "vthulk", "vtmandalorian",
    "vtR2D2", "vtskeleton", "vtspiderman", "vtsuperfan", "vtsuperman",
    "vtthor", "vttrump", "vtwizard", "vtwonderwoman", "vtyoda"
];

const ANIMATIONS = ["walk", "run", "jump", "die"];
let currentAnimIndex = 0;

// Load all character sprites and their animations
CHARACTERS.forEach(char => {
    loadSprite(char, `/examples/sprites/${char}/${char}.png`);
    
    ANIMATIONS.forEach(anim => {
        const maxFrames = anim === "die" ? 5 : (anim === "jump" ? 4 : 8);
        for (let i = 1; i <= maxFrames; i++) {
            loadSprite(
                `${char}_${anim}_${i}`,
                `/examples/sprites/${char}/${char}_${anim}_${i.toString().padStart(2, '0')}.png`
            );
        }
    });
});

function createCharacter(name, x, y) {
    return add([
        sprite(name),
        pos(x, y),
        anchor("center"),
        {
            currentAnim: null,
            walk() {
                let frame = 1;
                if (this.currentAnim) this.currentAnim.cancel();
                this.currentAnim = loop(0.1, () => {
                    this.use(sprite(`${name}_walk_${frame}`));
                    frame = (frame % 8) + 1;  // Cycle through frames 1-8
                });
            },
            run() {
                let frame = 1;
                if (this.currentAnim) this.currentAnim.cancel();
                this.currentAnim = loop(0.08, () => {
                    this.use(sprite(`${name}_run_${frame}`));
                    frame = (frame % 8) + 1;  // Cycle through frames 1-8
                });
            },
            jump() {
                let frame = 1;
                if (this.currentAnim) this.currentAnim.cancel();
                this.currentAnim = loop(0.1, () => {
                    this.use(sprite(`${name}_jump_${frame}`));
                    frame = (frame % 4) + 1;  // Cycle through frames 1-4
                });
            },
            die() {
                if (this.currentAnim) this.currentAnim.cancel();
                let frame = 1;
                this.currentAnim = loop(0.15, () => {
                    if (frame <= 5) {
                        this.use(sprite(`${name}_die_${frame}`));
                        frame++;
                    } else {
                        this.currentAnim.cancel();
                    }
                });
            }
        }
    ]);
}

// Create all characters in a grid
const GRID_COLS = 5;
const SPACING = 150;
const START_X = 100;
const START_Y = 100;

const characters = CHARACTERS.map((char, i) => {
    const row = Math.floor(i / GRID_COLS);
    const col = i % GRID_COLS;
    return createCharacter(
        char,
        START_X + col * SPACING,
        START_Y + row * SPACING
    );
});

// Cycle through animations on spacebar
onKeyPress("space", () => {
    const currentAnim = ANIMATIONS[currentAnimIndex];
    debug.log(`All characters: ${currentAnim}ing`);
    
    characters.forEach(char => {
        char[currentAnim]();
    });
    
    currentAnimIndex = (currentAnimIndex + 1) % ANIMATIONS.length;
});

debug.log("Press SPACE to cycle through animations");
debug.log("Animation order: " + ANIMATIONS.join(" -> "));