import React, { ReactNode } from 'react';

import StyledPageContainer from '../PageContainer/Styled';

interface MyProps {
    children: ReactNode;
}

const PageContainer: React.SFC<MyProps> = (props) => {

    return(
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}

export default PageContainer;