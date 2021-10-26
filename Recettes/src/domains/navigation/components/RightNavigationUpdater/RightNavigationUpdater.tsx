import {INavigationElement} from "../../navigation.model";
import {FC, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {routes} from "../../navigation.configuration";

interface Props
{
    navigationElements : INavigationElement[]
    setNavigationElements : (elements : INavigationElement[]) => void
}

const RightNavigationUpdater : FC<Props> = ({navigationElements, setNavigationElements}) =>
{
    const route = useLocation().pathname as string

    useEffect(() =>
    {
        setNavigationElements(navigationElements.map(n =>
            ({
                ...n,
                visible : n.leftNavigation === undefined || n.leftNavigation === true ||
                    (route === routes.ingredients && n.title === "Ajouter un ingrédient") ||
                    (route === routes.recipes && n.title === "Ajouter une recette")
            })
        ))
    }, [route])

    return <></>
}

export default RightNavigationUpdater