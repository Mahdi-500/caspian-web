---
layout: "./_PLLayout.astro"
title: راست | Rust
author: آریا بختیاری
editor: 
version: 0.1.0
key_words: برنامه نویسی , زبان راست
description: زبان برنامه نویسی راست یک زبان 
 سطح پایین | low level
 استاتیک تایپ | static type 
 کمپایلد | compiled ‌
 است . 
 این زبان برای طراحی
 سرور | web server
 ای پی ای | api 
 امبدد سیستم | embedded system
 کاربردی است و شما را در این راه یاری میرساند 
---

# چرا راست ؟
- ## 1- بهینه | Performance 
- \- راست به علت سرعت بالا و استفاده بهینه از مموری سرعتی همتراز با زبان های خانواده ی c/c++ دارد
[Benchmarks](https://benchmarksgame-team.pages.debian.net/benchmarksgame/box-plot-summary-charts.html)
- \- مناسب برای انجام کار هایی که سرعت و بهینگی مهم باشد
[Memory and energy efficiency](https://dl.acm.org/doi/10.1145/3136014.3136031)
- \- به دلیل نداشتن گاربج کالکتر زبانی مناسبی برای امبدد سیستم ها است
- \- طوری طراحی شده که به آسانی با زبان های دیگر ترکیب شود

- ## 2- مورد اعتماد | Reliability
- Strong type system prevents 
[data races](https://doc.rust-lang.org/nomicon/races.html)
, brings 'fearless concurrency' (amongst others).
- Can avoid 
[70% of all safety issues](https://www.chromium.org/Home/chromium-security/memory-safety) present in C / C++, and most memory issues. 

- ## 3- جعبه ابزار کامل | Productivity
- \- کامپایلری هوشمند که اشتباهات شما را به صورت کامل و مفید نمایش میدهد
- \- داکیومنتیشنی کامل که در یاد گرفتن زبان بهتون کمک میکنه
[The Book](https://doc.rust-lang.org/book/) |
[Rust by Example](https://doc.rust-lang.org/rust-by-example/) |
[Standard Library](https://doc.rust-lang.org/std/)
- \-  پکیج منیجر شخص سومی لازم نیست , زبان همراه خودش پکیج منیجر داره
- \- به دلیل استفاده از LLVM روی چندین پلتفرم قابل اجرا است 
[Dozens of supported platforms](https://doc.rust-lang.org/rustc/platform-support.html)

# لینک ها | Links
- \- [Official Website](https://www.rust-lang.org/)
- \- [The Book](https://doc.rust-lang.org/book/) 
- \- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) 
- \- [Standard Library](https://doc.rust-lang.org/std/)
- \- [Cheat Sheet](https://cheats.rs/)

# کتابخانه ها | Libraries
- [Tokio]() : Async Runtime
- [Serde]() : Serialize Deserialize
- [Sea-orm]() : Orm
- [Rocket]() : web
- [Actix](https://actix.rs/) : web 
- [Axum]() : web
- [Tower]() : middleware
- [Hyper]() : http
- [Bevy]() : game engine

# فریم ورک ها | Frameworks
- \- [Dixosis]()
- \- [Leptos]()