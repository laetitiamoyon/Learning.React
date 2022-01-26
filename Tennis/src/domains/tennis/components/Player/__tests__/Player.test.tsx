import {fireEvent, render} from "@testing-library/react";
import {playerMock} from "../../../players.mock";
import Player from "../Player";

const mockOnClickToTheDescription = jest.fn()
const mockPlayerId = playerMock.id

const mockPlayer = playerMock
jest.mock('../../../hooks/usePlayer',() => ({
    usePlayer: () => mockPlayer,
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockOnClickToTheDescription,
}));

describe("Player", () => {
    it("should match snapshot", () => {
        // Given & When
        const {container} = render(<Player {...playerMock} />)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should redirect on /players/playerId when show more button is clicked", () => {
        // Given
        const { getByText } = render(<Player {...playerMock}/>)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const button = getByText("Plus d'information")

        // When
        fireEvent.click(button)

        // Then
        expect(mockOnClickToTheDescription).toHaveBeenCalledWith(`/players/${mockPlayerId}`, { id : mockPlayerId})
    })
})