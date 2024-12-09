class Singleton {
  private static instance: Singleton;
  private listeners: Set<() => void> = new Set();
  private state: boolean;

  private constructor() {
    this.state = false;
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  get isOpen() {
    return this.state;
  }

  set isOpen(newState: any) {
    this.state = newState;
    this.notifyListeners();
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
  }

  unsubscribe(listener: () => void) {
    this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener());
  }
}

// Example usage
const instance = Singleton.getInstance();

export { instance as ModalInstance };
