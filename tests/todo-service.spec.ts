import { TodoApi } from '../JS-TS/solutions/todo-api';
import { TodoService } from '../JS-TS/solutions/todo-service';
import { TodoStatus } from '../JS-TS/solutions/types';

describe('TodoService', () => {
    jest.setTimeout(10000);
    let api = new TodoApi();
    let service = new TodoService(api);

    beforeEach(() => {
        api = new TodoApi();
        service = new TodoService(api);
    });

    jest.spyOn(global, 'setTimeout').mockImplementation((fn: any) => fn());

    it('should create todo', async () => {
        const todo = await service.create('Title test', 'Description test');

        expect(todo.title).toBe('Title test');
        expect(todo.description).toBe('Description test');
        expect(todo.id).toBeDefined();
    });

    it('should toggle status', async () => {
        const todo = await service.create('Title test', 'Description test');

        const update = await service.toggleStatus(todo.id);

        expect(update.status).not.toBe(todo.status);
    })

    it('should search todo', async () => {
        await service.create('Title test', 'Description test');
        await service.create('Title test to search', 'Description test to search');

        const result = await service.search('search');

        expect(result.length).toBe(1);
        expect(result[0].title).toBe('Title test to search');
    })

    it('should throw error when updating non-existing id', async () => {
        await expect(service.toggleStatus(999))
            .rejects
            .toThrow();
    });

    it('should throw error if title does not exist', async () => {
        await expect(service.create('')).rejects.toThrow('Title is not found');
    });

    it('should throw error if keyword does not exist', async () => {
        await expect(service.search('')).rejects.toThrow('Keyword is not found');
    });

    it('should throw error if id is missing', async () => {
        await expect(service.toggleStatus(0))
            .rejects
            .toThrow('id is not found');
    });

    it('should change PENDING to IN_PROGRESS', async () => {
        const todo = await service.create('Title test', 'Description test');

        const updated = await service.toggleStatus(todo.id);

        expect(updated.status).toBe(TodoStatus.IN_PROGRESS);
    });

    it('should change IN_PROGRESS to COMPLETED', async () => {
        const todo = await service.create('Title test', 'Description test');

        await service.toggleStatus(todo.id);

        const updated = await service.toggleStatus(todo.id);

        expect(updated.status).toBe(TodoStatus.COMPLETED);
    });

    it('should change COMPLETED to PENDING', async () => {
        const todo = await service.create('Title test', 'Description test');

        await service.toggleStatus(todo.id);
        await service.toggleStatus(todo.id);

        const updated = await service.toggleStatus(todo.id);

        expect(updated.status).toBe(TodoStatus.PENDING);
    });


});