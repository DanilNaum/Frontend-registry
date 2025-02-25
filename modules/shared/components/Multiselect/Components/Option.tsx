import styles from './css/Option.module.scss';

import classNames from 'classnames';
import { useRef, useEffect } from 'react';
import { Theme } from './enums';

export default function Option ({ theme, option, toggleOption, highlighted, id} : OptionProps) {

    const [label, value] = option;

    const optionRef = useRef<HTMLDivElement>(null);

    // Scrol highlighted into view
    useEffect(() => {
        if (optionRef.current === null) return;

        if (highlighted) optionRef.current.scrollIntoView(
            { behavior: "smooth", block: "nearest" }
        );

    }, [optionRef, highlighted])

    // ClassName

    const className = classNames( styles.Option, {
        [styles.highlighted] : highlighted,
        [styles.Blue] : theme === Theme.Blue
    })

    return (
    <div ref={optionRef}
        className={className} 
        id={id}
        onClick={() => toggleOption()}
        //Aria
        role='option'
        aria-selected={value}>

        <div className={styles.Checkbox}>
            {value ? <svg fill='white' className={styles.CheckboxSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg> : null}
        </div> 

        <label className={styles.Label}>{label}</label>
    </div>
    )
}