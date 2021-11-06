
jest.mock('react-redux')
const mockDispatch = jest.fn()

it("should dispatch addIngredientRequestAction when title change", () =>
{
    //Given
    const {getByRole} = render(<Ingredient {...ingredientMock} />)
})