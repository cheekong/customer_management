import React from 'react';
import Modal from './Modal';
import renderer from 'react-test-renderer';

describe('Modal', () => {
    test('it works', () => {
    
        const component = renderer.create(
            <Modal 
                show
                title='my modal'
            >
                <p>TEST</p>
            </Modal>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})


