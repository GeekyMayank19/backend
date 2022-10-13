export class BaseService {
    protected getItem<T>(keyName: string): T | null {
      try {
        const value = localStorage.getItem(keyName) || "";
        return JSON.parse(value);
      } catch (error) {
        return null;
      }
    }
  
    protected setItem(keyName: string, obj: any): void {
      localStorage.setItem(keyName, JSON.stringify(obj));
    }
  
  }
  