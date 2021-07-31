import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card as CardUI } from '../../../components';
import styled from 'styled-components';
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style';

const CardStyled = styled(CardUI)`
    text-align: center;
`;

function Card({ value, label, color }) {
    return (
        <CardStyled>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardStyled>
    )
}

export default memo(Card);