import React, {FC} from 'react';
import cn from "classnames"
import {INavigationElement} from "../../navigation.model";
import styles from './NavigationElement.module.scss'
import { Link } from 'react-router-dom';

interface Props extends INavigationElement
{
    selectNavigationElement : (navigationElement : INavigationElement) => void
}

const NavigationElement : FC<Props> = (navigationElement) =>
{
    const { active, href, title, selectNavigationElement } = navigationElement

    return <div className={styles.container}>
        <Link
            to={href}

            className={cn(styles.element, active && styles.active)}
            onClick={() => selectNavigationElement(navigationElement)}>
            {title}
        </Link>
    </div>
};

export default NavigationElement;