# Uncommon JavaScript Bug: Unexpected Null Handling

This repository demonstrates a subtle bug related to null value handling in a JavaScript function. The `foo` function is designed to increment a numeric input by 1. However, it does not correctly handle null or undefined inputs, which could lead to unexpected behavior or crashes in a real-world application.  The solution demonstrates how to add robust null checks to avoid errors.

## Bug

The original `foo` function throws an error if a null value is provided.  A more robust solution would handle such cases gracefully.

## Solution

The improved `foo` function utilizes explicit checks for null and undefined values before any arithmetic operations. This improved handling ensures the function won't throw an error and will return a default value (0) in such cases.