/*
 * Graphql - Mutations
 */

import { gql, useMutation } from '@apollo/client';

export const ORDER = gql`
    mutation CreateOrder($data: OrderInput!) {
        createOrder(data: $data) {
            data {
                id
            }
        }
    }
`;

export const useOrder = () => {
    const [ setOrder, { data: order } ] = useMutation(ORDER);

    return [ order, setOrder ];
};