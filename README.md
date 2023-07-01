english → https://github.com/ikakonbu/Misskey-TL-Filter/blob/main/README-en.md

# Misskey-TL-Filter
Misskeyで、フィルタリングを設定して特定の投稿を非表示にできるchrome拡張機能  

　  

   
# 対応環境
WindowsおよびMacのChrome,Miscrost EdgeなどのChromium系ブラウザ, Firefox  
デフォルトUI および　デッキUI で動作を確認しています。  
Misskey.ioのみが動作確認済みサーバーですが、下にある  **他サーバーへの対応**  を行うことで他のmisskeyサーバーでも利用可能です。
また、Firefoxでは事前にブラウザの設定が必要になります。下にある **Firefoxの方へ**  を見てください

　  

# 機能説明
機能はシンプルで,https://Misskey.io(設定した場合は他のサーバーでも) を開くと拡張機能が有効になります。  
開いている状態で拡張機能アイコンをクリックすると、各種フィルタの設定画面が開きます。

![image](https://github.com/ikakonbu/Misskey-TL-Filter/assets/82440954/f5e12963-9ad5-41a1-99b2-a69caca5d44e)
![image](https://github.com/ikakonbu/Misskey-TL-Filter/assets/82440954/844bd595-ebf0-462c-97b6-293e0fabbed0)


上段ではTLごとにかけるフィルタリングを設定できます。ホームタイムライン、ローカルタイムライン、リスト　の３つのライムラインに個別でフィルタを利用できます

* **RNを非表示**　　　　　リノートを全て非表示にします。
* **引用を非表示**　　　　引用ノートを全て非表示にします
* **NSFWを非表示**　　　閲覧注意の設定がされた画像、動画が添付されているノートをすべて非表示にします。
* **CWを非表示**　　　　`もっと見る` で本文が隠されているノートを全て非表示にします。
* **返信を非表示**　　　　返信ノートを非表示にします。(ホーム,リストでのみ設定可能)
* **botを非表示**　　　　bot設定されたアカウントからの投稿を非表示にします(ローカル、ソーシャルでのみ設定可能)
* **ローカルを非表示**　　自分と同じサーバーからの投稿を非表示にします(グローバルのみ設定可能)
  
下段では全てのタイムラインで適用されるオプションです。
* **チャンネルノートを非表示**　　　  チャンネル投稿に設定されているノートを全て非表示にします。
* **他のサーバーからのノートを非表示**　　misskey.io以外のサーバーから投稿されたノートを全て非表示にします
* **misskey.ioからのノートを非表示**　　misskey.io以外のサーバーから投稿されたノートだけを表示します
* **横長絵文字を見やすくする**　絵文字選択画面で不等幅の絵文字を正方形でなく長方形で表示し、絵文字の入力をやりやすくします
* **ユーザーミュート** 右の入力欄に設定されたユーザーIDからのノートを全て非表示にします。
* **ユーザーRenoteミュート**  右の入力欄に設定されたユーザーIDのRenoteを全て非表示にします。
  
>例: 村上さん(@AureoleArk)としゅいろさん(@syuilo) を非表示にしたい場合は, ` AureoleArk,syuilo `と入力すると非表示になります。
>他のサーバーのユーザー(@ikakonbu@nijimiss.moe)の場合は、` ikakonbu@nijimiss.moe ` のように入れてください  

　  

# 導入方法
普通に利用するだけの方はストアよりダウンロード可能です。  
* Chrome Webストア(chrome, edge, opera向け)  
https://chrome.google.com/webstore/detail/misskey-tl-filter/gligjcdfcokjfdkpmjgncgdoefnpkpej  
* Firefox Add-on(Firefox向け)  
https://addons.mozilla.org/ja/firefox/addon/misskey-tl-filter/


開発、デバッグ目的、もしくは開発段階のものを早期で利用したい場合はここにあるソースコードから手動でのインストールが可能です。
zipをダウンロードして、各ブラウザの手動インストール方法に従ってインストールしてください。

　  

# 今後の機能追加予定
* 現時点ではありません。　改善して欲しい機能があれば私に連絡ください。
 
　  
# Firefoxの方へ
firefoxでは、他のブラウザで対応している機能が標準でオフになっており、それが原因でうまく動作しません。  
そのため、以下の手順を踏んで設定を変更する必要があります。
* ` about:config `とURL欄に入力してenter
* 注意喚起の画面が出てきますが、無視して進む
* 出てきた画面の検索バーに、`layout.css.has-selector.enabled` と入力して、この名前の設定を出す。
* 出てきた設定をダブルクリックして、値を`**True**`にする。
* Firefoxを再起動し、misskey.ioにアクセス。
(場合によっては2,3回ほどページの再読み込みをしないとうまく動作をしてくれないことがあります)

　  

# 他サーバーへの対応
この拡張機能は初期設定ではMisskey.ioのみで動作する設定ですが、ユーザーが設定することで他のサイトでも利用できます。
* アカウントのありなしに関わらず、一度 https://Misskey.io へアクセスしてください。
* この状態で拡張機能のアイコンをクリックすると、設定画面が開きます。  
>(Chromeなら右上のパズルのピースアイコンをクリックすると、今入っている拡張機能の一覧が表示されるので、その中から探してください。
  また、右のピンマークをクリックすることで、ブラウザの上部に常時表示することも可能です。)  
![image](https://github.com/ikakonbu/Misskey-TL-Filter/assets/82440954/4ad28793-a2bf-4b70-961f-754ee53042ba)
* 設定画面をスクロールし、下にある「他のサーバーでも動かす」オプションに、動かしたいサーバーの名前を入れてください。
>設定例: ` misskey.art `  
>動かしたいサーバーが複数ある時, ` misskey.design,nijimiss.moe,misskey.04.si `

この状態でご自身のサーバーへアクセスすることで、拡張機能が有効になります。  
ただし、misskey.io以外での動作は保証していません。動かない可能性があります。  

　  

# 機能追加のリクエストやバグ報告について
もし何か機能追加やバグ報告について言いたいことがある場合は、私のmisskeyアカウントにDMしてくるか,githubにissue立てるなりしていただいて構いません  

　  

# 再配布、改変など
再配布、改変しての配布などについては特に制限は設けません、お好きにお使いださい。
可能であれば改変元としてここを記載してくれればいいくらいです。
また、当プログラムによって引き起こされた損害については一切保証しません。

