export interface CommonError extends Error {
    errorCode:number;
}

// CommonError型かを判定する型ガード関数
export function isCommonError(value: unknown): value is CommonError {
    // 値がオブジェクトであるかの判定
    if (typeof value !== "object" || value === null) {
      return false;
    }
    const { errorCode,name,message } = value as Record<keyof CommonError, unknown>;
    // gradeプロパティーが数値型かを判定
    if (typeof errorCode !== "number") {
      return false;
    }
    // nameプロパティーが文字列型かを判定
    if (typeof name !== "string") {
      return false;
    }
    // nameプロパティーが文字列型かを判定
    if (typeof message !== "string") {
      return false;
    }
    return true;
  }
