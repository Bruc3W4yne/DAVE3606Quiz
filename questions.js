const questions = [
    
{
    text: "What is generally the MOST important factor determining how fast a program runs for a given input, assuming a non-trivial task?",
        options: [
            { text: "The specific programming language chosen", correct: false },
            { text: "The underlying algorithm's efficiency", correct: true },
            { text: "The optimization level used during compilation (e.g., -O3)", correct: false },
            { text: "The clock speed of the CPU", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Optimization Basics"
},
{
    text: "Which of the following is a common tradeoff when optimizing a program?",
        options: [
            { text: "Reducing memory usage always reduces execution time.", correct: false },
            { text: "Increasing execution speed might require using more memory or more developer time.", correct: true },
            { text: "Increasing execution speed always decreases executable size.", correct: false },
            { text: "Reducing developer time always leads to the fastest execution.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Optimization Tradeoffs"
},
{
    text: "Which execution mode describes how Python programs are typically run?",
        options: [
            { text: "Compiled directly to machine code", correct: false },
            { text: "Interpreted", correct: true },
            { text: "Virtual Machine (Bytecode interpretation)", correct: false },
            { text: "Statically linked only", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Execution Modes"
},
{
    text: "Java programs are typically compiled into bytecode, which is then executed by a:",
        options: [
            { text: "Compiler", correct: false },
            { text: "Interpreter directly on source code", correct: false },
            { text: "Virtual Machine (JVM)", correct: true },
            { text: "Operating System Kernel", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Execution Modes"
},
{
    text: "What is a primary characteristic of compiled languages like C++?",
        options: [
            { text: "Source code is read and executed line-by-line at runtime.", correct: false },
            { text: "They require an interpreter installed on the target machine.", correct: false },
            { text: "Source code is translated into machine-specific code before runtime.", correct: true },
            { text: "They cannot use external libraries.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Execution Modes"
},
{
    text: "Why might a program written in Java sometimes run faster than a similar program written in C++, despite C++ being compiled directly to machine code?",
        options: [
            { text: "Java avoids pointer usage.", correct: false },
            { text: "Java's bytecode is inherently faster than machine code.", correct: false },
            { text: "Sophisticated Just-In-Time (JIT) compilers in the JVM can perform runtime optimizations.", correct: true },
            { text: "C++ compilers do not perform any optimizations.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Execution Modes & Optimization"
},
{
    text: "What does the `user` time reported by the `time` command typically represent?",
        options: [
            { text: "Total wall-clock time elapsed.", correct: false },
            { text: "Time spent by the CPU executing the program's own code (userspace).", correct: true },
            { text: "Time spent by the CPU executing operating system tasks on behalf of the program (kernel space).", correct: false },
            { text: "Time the program spent waiting for user input.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Performance Measurement"
},
{
    text: "Compiler optimization 'Constant Folding' refers to:",
        options: [
            { text: "Replacing function calls with the function's body.", correct: false },
            { text: "Computing constant expressions (like 24*60*60) at compile time.", correct: true },
            { text: "Unrolling loops to reduce branching.", correct: false },
            { text: "Replacing expensive operations with cheaper ones (e.g., multiplication with addition).", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Compiler Optimization"
},
{
    text: "'Undefined Behavior' in C++ implies that:",
        options: [
            { text: "The program will produce a consistent, documented error.", correct: false },
            { text: "The compiler guarantees to catch the issue and warn the user.", correct: false },
            { text: "The C++ standard places no requirements on the outcome; behavior is unpredictable.", correct: true },
            { text: "The behavior is defined by the specific operating system.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Undefined Behavior"
},
{
    text: "What is the consequence of Signed Integer Overflow in C++ according to the standard?",
        options: [
            { text: "The value wraps around predictably (like in Java).", correct: false },
            { text: "It throws a runtime exception.", correct: false },
            { text: "It results in Undefined Behavior.", correct: true },
            { text: "The compiler automatically promotes the integer to a larger type.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Undefined Behavior"
},
{
    text: "Which of these is NOT listed as a machine resource programs consume?",
        options: [
            { text: "Execution time", correct: false },
            { text: "Memory", correct: false },
            { text: "Developer time", correct: true }, // Listed as a HUMAN resource in contrast
            { text: "Disk space", correct: false },
            { text: "Network bandwidth", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Resource Consumption"
},
{
    text: "Compiling a C++ file `hello.cpp` using `g++ hello.cpp` (with no other flags) typically produces an executable file named:",
        options: [
            { text: "hello", correct: false },
            { text: "hello.exe", correct: false },
            { text: "a.out", correct: true }, // Or a.exe on Windows/MSYS2
            { text: "hello.o", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "C++ Compilation"
},
{
    text: "Compiling a C++ file `hello.cpp` using `g++ hello.cpp -o hello` produces an executable file named:",
        options: [
            { text: "hello", correct: true },
            { text: "hello.exe", correct: false }, // Usually needs explicit .exe on Windows
            { text: "a.out", correct: false },
            { text: "hello.o", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "C++ Compilation"
},
{
    text: "The optimization technique where the compiler replaces a function call with the actual code of the function is known as:",
        options: [
            { text: "Constant Folding", correct: false },
            { text: "Strength Reduction", correct: false },
            { text: "Loop Unrolling", correct: false },
            { text: "Inlining", correct: true }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Compiler Optimization"
},
{
    text: "What is the difference between `user` time and `sys` time reported by the `time` command?",
        options: [
            { text: "`user` is program code, `sys` is OS code executed for the program.", correct: true },
            { text: "`user` is single-thread time, `sys` is multi-thread time.", correct: false },
            { text: "`user` is CPU time, `sys` is disk I/O time.", correct: false },
            { text: "`user` is time spent running, `sys` is time spent waiting.", correct: false }
        ],
            lecture: "L1",
            lecture_num: 1,
            topic: "Performance Measurement"
},
{
    text: "What is the definition of an algorithm?",
    options: [
        { text: "A specific input for a problem, like a list [3, 1, 4].", correct: false },
        { text: "A general statement of what input and output look like for a task.", correct: false },
        { text: "A detailed, unambiguous description of how to solve a problem.", correct: true },
        { text: "A measure of how fast a program runs.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Algorithms & Problems"
},
{
    text: "In complexity analysis, what is considered a 'primitive step'?",
    options: [
        { text: "Any single line of code.", correct: false },
        { text: "An operation executable in a constant amount of time, independent of input size (e.g., basic arithmetic on fixed-size numbers).", correct: true },
        { text: "Sorting an entire list.", correct: false },
        { text: "Concatenating two strings of variable length.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Complexity Analysis"
},
{
    text: "Big-O notation, O(g(n)), provides what kind of bound on a function f(n)?",
    options: [
        { text: "A tight bound (f grows exactly as fast as g).", correct: false },
        { text: "A lower bound (f grows at least as fast as g).", correct: false },
        { text: "An upper bound (f grows no faster than g).", correct: true },
        { text: "An average-case bound.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Asymptotic Notation"
},
{
    text: "Big-Omega notation, Ω(g(n)), provides what kind of bound on a function f(n)?",
    options: [
        { text: "A tight bound (f grows exactly as fast as g).", correct: false },
        { text: "A lower bound (f grows at least as fast as g).", correct: true },
        { text: "An upper bound (f grows no faster than g).", correct: false },
        { text: "A best-case bound only.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Asymptotic Notation"
},
{
    text: "Big-Theta notation, Θ(g(n)), signifies that f(n) and g(n):",
    options: [
        { text: "Grow at the same rate asymptotically.", correct: true },
        { text: "f(n) always grows faster than g(n).", correct: false },
        { text: "f(n) always grows slower than g(n).", correct: false },
        { text: "Represent only the worst-case scenario.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Asymptotic Notation"
},
{
    text: "If an algorithm's runtime is described as 7n^2 + 3n + 4, what is its complexity in Big-Theta notation?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(n^2)", correct: true },
        { text: "Θ(n^3)", correct: false },
        { text: "Θ(1)", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Asymptotic Notation"
},
{
    text: "Which category of sorting algorithms typically involves doubly-nested loops iterating over elements, leading to their characteristic runtime?",
    options: [
        { text: "Linear-time sorts (Bucket, Counting, Radix)", correct: false },
        { text: "N-log-N-time sorts (Merge, Heap, Quicksort)", correct: false },
        { text: "Quadratic-time sorts (Selection, Insertion, Bubble)", correct: true },
        { text: "Comparison sorts only.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Sorting Algorithms"
},
{
    text: "What is the typical time complexity of Insertion Sort in the best case (already sorted list)?",
    options: [
        { text: "Θ(n^2)", correct: false },
        { text: "Θ(n log n)", correct: false },
        { text: "Θ(n)", correct: true },
        { text: "Θ(1)", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Sorting Algorithms"
},
{
    text: "What is the worst-case time complexity of Quicksort?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(n log n)", correct: false },
        { text: "Θ(n^2)", correct: true },
        { text: "Θ(log n)", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Sorting Algorithms"
},
{
    text: "Merge Sort and Heap Sort guarantee a time complexity of:",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(n log n)", correct: true },
        { text: "Θ(n^2)", correct: false },
        { text: "Depends on input data distribution.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Sorting Algorithms"
},
{
    text: "Why is repeatedly concatenating strings inside a loop (e.g., `result += next_string`) often inefficient in languages like Python or Java where strings are immutable?",
    options: [
        { text: "It causes too many function calls.", correct: false },
        { text: "Each concatenation creates a new string, copying all previous characters, leading to quadratic time complexity (painter's algorithm).", correct: true },
        { text: "String comparisons become slow.", correct: false },
        { text: "It leads to stack overflows.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Hidden Complexity"
},
{
    text: "How can the inefficiency of repeated string concatenation in a loop be mitigated in Python?",
    options: [
        { text: "Using f-strings exclusively.", correct: false },
        { text: "Appending each piece to a list and using `''.join(list)` at the end.", correct: true },
        { text: "Converting strings to integers first.", correct: false },
        { text: "There is no way to improve it significantly.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Hidden Complexity"
},
{
    text: "Amortized analysis is used when:",
    options: [
        { text: "An algorithm's runtime is always constant.", correct: false },
        { text: "Analyzing the average runtime over a sequence of operations, where individual operations might have varying costs.", correct: true },
        { text: "Analyzing only the worst-case scenario.", correct: false },
        { text: "Analyzing algorithms that use recursion.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Amortized Analysis"
},
{
    text: "Appending an element to an expandable list (like Python's list or Java's ArrayList) has what amortized time complexity?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(log n)", correct: false },
        { text: "Θ(1)", correct: true },
        { text: "Θ(n^2)", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Amortized Analysis"
},
{
    text: "Which algorithm design technique involves repeatedly making the choice that seems best at the current moment?",
    options: [
        { text: "Dynamic Programming", correct: false },
        { text: "Divide and Conquer", correct: false },
        { text: "Greedy Algorithm", correct: true },
        { text: "Backtracking", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Greedy Algorithms"
},
{
    text: "What is a potential pitfall of using a greedy algorithm?",
    options: [
        { text: "They are always computationally expensive.", correct: false },
        { text: "They might not produce the globally optimal solution.", correct: true },
        { text: "They only work for sorting problems.", correct: false },
        { text: "They require complex data structures.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Greedy Algorithms"
},
{
    text: "Which of these is NOT listed as an operation that is generally considered a primitive step in complexity analysis?",
    options: [
        { text: "Basic arithmetic (+, -, *, /) on fixed-size numbers.", correct: false },
        { text: "Reading/writing a variable.", correct: false },
        { text: "Computing the square root of a number.", correct: true },
        { text: "Comparing two fixed-size numbers.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Complexity Analysis"
},
{
    text: "What does it mean for a problem instance (e.g., sorting `[3, 1, 4]`) in relation to a problem (e.g., sorting)?",
    options: [
        { text: "It's the algorithm used to solve the problem.", correct: false },
        { text: "It's a specific input for the general problem.", correct: true },
        { text: "It's the runtime complexity of the problem.", correct: false },
        { text: "It's a type of data structure.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Algorithms & Problems"
},
{
    text: "The lecture mentions several well-known problems like Minimum Spanning Tree and Maximum Flow. What is the key takeaway regarding these?",
    options: [
        { text: "You need to memorize the implementation details of Prim's and Kruskal's algorithms.", correct: false },
        { text: "These problems are unsolvable.", correct: false },
        { text: "You should be aware that established, efficient algorithms exist for these common problems.", correct: true },
        { text: "These problems can only be solved using greedy algorithms.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Well-Known Algorithms"
},
{
    text: "If an algorithm takes O(n^2) time and Ω(n) time, which notation CANNOT be used to describe its overall complexity precisely?",
    options: [
        { text: "O(n^2)", correct: false },
        { text: "Ω(n)", correct: false },
        { text: "Θ notation (e.g., Θ(n) or Θ(n^2))", correct: true }, // Because the upper and lower bounds differ
        { text: "It cannot be described with asymptotic notation.", correct: false }
    ],
    lecture: "L2",
    lecture_num: 2,
    topic: "Asymptotic Notation"
}
// --- END OF LECTURE 2 QUESTIONS ---

// --- START OF LECTURE 3 QUESTIONS ---
,
{
    text: "What is the primary expected time complexity for adding, deleting, or looking up a key in a hashmap (assuming a good hash function and few collisions)?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(log n)", correct: false },
        { text: "Θ(1) (amortized/expected)", correct: true },
        { text: "Θ(n^2)", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Hashmaps"
},
{
    text: "If you want to use instances of your own custom class as keys in a Java HashMap or Python dict, what two methods must you typically implement?",
    options: [
        { text: "toString() and compareTo()", correct: false },
        { text: "equals() and hashCode() (Java) / __eq__() and __hash__() (Python)", correct: true },
        { text: "clone() and finalize()", correct: false },
        { text: "getKey() and getValue()", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Hashmaps"
},
{
    text: "What is the critical relationship required between the `equals()` and `hashCode()` methods for objects used as hashmap keys?",
    options: [
        { text: "If two objects are equal according to `equals()`, they MUST have the same `hashCode()`.", correct: true },
        { text: "If two objects have the same `hashCode()`, they MUST be equal according to `equals()`.", correct: false }, // Collisions are allowed
        { text: "`hashCode()` must return a unique value for every object.", correct: false },
        { text: "There is no required relationship.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Hashmaps"
},
{
    text: "Why is using the length of a string generally a bad idea for its hash code?",
    options: [
        { text: "Calculating string length is too slow.", correct: false },
        { text: "It produces too large hash codes.", correct: false },
        { text: "It causes many collisions (all strings of the same length get the same hash code).", correct: true },
        { text: "String length is mutable.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Hashmaps"
},
{
    text: "What is the memoization technique primarily used for?",
    options: [
        { text: "Reducing the memory usage of recursive functions.", correct: false },
        { text: "Avoiding recomputing the results of function calls with the same inputs by storing previous results.", correct: true },
        { text: "Improving the accuracy of floating-point calculations.", correct: false },
        { text: "Making code easier to read.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Memoization"
},
{
    text: "Memoization is particularly effective for recursive functions that exhibit which property?",
    options: [
        { text: "Deep recursion depth without repeating calls.", correct: false },
        { text: "Overlapping subproblems (the same sub-problems are solved multiple times).", correct: true },
        { text: "Linear time complexity.", correct: false },
        { text: "Using only primitive data types.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Memoization"
},
{
    text: "What is a major potential issue when implementing deeply recursive algorithms in many programming languages?",
    options: [
        { text: "Running out of heap memory.", correct: false },
        { text: "Exceeding the maximum call stack depth (StackOverflowError/RecursionError).", correct: true },
        { text: "Integer overflow.", correct: false },
        { text: "Hash collisions.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Recursion Limits"
},
{
    text: "In graph traversal, Depth-First Search (DFS) typically explores:",
    options: [
        { text: "Nodes level by level, exploring all neighbors at the current depth before moving deeper.", correct: false },
        { text: "As deep as possible along one path before backtracking.", correct: true },
        { text: "Nodes in a random order.", correct: false },
        { text: "Only the nodes adjacent to the start node.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "DFS"
},
{
    text: "When performing DFS on a general graph (which might contain cycles), why is it essential to keep track of visited nodes?",
    options: [
        { text: "To ensure all nodes are processed exactly once and avoid infinite loops.", correct: true },
        { text: "To calculate the shortest path.", correct: false },
        { text: "To prioritize nodes with fewer edges.", correct: false },
        { text: "It's only necessary for tree traversal.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "DFS"
},
{
    text: "What is the typical time complexity of DFS on a graph represented by adjacency lists, assuming processing each node and edge takes constant time?",
    options: [
        { text: "O(V log E)", correct: false },
        { text: "O(V * E)", correct: false },
        { text: "O(V + E)", correct: true }, // V for visiting nodes, E for exploring edges
        { text: "O(V^2)", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "DFS Complexity"
},
{
    text: "How can the stack depth limitation of recursive DFS be overcome for very large or deep graphs?",
    options: [
        { text: "By increasing the heap size.", correct: false },
        { text: "By using memoization.", correct: false },
        { text: "By implementing an iterative version using an explicit stack data structure.", correct: true },
        { text: "By switching to Breadth-First Search (BFS).", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Iterative DFS"
},
{
    text: "What does the Python list comprehension `[x*x for x in numbers if x % 2 == 0]` do?",
    options: [
        { text: "Squares all numbers in the list `numbers`.", correct: false },
        { text: "Creates a list of squares of only the even numbers in `numbers`.", correct: true },
        { text: "Checks if all numbers in `numbers` are even.", correct: false },
        { text: "Creates a list containing only the even numbers from `numbers`.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Python Comprehensions"
},
{
    text: "Consider the Java stream operation: `values.stream().filter(x -> x > 10).map(x -> x * 2).toList();`. What does this produce?",
    options: [
        { text: "A list of all values from `values` multiplied by 2.", correct: false },
        { text: "A list of values from `values` that are greater than 10.", correct: false },
        { text: "A list containing doubled values, but only for those original values in `values` that were greater than 10.", correct: true },
        { text: "A boolean indicating if any value in `values` is greater than 10.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Java Streams"
},
{
    text: "If `condition(x)` takes O(n) time and `transform(x)` takes O(1) time, what is the approximate time complexity of the Python list comprehension `[transform(x) for x in values if condition(x)]` where `len(values)` is n?",
    options: [
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: false },
        { text: "O(n^2)", correct: true }, // n calls to condition, each taking O(n) time dominates
        { text: "O(1)", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Comprehension Complexity"
},
{
    text: "What is a key difference between a Python generator comprehension (using parentheses) and a list comprehension (using square brackets)?",
    options: [
        { text: "Generators produce results immediately, lists compute lazily.", correct: false },
        { text: "Generators compute values lazily (on demand), potentially saving memory; lists compute all values upfront.", correct: true },
        { text: "Generators can only work with numbers.", correct: false },
        { text: "List comprehensions are faster for large datasets.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Python Comprehensions"
},
{
    text: "To emulate a mathematical set using a hashmap/dictionary, what could the values associated with the keys typically be?",
    options: [
        { text: "The index of the element.", correct: false },
        { text: "A count of how many times the element was added.", correct: false },
        { text: "A simple boolean value (e.g., True) indicating presence.", correct: true },
        { text: "The hash code of the element.", correct: false }
    ],
    lecture: "L3",
    lecture_num: 3,
    topic: "Hashmaps / Sets"
}
// --- END OF LECTURE 3 QUESTIONS ---

// --- START OF LECTURE 4 QUESTIONS ---
,
{
    text: "How is computer memory typically conceptualized from a program's perspective?",
    options: [
        { text: "As a collection of named variables.", correct: false },
        { text: "As a long, contiguous sequence of bytes, each with a unique address.", correct: true },
        { text: "As a set of disconnected objects.", correct: false },
        { text: "As a stack structure only.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Memory Layout"
},
{
    text: "What information does the raw memory typically contain alongside the byte values?",
    options: [
        { text: "Metadata indicating the data type (e.g., int, float, string).", correct: false },
        { text: "Markers indicating the start and end of each value.", correct: false },
        { text: "Only the byte values; type and structure interpretation is the program's responsibility.", correct: true },
        { text: "The variable name associated with the data.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Memory Layout"
},
{
    text: "What does 'Endianness' refer to in the context of multi-byte values in memory?",
    options: [
        { text: "The total number of bytes used by a value.", correct: false },
        { text: "Whether the memory address is stored as binary or hexadecimal.", correct: false },
        { text: "The order in which the bytes of a multi-byte value are arranged in memory addresses (most significant first or least significant first).", correct: true },
        { text: "The maximum value a data type can hold.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Endianness"
},
{
    text: "If a 4-byte integer 0x12345678 is stored at address 0x100 in a little-endian system, what byte value will be at address 0x100?",
    options: [
        { text: "0x12", correct: false },
        { text: "0x34", correct: false },
        { text: "0x56", correct: false },
        { text: "0x78", correct: true } // Least significant byte first
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Endianness"
},
{
    text: "If a 4-byte integer 0x12345678 is stored at address 0x100 in a big-endian system, what byte value will be at address 0x100?",
    options: [
        { text: "0x12", correct: true }, // Most significant byte first
        { text: "0x34", correct: false },
        { text: "0x56", correct: false },
        { text: "0x78", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Endianness"
},
{
    text: "What is the primary purpose of the 'call stack' during program execution?",
    options: [
        { text: "To store dynamically allocated objects (heap memory).", correct: false },
        { text: "To manage memory for function calls, holding parameters, local variables, and return addresses in stack frames.", correct: true },
        { text: "To store the program's compiled machine code.", correct: false },
        { text: "To cache frequently accessed data.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Call Stack"
},
{
    text: "In C++, what does the `&` operator typically do when applied to a variable (e.g., `&myVar`)?",
    options: [
        { text: "Dereferences a pointer to get the value.", correct: false },
        { text: "Performs a bitwise AND operation.", correct: false },
        { text: "Returns the memory address of the variable.", correct: true },
        { text: "Allocates new memory for the variable.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "C++ Pointers"
},
{
    text: "In C++, what does the `*` operator typically do when applied to a pointer variable (e.g., `*myPtr`) in an expression?",
    options: [
        { text: "Gets the memory address the pointer holds.", correct: false },
        { text: "Declares a variable as a pointer type.", correct: false },
        { text: "Dereferences the pointer, accessing the value it points to.", correct: true },
        { text: "Multiplies the pointer address by a value.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "C++ Pointers"
},
{
    text: "What is `nullptr` in C++ (or `null` in Java)?",
    options: [
        { text: "A special keyword indicating an uninitialized variable.", correct: false },
        { text: "A pointer/reference that intentionally does not point to a valid object or memory location.", correct: true },
        { text: "An exception thrown when memory allocation fails.", correct: false },
        { text: "A pointer to memory address 0.", correct: false } // It represents this conceptually, but the actual address might differ
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Null Pointers"
},
{
    text: "What happens if you attempt to dereference a null pointer in C++ (e.g., `*nullPtr` or `nullPtr->member`)?",
    options: [
        { text: "It returns a default value (like 0 or false).", correct: false },
        { text: "It results in Undefined Behavior, likely crashing the program.", correct: true },
        { text: "The compiler prevents this with an error.", correct: false },
        { text: "It automatically allocates memory for the pointer.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Null Pointers"
},
{
    text: "Where are local variables and function parameters typically allocated?",
    options: [
        { text: "The Heap", correct: false },
        { text: "The Call Stack (Automatic Allocation)", correct: true },
        { text: "Static Memory", correct: false },
        { text: "Read-Only Memory", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Memory Allocation Types"
},
{
    text: "Memory allocated using the `new` operator in C++ or Java resides in which memory region?",
    options: [
        { text: "The Call Stack", correct: false },
        { text: "Static Memory", correct: false },
        { text: "The Heap (Dynamic Allocation)", correct: true },
        { text: "The CPU Cache", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Memory Allocation Types"
},
{
    text: "What does dynamic memory allocation allow that automatic (stack) allocation does not?",
    options: [
        { text: "Variables to have shorter lifetimes.", correct: false },
        { text: "Memory to persist even after the function that allocated it returns.", correct: true },
        { text: "Faster memory access.", correct: false },
        { text: "Allocation of primitive types only.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Dynamic Allocation"
},
{
    text: "In C++, if you allocate memory with `new int`, what is the potential danger if you don't provide an initial value in parentheses?",
    options: [
        { text: "The allocation will fail.", correct: false },
        { text: "The allocated integer is uninitialized, and reading it is Undefined Behavior.", correct: true },
        { text: "It automatically initializes to 0.", correct: false },
        { text: "It allocates memory on the stack instead of the heap.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Dynamic Allocation"
},
{
    text: "How do pointers enable the creation of data structures like linked lists or trees?",
    options: [
        { text: "By storing the entire next object directly within the current object.", correct: false },
        { text: "By allowing objects (nodes) to hold references (memory addresses) to other objects, linking them together.", correct: true },
        { text: "By using static memory allocation exclusively.", correct: false },
        { text: "By relying on compiler optimizations.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Pointers & Data Structures"
},
{
    text: "What is the key difference between how Java/Python handle object variables and how C++ handles non-pointer object variables?",
    options: [
        { text: "Java/Python variables are always references (like pointers); C++ variables can hold the object directly.", correct: true },
        { text: "C++ variables are always references; Java/Python can hold objects directly.", correct: false },
        { text: "Java/Python use the stack; C++ uses the heap.", correct: false },
        { text: "There is no fundamental difference.", correct: false }
    ],
    lecture: "L4",
    lecture_num: 4,
    topic: "Pointers vs References"
}


// --- START OF LECTURE 5 QUESTIONS ---
,
{
    text: "What is a key characteristic of a traditional array data structure?",
    options: [
        { text: "Elements can be of different types.", correct: false },
        { text: "It can dynamically resize itself automatically.", correct: false },
        { text: "Elements are stored contiguously in memory, allowing constant-time access by index.", correct: true },
        { text: "Elements are linked via pointers.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Arrays"
},
{
    text: "In C++, how can you typically distinguish if an `int* p` points to a single `int` or the start of an array of `int`s?",
    options: [
        { text: "By using `sizeof(p)`.", correct: false },
        { text: "By checking if `p == nullptr`.", correct: false },
        { text: "You cannot tell just from the pointer; the programmer must track this information.", correct: true },
        { text: "The pointer type would be `int[]*` for an array.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Arrays & Pointers"
},
{
    text: "In Java, what does an array declared as `Person[] persons = new Person[10];` actually contain in its elements initially?",
    options: [
        { text: "Ten fully constructed Person objects with default values.", correct: false },
        { text: "Ten null references.", correct: true },
        { text: "Ten memory addresses pointing to undefined data.", correct: false },
        { text: "Ten integer representations of Person objects.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Java Arrays"
},
{
    text: "What is the primary mechanism that allows C++ `vector` or Java `ArrayList` to appear resizable?",
    options: [
        { text: "They use a linked list internally.", correct: false },
        { text: "They allocate a very large initial array.", correct: false },
        { text: "They allocate a new, larger array on the heap and copy elements when the current capacity is exceeded.", correct: true },
        { text: "They store elements non-contiguously.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Expandable Lists"
},
{
    text: "Accessing memory outside the bounds of an allocated array or object in C++ (e.g., `myArray[size]`) results in:",
    options: [
        { text: "A guaranteed compiler error.", correct: false },
        { text: "A predictable runtime exception (like Java's ArrayIndexOutOfBoundsException).", correct: false },
        { text: "Undefined Behavior.", correct: true },
        { text: "The array automatically resizing.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Illegal Memory Access"
},
{
    text: "In C++, when is memory allocated for a local variable (automatic allocation) typically deallocated?",
    options: [
        { text: "When the variable is explicitly deleted using `delete`.", correct: false },
        { text: "When the function or code block where it was declared exits (goes out of scope).", correct: true },
        { text: "When the program terminates.", correct: false },
        { text: "It is never deallocated unless manually done.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Memory Management C++"
},
{
    text: "What is required in C++ to free memory allocated dynamically using `new SomeClass[10]`?",
    options: [
        { text: "`delete SomeClass[10]`", correct: false },
        { text: "`delete[]` followed by the pointer to the array.", correct: true },
        { text: "`delete` followed by the pointer to the array.", correct: false },
        { text: "Nothing, it's handled automatically.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Memory Management C++"
},
{
    text: "What is a 'memory leak' in the context of C++?",
    options: [
        { text: "Accessing memory that has already been deallocated.", correct: false },
        { text: "Failing to deallocate dynamically allocated memory that is no longer needed.", correct: true },
        { text: "Allocating memory on the stack instead of the heap.", correct: false },
        { text: "Deallocating the same memory block twice.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Memory Management C++"
},
{
    text: "What mechanism do Java and Python use to automatically reclaim memory occupied by objects that are no longer referenced?",
    options: [
        { text: "Manual `delete` calls.", correct: false },
        { text: "Destructors.", correct: false },
        { text: "Garbage Collection (GC).", correct: true },
        { text: "Reference Counting (exclusively).", correct: false } // GC often uses techniques beyond simple reference counting
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Garbage Collection"
},
{
    text: "Can memory leaks occur in languages with garbage collection, like Java or Python?",
    options: [
        { text: "No, garbage collection prevents all memory leaks.", correct: false },
        { text: "Yes, if objects/arrays are no longer needed but still referenced (preventing GC from collecting them).", correct: true },
        { text: "Yes, but only if the garbage collector crashes.", correct: false },
        { text: "Yes, leaks only happen with primitive types.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Garbage Collection"
},
{
    text: "In C++, what is the primary purpose of a destructor (e.g., `~MyClass()`)?",
    options: [
        { text: "To initialize the object's properties.", correct: false },
        { text: "To perform cleanup tasks, especially deallocating resources (like memory) owned by the object, before the object is destroyed.", correct: true },
        { text: "To create a copy of the object.", correct: false },
        { text: "To mark the object for garbage collection.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "C++ Destructors"
},
{
    text: "When drawing a memory graph, where are local variables and function parameters located?",
    options: [
        { text: "Heap", correct: false },
        { text: "Stack", correct: true },
        { text: "Static Memory", correct: false },
        { text: "Disk", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Memory Graphs"
},
{
    text: "When drawing a memory graph, where are objects created with `new` located?",
    options: [
        { text: "Heap", correct: true },
        { text: "Stack", correct: false },
        { text: "Static Memory", correct: false },
        { text: "Depends on the object size.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Memory Graphs"
},
{
    text: "'Spatial Locality' refers to the tendency of programs to:",
    options: [
        { text: "Access the same memory location multiple times in a short period.", correct: false },
        { text: "Access memory locations that are close to recently accessed locations.", correct: true },
        { text: "Access memory in a random pattern.", correct: false },
        { text: "Allocate memory primarily on the stack.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Cache Friendliness"
},
{
    text: "'Temporal Locality' refers to the tendency of programs to:",
    options: [
        { text: "Access the same memory location multiple times in a short period.", correct: true },
        { text: "Access memory locations that are close to recently accessed locations.", correct: false },
        { text: "Finish execution quickly.", correct: false },
        { text: "Use temporary variables frequently.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Cache Friendliness"
},
{
    text: "How does accessing elements of a 2D array `data[row][col]` sequentially by row (`for row... for col...`) typically benefit from CPU caching compared to accessing by column (`for col... for row...`)?",
    options: [
        { text: "Row-major access is inherently faster mathematically.", correct: false },
        { text: "Column-major access uses less memory.", correct: false },
        { text: "Row-major access reads contiguous memory locations, improving cache hit rates due to spatial locality.", correct: true },
        { text: "Column-major access involves fewer conditional branches.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Cache Friendliness"
},
{
    text: "What is 'Branch Prediction' in modern CPUs?",
    options: [
        { text: "A compiler optimization to remove branches.", correct: false },
        { text: "The CPU guessing the outcome of a conditional jump (e.g., if/else) to keep the instruction pipeline full.", correct: true },
        { text: "A technique to predict memory access patterns.", correct: false },
        { text: "A method for predicting program runtime.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Branch Prediction"
},
{
    text: "Why might code with many unpredictable branches (e.g., an `if` condition inside a loop that frequently alternates between true and false on random data) run slower than code with predictable branches?",
    options: [
        { text: "Predictable branches use less memory.", correct: false },
        { text: "Unpredictable branches cause more cache misses.", correct: false },
        { text: "Frequent mispredictions require the CPU to discard speculative work and restart, stalling the pipeline.", correct: true },
        { text: "Unpredictable branches require more complex instructions.", correct: false }
    ],
    lecture: "L5",
    lecture_num: 5,
    topic: "Branch Prediction"
}
// --- END OF LECTURE 5 QUESTIONS ---

// --- START OF LECTURE 6 QUESTIONS ---
,
{
    text: "What is the main difference between static linking and dynamic linking?",
    options: [
        { text: "Static linking happens at runtime, dynamic linking happens at compile time.", correct: false },
        { text: "Static linking includes library code directly in the executable; dynamic linking loads shared libraries at runtime.", correct: true },
        { text: "Static linking only works for C++, dynamic linking only for Java.", correct: false },
        { text: "Static linking creates smaller executables than dynamic linking.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
},
{
    text: "What is a potential disadvantage of static linking?",
    options: [
        { text: "The program might fail if the required shared library is not installed on the user's system.", correct: false },
        { text: "It results in larger executable file sizes, as library code is duplicated in each program.", correct: true },
        { text: "It is generally slower at runtime than dynamic linking.", correct: false },
        { text: "It prevents the use of multiple libraries.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
},
{
    text: "What is a potential advantage of dynamic linking?",
    options: [
        { text: "The executable file contains all necessary code and is self-contained.", correct: false },
        { text: "It guarantees that the correct library version will always be available.", correct: false },
        { text: "Multiple programs can share a single copy of a library on disk, saving space.", correct: true },
        { text: "It simplifies the compilation process.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
},
{
    text: "What is a common term for the files used in dynamic linking on Linux?",
    options: [
        { text: ".dll (Dynamic Link Library)", correct: false },
        { text: ".exe (Executable)", correct: false },
        { text: ".so (Shared Object)", correct: true },
        { text: ".a (Static Archive)", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
},
{
    text: "What is a potential complication of dynamic linking related to library versions?",
    options: [
        { text: "Executables become unnecessarily large.", correct: false },
        { text: "Conflicts can arise if different programs require different, incompatible versions of the same shared library ('DLL Hell').", correct: true },
        { text: "Runtime performance is significantly degraded.", correct: false },
        { text: "Static linking must be used as a fallback.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
},
{
    text: "What is the conventional meaning of an exit code (status code) of 0 for a program on Linux?",
    options: [
        { text: "The program encountered a fatal error.", correct: false },
        { text: "The program completed successfully.", correct: true },
        { text: "The program requires user input.", correct: false },
        { text: "The program was terminated by a signal.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Process Execution"
},
{
    text: "What does the standard input stream (stdin, file descriptor 0) typically represent for a command-line process?",
    options: [
        { text: "The primary channel for printing normal output.", correct: false },
        { text: "The channel for printing error messages.", correct: false },
        { text: "The source from which the program reads input (often keyboard input).", correct: true },
        { text: "The program's exit status.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Standard Streams"
},
{
    text: "What is the typical purpose of the standard error stream (stderr, file descriptor 2)?",
    options: [
        { text: "To read input from the user.", correct: false },
        { text: "To print normal program output.", correct: false },
        { text: "To print error messages and diagnostics, separate from normal output.", correct: true },
        { text: "To log debugging information only.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Standard Streams"
},
{
    text: "When a parent process starts a child process, what can the parent typically do?",
    options: [
        { text: "Only send arguments, but not read output or check status.", correct: false },
        { text: "Modify the child process's code while it is running.", correct: false },
        { text: "Send arguments, provide stdin, read stdout/stderr, wait for completion, and check the exit code.", correct: true },
        { text: "Only check the exit code after the child finishes.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Process Execution"
},
{
    text: "What is a major drawback of executing functionality by starting a separate child process compared to calling a library function directly?",
    options: [
        { text: "It only works if both parent and child are written in the same language.", correct: false },
        { text: "The overhead of starting a new process can be significant, making it unsuitable for frequent calls.", correct: true },
        { text: "The child process cannot produce any output.", correct: false },
        { text: "The parent process cannot control the child's input.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Process Execution"
},
{
    text: "If a Python script uses `subprocess.run()` to execute an external command, how can it check if the command executed successfully according to Linux conventions?",
    options: [
        { text: "By checking if the command produced output on stdout.", correct: false },
        { text: "By checking if the returned status code (e.g., in the `returncode` attribute) is 0.", correct: true },
        { text: "By checking if the command produced output on stderr.", correct: false },
        { text: "By measuring the execution time.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Process Execution"
},
{
    text: "What role does the operating system play in dynamic linking?",
    options: [
        { text: "It compiles the source code of the shared library.", correct: false },
        { text: "It locates and loads the shared library file into the process's memory at runtime.", correct: true },
        { text: "It statically links the library into the executable before runtime.", correct: false },
        { text: "It plays no role; linking is handled entirely by the compiler.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
},
{
    text: "Which standard stream is typically used for regular output intended for the user or for piping to another command?",
    options: [
        { text: "stdin (File Descriptor 0)", correct: false },
        { text: "stdout (File Descriptor 1)", correct: true },
        { text: "stderr (File Descriptor 2)", correct: false },
        { text: "stdlog (File Descriptor 3)", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Standard Streams"
},
{
    text: "How can a C++ program ensure its exit code is 0 upon successful completion?",
    options: [
        { text: "By calling `System.exit(0)`.", correct: false },
        { text: "By ensuring the `main` function returns 0.", correct: true },
        { text: "By printing 'Success' to stdout.", correct: false },
        { text: "The exit code is always 0 by default in C++.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Process Execution"
},
{
    text: "A program compiled with static linking requires the user to:",
    options: [
        { text: "Install the specific libraries the program uses separately.", correct: false },
        { text: "Only have the executable file; libraries are included within it.", correct: true },
        { text: "Have the source code of the libraries available.", correct: false },
        { text: "Run a separate linker program before executing.", correct: false }
    ],
    lecture: "L6",
    lecture_num: 6,
    topic: "Linking"
}
// --- END OF LECTURE 6 QUESTIONS ---

// --- START OF LECTURE 7 QUESTIONS ---
,
{
    text: "What does it mean for a program to 'open' a file?",
    options: [
        { text: "The entire file content is read into memory immediately.", correct: false },
        { text: "The operating system locates the file and provides the program with a file handle/descriptor for future I/O operations.", correct: true },
        { text: "The file is displayed to the user in a text editor.", correct: false },
        { text: "A temporary copy of the file is created.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "File Operations"
},
{
    text: "Why is it crucial to 'close' a file descriptor/handle after a program is finished using the file?",
    options: [
        { text: "To save the file automatically.", correct: false },
        { text: "To prevent other programs from opening the file.", correct: false },
        { text: "To release operating system resources associated with the open file and prevent resource leaks.", correct: true },
        { text: "To improve disk cache performance.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Resource Management"
},
{
    text: "Which of the following are the standard streams automatically available to most processes?",
    options: [
        { text: "stdin, stdout, stderr", correct: true },
        { text: "file_in, file_out, file_log", correct: false },
        { text: "input, output, error, debug", correct: false },
        { text: "keyboard, screen, printer", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Standard Streams"
},
{
    text: "What problem does Python's `with open(...) as f:` statement solve regarding file handling?",
    options: [
        { text: "It automatically detects the correct file encoding.", correct: false },
        { text: "It ensures the file is automatically closed (`f.close()` is called) even if errors occur within the block.", correct: true },
        { text: "It reads the entire file into memory more efficiently.", correct: false },
        { text: "It allows multiple programs to write to the same file simultaneously.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Resource Management"
},
{
    text: "What is a major performance difference between sequential disk access and random disk access (seeking)?",
    options: [
        { text: "Random access is generally much faster than sequential access.", correct: false },
        { text: "Sequential access is generally faster than random access, especially on older HDDs.", correct: true },
        { text: "There is no significant performance difference on modern SSDs.", correct: false },
        { text: "Sequential access uses significantly more memory.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Disk Access Patterns"
},
{
    text: "Hard drives being 'block devices' means that:",
    options: [
        { text: "They can only store blocks of text, not binary data.", correct: false },
        { text: "Data can only be read or written in fixed-size chunks (blocks), not individual bytes directly.", correct: true },
        { text: "They block other processes while performing I/O.", correct: false },
        { text: "Access time is constant regardless of location.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Disk Characteristics"
},
{
    text: "What is the purpose of the operating system's disk cache?",
    options: [
        { text: "To store executable code permanently.", correct: false },
        { text: "To keep recently accessed disk blocks in memory for faster subsequent access.", correct: true },
        { text: "To encrypt data written to the disk.", correct: false },
        { text: "To manage file permissions.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Disk Caching"
},
{
    text: "Why might a program performing many small, sequential reads/writes benefit from language-level buffered I/O (in addition to the OS disk cache)?",
    options: [
        { text: "It bypasses the OS disk cache entirely.", correct: false },
        { text: "It reduces the number of potentially expensive system calls needed to interact with the OS.", correct: true },
        { text: "It guarantees data is immediately written physically to the disk.", correct: false },
        { text: "It enforces a specific character encoding.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Buffered I/O"
},
{
    text: "When using buffered I/O, what does calling `flush()` typically achieve?",
    options: [
        { text: "It closes the file descriptor.", correct: false },
        { text: "It forces the language's buffer contents to be sent to the operating system (potentially into the OS disk cache).", correct: true },
        { text: "It guarantees the data is physically written to the disk immediately.", correct: false },
        { text: "It clears the buffer, discarding unwritten data.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Buffered I/O"
},
{
    text: "What is the difference between a character set and a character encoding?",
    options: [
        { text: "They are synonyms for the same concept.", correct: false },
        { text: "A character set defines which characters exist and assigns them numbers (code points); an encoding defines how these numbers are represented as bytes.", correct: true },
        { text: "A character set is for text files, an encoding is for binary files.", correct: false },
        { text: "An encoding defines the characters; a character set defines the byte representation.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Character Encoding"
},
{
    text: "Which character encoding uses a variable number of bytes (1 to 4) per Unicode character, is backward compatible with ASCII, and has no endianness issues?",
    options: [
        { text: "UTF-16BE", correct: false },
        { text: "UTF-32LE", correct: false },
        { text: "UTF-8", correct: true },
        { text: "ISO-8859-1 (Latin-1)", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Character Encoding"
},
{
    text: "What is a characteristic of the UTF-16 encoding?",
    options: [
        { text: "All characters use exactly 2 bytes.", correct: false },
        { text: "It uses either 2 or 4 bytes per character and has big-endian and little-endian variants.", correct: true },
        { text: "It is identical to UTF-8 for all characters.", correct: false },
        { text: "It only supports characters found in the Latin-1 character set.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Character Encoding"
},
{
    text: "Which of the following statements about character encodings are TRUE? (Select the best option)",
    options: [
        { text: "1. UTF-16 comes in big-endian and little-endian versions. 2. UTF-8 uses 1 byte for all ASCII characters. 3. Latin-1 can represent all Unicode characters.", correct: false }, // 3 is false
        { text: "1. UTF-32 uses exactly 4 bytes per character. 2. UTF-8 is self-synchronizing. 3. UTF-16 always uses 2 bytes.", correct: false }, // 3 is false
        { text: "1. UTF-8 may start with a BOM (Byte Order Mark). 2. UTF-16 may start with a BOM. 3. UTF-32 does not have endianness variants.", correct: false }, // 3 is false (it does), 1 is true (though optional/discouraged)
        { text: "1. UTF-16 comes in big-endian and little-endian versions. 2. UTF-8 uses 1 byte for ASCII characters. 3. UTF-8 is self-synchronizing.", correct: true } // All are true based on lecture notes
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Character Encoding (Multiple Concepts)"
},
{
    text: "If a text file is encoded in UTF-8, and you read it as Latin-1 (ISO-8859-1), what is likely to happen with characters like Æ, Ø, Å?",
    options: [
        { text: "They will display correctly.", correct: false },
        { text: "Each special character will likely be misinterpreted as two or more incorrect Latin-1 characters.", correct: true }, // Because their UTF-8 encoding uses multiple bytes
        { text: "The program will throw an encoding error immediately.", correct: false }, // Might happen, but misinterpretation is common
        { text: "They will be skipped and omitted from the output.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Character Encoding"
},
{
    text: "What is the main goal of the Unicode standard?",
    options: [
        { text: "To define the most efficient byte encoding for text.", correct: false },
        { text: "To assign a unique number (code point) to every character in potentially all human languages.", correct: true },
        { text: "To standardize font rendering across all platforms.", correct: false },
        { text: "To provide a universal programming language.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Character Encoding"
},
{
    text: "Which of these techniques helps ensure a file resource is properly closed even if an error occurs during processing?",
    options: [
        { text: "1. Using `try...finally` in Java/Python. 2. Using `with` statement in Python. 3. Using RAII (destructors) in C++.", correct: true }, // All listed are valid approaches
        { text: "Only 1 and 2.", correct: false },
        { text: "Only 2 and 3.", correct: false },
        { text: "Only 1.", correct: false }
    ],
    lecture: "L7",
    lecture_num: 7,
    topic: "Resource Management (Multiple Concepts)"
},
// --- END OF LECTURE 7 QUESTIONS ---

// --- START OF LECTURE 8 QUESTIONS ---
{
    text: "What is the primary role of a file name extension (e.g., '.txt', '.jpg') in determining a file\'s format?",
    options: [
        { text: "It strictly defines the internal structure and interpretation of the file\'s content.", correct: false },
        { text: "It acts as a hint to the operating system and users about the expected file format, but does not guarantee it.", correct: true },
        { text: "It encrypts the file content based on the extension type.", correct: false },
        { text: "It is a mandatory part of the file format specification itself.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "File Formats"
},
{
    text: "Which of the following is a common characteristic of textual file formats compared to binary file formats?",
    options: [
        { text: "Textual formats are generally more compact in size for the same data.", correct: false },
        { text: "Textual formats can often be directly read and understood by humans using a simple text editor.", correct: true },
        { text: "Textual formats inherently include strong encryption.", correct: false },
        { text: "Textual formats do not require character encoding information.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Textual vs. Binary"
},
{
    text: "If a file is compressed using a lossless compression algorithm and then decompressed, the resulting file will be:",
    options: [
        { text: "Identical to the original file.", correct: true },
        { text: "Slightly different, with minor, often imperceptible, data loss.", correct: false },
        { text: "Significantly smaller than the original, but with major data loss.", correct: false },
        { text: "Potentially larger if the original file was already highly random.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Compression Types"
},
{
    text: "For which of the following data types would lossy compression be MOST appropriate and commonly used?",
    options: [
        { text: "Executable program files.", correct: false },
        { text: "Source code files.", correct: false },
        { text: "Digital photographs and music files.", correct: true },
        { text: "Archived financial transaction records.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Compression Types"
},
{
    text: "In a common CSV (Comma-Separated Values) dialect, how is a data field containing a comma (e.g., 'Smith, John') typically represented to avoid being misinterpreted as a separator?",
    options: [
        { text: "The comma is replaced with a semicolon.", correct: false },
        { text: "The comma is escaped with a backslash (e.g., 'Smith\\, John').", correct: false },
        { text: "The entire field is enclosed in double quotes (e.g., '\"Smith, John\"').", correct: true },
        { text: "Commas are not allowed in CSV data fields.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "CSV Format"
},
{
    text: "If a data field in a CSV file needs to contain a double quote character (e.g., the value is 'He said \"Hi\"'), how is this typically handled?",
    options: [
        { text: "The double quote is replaced with a single quote.", correct: false },
        { text: "The double quote is escaped with a backslash (e.g., 'He said \\\"Hi\\\"').", correct: false },
        { text: "The entire field is enclosed in single quotes.", correct: false },
        { text: "The double quote within the data is doubled, and the entire field is enclosed in double quotes (e.g., '\"He said \"\"Hi\"\"\"').", correct: true }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "CSV Format"
},
{
    text: "What is the primary purpose of the JSON (JavaScript Object Notation) file format?",
    options: [
        { text: "To store executable scripts for web browsers.", correct: false },
        { text: "To represent structured data, typically as a tree of objects (key-value pairs) and lists.", correct: true },
        { text: "To define the visual styling of web pages.", correct: false },
        { text: "To store compressed image data.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "JSON Format"
},
{
    text: "In Python, what is the purpose of the `'.encode(\"utf-8\")'` method called on a string?",
    options: [
        { text: "To convert a byte array into a string using UTF-8.", correct: false },
        { text: "To convert a string into a sequence of bytes using the UTF-8 encoding.", correct: true },
        { text: "To check if a string is valid UTF-8.", correct: false },
        { text: "To compress a string using a UTF-8 based algorithm.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Python encode/decode"
},
{
    text: "What does Python's `struct.pack(\">H\", 256)` primarily achieve? ('>' indicates big-endian, 'H' indicates unsigned short)",
    options: [
        { text: "It unpacks a 2-byte sequence into the integer 256.", correct: false },
        { text: "It converts the integer 256 into a 2-byte sequence (byte string) in big-endian order.", correct: true },
        { text: "It compresses the integer 256.", correct: false },
        { text: "It converts the integer 256 into a hexadecimal string.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Python struct module"
},
{
    text: "Which of the following types of data is generally NOT suitable for direct serialization by standard language mechanisms (e.g., Java Serialization, Python Pickle) because its state is external to the program?",
    options: [
        { text: "A simple object with integer and string properties.", correct: false },
        { text: "A list of numbers.", correct: false },
        { text: "An open file descriptor or an active network connection.", correct: true },
        { text: "A custom data structure composed of other serializable objects.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Serialization"
},
{
    text: "Why does repeatedly applying the SAME lossless compression algorithm (e.g., GZIP) to an already compressed file typically not result in significant further size reduction?",
    options: [
        { text: "Each compression pass introduces overhead that negates further gains.", correct: false },
        { text: "The algorithm can only compress data once per file.", correct: false },
        { text: "The first compression pass removes most of the patterns the algorithm targets; the output is more random-like.", correct: true },
        { text: "Lossless algorithms can only achieve a fixed compression ratio.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "Compression Principles"
},
{
    text: "The DEFLATE compression algorithm, commonly used in formats like GZIP and PNG, is a combination of which two techniques?",
    options: [
        { text: "Run-Length Encoding and Arithmetic Coding.", correct: false },
        { text: "Huffman Coding and Lempel-Ziv (LZ77).", correct: true },
        { text: "Discrete Cosine Transform and Quantization.", correct: false },
        { text: "Wavelet Transform and Dictionary Coding.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "DEFLATE Algorithm"
},
{
    text: "What is a primary benefit of enabling HTTP response compression (e.g., GZIP) on a web server?",
    options: [
        { text: "It significantly increases the CPU load on the client\\'s machine.", correct: false },
        { text: "It reduces the amount of data transferred over the network, saving bandwidth and potentially speeding up page load times.", correct: true },
        { text: "It encrypts the HTTP traffic, enhancing security.", correct: false },
        { text: "It guarantees that web content will not be cached by browsers.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "HTTP Compression"
},
{
    text: "When would using a database engine (like PostgreSQL or SQLite) generally be preferred over custom file formats (like JSON or CSV) for data storage?",
    options: [
        { text: "For small, simple configuration files that are rarely changed.", correct: false },
        { text: "When data needs to be frequently queried, modified, or accessed by specific criteria (indexed access).", correct: true },
        { text: "When the data must be human-readable in a plain text editor without any special tools.", correct: false },
        { text: "When the data needs to be archived once and never changed.", correct: false }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "File Formats vs. Databases"
},
{
    text: "Which of the following statements about file formats and compression is TRUE?",
    options: [
        { text: "JPEG uses lossless compression to ensure perfect image fidelity.", correct: false },
        { text: "A .docx file is a binary format that cannot be inspected further even if decompressed.", correct: false },
        { text: "JSON files must always be encoded in UTF-16.", correct: false },
        { text: "The TAR format primarily archives multiple files into one, often without compression itself.", correct: true }
    ],
    lecture: "L8",
    lecture_num: 8,
    topic: "File Formats & Compression (Mixed)"
},
// --- END OF LECTURE 8 QUESTIONS ---

// --- START OF LECTURE 9 QUESTIONS ---
{
    text: "What fundamental problem do templates in C++ (and generics in other static languages) primarily aim to solve?",
    options: [
        { text: "Improve runtime performance significantly over non-template code.", correct: false },
        { text: "Reduce code duplication by writing code that can operate on multiple data types.", correct: true },
        { text: "Simplify dynamic memory allocation.", correct: false },
        { text: "Enable interaction with operating system APIs.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Templates Purpose"
},
{
    text: "In C++, where must the definition (implementation) of a template function or class typically reside if it needs to be used across multiple `.cpp` files?",
    options: [
        { text: "In a `.cpp` source file.", correct: false },
        { text: "In a special `.template` file.", correct: false },
        { text: "In a header file (`.h` or `.hpp`).", correct: true },
        { text: "In the `main` function's file only.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Templates & Headers"
},
{
    text: "What happens during compilation when you use a C++ template like `std::vector<int>` and `std::vector<double>` in your code?",
    options: [
        { text: "A single, generic `vector` code block is compiled that handles all types via runtime checks.", correct: false },
        { text: "The compiler generates separate, specialized versions of the `vector` code specifically for `int` and `double`.", correct: true },
        { text: "The compiler links against pre-compiled libraries for `vector<int>` and `vector<double>`.", correct: false },
        { text: "The template code is interpreted at runtime.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Template Instantiation"
},
{
    text: "Consider a C++ template function `template<typename T> T process(T val) { return val + val; }`. This template will fail to compile if instantiated with a type `T` that:",
    options: [
        { text: "Is a pointer type (e.g., `int*`).", correct: false }, // Pointer addition might compile, though meaning differs.
        { text: "Does not have the `+` operator defined for it.", correct: true },
        { text: "Is a built-in type like `int` or `double`.", correct: false },
        { text: "Has a custom destructor.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Template Compilation"
},
{
    text: "What is 'template specialization' in C++?",
    options: [
        { text: "Using a template only with primitive types.", correct: false },
        { text: "Providing a specific, separate implementation of a template for a particular type (or set of types).", correct: true },
        { text: "The process where the compiler generates code for a template.", correct: false },
        { text: "Writing templates that only work with pointer types.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Template Specialization"
},
{
    text: "The C++ Standard Template Library's `std::vector<bool>` is often cited as an example of template specialization because:",
    options: [
        { text: "It's the only type `std::vector` can be used with.", correct: false },
        { text: "It uses a different internal representation (packing bits) for efficiency compared to `vector` of other types.", correct: true },
        { text: "It requires manual memory management.", correct: false },
        { text: "It can only store `true` values.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Template Specialization Example"
},
{
    text: "Which C++ bitwise operator is used to invert all the bits of its operand?",
    options: [
        { text: "& (AND)", correct: false },
        { text: "| (OR)", correct: false },
        { text: "^ (XOR)", correct: false },
        { text: "~ (NOT)", correct: true }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Bitwise Operators"
},
{
    text: "To check if the 3rd bit (where the least significant bit is bit 0) of an unsigned integer `x` is set (i.e., is 1), which expression is most suitable?",
    options: [
        { text: "`x | (1 << 2)`", correct: false }, // Sets the bit
        { text: "`x & (1 << 2)`", correct: true }, // Result is non-zero if bit is set
        { text: "`x ^ (1 << 2)`", correct: false }, // Flips the bit
        { text: "`x >> 2`", correct: false } // Shifts, but doesn't isolate the single bit
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Bitwise Operations Application"
},
{
    text: "To set the 5th bit (index 4) of an unsigned integer `x` to 1, without changing other bits, which expression should be used?",
    options: [
        { text: "`x = x & ~(1 << 4)`", correct: false }, // Clears the bit
        { text: "`x = x | (1 << 4)`", correct: true }, // Sets the bit
        { text: "`x = x ^ (1 << 4)`", correct: false }, // Flips the bit
        { text: "`x = x << 4`", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Bitwise Operations Application"
},
{
    text: "To clear (set to 0) the 2nd bit (index 1) of an unsigned integer `x`, without changing other bits, which expression should be used?",
    options: [
        { text: "`x = x | (1 << 1)`", correct: false }, // Sets the bit
        { text: "`x = x ^ (1 << 1)`", correct: false }, // Flips the bit
        { text: "`x = x & ~(1 << 1)`", correct: true }, // Clears the bit using AND with inverted mask
        { text: "`x = ~x`", correct: false } // Inverts all bits
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Bitwise Operations Application"
},
{
    text: "What is the core idea behind C++ template metaprogramming?",
    options: [
        { text: "Generating templates automatically based on runtime conditions.", correct: false },
        { text: "Using templates to perform computations during compilation, potentially trading compile time for runtime performance.", correct: true },
        { text: "Writing templates that interact directly with hardware metadata.", correct: false },
        { text: "Creating templates that can only be instantiated with `int`.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Template Metaprogramming"
},
{
    text: "What is a potential drawback of extensive template metaprogramming in C++?",
    options: [
        { text: "Significantly reduced runtime performance.", correct: false },
        { text: "Inability to use templates with custom classes.", correct: false },
        { text: "Increased compilation times and potentially larger executable sizes.", correct: true },
        { text: "Improved code readability.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "Template Metaprogramming Tradeoffs"
},
{
    text: "The C++ Standard Template Library (STL) provides:",
    options: [
        { text: "Only basic data types like `int` and `double`.", correct: false },
        { text: "A collection of pre-compiled functions for common tasks.", correct: false },
        { text: "A set of template classes (like `vector`, `map`) and template functions (like `sort`) for common data structures and algorithms.", correct: true },
        { text: "Graphical user interface components.", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "STL Basics"
},
{
    text: "To use `std::sort` from the STL on a `std::vector<MyClass>`, what typically needs to be defined for `MyClass`?",
    options: [
        { text: "A default constructor `MyClass()`.", correct: false },
        { text: "A destructor `~MyClass()`.", correct: false },
        { text: "The less-than operator (`operator<`) or a custom comparison function.", correct: true },
        { text: "The stream insertion operator (`operator<<`).", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "STL Requirements"
},
{
    text: "If you have `std::vector<MyClass> vec;` and `MyClass` defines `operator<`, how would you sort the vector using the STL?",
    options: [
        { text: "`vec.sort();`", correct: false }, // Member sort is for std::list
        { text: "`sort(vec);`", correct: false },
        { text: "`std::sort(vec.begin(), vec.end());`", correct: true },
        { text: "`std::vector::sort(vec);`", correct: false }
    ],
    lecture: "L9",
    lecture_num: 9,
    topic: "STL Usage"
}, // Add comma here
// --- END OF LECTURE 9 QUESTIONS ---
// --- START OF LECTURE 10 QUESTIONS ---
{
    text: "How does the implementation of generics in Java primarily differ from C++ templates regarding compiled code?",
    options: [
        { text: "Java generates specialized code for each type used, like C++.", correct: false },
        { text: "Java compiles a single generic version, and type information is largely erased at runtime (type erasure).", correct: true },
        { text: "Java templates require manual instantiation, unlike C++.", correct: false },
        { text: "C++ templates support type erasure, while Java generics do not.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Java Generics vs C++ Templates"
},
{
    text: "What is a primary benefit of using generics in Java (e.g., `List<String>`) over using raw types (e.g., `List`) or `Object`?",
    options: [
        { text: "Improved runtime performance due to specialized code.", correct: false },
        { text: "Increased type safety at compile time and reduced need for explicit casting.", correct: true },
        { text: "Automatic serialization of generic types.", correct: false },
        { text: "Ability to store different, unrelated types in the same collection without restriction.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Benefits of Java Generics"
},
{
    text: "If you have a generic type parameter `T` in Java declared simply as `<T>`, which operation is generally NOT allowed directly on a variable `t` of type `T`?",
    options: [
        { text: "Calling `t.toString()`", correct: false },
        { text: "Assigning `t` to another variable of type `T`.", correct: false },
        { text: "Calling a method specific to a subclass like `t.specificMethod()`", correct: true }, // Unless T is bounded
        { text: "Comparing `t == otherT`", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Unbounded Generics Operations"
},
{
    text: "In Java generics, what does the syntax `<T extends Number>` signify?",
    options: [
        { text: "`T` can be any type, but will be treated as `Number`.", correct: false },
        { text: "`T` must be the `Number` class itself.", correct: false },
        { text: "`T` can be `Number` or any subclass of `Number`.", correct: true },
        { text: "`T` must be an interface that extends `Number`.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Bounded Type Parameters"
},
{
    text: "Due to type erasure, what limitation exists when trying to create a new instance of a generic type `T` inside a generic method in Java?",
    options: [
        { text: "You must use `T.class.newInstance()`, which always works.", correct: false },
        { text: "It\'s impossible without using reflection or passing a factory/supplier.", correct: true },
        { text: "You can simply use `new T()`, provided `T` has a default constructor.", correct: false }, // Works in C# / C++, not directly in Java due to erasure
        { text: "You need to cast `new Object()` to `T`.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Type Erasure Limitations"
},
{
    text: "Why can\'t you directly assign a `List<Apple>` to a `List<Fruit>` variable in Java, even if `Apple` extends `Fruit`?",
    options: [
        { text: "Because `List` does not support inheritance.", correct: false },
        { text: "To prevent potential runtime errors if someone later tries to add a non-Apple `Fruit` (like an `Orange`) to the list originally typed as `List<Apple>`.", correct: true },
        { text: "Type erasure prevents the compiler from knowing `Apple` extends `Fruit`.", correct: false },
        { text: "This assignment is actually allowed.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Generics and Subtyping"
},
{
    text: "What does the wildcard syntax `List<? extends Fruit>` (covariance) allow you to do safely with the list?",
    options: [
        { text: "Add any object of type `Fruit` or its subtypes (`Apple`, `Orange`).", correct: false },
        { text: "Get elements from the list and treat them as `Fruit` (or `Object`). You cannot safely add new elements (except null).", correct: true },
        { text: "Add only objects of type `Fruit`.", correct: false },
        { text: "Get elements and cast them specifically to `Apple`.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Covariance (? extends T)"
},
{
    text: "What does the wildcard syntax `List<? super Apple>` (contravariance) allow you to do safely with the list?",
    options: [
        { text: "Get elements from the list and treat them as `Apple`.", correct: false },
        { text: "Add objects of type `Apple` (or its subtypes, if any). You can only safely get elements as `Object`.", correct: true },
        { text: "Add any object of type `Object`.", correct: false },
        { text: "Only add objects of the exact type the list was originally declared with.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Contravariance (? super T)"
},
{
    text: "What defines a 'functional interface' in Java?",
    options: [
        { text: "Any interface used for functional programming.", correct: false },
        { text: "An interface with exactly one abstract method (though it can have default methods).", correct: true },
        { text: "An interface that only contains static methods.", correct: false },
        { text: "An interface that extends `java.util.function.Function`.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Functional Interfaces"
},
{
    text: "What is the primary purpose of lambda functions (e.g., `x -> x * 2`) in Java?",
    options: [
        { text: "To define new classes more concisely.", correct: false },
        { text: "To provide a compact syntax for creating instances of functional interfaces.", correct: true },
        { text: "To replace all traditional loops.", correct: false },
        { text: "To handle multithreading automatically.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Lambda Functions"
},
{
    text: "In the Java Stream API, what is the typical role of the `filter` operation?",
    options: [
        { text: "To transform each element into a different type.", correct: false },
        { text: "To select elements from the stream based on a condition (predicate).", correct: true },
        { text: "To collect the stream elements into a List or other collection.", correct: false },
        { text: "To sort the elements in the stream.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Java Stream API"
},
{
    text: "In the Java Stream API, what is the typical role of the `map` operation?",
    options: [
        { text: "To create a `Map` data structure from the stream.", correct: false },
        { text: "To select elements based on a condition.", correct: false },
        { text: "To transform each element in the stream into another object (possibly of a different type).", correct: true },
        { text: "To perform a final action on each element without changing the stream.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Java Stream API"
},
{
    text: "Consider the Java stream code: `List<String> names = people.stream().map(Person::getName).toList();`. What does this achieve?",
    options: [
        { text: "Filters the `people` list to only include those named \"Name\".", correct: false },
        { text: "Creates a list of strings, where each string is the name obtained from each `Person` object in the `people` list.", correct: true },
        { text: "Converts the `people` list into a single string of names.", correct: false },
        { text: "Creates a Map where keys are people and values are names.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Java Stream API Usage"
},
{
    text: "Which statement accurately describes a key difference between Java generics and C# generics regarding runtime information?",
    options: [
        { text: "Both Java and C# erase generic type information at runtime.", correct: false },
        { text: "Java preserves generic type information at runtime, while C# erases it.", correct: false },
        { text: "C# preserves generic type information at runtime (allowing operations like `new T()`), while Java largely erases it.", correct: true },
        { text: "Neither language supports querying generic type information at runtime.", correct: false }
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Java vs C# Generics"
},
{
    text: "If you need a Java generic method to work with types that can be compared, how should you bound the type parameter `T`?",
    options: [
        { text: "`<T extends Object>`", correct: false },
        { text: "`<T implements Comparable>`", correct: false }, // 'implements' is not used in bounds
        { text: "`<T extends Comparable<T>>`", correct: true }, // Bounded by Comparable of itself
        { text: "`<T super Comparable>`", correct: false } // 'super' is used for wildcards, not bounds
    ],
    lecture: "L10",
    lecture_num: 10,
    topic: "Bounded Type Parameters"
}
// --- END OF LECTURE 10 QUESTIONS ---
// --- START OF LECTURE 11 QUESTIONS ---
,
{
    text: "What is the primary purpose of the Adapter design pattern?",
    options: [
        { text: "To add new responsibilities to an object dynamically.", correct: false },
        { text: "To allow objects with incompatible interfaces to work together.", correct: true },
        { text: "To define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.", correct: false },
        { text: "To allow an object to alter its behavior when its internal state changes.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Adapter Pattern"
},
{
    text: "You have a class `LegacyPrinter` with a `printDocument(String doc)` method. You need to use it where an interface `ModernPrinter` with a method `sendToPrintQueue(String document)` is expected. You cannot modify `LegacyPrinter`. Which pattern is most suitable?",
    options: [
        { text: "Decorator", correct: false },
        { text: "Observer", correct: false },
        { text: "Adapter", correct: true },
        { text: "State", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Adapter Pattern Application"
},
{
    text: "In the Adapter pattern, the adapter class typically:",
    options: [
        { text: "Inherits implementation from both the adaptee and the target interface.", correct: false },
        { text: "Holds an instance of the adaptee class and implements the target interface, delegating calls to the adaptee.", correct: true },
        { text: "Replaces the original class entirely.", correct: false },
        { text: "Observes the adaptee for changes.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Adapter Pattern Implementation"
}, // Added comma
{
    text: "What problem does the Decorator design pattern primarily solve?",
    options: [
        { text: "Allowing incompatible interfaces to collaborate.", correct: false },
        { text: "Attaching additional responsibilities or behaviors to an object dynamically without altering its class.", correct: true },
        { text: "Ensuring only one instance of a class is created.", correct: false },
        { text: "Decoupling the sender of a request from its receiver.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Decorator Pattern"
},
{
    text: "You have a `SimpleFileWriter` class implementing a `Writer` interface. You want to add logging behavior (printing messages before/after writing) without changing `SimpleFileWriter`. Which pattern is best suited?",
    options: [
        { text: "Adapter", correct: false },
        { text: "Observer", correct: false },
        { text: "State", correct: false },
        { text: "Decorator", correct: true }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Decorator Pattern Application"
},
{
    text: "A key characteristic of the Decorator pattern is that the decorator class usually:",
    options: [
        { text: "Implements the same interface as the object it decorates and holds a reference to that object.", correct: true },
        { text: "Is a subclass of the object it decorates.", correct: false },
        { text: "Cannot be combined with other decorators.", correct: false },
        { text: "Changes the interface of the object it decorates.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Decorator Pattern Implementation"
},
{
    text: "What is the core idea behind the Observer design pattern?",
    options: [
        { text: "Wrapping an existing class to provide a different interface.", correct: false },
        { text: "Allowing an object (subject/observable) to notify multiple dependent objects (observers) automatically when its state changes.", correct: true },
        { text: "Encapsulating state-specific behavior within separate objects.", correct: false },
        { text: "Adding functionality to an object dynamically.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Observer Pattern"
},
{
    text: "In the Observer pattern, the 'Subject' (or 'Observable') typically maintains:",
    options: [
        { text: "A reference to only one Observer.", correct: false },
        { text: "The state of each Observer.", correct: false },
        { text: "A list of registered Observer objects.", correct: true },
        { text: "A detailed log of all state changes.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Observer Pattern Components"
},
{
    text: "What is the role of the 'Observer' interface in the Observer pattern?",
    options: [
        { text: "To define the state of the Subject.", correct: false },
        { text: "To define the method(s) the Subject will call on observers when a notification occurs (e.g., `update()`).", correct: true },
        { text: "To manage the list of observers within the Subject.", correct: false },
        { text: "To directly modify the Subject's state.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Observer Pattern Components"
},
{
    text: "A benefit of the Observer pattern is that:",
    options: [
        { text: "It tightly couples the Subject and its Observers.", correct: false },
        { text: "Subjects and Observers can vary independently; new Observers can be added without changing the Subject.", correct: true },
        { text: "It simplifies the state management within the Subject.", correct: false },
        { text: "It guarantees real-time notification delivery.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Observer Pattern Benefits"
},
{
    text: "The State design pattern is primarily used when:",
    options: [
        { text: "An object needs to notify others about its state changes.", correct: false },
        { text: "An object's behavior needs to change significantly depending on its internal state.", correct: true },
        { text: "An existing object's interface needs to be adapted.", correct: false },
        { text: "Functionality needs to be added to an object without subclassing.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "State Pattern"
},
{
    text: "How does the State pattern typically achieve varying behavior based on state?",
    options: [
        { text: "Using large `if/else if/else` or `switch` statements within the main object's methods.", correct: false }, // This is often what the pattern replaces
        { text: "By encapsulating state-specific behavior into separate state objects and delegating calls to the current state object.", correct: true },
        { text: "By using the Observer pattern to change behavior.", correct: false },
        { text: "By dynamically loading different classes at runtime.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "State Pattern Implementation"
},
{
    text: "Consider a traffic light object. Its behavior (what happens when `timerTick()` is called) depends on whether its state is RED, YELLOW, or GREEN. Which pattern fits well for managing these behaviors?",
    options: [
        { text: "Adapter", correct: false },
        { text: "Decorator", correct: false },
        { text: "State", correct: true },
        { text: "Observer", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "State Pattern Application"
},
{
    text: "What is a potential advantage of using the State pattern over large conditional statements for state management?",
    options: [
        { text: "It reduces the number of classes required.", correct: false },
        { text: "It makes adding new states and behaviors easier by localizing state-specific logic in separate classes.", correct: true },
        { text: "It guarantees faster state transitions.", correct: false },
        { text: "It eliminates the need for a context object.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "State Pattern Benefits"
},
{
    text: "You are implementing the Adapter pattern to make `OldSystem` conform to the `NewInterface`. Your `Adapter` class holds an instance of `OldSystem`. When a method from `NewInterface` is called on the `Adapter`, what should the `Adapter` primarily do?",
    options: [
        { text: "Re-implement the logic from `OldSystem`.", correct: false },
        { text: "Throw an UnsupportedOperationException.", correct: false },
        { text: "Translate the call and delegate it to the appropriate method(s) on the `OldSystem` instance.", correct: true },
        { text: "Notify observers that the method was called.", correct: false }
    ],
    lecture: "L11",
    lecture_num: 11,
    topic: "Adapter Pattern Implementation"
},
// --- END OF LECTURE 11 QUESTIONS ---

// --- START OF LECTURE 13 QUESTIONS ---
{
    text: "What is the primary goal of the Builder design pattern?",
    options: [
        { text: "To ensure a class only has one instance.", correct: false },
        { text: "To separate the construction of a complex object from its representation, allowing the same construction process to create different representations.", correct: true },
        { text: "To define a family of algorithms, encapsulate each one, and make them interchangeable.", correct: false },
        { text: "To provide a surrogate or placeholder for another object to control access to it.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Builder Pattern"
},
{
    text: "When is the Builder pattern particularly useful?",
    options: [
        { text: "When creating simple objects with few constructor parameters.", correct: false },
        { text: "When an object needs to be constructed step-by-step, or when it has many optional constructor parameters.", correct: true },
        { text: "When you need to add functionality to an object dynamically.", correct: false },
        { text: "When you need to ensure thread safety during object creation.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Builder Pattern Application"
},
{
    text: "A 'fluent interface' often seen with the Builder pattern involves:",
    options: [
        { text: "Builder methods returning `void`.", correct: false },
        { text: "Builder methods returning the final object being built at each step.", correct: false },
        { text: "Builder methods (like `withName`, `withAge`) returning the builder object itself (`this`), allowing method chaining.", correct: true },
        { text: "Using only static methods in the builder.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Builder Pattern Fluent Interface"
},
{
    text: "What problem does the Factory (or Factory Method) design pattern primarily address?",
    options: [
        { text: "Hiding the complexity of object creation by defining an interface for creating an object, but letting subclasses decide which class to instantiate.", correct: true },
        { text: "Adding behavior to objects without modifying their class.", correct: false },
        { text: "Ensuring that objects are notified of changes in other objects.", correct: false },
        { text: "Managing the state transitions of an object.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Factory Pattern"
},
{
    text: "In the context of Java generics with type erasure, how can the Factory pattern help instantiate objects of a generic type `T`?",
    options: [
        { text: "It allows direct use of `new T()`.", correct: false },
        { text: "By passing a factory (e.g., a `Supplier<T>`) into the generic class/method, which knows how to create specific instances of `T`.", correct: true },
        { text: "It automatically infers the constructor for `T`.", correct: false },
        { text: "The Factory pattern cannot be used with generics.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 10, // Relates back to L10 limitation
    topic: "Factory Pattern & Generics"
},
{
    text: "What is the core principle of the Dependency Injection (DI) pattern?",
    options: [
        { text: "Objects create their own dependencies internally (e.g., using `new`).", correct: false },
        { text: "Dependencies (objects or services that a class needs) are provided to the class from an external source, typically via constructor parameters or setters.", correct: true },
        { text: "All dependencies are declared as static variables.", correct: false },
        { text: "Dependencies are discovered at runtime using reflection.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 12, // Introduced in L12 examples
    topic: "Dependency Injection"
},
{
    text: "A major benefit of using Dependency Injection is:",
    options: [
        { text: "Improved runtime performance.", correct: false },
        { text: "Reduced memory consumption.", correct: false },
        { text: "Increased testability, as dependencies can be easily replaced with mock objects during testing.", correct: true },
        { text: "Simplified object construction syntax.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 12, // Introduced in L12 examples
    topic: "Dependency Injection Benefits"
},
{
    text: "Assigning the literal number `86400` directly in code without explanation might be considered which antipattern?",
    options: [
        { text: "God Object", correct: false },
        { text: "Magic Number", correct: true },
        { text: "Low Cohesion", correct: false },
        { text: "Duplication", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Antipatterns"
},
{
    text: "A class that handles database connections, user authentication, file I/O, and email sending likely suffers from which antipattern?",
    options: [
        { text: "Magic Number", correct: false },
        { text: "God Object / Low Cohesion", correct: true },
        { text: "Dependency Injection", correct: false }, // DI helps combat this
        { text: "High Coupling (though likely also present)", correct: false } // God Object/Low Cohesion is more specific here
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Antipatterns"
},
{
    text: "Why is relying heavily on global variables or static properties often considered an antipattern, especially regarding testing?",
    options: [
        { text: "They improve code readability.", correct: false },
        { text: "They make it difficult to isolate components for testing and to replace dependencies with mocks.", correct: true },
        { text: "They are less memory efficient.", correct: false },
        { text: "They cannot be accessed from multiple threads.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "Antipatterns"
}, // Added comma
{
    text: "What is the fundamental tradeoff involved in caching?",
    options: [
        { text: "It reduces the number of potentially expensive system calls needed to interact with the OS.", correct: true },
        { text: "It guarantees data is immediately written physically to the disk.", correct: false },
        { text: "It enforces a specific character encoding.", correct: false },
        { text: "It makes adding new states and behaviors easier by localizing state-specific logic in separate classes.", correct: false }
    ],
    lecture: "L13",
    lecture_num: 13,
    topic: "HTTP Caching"
}
// --- END OF LECTURE 13 QUESTIONS ---
];