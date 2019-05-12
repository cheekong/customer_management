import React from 'react';
import DisplayField from './DisplayField';
import renderer from 'react-test-renderer';

describe('Display field', () => {
    test('it works', () => {
    
        const component = renderer.create(
            <DisplayField 
                label='Firstname'
                pararapgh='Jim'
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})


