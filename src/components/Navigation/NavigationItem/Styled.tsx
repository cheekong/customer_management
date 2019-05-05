import styled from 'styled-components';

export const StyledNavigationItem = (NavLink: any) => styled(NavLink)`
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    font-size:1.4em;

    &.active {
        text-decoration: underline;
    }

    :hover {
        color: #ffd2e0
    }
`;