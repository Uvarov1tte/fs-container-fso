import { render, screen } from '@testing-library/react'
import Todo from './Todo.jsx'
import { expect } from 'vitest'

test('renders content', () => {
    const todo = {
        text: 'Write code',
        done: false
    }

    render(<Todo todo={todo} />)

    const element = screen.getByText('Write code')
    const setDoneButton = screen.getByText('Set as done')
    const deleteButton = screen.getByText('Delete')
    screen.debug(element)
    screen.debug(setDoneButton)
    screen.debug(deleteButton)
    expect(element).toBeDefined()
    expect(setDoneButton).toBeVisible()
    expect(deleteButton).toBeVisible()
})