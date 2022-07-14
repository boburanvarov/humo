export class Utils {

  static clearSessionStorage() {
    sessionStorage.clear()
  }

  static setToSessionStorage(key: string, item: any) {

  sessionStorage.setItem(key, JSON.stringify(item));
  }

  static getSessionStorage(key: string): any {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem(key));
  }

}
