Going through this course:

https://doc.rust-lang.org/rust-by-example/index.html

General concepts (from ChatGPT):

- Ownership and borrowing: As mentioned above, Rust has a unique ownership and borrowing system that helps prevent data races and segmentation faults. Understanding how ownership and borrowing work is crucial to writing safe and efficient Rust code.
- Types and type inference: Rust is a statically-typed language, which means you'll need to declare the type of every variable and function argument. Rust also has type inference, which means the compiler can infer the type of a variable based on its value.
- Traits and generics: Traits in Rust are similar to interfaces in other languages, and they allow you to define shared behavior for types. Generics allow you to write code that can work with multiple types, rather than being tied to a specific type.
- Concurrency: Rust has built-in support for concurrent programming, which makes it a great choice for high-performance systems programming. Understanding concepts like threads, mutexes, and channels will be important for writing concurrent Rust code.
- Unsafe code: Rust has a strong emphasis on safety, but sometimes you may need to write unsafe code in order to interface with other languages or systems. Understanding when and how to use unsafe code is an important part of learning Rust.
- Macros: Rust has a powerful macro system that allows you to define code that generates code. This can be used for a variety of purposes, such as code generation, metaprogramming, and more.
- Standard library: Rust has a comprehensive standard library that provides a wide range of functionality, including data structures, I/O, networking, and more. Familiarizing yourself with the standard library will be important for writing Rust programs.

Specific Concepts

- [std](https://doc.rust-lang.org/std/) - Rust standard library
- [mutability](https://doc.rust-lang.org/rust-by-example/variable_bindings/mut.html) - variable mutability bindings
- [inference](https://doc.rust-lang.org/rust-by-example/types/inference.html) - type inference engine looks at the type of the value at initialization and how it is used afterwards to infer the time.
