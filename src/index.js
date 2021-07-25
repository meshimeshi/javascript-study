/**
 *  const let 変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 ="let変数を上書き";
// console.log(val2);

// //letは再宣言不可能

// let val2 = "let変数を再宣言";

//const val3 = "const変数";
//console.log(val3);

//const変数は上書き不可 再宣言不可
//val3 = "const変数を上書き";
//const val3 = "const変数を再宣言";

// const val4 ={
//  name:"じゃけぇ",
// age: 28,
// };
// //constで定義されていてもオブジェクトのプロパティは変更できる
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// // //constで定義されていても配列のプロパティは変更できる
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "じゃぇ";
//  const age = 28;

//  const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
//  console.log(message1);
//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

// /**
//  * アロー関数
//  */
// //従来の関数
// function func1(str) {
//   return str;
// }
// const func2 = function (str) {
//   return str;
// };
// //アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func1("func1です"));
// console.log(func2("func2です"));
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

/**
 *  分割代入
 */

//  const myProfile = {
//    name: "じゃけぇ",
//    age: 28,
//  };

//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
//  console.log(message1);

//  const {name,age} = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`;
//  console.log(message2);

//  const myProfile =['じゃけぇ',28];

//  const message3 = `名前は${myProfile[0]}です。...年齢は${myProfile[1]}歳です。`;
//  console.log(message3);

//  const [name,age]= myProfile;
//  const message4 = `名前は${name}です。iyug年齢は${age}歳です。`;
//  console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");
// sayHello();

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");
// sayHello();

// /**
//  * スプレッド構文 ...
//  */
// // 配列の展開
// const arr1 =[1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] =arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] =100;
// console.log(arr4);//arr4が変更されてしまう

/**
 * maplやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];
// for(let index =0;index<nameArr.length;index++){
//   console.log(nameArr[index]);
// }

// for(let index =0;index<nameArr.length;index++){
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です。`));

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num% 2 === 1;
// })
// console.log(newNumArr)

// const newNameArr = nameArr.map((name) =>{
//   if(name==="じゃけぇ"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ?条件がtrue:条件がfalseの時
//
// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

//

/**
 * 論理演算子の本当の意味　&& ||
 */
