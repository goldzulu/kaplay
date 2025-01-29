// @ts-check
// Test audio and controlling it

kaplay({
    // This makes it so the audio doesn't pause when the tab is changed
    backgroundAudio: true,
    background: "5ba675",
});

// Loads the bell sound
loadSound("bell", "/examples/sounds/bell.mp3");


// Adjust global volume
volume(0.5);

// We use the play() function to play audio
onKeyPress("enter", () => {
    play("bell", {
        volume: 1,
        speed: 1,
    });
});

// For our mobile friends
onTouchStart(() => {
    play("bell", {
        volume: 1,
        speed: 1,
    });
});


