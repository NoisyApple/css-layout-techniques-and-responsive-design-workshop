import faker from "faker"

export const cssRandomColor = (
  saturation: number,
  lightness: number
): string => {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue} ${saturation}% ${lightness}%)`
}

export const randomArticleTags = (): Array<string> => {
  const MAX_AMOUNT = 7

  const amount = Math.floor(Math.random() * (MAX_AMOUNT + 1))

  return [...Array(amount).keys()].map(() => {
    return !Math.floor(Math.random() * 2)
      ? faker.commerce.department()
      : faker.commerce.productAdjective()
  })
}
