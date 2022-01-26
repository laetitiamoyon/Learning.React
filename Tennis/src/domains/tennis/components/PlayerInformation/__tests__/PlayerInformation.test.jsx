import {fireEvent, render} from "@testing-library/react";
import PlayerInformation from "../PlayerInformation";
import {playerMock} from "../../../players.mock";

const mockUseNavigate = jest.fn()

const mockPlayer = playerMock
jest.mock('../../../hooks/usePlayer',() => ({
    usePlayer: () => mockPlayer,
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
}));

describe("PlayerInformation", () => {
    it("should match snapshot", () => {
        // Given & When
        const {container} = render(<PlayerInformation />)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should redirect on home when click on button go back to the home page ", () => {
        // Given
        const { getByText } = render(<PlayerInformation />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const button = getByText("Retourner à la page d'accueil")

        // When
        fireEvent.click(button)

        // Then
        expect(mockUseNavigate).toHaveBeenCalledWith(`/`)
    })
})