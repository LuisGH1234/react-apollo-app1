import { gql } from "apollo-boost";

export const GET_USERS = gql`
    {
        users(page: 1) {
            users {
                id
                firstName
                lastName
            }
            count
        }
    }
`;
