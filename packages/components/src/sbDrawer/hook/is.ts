const opt = Object.prototype.toString;

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === '[object Boolean]';
}
export const isPromise = <T>(obj: unknown): obj is Promise<T> => {
  return opt.call(obj) === '[object Promise]';
};
export function isNumber(obj: any): obj is number {
    return opt.call(obj) === '[object Number]' && obj === obj; // eslint-disable-line
}
export function isFunction(obj: any): obj is () => any {
  return typeof obj === 'function';
}
export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]';
}
