// oop third piller - abstraction

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log('Play music.....');
//     };
//     pause(): void {
//         console.log("Music pause");
//     }
//     stop(): void {
//         console.log("Stop music");
//     }
// }

// const music = new MusicPlayer();
// music.play();

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
};

class MyMusicPlayer extends MediaPlayer {
    play(): void {
        console.log('Play music.....');
    };
    pause(): void {
        console.log("Music pause");
    }
    stop(): void {
        console.log("Stop music");
    }
}

const myPlayer1 = new MyMusicPlayer();

myPlayer1.play();

