import { arr, str } from "./hello.js";

arr[1] = 5; // this work
// arr = [7, 8, 9]; // Uncaught TypeError: Assignment to constant variable.
// str = "Hi"; // Uncaught TypeError: Assignment to constant variable
