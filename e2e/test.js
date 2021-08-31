import { Selector } from 'testcafe'

fixture`Getting Started`.page`http://localhost:${process.env.PORT}`

test('My first test', async (t) => {
  await t.expect(Selector('#root').hasChildElements).ok()
})
