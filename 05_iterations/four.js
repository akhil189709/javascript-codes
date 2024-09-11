const myObj= {
    js : "javascript",
    cpp : "c++",
    rb: "ruby",
    java : "java"
}

for (const key in myObj) {

    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const arr = [11,22,33,44,55,66]
for (const key in arr) {
    console.log(arr[key]);
}

