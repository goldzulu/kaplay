// @ts-check
// Test audio and controlling it

kaplay({
    // This makes it so the audio doesn't pause when the tab is changed
    backgroundAudio: true,
    background: "5ba675",
});

// Load all available sounds (only one uncommented for testing)
loadSound("applause", "/examples/sounds/applause.mp3"); 
// loadSound("ba-dum-tiss-with-laughter", "/examples/sounds/ba-dum-tiss-with-laughter.mp3");
// loadSound("back-to-work", "/examples/sounds/back-to-work.mp3");
// loadSound("bean_voice", "/examples/sounds/bean_voice.wav");
// loadSound("bell", "/examples/sounds/bell.mp3");
// loadSound("blip", "/examples/sounds/blip.mp3");
// loadSound("boo", "/examples/sounds/boo.mp3");
// loadSound("boring", "/examples/sounds/boring.mp3");
// loadSound("bug", "/examples/sounds/bug.mp3");
// loadSound("burp", "/examples/sounds/burp.mp3");
// loadSound("cheer-crowd", "/examples/sounds/cheer-crowd.mp3");
// loadSound("cheer", "/examples/sounds/cheer.wav");
// loadSound("collect-coin", "/examples/sounds/collect-coin.wav");
// loadSound("computer", "/examples/sounds/computer.mp3");
// loadSound("correct-ding", "/examples/sounds/correct-ding.mp3");
// loadSound("danger", "/examples/sounds/danger.mp3");
// loadSound("doh", "/examples/sounds/doh.mp3");
// loadSound("duck-song", "/examples/sounds/duck-song.mp3");
// loadSound("dune", "/examples/sounds/dune.mp3");
// loadSound("error", "/examples/sounds/error.mp3");
// loadSound("error", "/examples/sounds/error.wav");
// loadSound("explode", "/examples/sounds/explode.mp3");
// loadSound("explode", "/examples/sounds/explode.wav");
// loadSound("eye-of-the-tiger", "/examples/sounds/eye-of-the-tiger.mp3");
// loadSound("game-over", "/examples/sounds/game-over.wav");
// loadSound("gasp", "/examples/sounds/gasp.mp3");
// loadSound("guitar-pinch-harmonic", "/examples/sounds/guitar-pinch-harmonic.mp3");
// loadSound("hello", "/examples/sounds/hello.wav");
// loadSound("hit", "/examples/sounds/hit.mp3");
// loadSound("hm", "/examples/sounds/hm.mp3");
// loadSound("homer-scream", "/examples/sounds/homer-scream.mp3");
// loadSound("honk", "/examples/sounds/honk.mp3");
// loadSound("hosted", "/examples/sounds/hosted.wav");
// loadSound("humpday", "/examples/sounds/humpday.mp3");
// loadSound("kaboom2000", "/examples/sounds/kaboom2000.mp3");
// loadSound("knock", "/examples/sounds/knock.ogg");
// loadSound("mark_voice", "/examples/sounds/mark_voice.wav");
// loadSound("mystic", "/examples/sounds/mystic.mp3");
// loadSound("nani", "/examples/sounds/nani.mp3");
// loadSound("notice", "/examples/sounds/notice.mp3");
// loadSound("off", "/examples/sounds/off.mp3");
// loadSound("OtherworldlyFoe", "/examples/sounds/OtherworldlyFoe.mp3");
// loadSound("portal", "/examples/sounds/portal.mp3");
// loadSound("powerup", "/examples/sounds/powerup.mp3");
// loadSound("push-it", "/examples/sounds/push-it.mp3");
// loadSound("quack", "/examples/sounds/quack.wav");
// loadSound("rimshot", "/examples/sounds/rimshot.mp3");
// loadSound("robot", "/examples/sounds/robot.mp3");
// loadSound("sadtrombone", "/examples/sounds/sadtrombone.mp3");
// loadSound("sandiego", "/examples/sounds/sandiego.mp3");
// loadSound("score", "/examples/sounds/score.mp3");
// loadSound("shoot", "/examples/sounds/shoot.mp3");
// loadSound("signal", "/examples/sounds/signal.mp3");
// loadSound("slack-ping", "/examples/sounds/slack-ping.mp3");
// loadSound("snare-roll", "/examples/sounds/snare-roll.mp3");
// loadSound("spring", "/examples/sounds/spring.mp3");
// loadSound("squirrel", "/examples/sounds/squirrel.mp3");
// loadSound("tada", "/examples/sounds/tada.mp3");
// loadSound("theelevatorbossanova", "/examples/sounds/theelevatorbossanova.mp3");
// loadSound("victory", "/examples/sounds/victory.mp3");
// loadSound("weak", "/examples/sounds/weak.mp3");
// loadSound("wooosh", "/examples/sounds/wooosh.mp3");
// loadSound("wrong", "/examples/sounds/wrong.mp3");

// Adjust global volume
volume(0.5);

// We use the play() function to play audio
onKeyPress("enter", () => {
    play("applause", {  // Make sure this matches the uncommented sound above
        volume: 1,
        speed: 1,
    });
});

// For our mobile friends
onTouchStart(() => {
    play("applause", {  // Make sure this matches the uncommented sound above
        volume: 1,
        speed: 1,
    });
});


