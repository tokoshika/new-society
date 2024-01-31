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
        <h2>(1)たすけてください。</h2>
        <Button props="帮帮我" content="バンバンウォ" />
        <h2>(2)じゃあね。</h2>
        <Button props="我走了" content="ウォ・ゾーラ" />
        <h2>(3)おなかすいた。</h2>
        <Button props="肚子餓了" content="ドゥーズ・ウアラ" />
        <h2>(4)これ。</h2>
        <Button props="这个" content="チェガ" />
        <h2>(5)好き.</h2>
        <Button props="喜欢" content="シーホワン" />
        <h2>(6)いくらですか。</h2>
        <Button props="多少銭" content="ドウシャオ・チェン" />
        <h2>(7)いる。いらない。</h2>
        <Button props="要 / 不要" content="ヤオ / ブヤオ" />
        <h2>(8)わかる。わからない。</h2>
        <Button props="懂 / 不懂" content="ドン / ブドン" />
        <h2>(9)良い。良くない。</h2>
        <Button props="好 / 不好" content="ハオ / ブハオ" />
        <h2>(10)やっても良いですか？</h2>
        <Button props="可以吗？" content="クーイーマ？" />
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
