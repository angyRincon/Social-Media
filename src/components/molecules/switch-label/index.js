//@packages
import React, {useContext, useState} from 'react';

//@components
import Switch from "../../atoms/switch";

//@styles
import classes from './styles.module.scss';
import {ThemeContext} from "../../../context/ThemeContext";

const SwitchLabel = ({label}) => {
    const [checked, setChecked] = useState(false);
    const {handleSwitchTheme} = useContext(ThemeContext);

    const handleChange = () => {
        setChecked(!checked);
        handleSwitchTheme()
    }

    return (
        <div className={classes.switchLabelContainer}>
            <label className={classes.label}>{label}</label>
            <Switch
                checked={checked}
                handleChange={handleChange}
            />
        </div>
    )
};

export default SwitchLabel;