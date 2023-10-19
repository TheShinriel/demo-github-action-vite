import { render, screen } from "@testing-library/react"

import App from "./App"

// Follow https://testing-library.com/docs/react-testing-library/cheatsheet/
// To know the commands
describe("App", () => {
  it("renders headline", async () => {
    render(<App />)

    screen.debug()

    const item = await screen.findByText("Vite + React")
    expect(item.tagName).toEqual("H1")
  })
})
