<h1 align="center">TEMPLATE CLIENT 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> 이것은 템플릿 스토리북입니다

## Author

👤 **Anderson**

- Website: https://chltjdrhd777.github.io/
- Github: [@chltjdrhd777@naver.com](https://github.com/chltjdrhd777@naver.com)
- Give a ⭐️ if this project helped you!

---

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<br/>
(_이러면 좋겠다_)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">사용된(혹은 사용할) 스텍리스트</h3>

- [ReduxToolkit](https://redux-toolkit.js.org/)
- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [styled-component](https://styled-components.com/)
- [Bootstrap](https://getbootstrap.com)

---

# 스토리북을 연습해본 계기

<div align="left">
<br/>

사실 별 생각이 없었는데, 매 프로젝트마다 컴포넌트를 새로만들고 구성을 새로 만들고 하는 과정이 너무너무 귀찮았다.

게다가, 만약 디자인이나 기능적으로 수정해야하는 상황이 왔을때 그냥 아무생각없이 하드코딩을 한 프로젝트에서 또 그걸 들고와서 수정하고 디자인바꾸고 와아아악!!!!

.....

그래서, 디폴트한 디자인 세팅을 꾸며놓는 나만의 저장고를 만들어서 Component base development를 해보자 마음먹었고,

거기에 가장 어울리는 녀석이 storybook이라는 생각이 들어서 도입하기로 하였다.

원래 emotionCSS를 사용하려고 하였는데,

요 근래 찾아보니까 styled component가 v5 가 되면서 emotionCSS 보다 속도가 빨라졌다지 않은가!!(두둥)

거기에 더불어서 평소에도 styled component의 css 메소드가 가지고 있는 슈퍼기능, "styled component의 template literal 안에다가 커스텀한 스타일링 단위를 주입할 수 있다" 는 장점때문에 Emotion과 손절했다

</div>

> emotion은 inline 스타일 개발을 할거면 괜찮은데, 그 외에는 확장성이나 인지도가 styled component에 비하면 밀리는 감이 있다. styled component처럼 css 메소드가 스타일 스트링을 리턴하는게아니라 새로운 클래스명을 리턴하고 있어가지고 적절하지도 않고

---

# 기본 컨셉

개인적으로 조건부 스타일링은 어디까지나 전통적인 css 방법을 따르는 것이 가장 빠르다고 생각하는 주의이다.

무슨의미냐면, class name을 이용한 조건부 스타일링이 가장 깔끔하다고 생각한다는 것이다.

아니, class 네임 중복 피하려고 styled component 쓰는 거 아닌교? 이게 무슨짓이야? 할수 있곘는데,

순수하게 css 파일로 다 작성하게 된다면 파일이 늘어나면 늘어날수록 점점 중복이 많아진다. 그것을 어떻게든 피하고자...
가장 최상단에 있는 요소를 styled component가 제공하는 랜덤 클래스 이름으로 제한하여 그 스코프를 한정하는걸로 좀 무마하되,

조건부 스타일링을 위한 내용은 기존 css 관습에 따른 공통 명명 방식 **ex) btn btn-purple** 와 같이 한 컴포넌트 내에서 클래스명에 따라 어떤 디자인이 들어가게 될 지를 정해주는 것이다.

이렇게 하면 일단 타입스크립트를 위해 굳이 custom props의 타입정의를 위한 인터페이스가 늘어날 필요도 없고,

한 styled file 내에서 모든 미디어 쿼리를 조절하는 방식에 해당 컴포넌트에 접근하기 위한 통일성에도 도움이 된다.

> 무슨말이냐면, media query ... {
> .btn1 {}
> .btn2 {}
> } 요로코롬이 가능하다는 뜻이다. 만약 변수 형태로 ${} 안에 가져오면 상당히 통일성이 깨져서 복잡한 경험이 있다.

---

## Contact

My Email - [@google](chltjdrhd777@gmail.com) - chltjdrhd777@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
- [Malven's Grid Cheatsheet](https://grid.malven.co/)
- [Img Shields](https://shields.io)
- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
