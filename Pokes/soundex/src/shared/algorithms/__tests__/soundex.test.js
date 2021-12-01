import soundex from "../soundex";

describe('Soundex', () =>
{
  it("tes un bete", () =>
  {
    // Arrange
    const parametersAndResults = new Map([
      ["Johnson", "J525"],
      ["Jonson", "J525"],
      ["Adams", "A352"],
      ["Addams", "A352"],
      ["Davis", "D120"],
      ["Davies", "D120"],
      ["Simons", "S520"],
      ["Simmons", "S520"],
    ])
    const expectedValues = [...parametersAndResults].map(e => e[1])

    // Act
    const actualValues = [...parametersAndResults].map(e => soundex(e[0]))

    // Asset
    expect(actualValues).toEqual(expectedValues)
  })
})



