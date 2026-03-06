export class InMemoryRepository<T extends { id: number }> {
  // private storage
  private items: T[] = [];

  add(entity: T): T {
    this.items.push(entity);
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    const index = this.items.findIndex(item => item.id === id);

    const updated = {
      ...this.items[index],
      ...patch
    }

    this.items[index] = updated;
    return updated;

  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  findAll(): T[] {
    return [...this.items];
  }
}
