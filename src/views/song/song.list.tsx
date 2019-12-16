import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const GET_USERS = gql`
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
const array: React.ReactNode[] = [];
for (let i = 0; i < 10; i++) {
    array.push(<Skeleton style={{ backgroundColor: "red" }} variant="text" />);
}

function Variants() {
    return (
        <div>
            {array.map(x => (
                <Skeleton variant="text" />
            ))}
        </div>
    );
}

const PrintUsers: React.FC = () => {
    const history = useHistory();
    const { loading, error, data, refetch } = useQuery(GET_USERS);

    useEffect(() => {
        refetch();
    }, []);

    if (loading) return <Variants />;
    if (error) return <p>ERROR!!! :(</p>;
    console.log(data);
    return (
        <div>
            {data.users.users.map((x: any, i: number) => (
                <p key={i}>
                    {x.id}: {x.firstName}, {x.lastName}
                </p>
            ))}
            <Button onClick={() => refetch()}>Refetch</Button>
            <Button color="primary" variant="contained" onClick={() => history.push("/test")}>
                Go to test page
            </Button>
        </div>
    );
};

export default PrintUsers;
