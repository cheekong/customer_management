import React from 'react';

//import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import {
    StyledSearchbar, 
    StyledSearchbarInput, 
    StyledSearchbarActions
} from './Styled';

interface MyProps {
    value: string;
    placeholder: string;
    onChange: any;
    onClick: any;
    onCancel: any;
}

const Searchbar: React.SFC<MyProps> = (props) => {
    return(
        <StyledSearchbar>
            <StyledSearchbarInput 
                type='text'
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
            <StyledSearchbarActions>
                <Button 
                    width='60px'
                    height='100%'
                    size='small'
                    variant='default' 
                    color='primary' 
                    onClick={props.onClick}
                >
                    Search
                </Button>
                <Button 
                    width='60px'
                    height='100%'
                    size='small'
                    variant='default' 
                    color='primary' 
                    onClick={props.onCancel}
                >
                    Clear
                </Button>
            </StyledSearchbarActions>
        </StyledSearchbar>
    )

}

export default Searchbar;