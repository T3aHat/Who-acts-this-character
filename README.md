# CV誰?  
アニメ作品を見ていて"このキャラクターのCV誰?"となったとき，Wikipediaを開いてすぐキャスト情報にたどりつけます.  
**before**  
![before](https://github.com/T3aHat/Who-acts-this-character/blob/master/images/before.png)  
**after**  
![after.png](https://github.com/T3aHat/Who-acts-this-character/blob/master/images/after.png)_出典:[https://ja.wikipedia.org/wiki/Re:ステージ!]_
# Download & How to use  
[Download ZIP](https://github.com/T3aHat/Who-acts-this-character/archive/master.zip)  
* DLしたファイルを解凍`chrome://extensions`
* `パッケージ化されていない拡張機能を読み込む`から解凍したフォルダを選択
* chromeを再起動して`https://ja.wikipedia.org/wiki/~`にアクセス
  
# 適用されるレイアウト 
`<h2>`   
`<span class="mw-headline" id="登場人物">登場人物</span>`  
もしくは  
`<span class="mw-headline" id="登場キャラクター">登場キャラクター</span>`  
`</h2>`    
で声優名が表記され，かつ  

```
<dl>
  <dt>キャラクター名</dt>
  <dd>声 - 声優名</dd>
</dl>
```
`<h2>その他の項...`  
 
のような形で書かれていることを想定しています．  
  
正直，明確なWikipediaのページのテンプレートがないので，適切に表示されないことも多いと思います...  
(ex. https://ja.wikipedia.org/wiki/%E8%99%B9%E3%83%B6%E5%92%B2%E5%AD%A6%E5%9C%92%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB%E5%90%8C%E5%A5%BD%E4%BC%9A) 
  
詳細な判定法はソースコードを参照．  