import {render} from "@testing-library/react";
import {playerMock, playersMock} from "../../../players.mock";
import Players from "../Players";

const mockPlayers = playersMock
jest.mock('../../../hooks/useBestPlayers',() => ({
    useBestPlayers: () => mockPlayers,
}));

const mockUseNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
}));

describe("Players", () => {
    it("should match snapshot", () => {
        // Given & When
        const {container} = render(<Players />)

        expect(container).toMatchSnapshot()
    })

    it("should have 5 player children", () => {
        // Given
        const {queryAllByTestId} = render(<Players />)

        // When
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const players = queryAllByTestId('player')

        // Then
        expect(players.length).toBe(5)
    })
})