<<<<<<< HEAD
# foodHub-backend
Restful APIs for Food Delivery application developed using Nodejs &amp; Express

## Getting started
To get the Node server running locally:

* Clone this repo
* npm install to install all required dependencies
* replace the environment variables in nodemon.json
* npm start to start the local server

By default the local server will start on port 3002
=======
# web-programming-final-project
[109-1] Web Programming Final
Group 73 餐廳訂位系統-Foodhub
組員：柯駿驊 、陳法諭、黃士賢

Deploy 連結：
https://wp-final-0121-2.herokuapp.com/

Demo 影片連結：
https://www.youtube.com/watch?v=zCSmShd0ZME&feature=youtu.be

描述這個服務在做什麼：
這個服務提供顧客及店家統一的訂位系統，有以下功能：

•	顧客
1.	一般顧客註冊及登入，儲存帳戶在資料庫裡
2.	可藉由搜尋欄尋找指定範圍或顧客周遭的所有經過註冊的店家
3.	餐點訂購、預約用餐人數與時段、取得預約明細
4.	可以即時知道店家是否同意預定，並事先決定菜色減少等待時間

•	店家
1.	店家註冊及登入，儲存帳戶在資料庫裡
2.	店家專屬介面可以上傳/更新商品的資訊，包括價格、圖片、介紹等
3.	顧客成功完成預定後店家可以選擇是否接受預訂

使用/操作方式：

•	顧客
先進入register註冊一個帳號，接著會要求使用方才註冊的帳號密碼進行登入。進入後會到主畫面，下方會有一個搜尋條，打入想要尋找餐廳的地點（例如：Taipei, Taichung），便會出現在該地點登錄於本系統中的餐廳，點擊每個餐廳下方的「order online」按鈕，便會進入該餐廳的點餐畫面，並列出該餐廳登錄於系統中的餐點，點擊「add to cart」可以將該餐點加入購物車中，點擊右上的「cart」按鈕，便可進入購物車到畫面。
在這裡可以管理所有想要購買的商品，包括數量、刪除等，總金額則會自動加總後顯示於右邊的視窗。接著按下「proceed to checkout」會進入填寫定位資訊的畫面，包括：電話號碼、訂位人數、訂位時間。
接著按下PLACE RESERVATION便算完成預約，系統會把使用者帶到「Order」的畫面，這裡會顯示所有曾經的預約。使用者完成預約後，系統會告知店家（此部分於下一段中敘述），如果店家尚未按下確認，則使用者仍有取消預約的能力，但一旦店家按下確認，交易便會成立，這時使用者將無法取消。
在上方的導引列中，還有一個「Map Mode」的按鈕，按下後會出現跟首頁一樣的搜尋條，以及由google map api顯示出的地圖，如果使用者在首頁或這裡的搜尋條打入想要搜尋的地點，地圖上便會顯示出該地點附近註冊過的餐廳，引導使用者前往該地點。

•	店家
店家的註冊方式與顧客不同，需要輸入店家名稱、店家位址、形象照片等等，但和顧客一樣，店家也會有一份用來登入的帳號密碼，透過跟顧客一樣的方式進行登入，進入後店家會看到自己店面的相關資訊，下方會有一個「add item」按鈕，用來添加新的商品，

專案亮點：
1.	現今相關軟體大多著重於點餐後外送，至於用來訂位的軟體則無法事先下食物訂單，因此本系統結合二者的特性，針對想要內用卻又想節省時間的使用者，提供一個與店家互動的平台，使顧客可以事先訂位並且下食物訂單，而店家可以依照顧客預定的時間事先開始準備，進而減少雙方等待的時間。
2.	訂位過程是由店家按下確認後才生效，因此不會像傳統訂位方式要直接打電話過去，對於人力短缺的小型店面而言，可以自行決定回覆的時間，減少時間浪費。
3.	本系統的購物車並不是專屬於特定店面，換言之使用者可以一次對多間店面下訂單，而系統通知會傳送到各間餐廳的帳號，不會像現今大部分的軟體一樣需要。
4.	一般人平常使用google map尋找餐廳若要直接閱覽菜單通常只能從評論區，也就是其他顧客的留言中獲得，但是我們的專案使店家可以自己上傳菜色，讓使用者能獲得更官方的資訊。

Github link：
由於前端index.html裡面有GOOGLE API KEY，故不公開

其他說明：
用 chrome 看效果最佳

使用與參考之框架/模組/原始碼：
•	前端：React、react-router-dom、react-redux 、material-ui
•	後端：cors、express、babel、mongoose、dotenv、websocket、nodemon
•	資料庫：MongoDB Atlas

專題製作心得:

柯駿驊:
這次的期末專題我負責的是前端與後端的連接，最辛苦的是如何從前端把資料傳到redux，再從redux將資料送到後端並儲存至資料庫，過程中常常有一些簡單的功能，但由於牽涉到了眾多model間的資料傳遞，
debug了很久，但最後做出來的成品還是讓我非常開心。

陳法諭: 
這次的期末作業創下了許多第一次，第一次與他人共同協作一個專案，第一次創作大型專案等等，都是非常寶貴的經驗，但同時也是非常辛苦的經驗。
由於很多功能是先想好了之後實作時卻發現牽扯到非常多的東西，需要大量的學習以及測試，導致明明看似單純的功能卻弄了很久，對於網頁的功能設計也有近一步的認知，著實受益良多。
以我個人負責的部分而言，google api的實作是非常有趣的題目，但能實現強大功能之餘也有大量技術需求，光是搞懂網路上的範例就花了不少時間，還好最後如期完成。

黃士賢:
在寫期末報告的過程中，才發現自己有許多不足的地方。然而正因為如此，我才有機會去學習更多新的知識，
不論是redux，或是其他deploy的技巧，這些都是平時上課比較少用到的地方。在分組的過程，也學習到程式碼協作的概念，必竟許多大的專案不太可能只有一個人就能完成，
因此在寫code時的易讀性與整體的組織加構就十分重要。最後也要謝謝同組的組員、老師及助教們，讓我在這學期中學到充實的網路服務知識。

使用之第三方套件、框架、程式碼：

1.	nodemailer 寄信程式
2.	網路上開源的food delivery app的code 
https://github.com/abhi0402/foodHub-frontend-client
https://github.com/abhi0402/foodHub-backend-server
3.	icon 及 favicon.ico 由網路上抓取 https://www.flaticon.com/
4.	material-ui 的官方 table 模板
5.	google-api 裡的 place api、geocoding api、javascript map api

專題製作貢獻：

•	柯駿驊：負責前後端的連接，撰寫後端model及RESTful api，後端model及RESTful api，完成顧客與店家間訂單的資訊流通。

•	陳法諭：製作Map Mode，將事先登錄的餐廳位置已標記的形式標註在地圖上，並且與一般軟體不同，只會顯示搜尋地區周遭的資訊，提供顧客尋找餐廳的依據。

•	黃士賢：嘗試完成編輯店家資料功能，並協助deploy。


>>>>>>> bcd77a9b6308f11e47f7669f282643c40d743a88
