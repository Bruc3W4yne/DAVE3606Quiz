const questions = [
    
{
    text: "What is generally the MOST important factor determining how fast a program runs for a given input, assuming a non-trivial task?",
        options: [
            { text: "The specific programming language chosen", correct: false },
            { text: "The underlying algorithm's efficiency", correct: true },
            { text: "The optimization level used during compilation (e.g., -O3)", correct: false },
            { text: "The clock speed of the CPU", correct: false }
        ],
            lecture: "L1"
},
{
    text: "Which of the following is a common tradeoff when optimizing a program?",
        options: [
            { text: "Reducing memory usage always reduces execution time.", correct: false },
            { text: "Increasing execution speed might require using more memory or more developer time.", correct: true },
            { text: "Increasing execution speed always decreases executable size.", correct: false },
            { text: "Reducing developer time always leads to the fastest execution.", correct: false }
        ],
            lecture: "L1"
},
{
    text: "Which execution mode describes how Python programs are typically run?",
        options: [
            { text: "Compiled directly to machine code", correct: false },
            { text: "Interpreted", correct: true },
            { text: "Virtual Machine (Bytecode interpretation)", correct: false },
            { text: "Statically linked only", correct: false }
        ],
            lecture: "L1"
},
{
    text: "Java programs are typically compiled into bytecode, which is then executed by a:",
        options: [
            { text: "Compiler", correct: false },
            { text: "Interpreter directly on source code", correct: false },
            { text: "Virtual Machine (JVM)", correct: true },
            { text: "Operating System Kernel", correct: false }
        ],
            lecture: "L1"
},
{
    text: "What is a primary characteristic of compiled languages like C++?",
        options: [
            { text: "Source code is read and executed line-by-line at runtime.", correct: false },
            { text: "They require an interpreter installed on the target machine.", correct: false },
            { text: "Source code is translated into machine-specific code before runtime.", correct: true },
            { text: "They cannot use external libraries.", correct: false }
        ],
            lecture: "L1"
},
{
    text: "Why might a program written in Java sometimes run faster than a similar program written in C++, despite C++ being compiled directly to machine code?",
        options: [
            { text: "Java avoids pointer usage.", correct: false },
            { text: "Java's bytecode is inherently faster than machine code.", correct: false },
            { text: "Sophisticated Just-In-Time (JIT) compilers in the JVM can perform runtime optimizations.", correct: true },
            { text: "C++ compilers do not perform any optimizations.", correct: false }
        ],
            lecture: "L1"
},
{
    text: "What does the `user` time reported by the `time` command typically represent?",
        options: [
            { text: "Total wall-clock time elapsed.", correct: false },
            { text: "Time spent by the CPU executing the program's own code (userspace).", correct: true },
            { text: "Time spent by the CPU executing operating system tasks on behalf of the program (kernel space).", correct: false },
            { text: "Time the program spent waiting for user input.", correct: false }
        ],
            lecture: "L1"
},
{
    text: "Compiler optimization 'Constant Folding' refers to:",
        options: [
            { text: "Replacing function calls with the function's body.", correct: false },
            { text: "Computing constant expressions (like 24*60*60) at compile time.", correct: true },
            { text: "Unrolling loops to reduce branching.", correct: false },
            { text: "Replacing expensive operations with cheaper ones (e.g., multiplication with addition).", correct: false }
        ],
            lecture: "L1"
},
{
    text: "'Undefined Behavior' in C++ implies that:",
        options: [
            { text: "The program will produce a consistent, documented error.", correct: false },
            { text: "The compiler guarantees to catch the issue and warn the user.", correct: false },
            { text: "The C++ standard places no requirements on the outcome; behavior is unpredictable.", correct: true },
            { text: "The behavior is defined by the specific operating system.", correct: false }
        ],
            lecture: "L1"
},
{
    text: "What is the consequence of Signed Integer Overflow in C++ according to the standard?",
        options: [
            { text: "The value wraps around predictably (like in Java).", correct: false },
            { text: "It throws a runtime exception.", correct: false },
            { text: "It results in Undefined Behavior.", correct: true },
            { text: "The compiler automatically promotes the integer to a larger type.", correct: false }
        ],
            lecture: "L1"
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
            lecture: "L1"
},
{
    text: "Compiling a C++ file `hello.cpp` using `g++ hello.cpp` (with no other flags) typically produces an executable file named:",
        options: [
            { text: "hello", correct: false },
            { text: "hello.exe", correct: false },
            { text: "a.out", correct: true }, // Or a.exe on Windows/MSYS2
            { text: "hello.o", correct: false }
        ],
            lecture: "L1"
},
{
    text: "Compiling a C++ file `hello.cpp` using `g++ hello.cpp -o hello` produces an executable file named:",
        options: [
            { text: "hello", correct: true },
            { text: "hello.exe", correct: false }, // Usually needs explicit .exe on Windows
            { text: "a.out", correct: false },
            { text: "hello.o", correct: false }
        ],
            lecture: "L1"
},
{
    text: "The optimization technique where the compiler replaces a function call with the actual code of the function is known as:",
        options: [
            { text: "Constant Folding", correct: false },
            { text: "Strength Reduction", correct: false },
            { text: "Loop Unrolling", correct: false },
            { text: "Inlining", correct: true }
        ],
            lecture: "L1"
},
{
    text: "What is the difference between `user` time and `sys` time reported by the `time` command?",
        options: [
            { text: "`user` is program code, `sys` is OS code executed for the program.", correct: true },
            { text: "`user` is single-thread time, `sys` is multi-thread time.", correct: false },
            { text: "`user` is CPU time, `sys` is disk I/O time.", correct: false },
            { text: "`user` is time spent running, `sys` is time spent waiting.", correct: false }
        ],
            lecture: "L1"
}
,
{
    text: "What is the definition of an algorithm?",
    options: [
        { text: "A specific input for a problem, like a list [3, 1, 4].", correct: false },
        { text: "A general statement of what input and output look like for a task.", correct: false },
        { text: "A detailed, unambiguous description of how to solve a problem.", correct: true },
        { text: "A measure of how fast a program runs.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "In complexity analysis, what is considered a 'primitive step'?",
    options: [
        { text: "Any single line of code.", correct: false },
        { text: "An operation executable in a constant amount of time, independent of input size (e.g., basic arithmetic on fixed-size numbers).", correct: true },
        { text: "Sorting an entire list.", correct: false },
        { text: "Concatenating two strings of variable length.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Big-O notation, O(g(n)), provides what kind of bound on a function f(n)?",
    options: [
        { text: "A tight bound (f grows exactly as fast as g).", correct: false },
        { text: "A lower bound (f grows at least as fast as g).", correct: false },
        { text: "An upper bound (f grows no faster than g).", correct: true },
        { text: "An average-case bound.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Big-Omega notation, Ω(g(n)), provides what kind of bound on a function f(n)?",
    options: [
        { text: "A tight bound (f grows exactly as fast as g).", correct: false },
        { text: "A lower bound (f grows at least as fast as g).", correct: true },
        { text: "An upper bound (f grows no faster than g).", correct: false },
        { text: "A best-case bound only.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Big-Theta notation, Θ(g(n)), signifies that f(n) and g(n):",
    options: [
        { text: "Grow at the same rate asymptotically.", correct: true },
        { text: "f(n) always grows faster than g(n).", correct: false },
        { text: "f(n) always grows slower than g(n).", correct: false },
        { text: "Represent only the worst-case scenario.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "If an algorithm's runtime is described as 7n^2 + 3n + 4, what is its complexity in Big-Theta notation?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(n^2)", correct: true },
        { text: "Θ(n^3)", correct: false },
        { text: "Θ(1)", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Which category of sorting algorithms typically involves doubly-nested loops iterating over elements, leading to their characteristic runtime?",
    options: [
        { text: "Linear-time sorts (Bucket, Counting, Radix)", correct: false },
        { text: "N-log-N-time sorts (Merge, Heap, Quicksort)", correct: false },
        { text: "Quadratic-time sorts (Selection, Insertion, Bubble)", correct: true },
        { text: "Comparison sorts only.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "What is the typical time complexity of Insertion Sort in the best case (already sorted list)?",
    options: [
        { text: "Θ(n^2)", correct: false },
        { text: "Θ(n log n)", correct: false },
        { text: "Θ(n)", correct: true },
        { text: "Θ(1)", correct: false }
    ],
    lecture: "L2"
},
{
    text: "What is the worst-case time complexity of Quicksort?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(n log n)", correct: false },
        { text: "Θ(n^2)", correct: true },
        { text: "Θ(log n)", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Merge Sort and Heap Sort guarantee a time complexity of:",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(n log n)", correct: true },
        { text: "Θ(n^2)", correct: false },
        { text: "Depends on input data distribution.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Why is repeatedly concatenating strings inside a loop (e.g., `result += next_string`) often inefficient in languages like Python or Java where strings are immutable?",
    options: [
        { text: "It causes too many function calls.", correct: false },
        { text: "Each concatenation creates a new string, copying all previous characters, leading to quadratic time complexity (painter's algorithm).", correct: true },
        { text: "String comparisons become slow.", correct: false },
        { text: "It leads to stack overflows.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "How can the inefficiency of repeated string concatenation in a loop be mitigated in Python?",
    options: [
        { text: "Using f-strings exclusively.", correct: false },
        { text: "Appending each piece to a list and using `''.join(list)` at the end.", correct: true },
        { text: "Converting strings to integers first.", correct: false },
        { text: "There is no way to improve it significantly.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Amortized analysis is used when:",
    options: [
        { text: "An algorithm's runtime is always constant.", correct: false },
        { text: "Analyzing the average runtime over a sequence of operations, where individual operations might have varying costs.", correct: true },
        { text: "Analyzing only the worst-case scenario.", correct: false },
        { text: "Analyzing algorithms that use recursion.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Appending an element to an expandable list (like Python's list or Java's ArrayList) has what amortized time complexity?",
    options: [
        { text: "Θ(n)", correct: false },
        { text: "Θ(log n)", correct: false },
        { text: "Θ(1)", correct: true },
        { text: "Θ(n^2)", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Which algorithm design technique involves repeatedly making the choice that seems best at the current moment?",
    options: [
        { text: "Dynamic Programming", correct: false },
        { text: "Divide and Conquer", correct: false },
        { text: "Greedy Algorithm", correct: true },
        { text: "Backtracking", correct: false }
    ],
    lecture: "L2"
},
{
    text: "What is a potential pitfall of using a greedy algorithm?",
    options: [
        { text: "They are always computationally expensive.", correct: false },
        { text: "They might not produce the globally optimal solution.", correct: true },
        { text: "They only work for sorting problems.", correct: false },
        { text: "They require complex data structures.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "Which of these is NOT listed as an operation that is generally considered a primitive step in complexity analysis?",
    options: [
        { text: "Basic arithmetic (+, -, *, /) on fixed-size numbers.", correct: false },
        { text: "Reading/writing a variable.", correct: false },
        { text: "Computing the square root of a number.", correct: true },
        { text: "Comparing two fixed-size numbers.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "What does it mean for a problem instance (e.g., sorting `[3, 1, 4]`) in relation to a problem (e.g., sorting)?",
    options: [
        { text: "It's the algorithm used to solve the problem.", correct: false },
        { text: "It's a specific input for the general problem.", correct: true },
        { text: "It's the runtime complexity of the problem.", correct: false },
        { text: "It's a type of data structure.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "The lecture mentions several well-known problems like Minimum Spanning Tree and Maximum Flow. What is the key takeaway regarding these?",
    options: [
        { text: "You need to memorize the implementation details of Prim's and Kruskal's algorithms.", correct: false },
        { text: "These problems are unsolvable.", correct: false },
        { text: "You should be aware that established, efficient algorithms exist for these common problems.", correct: true },
        { text: "These problems can only be solved using greedy algorithms.", correct: false }
    ],
    lecture: "L2"
},
{
    text: "If an algorithm takes O(n^2) time and Ω(n) time, which notation CANNOT be used to describe its overall complexity precisely?",
    options: [
        { text: "O(n^2)", correct: false },
        { text: "Ω(n)", correct: false },
        { text: "Θ notation (e.g., Θ(n) or Θ(n^2))", correct: true }, // Because the upper and lower bounds differ
        { text: "It cannot be described with asymptotic notation.", correct: false }
    ],
    lecture: "L2"
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
    lecture: "L3"
},
{
    text: "If you want to use instances of your own custom class as keys in a Java HashMap or Python dict, what two methods must you typically implement?",
    options: [
        { text: "toString() and compareTo()", correct: false },
        { text: "equals() and hashCode() (Java) / __eq__() and __hash__() (Python)", correct: true },
        { text: "clone() and finalize()", correct: false },
        { text: "getKey() and getValue()", correct: false }
    ],
    lecture: "L3"
},
{
    text: "What is the critical relationship required between the `equals()` and `hashCode()` methods for objects used as hashmap keys?",
    options: [
        { text: "If two objects are equal according to `equals()`, they MUST have the same `hashCode()`.", correct: true },
        { text: "If two objects have the same `hashCode()`, they MUST be equal according to `equals()`.", correct: false }, // Collisions are allowed
        { text: "`hashCode()` must return a unique value for every object.", correct: false },
        { text: "There is no required relationship.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "Why is using the length of a string generally a bad idea for its hash code?",
    options: [
        { text: "Calculating string length is too slow.", correct: false },
        { text: "It produces too large hash codes.", correct: false },
        { text: "It causes many collisions (all strings of the same length get the same hash code).", correct: true },
        { text: "String length is mutable.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "What is the memoization technique primarily used for?",
    options: [
        { text: "Reducing the memory usage of recursive functions.", correct: false },
        { text: "Avoiding recomputing the results of function calls with the same inputs by storing previous results.", correct: true },
        { text: "Improving the accuracy of floating-point calculations.", correct: false },
        { text: "Making code easier to read.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "Memoization is particularly effective for recursive functions that exhibit which property?",
    options: [
        { text: "Deep recursion depth without repeating calls.", correct: false },
        { text: "Overlapping subproblems (the same sub-problems are solved multiple times).", correct: true },
        { text: "Linear time complexity.", correct: false },
        { text: "Using only primitive data types.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "What is a major potential issue when implementing deeply recursive algorithms in many programming languages?",
    options: [
        { text: "Running out of heap memory.", correct: false },
        { text: "Exceeding the maximum call stack depth (StackOverflowError/RecursionError).", correct: true },
        { text: "Integer overflow.", correct: false },
        { text: "Hash collisions.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "In graph traversal, Depth-First Search (DFS) typically explores:",
    options: [
        { text: "Nodes level by level, exploring all neighbors at the current depth before moving deeper.", correct: false },
        { text: "As deep as possible along one path before backtracking.", correct: true },
        { text: "Nodes in a random order.", correct: false },
        { text: "Only the nodes adjacent to the start node.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "When performing DFS on a general graph (which might contain cycles), why is it essential to keep track of visited nodes?",
    options: [
        { text: "To ensure all nodes are processed exactly once and avoid infinite loops.", correct: true },
        { text: "To calculate the shortest path.", correct: false },
        { text: "To prioritize nodes with fewer edges.", correct: false },
        { text: "It's only necessary for tree traversal.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "What is the typical time complexity of DFS on a graph represented by adjacency lists, assuming processing each node and edge takes constant time?",
    options: [
        { text: "O(V log E)", correct: false },
        { text: "O(V * E)", correct: false },
        { text: "O(V + E)", correct: true }, // V for visiting nodes, E for exploring edges
        { text: "O(V^2)", correct: false }
    ],
    lecture: "L3"
},
{
    text: "How can the stack depth limitation of recursive DFS be overcome for very large or deep graphs?",
    options: [
        { text: "By increasing the heap size.", correct: false },
        { text: "By using memoization.", correct: false },
        { text: "By implementing an iterative version using an explicit stack data structure.", correct: true },
        { text: "By switching to Breadth-First Search (BFS).", correct: false }
    ],
    lecture: "L3"
},
{
    text: "What does the Python list comprehension `[x*x for x in numbers if x % 2 == 0]` do?",
    options: [
        { text: "Squares all numbers in the list `numbers`.", correct: false },
        { text: "Creates a list of squares of only the even numbers in `numbers`.", correct: true },
        { text: "Checks if all numbers in `numbers` are even.", correct: false },
        { text: "Creates a list containing only the even numbers from `numbers`.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "Consider the Java stream operation: `values.stream().filter(x -> x > 10).map(x -> x * 2).toList();`. What does this produce?",
    options: [
        { text: "A list of all values from `values` multiplied by 2.", correct: false },
        { text: "A list of values from `values` that are greater than 10.", correct: false },
        { text: "A list containing doubled values, but only for those original values in `values` that were greater than 10.", correct: true },
        { text: "A boolean indicating if any value in `values` is greater than 10.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "If `condition(x)` takes O(n) time and `transform(x)` takes O(1) time, what is the approximate time complexity of the Python list comprehension `[transform(x) for x in values if condition(x)]` where `len(values)` is n?",
    options: [
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: false },
        { text: "O(n^2)", correct: true }, // n calls to condition, each taking O(n) time dominates
        { text: "O(1)", correct: false }
    ],
    lecture: "L3"
},
{
    text: "What is a key difference between a Python generator comprehension (using parentheses) and a list comprehension (using square brackets)?",
    options: [
        { text: "Generators produce results immediately, lists compute lazily.", correct: false },
        { text: "Generators compute values lazily (on demand), potentially saving memory; lists compute all values upfront.", correct: true },
        { text: "Generators can only work with numbers.", correct: false },
        { text: "List comprehensions are faster for large datasets.", correct: false }
    ],
    lecture: "L3"
},
{
    text: "To emulate a mathematical set using a hashmap/dictionary, what could the values associated with the keys typically be?",
    options: [
        { text: "The index of the element.", correct: false },
        { text: "A count of how many times the element was added.", correct: false },
        { text: "A simple boolean value (e.g., True) indicating presence.", correct: true },
        { text: "The hash code of the element.", correct: false }
    ],
    lecture: "L3"
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
    lecture: "L4"
},
{
    text: "What information does the raw memory typically contain alongside the byte values?",
    options: [
        { text: "Metadata indicating the data type (e.g., int, float, string).", correct: false },
        { text: "Markers indicating the start and end of each value.", correct: false },
        { text: "Only the byte values; type and structure interpretation is the program's responsibility.", correct: true },
        { text: "The variable name associated with the data.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "What does 'Endianness' refer to in the context of multi-byte values in memory?",
    options: [
        { text: "The total number of bytes used by a value.", correct: false },
        { text: "Whether the memory address is stored as binary or hexadecimal.", correct: false },
        { text: "The order in which the bytes of a multi-byte value are arranged in memory addresses (most significant first or least significant first).", correct: true },
        { text: "The maximum value a data type can hold.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "If a 4-byte integer 0x12345678 is stored at address 0x100 in a little-endian system, what byte value will be at address 0x100?",
    options: [
        { text: "0x12", correct: false },
        { text: "0x34", correct: false },
        { text: "0x56", correct: false },
        { text: "0x78", correct: true } // Least significant byte first
    ],
    lecture: "L4"
},
{
    text: "If a 4-byte integer 0x12345678 is stored at address 0x100 in a big-endian system, what byte value will be at address 0x100?",
    options: [
        { text: "0x12", correct: true }, // Most significant byte first
        { text: "0x34", correct: false },
        { text: "0x56", correct: false },
        { text: "0x78", correct: false }
    ],
    lecture: "L4"
},
{
    text: "What is the primary purpose of the 'call stack' during program execution?",
    options: [
        { text: "To store dynamically allocated objects (heap memory).", correct: false },
        { text: "To manage memory for function calls, holding parameters, local variables, and return addresses in stack frames.", correct: true },
        { text: "To store the program's compiled machine code.", correct: false },
        { text: "To cache frequently accessed data.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "In C++, what does the `&` operator typically do when applied to a variable (e.g., `&myVar`)?",
    options: [
        { text: "Dereferences a pointer to get the value.", correct: false },
        { text: "Performs a bitwise AND operation.", correct: false },
        { text: "Returns the memory address of the variable.", correct: true },
        { text: "Allocates new memory for the variable.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "In C++, what does the `*` operator typically do when applied to a pointer variable (e.g., `*myPtr`) in an expression?",
    options: [
        { text: "Gets the memory address the pointer holds.", correct: false },
        { text: "Declares a variable as a pointer type.", correct: false },
        { text: "Dereferences the pointer, accessing the value it points to.", correct: true },
        { text: "Multiplies the pointer address by a value.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "What is `nullptr` in C++ (or `null` in Java)?",
    options: [
        { text: "A special keyword indicating an uninitialized variable.", correct: false },
        { text: "A pointer/reference that intentionally does not point to a valid object or memory location.", correct: true },
        { text: "An exception thrown when memory allocation fails.", correct: false },
        { text: "A pointer to memory address 0.", correct: false } // It represents this conceptually, but the actual address might differ
    ],
    lecture: "L4"
},
{
    text: "What happens if you attempt to dereference a null pointer in C++ (e.g., `*nullPtr` or `nullPtr->member`)?",
    options: [
        { text: "It returns a default value (like 0 or false).", correct: false },
        { text: "It results in Undefined Behavior, likely crashing the program.", correct: true },
        { text: "The compiler prevents this with an error.", correct: false },
        { text: "It automatically allocates memory for the pointer.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "Where are local variables and function parameters typically allocated?",
    options: [
        { text: "The Heap", correct: false },
        { text: "The Call Stack (Automatic Allocation)", correct: true },
        { text: "Static Memory", correct: false },
        { text: "Read-Only Memory", correct: false }
    ],
    lecture: "L4"
},
{
    text: "Memory allocated using the `new` operator in C++ or Java resides in which memory region?",
    options: [
        { text: "The Call Stack", correct: false },
        { text: "Static Memory", correct: false },
        { text: "The Heap (Dynamic Allocation)", correct: true },
        { text: "The CPU Cache", correct: false }
    ],
    lecture: "L4"
},
{
    text: "What does dynamic memory allocation allow that automatic (stack) allocation does not?",
    options: [
        { text: "Variables to have shorter lifetimes.", correct: false },
        { text: "Memory to persist even after the function that allocated it returns.", correct: true },
        { text: "Faster memory access.", correct: false },
        { text: "Allocation of primitive types only.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "In C++, if you allocate memory with `new int`, what is the potential danger if you don't provide an initial value in parentheses?",
    options: [
        { text: "The allocation will fail.", correct: false },
        { text: "The allocated integer is uninitialized, and reading it is Undefined Behavior.", correct: true },
        { text: "It automatically initializes to 0.", correct: false },
        { text: "It allocates memory on the stack instead of the heap.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "How do pointers enable the creation of data structures like linked lists or trees?",
    options: [
        { text: "By storing the entire next object directly within the current object.", correct: false },
        { text: "By allowing objects (nodes) to hold references (memory addresses) to other objects, linking them together.", correct: true },
        { text: "By using static memory allocation exclusively.", correct: false },
        { text: "By relying on compiler optimizations.", correct: false }
    ],
    lecture: "L4"
},
{
    text: "What is the key difference between how Java/Python handle object variables and how C++ handles non-pointer object variables?",
    options: [
        { text: "Java/Python variables are always references (like pointers); C++ variables can hold the object directly.", correct: true },
        { text: "C++ variables are always references; Java/Python can hold objects directly.", correct: false },
        { text: "Java/Python use the stack; C++ uses the heap.", correct: false },
        { text: "There is no fundamental difference.", correct: false }
    ],
    lecture: "L4"
}

// --- END OF LECTURE 4 QUESTIONS ---

];
