import styled from "styled-components";
import * as Material from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

export const STVisibilityIcon = styled(VisibilityIcon)`
    font-size: 1em !important;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const STPaper = styled(Material.Paper)`
    padding: 10px;
    width: 100px;
    background: rgba(255, 255, 255, 0.3) !important;
`;

export const STCard = styled(Material.Card)`
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.7) !important;
    width: 100%;
    height: 100%;
`;

export const STMovieTitle = styled(Material.Typography)`
    padding: 10px;
    text-align: center;
    color: white;
`;
export const STBlockTitle = styled(Material.Typography)`
    padding-top: 10px;
    text-align: center;
    color: white;
`;

export const STDescription = styled.p`
    width: 90%;
    font-size: 1.2em;
    padding: 0 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: white;
    text-align: justify;
`;

export const STGenre = styled.div`
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0) !important;
    padding: 5px;
`;
