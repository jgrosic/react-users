/**
 * Creates a promise that resolves after a specified number of seconds.
 *
 * @param seconds - The number of seconds to wait before resolving.
 * @returns A promise that resolves after `seconds` seconds.
 * @example
 * ```ts
 * await delay(1.5); // waits 1.5 seconds
 * ```
 * {@link delay}
 */
export const delay = (seconds: number) => new Promise(resolve    => setTimeout(resolve, seconds * 1000));