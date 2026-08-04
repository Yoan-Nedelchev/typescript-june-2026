export function log(
  _: any,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    console.log(`${this.constructor.name} called ${methodName}`);

    const start = performance.now();

    const result = await originalMethod.apply(this, args);

    const end = performance.now();

    console.log(`Executed in ${(end - start).toFixed(2)}ms`);

    return result;
  };

  return descriptor;
}
