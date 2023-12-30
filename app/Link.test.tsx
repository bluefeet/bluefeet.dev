import '@testing-library/jest-dom/jest-globals'
import { render, screen } from '@testing-library/react'
import Link from './Link'
import { expect, describe, it } from '@jest/globals';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Link href='foo.html'>Bar</Link>)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
  })
})
