/*
- TypeScript를 사용하는 이유
  자바스크릡트는 매우 유연한 언어임
  타입 안정성 때문에 
  => 코드에 버그가 줄어들게 됨, 런타임 에러도 줄어듬
  => 타입 안정성 덕분에 생산성이 늘어나게 됨
*/

// 타입의 안정성이 필요한 이유
function divide(a, b) {
  return a / b;
}

// 일반적으로 아래와 같이 입력값이 숫자일 때만 실행되여야 함
console.log(divide(2, 3)); // 0.66666666666
// 그러나 자바스크립트는 이 함수가 올바르게 사용하도록 강제하지 않음
console.log(divide("xxxxxxxx")); // NaN
// 저버스크립트가 코드 실행을 막지 않고 실행이 됨,
//  => 입력값이 두 개인데 하나밖에 안보냈는데 실행이 됨
// 다른 언어는 이러한 안정성을 이미 보장하고 있음

/*
런타임 에러
*/
const nico = { name: "nico" };
nico.hello(); // TypeError: nico.hello is not a function
// 에러를 보내주지만 이런 에러는 코드를 실행하기 전에 최소화시킬 수 있는 에러 중 하나임
// 이 함수를 미리 해석하여 hello()라는 것이 없다는 것을 알려줄수도 있음
// => 실행조차 안될수 있게 할수 잇음


