/**
 * Javascript runtime engine
 * 
 * JS Engine is not a machine - its a program- high level code
 * 
 * Architecture 
 * 
 * Code->Parsing->Compilation->Execution
 * 
 */

/**
 * Parsing
 * code -> broken down to tokens
 * Syntax Parser -> converts the code to AST (Abstract Syntax Tree)
 * astexplorer.net
 */

/**
 * Compilation
 * 
 * Just in-time compilation
 * 
 * Interpretter - code run on the go line by line -faster
 * Compilation - code converted to optimized code and then run - efficient 
 * 
 * JS can act as an interpretted language or a compiled language
 * Initially JS was build as an interpretted language as it was run in browser couldnot afford to be slower
 * 
 * but in modern JS engine js is run as both interpretted and compiled language 
 * compilation and execution happen hand in hand -> this is called as just in time (JIT ) compliation
 * 
 */

/**
 * Execution requires  Memory Heap and call stack
 * 
 * GArbage collector -> MArk and Sweep Algo
 * Optimization -> inlining, copy elision, inlining caching
 */