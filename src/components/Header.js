import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const Header = styled.header`
        
        .is-active {
            font-weight: bold;
        }
    `;

    return (
        <Header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </Header>
    )
};

export default Header;