
# アプリケーション名

ITyping2.0

## アプリケーション概要

IT用語が主に出題されるタイピングゲーム

## URL

https://ityping2-0.onrender.com

## 利用方法

#### ゲーム内容

・ startボタンを押すとカウントダウンが始まります。

・ カウントダウン終了後、ランダムで出題された単語を10個タイピングします。

・ ゲーム終了後、かかった時間(time)、打ち間違えた回数(miss)、一分当たりの入力単語数(WPM)、正確さ(accuracy)、得点(score)が表示されます。

・ result画面でsaveボタンを押すことで、入力フォームが表示されます。

・ 入力フォームには、nickname(半角英字)の入力とcountry(国)の選択をした状態でsubmitボタンを押すと、ranksテーブルに(nickname, country_id, score)が保存され、トップページに遷移します。

・ menuボタンを押すと、トップページに戻ります。

### detailについて

・ トップページにあるdetail(詳細)ボタンを押すと、このゲームの説明文が書いてあるページが表示されます。

・ menuボタンを押すと、トップページに戻ります。

### rankingについて

・ トップページにあるrankingボタンを押すと、ranking一覧が表示されます。

・ rankingページには、scoreの値が高い順に上から並んでいます。

・ プレイヤーの情報は左から順に、nickname,score,countryが表示されています。

## このゲームを開発したきっかけ

このゲームは、JavaScriptの理解を深めたいという思いから作成されました。

使用フレームワークはRuby on Railsですが、ランキング機能の実装まではフレームワークを使用していませんでした。

理由は三つあります。

一つ目は、テーブルの必要性が無かったからです。

ランキングの表示に必要な、プレイヤーの情報を格納するためにはテーブルが必要でした。ですが、出題単語の格納に関しては配列で十分だったからです。

二つ目は、ファイルの数を少なくしたかったからです。

ファイルの数が増えれば増えるほど、あとから見返したり手直しをする際に見るべき場所が増え、手間が生じるのを避けたかったからです。

三つめは、レンタルサーバーの料金が安くなるからです。

デプロイはrenderでしましたが、renderに限らずstatic site(静的webサイト)の場合は料金が安くなる傾向があるからです。また、このゲーム自体、重たい通信を必要としません。

## 実装した機能等

・ class "hidden" の付与による疑似的な画面遷移

・ 入力前と後の文字を配列に入れ、つなげ合わせることによって入力後の文字の色を変える処理

・ 架空の入力フォームを作り、localStorageを使用して入力させることでの情報の保存

・ 効果音の付与

## 実装予定の機能

・ 難易度の選択

## db設計

### ranks

| Column           | Type       | Options            |
| ---------------- | ---------- | ------------------ |
| nickname         | string     | null: false        |
| score            | integer    | null: false        |
| country_id       | integer    | null: false        |

※テーブルが一つでアソシエーションがないため、ER図は省略します。

## 画面遷移図

### トップ画面

[![Image from Gyazo](https://i.gyazo.com/ba92c5b0316abe6706c7c33c2489b7cf.png)](https://gyazo.com/ba92c5b0316abe6706c7c33c2489b7cf)

### 説明画面

[![Image from Gyazo](https://i.gyazo.com/baa95a9fbf33512a361ef4348d1a4405.png)](https://gyazo.com/baa95a9fbf33512a361ef4348d1a4405)

### ゲーム画面

[![42377894e5d345a3d8698556da3020e7](https://github.com/komachihashimoto/ITyping2.0/assets/146046934/e9deff4d-28fc-4b7d-9c47-b72b1c4cc891)

### リザルト画面

[![Image from Gyazo](https://i.gyazo.com/45601c4aaf581a100f5f1151a1d440af.png)](https://gyazo.com/45601c4aaf581a100f5f1151a1d440af)

### ランキング登録画面

[![Image from Gyazo](https://i.gyazo.com/81b2453af8fe1642fc35743421854f11.png)](https://gyazo.com/81b2453af8fe1642fc35743421854f11)

### ランキング表示画面

[![Image from Gyazo](https://i.gyazo.com/98ec5552086d6162f10a84ab573e17dd.png)](https://gyazo.com/98ec5552086d6162f10a84ab573e17dd)

## 使用言語

・ HTML

・ CSS

・ JavaScript

・ Ruby

### フレームワーク

・ Ruby on Rails

## 工夫した点

・ プレイしていて、きつく感じない程度の優しい効果音の選定

・ 目に優しい背景色の選定

・ 可愛らしさを表現するための背景デザインやフォントの選定

・ 明確でわかりやすいボタンデザイン

## 改善点

改善するべき点は、画面にもっと動きをつけることです。

anime.jsを使用して簡単に画面を動かせるそうなので、anime.jsについて勉強します。

## 制作時間

約1週間
