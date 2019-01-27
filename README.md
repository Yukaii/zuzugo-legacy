# Zuzugo 租租狗

租租狗是幫助你租房的最佳服務，它可以透過：

- 捷運站距離時間(**獨家**)
- 通勤時間(**獨家**)
- 各種生活機能方便程度(**獨家**)
- 各種已知的租屋篩選條件，坪數價格房間數開伙...

等條件，自動幫你篩選出適合的物件，並透過 Email、各種聊天服務主動通知你！讓你以最快的速度簽下理想的房屋

---

好了這文案越寫越唬了 XD

總之看房簽約那些事情還是要你自己搞定 😏，爬蟲通知系統就是工程師的浪漫

未來要轉做租屋媒合平台也是 OK 的，我最愛平台這兩個字了 ❤️

## Current Status

不定期開發中，迷你 deadline 在三月

## Setup

```bash
npm install
npm i -g lerna
lerna boostrap
```

## Development build

```bash
lerna run build:watch --stream
npm run test -- --watch
```
