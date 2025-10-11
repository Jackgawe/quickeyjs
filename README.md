# quickeyjs 🔑  

**Your quick key to clean, reusable JavaScript.**

quickeyjs is a lightweight JavaScript utility library that helps you write cleaner and faster code.
It provides simple, dependency-free helper functions for everyday tasks — from strings and arrays to numbers and objects.

---

## 🚀 Installation
Using npm:
```bash
npm install quickeyjs
```

## 🛠 Usage

As ES module:
```js
import * as qk from 'quickeyjs';
console.log(qk.capitalize('hello'));
console.log(qk.unique([1,1,2,3]));
```

## 📚 API

### ✨ String Helpers
- `capitalize(str)` → Capitalizes first letter
- `reverse(str)` → Reverses string
- `truncate(str, length)` → Shortens string and adds "..."

### 🧩 Array Helpers
- `unique(arr)` → Removes duplicates
- `chunk(arr, size)` → Splits into chunks
- `flatten(arr)` → Flattens nested arrays

### 🔢 Number Helpers
- `clamp(num, min, max)` → Clamps number within range
- `randomInt(min, max)` → Returns random integer
- `average(...nums)` → Returns mean value

### 🧱 Object Helpers
- `merge(obj1, obj2)` → Deep merges objects
- `isEmpty(obj)` → Checks if object has no keys
- `clone(obj)` → Deep clones an object

## 👀 Demo/Test
Run `node src/index.js` to see sample outputs for all helpers.

---
MIT License