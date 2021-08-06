import React from "react";
import "./PianoKeys.css";
import useSound from 'use-sound';
import c3 from "../mp3notes/c3.mp3";
import c3sharp from "../mp3notes/c-3.mp3";
import d3 from "../mp3notes/d3.mp3";
import d3sharp from "../mp3notes/d-3.mp3";
import e3 from "../mp3notes/e3.mp3";
import f3 from "../mp3notes/f3.mp3";
import f3sharp from "../mp3notes/f-3.mp3";
import g3 from "../mp3notes/g3.mp3";
import g3sharp from "../mp3notes/g-3.mp3";
import a3 from "../mp3notes/a3.mp3";
import a3sharp from "../mp3notes/a-3.mp3";
import b3 from "../mp3notes/b3.mp3";
import c4 from "../mp3notes/c4.mp3";
import c4sharp from "../mp3notes/c-4.mp3";
import d4 from "../mp3notes/d4.mp3";
import d4sharp from "../mp3notes/d-4.mp3";
import e4 from "../mp3notes/e4.mp3";
import f4 from "../mp3notes/f4.mp3";
import f4sharp from "../mp3notes/f-4.mp3";
import g4 from "../mp3notes/g4.mp3";
import g4sharp from "../mp3notes/g-4.mp3";
import a4 from "../mp3notes/a4.mp3";
import a4sharp from "../mp3notes/a-4.mp3";
import b4 from "../mp3notes/b4.mp3";
import c5 from "../mp3notes/c5.mp3";
import c5sharp from "../mp3notes/c-5.mp3";
import d5 from "../mp3notes/d5.mp3";
import d5sharp from "../mp3notes/d-5.mp3";
import e5 from "../mp3notes/e5.mp3";
import f5 from "../mp3notes/f5.mp3";
import f5sharp from "../mp3notes/f-5.mp3";
import g5 from "../mp3notes/g5.mp3";
import g5sharp from "../mp3notes/g-5.mp3";
import a5 from "../mp3notes/a5.mp3";
import a5sharp from "../mp3notes/a-5.mp3";
import b5 from "../mp3notes/b5.mp3";
import c6 from "../mp3notes/c6.mp3";

const PianoKeys = () => {
    const [playc3] = useSound(c3);
    const [playc3sharp] = useSound(c3sharp);
    const [playd3] = useSound(d3);
    const [playd3sharp] = useSound(d3sharp);
    const [playe3] = useSound(e3);
    const [playf3] = useSound(f3);
    const [playf3sharp] = useSound(f3sharp);
    const [playg3] = useSound(g3);
    const [playg3sharp] = useSound(g3sharp);
    const [playa3] = useSound(a3);
    const [playa3sharp] = useSound(a3sharp);
    const [playb3] = useSound(b3);
    const [playc4] = useSound(c4);
    const [playc4sharp] = useSound(c4sharp);
    const [playd4] = useSound(d4);
    const [playd4sharp] = useSound(d4sharp);
    const [playe4] = useSound(e4);
    const [playf4] = useSound(f4);
    const [playf4sharp] = useSound(f4sharp);
    const [playg4] = useSound(g4);
    const [playg4sharp] = useSound(g4sharp);
    const [playa4] = useSound(a4);
    const [playa4sharp] = useSound(a4sharp);
    const [playb4] = useSound(b4);
    const [playc5] = useSound(c5);
    const [playc5sharp] = useSound(c5sharp);
    const [playd5] = useSound(d5);
    const [playd5sharp] = useSound(d5sharp);
    const [playe5] = useSound(e5);
    const [playf5] = useSound(f5);
    const [playf5sharp] = useSound(f5sharp);
    const [playg5] = useSound(g5);
    const [playg5sharp] = useSound(g5sharp);
    const [playa5] = useSound(a5);
    const [playa5sharp] = useSound(a5sharp);
    const [playb5] = useSound(b5);
    const [playc6] = useSound(c6);

    return (
      <div className="container">
        <div className="container">
          <ul className="set">
            <li
              data-key="81"
              className="white key c3"
              onClick={playc3}
            >
            </li>
            <li
              data-key="87"
              onClick={playc3sharp}
              className="black key c-3"
            >
            </li>
            <li
              data-key="69"
              onClick={playd3}
              className="white key d3"
            ></li>
            <li
              data-key="82"
              onClick={playd3sharp}
              className="black key d-3"
            ></li>
            <li
              data-key="84"
              onClick={playe3}
              className="white key e3"
            ></li>
            <li
              data-key="89"
              onClick={playf3}
              className="white key f3"
            ></li>
            <li
              data-key="85"
              onClick={playf3sharp}
              className="black key f-3"
            ></li>
            <li
              data-key="73"
              onClick={playg3}
              className="white key g3"
            ></li>
            <li
              data-key="79"
              onClick={playg3sharp}
              className="black key g-3"
            ></li>
            <li
              data-key="80"
              onClick={playa3}
              className="white key a3"
            ></li>
            <li
              data-key="219"
              onClick={playa3sharp}
              className="black key a-3"
            ></li>
            <li
              data-key="221"
              onClick={playb3}
              className="white key b3"
            ></li>
            <li
              data-key="65"
              onClick={playc4}
              className="white key c4"
            ></li>
            <li
              data-key="83"
              onClick={playc4sharp}
              className="black key c-4"
            ></li>
            <li
              data-key="70"
              onClick={playd4}
              className="white key d4"
            ></li>
            <li
              data-key="71"
              onClick={playd4sharp}
              className="black key d-4"
            ></li>
            <li
              data-key="72"
              onClick={playe4}
              className="white key e4"
            ></li>
            <li
              data-key="74"
              onClick={playf4}
              className="white key f4"
            ></li>
            <li
              data-key="75"
              onClick={playf4sharp}
              className="black key f-4"
            ></li>
            <li
              data-key="76"
              onClick={playg4}
              className="white key g4"
            ></li>
            <li
              data-key="186"
              onClick={playg4sharp}
              className="black key g-4"
            ></li>
            <li
              data-key="222"
              onClick={playa4}
              className="white key a4"
            ></li>
            <li
              data-key="90"
              onClick={playa4sharp}
              className="black key a-4"
            ></li>
            <li
              data-key="88"
              onClick={playb4}
              className="white key b4"
            ></li>
            <li
              data-key="67"
              onClick={playc5}
              className="white key c5"
            ></li>
            <li
              data-key="86"
              onClick={playc5sharp}
              className="black key c-5"
            ></li>
            <li
              data-key="66"
              onClick={playd5}
              className="white key d5"
            ></li>
            <li
              data-key="78"
              onClick={playd5sharp}
              className="black key d-5"
            ></li>
            <li
              data-key="77"
              onClick={playe5}
              className="white key e5"
            ></li>
            <li
              data-key="188"
              onClick={playf5}
              className="white key f5"
            ></li>
            <li
              data-key="190"
              onClick={playf5sharp}
              className="black key f-5"
            ></li>
            <li
              data-key="17"
              onClick={playg5}
              className="white key g5"
            ></li>
            <li
              data-key="18"
              onClick={playg5sharp}
              className="black key g-5"
            ></li>
            <li
              data-key="37"
              onClick={playa5}
              className="white key a5"
            ></li>
            <li
              data-key="38"
              onClick={playa5sharp}
              className="black key a-5"
            ></li>
            <li
              data-key="39"
              onClick={playb5}
              className="white key b5"
            ></li>
            <li
              data-key="40"
              onClick={playc6}
              className="white key c6"
            ></li>
          </ul>
        </div>
      </div>
    );
  }


export default PianoKeys;
