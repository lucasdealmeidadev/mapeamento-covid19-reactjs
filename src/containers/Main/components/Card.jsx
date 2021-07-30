import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card as CardUI } from '../../../components';
import styled from 'styled-components';
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style';

const CardUICustom = styled(CardUI) `
    text-align: center;
`;  

function Card({ value, label, color }) {
    return (
        <CardUICustom>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUICustom>
    )
}

export default memo(Card);