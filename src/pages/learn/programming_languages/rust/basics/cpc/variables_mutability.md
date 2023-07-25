---
layout: "../../_RustLayout.astro"
title: متغیر ها و تغیرپذیری | Variables and Mutability
author: آریا بختیاری
editor: 
version: 0.1.0
key_words: برنامه نویسی , زبان راست
description: 
---


```rust
let apples = 5; // immutable
let mut bananas = 5; // mutable
```

- In Rust, variables are immutable by default, meaning once we give the variable a value, the value won’t change.

- When a variable is immutable, once a value is bound to a name, you can’t change that value.


```rust
fn main() {
    let x = 5;
    println!("The value of x is: {x}");
    x = 6;
    println!("The value of x is: {x}");
}
```
```shell
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:4:5
  |
2 |     let x = 5;
  |         -
  |         |
  |         first assignment to `x`
  |         help: consider making this binding mutable: `mut x`
3 |     println!("The value of x is: {x}");
4 |     x = 6;
  |     ^^^^^ cannot assign twice to immutable variable

For more information about this error, try `rustc --explain E0384`.
error: could not compile `variables` due to previous error

```


# لینک های مفید
# لینک های مرتبط