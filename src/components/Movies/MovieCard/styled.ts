import styled from "styled-components";
import * as Material from "@material-ui/core";

export const STCard = styled(Material.Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    margin: 10px auto;
`;
export const STCardMedia = styled(Material.CardMedia)`
    width: 100%;
    height: 500px;
    background-size: 100% 100% !important;
    position: relative;
`;
export const STTitle = styled(Material.Typography)`
    padding: 10px;
    text-align: center;
`;

export const STGrid = styled(Material.Grid)`
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const STPaper = styled(Material.Paper)`
    display: flex;
    padding: 5px;
`;
