/**
 * simulating latency for API calls etc
 */
// TODO: type this properly
// https://stackoverflow.com/questions/45802988/typescript-use-correct-version-of-settimeout-node-vs-window

export const sleep = async (ms: number): Promise<void> =>
  new Promise(
    (resolve: (value: void) => void): any => setTimeout(resolve, ms),
  );
