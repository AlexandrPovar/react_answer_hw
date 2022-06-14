import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import Qualities from "../../ui/qualities";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const history = useHistory();
    console.log(history);

    const handleReturn = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>{`Профессия: ${user.profession.name}`}</h2>
                <Qualities qualities={user.qualities} />
                <p>{`completedMeetings: ${user.completedMeetings}`}</p>
                <h2>{`Rate: ${user.rate}`}</h2>
                <button onClick={handleReturn}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
