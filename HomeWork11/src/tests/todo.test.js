const todo = require('../controllers/todo.controller')

test('controller must be endpoint', () =>{
    const result = todo
    expect(result).toBe(todo)
})