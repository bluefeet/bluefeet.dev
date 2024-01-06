export const expectToBeVisible = (element:HTMLElement) => {
  expect(element).toBeVisible()
  expect(element).not.toHaveClass('hidden')
}

export const expectNotToBeVisible = (element:HTMLElement) => {
  try {
    expect(element).not.toBeVisible()
  }
  catch {
    expect(element).toHaveClass('hidden')
  }
}
