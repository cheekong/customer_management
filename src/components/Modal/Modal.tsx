import React, { ReactNode } from 'react';

import Backdrop from '../UI/Backdrop/Backdrop'
import Form from '../UI/Form/Form';
import List from '../UI/List/List';
import ListItem from '../UI/List/ListItem/ListItem';
import {StyledModal, StyledModalBody} from './Styled';

interface MyProps {
  callbackOnClose?: any;
  show: boolean;
  title: string;
  children: ReactNode
}

interface MyState {
  show: false;
}

class Modal extends React.Component<MyProps, MyState> {

  componentWillUnmount() {
    if(this.props.callbackOnClose){
      this.props.callbackOnClose();
    }
  }

    render(){
        let content = null; 
        
        if(this.props.show){
            content = (
                <Backdrop>
                    <StyledModal>
                      <Form title={this.props.title}>
                          <StyledModalBody>
                            {this.props.children}
                          </StyledModalBody>
                      </Form>
                    </StyledModal>
                </Backdrop>
            )
        }
        
        return content
    }
}

export default Modal;