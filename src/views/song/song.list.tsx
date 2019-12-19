import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { Button, Container, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { GET_USERS } from "../../queries";

const array: React.ReactNode[] = [];
for (let i = 0; i < 10; i++) {
    array.push(<Skeleton style={{ backgroundColor: "red" }} variant="text" />);
}

function Variants() {
    return (
        <Container fixed>
            {array.map((x, i) => (
                <Skeleton variant="text" key={i} />
            ))}
        </Container>
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
    // console.log(data);
    return (
        <Container fixed>
            {data.users.users.map((x: any, i: number) => (
                <p key={i}>
                    {x.id}: {x.firstName}, {x.lastName}
                </p>
            ))}
            <Button onClick={() => refetch()}>Refetch</Button>
            <Button color="primary" variant="contained" onClick={() => history.push("/test")}>
                Go to test page
            </Button>
        </Container>
    );
};

export default PrintUsers;
