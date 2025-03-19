"use strict";

//Tambahkan method baru bernama capitalizeFirst() pada String.prototype, sehingga setiap string dapat menggunakan method ini untuk mengubah huruf pertama menjadi huruf besar. "hello world" ==> "Hello world"

let obj = {name: "hello world"};

function capitalizedFirst(str){if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalizedFirst(obj.name));
