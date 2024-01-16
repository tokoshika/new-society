import Image from "next/image";
import Liu from "@/public/image/liu.jpg";
import Ba from "@/public/image/ba.jpg";
import Jiu from "@/public/image/jiu.jpg";
export default function () {
  return (
    <div className="main-container">
      <div className="number-container">
        <div className="test">
          <h1>This is number.page</h1>
          <p>中国で好まれる数字</p>
          <p>発音が良い意味の漢字と同じ、または似ている</p>
          <div>
            <h2>六 liu</h2>
            <Image
              //   className="image"
              width="50%"
              height="50%"
              src={Liu}
              alt="ハルピン"
            />
          </div>

          <ul>
            <li>「流」（商売繁盛や幸運）</li>
            <li>「溜」（上手いね、すごいね）</li>
            <p>六六大順（とてもうまくいっている様子）</p>
            <p>666（ナイスプレー!）</p>
          </ul>
          <div>
            <h2>八 ba</h2>
            <Image
              //   className="image"
              width="50%"
              height="50%"
              src={Ba}
              alt="ハルピン"
            />
          </div>
          <ul>
            <li>「发」fa（栄える、お金持ちになる）</li>
            <p>发財（裕福になる）</p>
            <p>新年快樂 恭喜發財（新年の挨拶）</p>
          </ul>
          <h2>九 jiu</h2>
          <Image
            //   className="image"
            width="50%"
            height="50%"
            src={Jiu}
            alt="ハルピン"
          />
          <ul>
            <li>「久」jiu（長く続く、永遠に）</li>
            <p>9本 「いつまでも」</p>
            <p>99本 「末長く」「永遠の愛」</p>
            <p>999本 「永遠にずっと愛しています」</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
