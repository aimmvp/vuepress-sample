---
title : Button(v-btn)
---
# Buttons
 - [Vuetify > Components > Buttons](https://vuetifyjs.com/ko/components/buttons)

The ```v-btn``` component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.

##  API
제공되는 Props, Slots, Events 와 함수들을 이용하여 원하는 컴포넌트를 직접 구현해 보세요.

## 예제
### 플랫(Flat)
 - 평평한 플랫 버튼은 박스 그림자와 배경이 없습니다. 마우스 포인터를 버튼 컨테이너 위에 올려야만 (Only on hover) 버튼 형태가 보입니다.
```javascript
<v-btn text>Normal</v-btn>
<v-btn text color="primary">Primary</v-btn>
<v-btn text color="error">Error</v-btn>
<v-btn text disabled>Disabled</v-btn>
```

![플랫 Sample](/images/category1/button_1.png)

### Raised
 - Raised 버튼은 클릭할때 박스의 그림자가 커집니다. 버튼의 __기본 스타일__ 입니다.

```javascript
<v-btn >Normal</v-btn>
<v-btn color="primary">Primary</v-btn>
<v-btn color="error">Error</v-btn>
<v-btn disabled>Disabled</v-btn>
```
![Raised Sample](/images/category1/button_2.png)


