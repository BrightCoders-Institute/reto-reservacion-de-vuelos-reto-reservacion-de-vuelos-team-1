import React from 'react';
import { TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { styles } from './style';

interface AddButtonProps {
    onPress: () => void;
}

export const AddButton:React.FC<AddButtonProps> = ({ onPress }) => {
    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <FontAwesomeIcon icon={faPlus} style={styles.icon} size={28}/>
            </TouchableOpacity>
        </>
    )
}
