// Subject.ts

export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

// Observer.ts

export interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

// DisplayElement.ts

export interface DisplayElement {
  display(): void;
}
