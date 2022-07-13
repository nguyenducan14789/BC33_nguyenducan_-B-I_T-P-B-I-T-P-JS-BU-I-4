//bài 1
/**
 * INPUT: nhập lần lượt 3 số tự nhiên
 * PROCESS:
 *          - lấy được Input (hardcode)
 *          - So sánh lần lượt số thứ nhất với số thứ 2, sô thứ 2 với số thứ3
 *          - Sử dụng kết quả so sánh được ở trên đê xắp xếp các số tự nhiên theo thứ tự tăng dần 
 *          - Log ra 3 số tự nhiên theo thứ tự tăng dần
 * OUTFUT: 3 số tự nhiên theo thứ tự tăng dần
 */
var number1 = 25;
var number2 = 15;
var number3 = 30;
if(number1<number2 && number2<number3){
    console.log(number1, number2, number3)
} else if(number1< number3 && number3 < number2){
    console.log(number1, number3, number2)
} else if(number2<number1 && number1<number3){
    console.log(number2, number1, number3)
} else if(number2<number3 && number3<number1){
    console.log(number2, number3, number1)
} else if(number3<number1 && number1<number2){
    console.log(number3, number1, number2)
} else if(number3<number2 && number2<number1){
    console.log(number3, number2,number1)
}









/**
 * Bài 2
 * INPUT: 
 *        - Nhập  các thành viên gia đình(bố, mẹ, anh trai, em gái) vào hệ thống (hardcode).
 *        - Nhập tên thành viên sử dụng máy tính
 * FROCESS: 
 *          - So sánh kết quả của thành viên sử dụng máy tình và các thành viên trong gia đình.
 *          - Log ra lời chào phù hợp với thành viên sử dụng máy tính.
 * OUTPUT: Lời chào
 */
var member = "sister";
var dad = "dad";
var mom = "mom";
var brother = "brother";
var sister = "sister";

if(member === dad){
    console.log("Xin chào bố")
}else if(member === mom){
    console.log("Xin chào mẹ")
} else if(member === brother){
    console.log("Xin chào anh trai")
}else if( member === sister){
    console.log("Xin chào em gái")
}








/**
 * Bài 3
 * INPUT: Nhập số tự nhiên 1, số tự nhiên 2, số tự nhiên 3 (hardcode).
 * PROCESS:
 *          - Lấy 3 số tự nhiên chia lấy dư cho 2
 *          - Số nào có kết quả phép chia lấy dư với 2 bằng 0: số số chẵn = số số chẵn +1. 
 *          - Số nào có kết quả phép chia lấy dư với 2 khác 0: số số lẽ = số số lẽ +1.
 *          - Log số số chẵn, số số lẽ
 * OUTPUT:
 *         - Số số chẵn
 *         - Số số lẽ 
 */
var n1 = 2;
var n2 = 4;
var n3 = 5;

var evenNumber = 0;
var oddNumber = 0;

if(n1%2 === 0){
    evenNumber = evenNumber+1;
}else{
    oddNumber = oddNumber +1;
}
if(n2%2 === 0){
    evenNumber = evenNumber+1;
}else{
    oddNumber = oddNumber +1;
}
if(n3%2 === 0){
    evenNumber = evenNumber+1;
}else{
    oddNumber = oddNumber +1;
}
console.log("Số số chẵn :",evenNumber);
console.log("Số số lẻ:",oddNumber );







/**
 * Bài 4
 * INPUT: Nhập lần lượt 3 cạnh của tam giác(hardcode).
 * PROCESS:
 *         - So sánh các các cạnh tam giác với nhau
 *         - Nếu có ít nhất 2 cạnh bằng nhau thì là tam giác cân, có 3 cạnh bằng nhau là tam giác đều.Nếu tổng bình phương 2 cạnh bằng cạnh còn lại thì là tam giác vuông
 * OUTPUT: tam giác
 */
var side1 = 3;
var side2 = 4;
var side3 = 5;

if(side1 === side2){
    console.log("tam giác cân")
} else if(side1 === side3){
    console.log("tam giác cân")
} else if(side2 === side3){
    console.log("tam giác cân")
} else if(side1 === side2 && side2 === side3){
    console.log("tam giác đều")
} else if(side1*side1 + side2*side2 === side3*side3){
    console.log("tam giác vuông")
} else if(side1*side1 + side3*side3 === side2*side2){
    console.log("tam giác vuông")
} else if(side2*side2 + side3*side3 === side1*side1){
    console.log("tam giác vuông")
}
