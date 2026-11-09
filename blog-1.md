# Type Alias vs Interface in TypeScript: Which One Should You Use?

## Introduction

When you start TypeScript, you quickly meet two ways to describe the shape of data: `type` and `interface`. They look similar and often work the same way, which confuses many beginners. Let's learn how they differ and when to pick each one.

## Core Differences

Both can describe an object:


type User = { name: string; age: number };

interface IUser {
  name: string;
  age: number;
}


The first big difference is declaration merging. If you declare the same interface twice, TypeScript merges them. A type alias cannot be declared twice; it gives an error.


interface Car { brand: string }
interface Car { year: number }   // merged: Car has brand and year


The second difference is flexibility. A `type` can name anything: unions, primitives, tuples, and more. An `interface` can only describe object shapes.


type Id = string | number;          // only possible with type
type Point = [number, number];      // tuple


The third difference is **extending**. Interfaces use `extends`, while types combine with `&`:

interface Animal { name: string }
interface Dog extends Animal { bark(): void }

type Cat = Animal & { meow(): void };


Also, a class can `implements` an interface, which makes interfaces great for OOP.

## When to Choose Which

- Use `interface` for object shapes, class contracts, and public APIs that others may extend.
- Use `type` for unions, tuples, function types, and combining types.

## Conclusion

Both are powerful, and for plain objects either works. A simple rule: start with `interface` for objects, and switch to `type` when you need unions or other advanced features. Stay consistent in your project.
