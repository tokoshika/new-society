"use client";
import { useState } from "react";
import Button from "../components/Button";
export default function Lang() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="main-container">
      <div className="left-container">
        <h1>
          これだけあれば生きていける
          <br />
          中国語10選
        </h1>
        <hr />
        <h2>こんにちわ.　你好</h2>
        <h2>さようなら.　我走了</h2>
        <h2>おなかすいた.　肚子餓了</h2>
        <h2>ごめんなさい.　対不起</h2>
        <h2>ありがとう.　謝謝</h2>
        <h2>いくらですか.　多少銭</h2>
        <h2>好き.　喜欢</h2>
        <h2>いらない.　不要</h2>
        <h2>分からない.　不懂</h2>
      </div>
      <div className="number-container">
        <div className="test">
          <h1>This is Internet slang page</h1>
          <p>中国語のネットスラング</p>

          <div>
            <Button props="网红" content="⇒ 映える" />
          </div>

          <div>
            <Button props="小鲜肉" content="⇒ イケメン！" />
          </div>
          <div>
            <Button props="打工人" content="⇒ 社畜" />
          </div>
          <div>
            <Button props="比比赖赖" content="⇒ ディスる" />
          </div>
          <div>
            <Button props="520" content="⇒ 愛しています" />
          </div>
          <div>
            <Button props="555" content="⇒ (T_T)" />
          </div>
          <div>
            <Button props="333" content="⇒ 逃げろ！" />
          </div>
        </div>
      </div>
    </div>
  );
}
