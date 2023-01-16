import { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type Props = {
    setAuthorized: (authorized: boolean) => void;
};

export default function LoginAlert({ setAuthorized }: Props) {
    useEffect(() => {
        const verifyPassword = async () => {
            const auth = getAuth();
            const password = prompt("Enter Password: ");

            await signInWithEmailAndPassword(
                auth,
                process.env.REACT_APP_TEAM_EMAIL,
                password
            )
                .catch(() => {
                    alert("Incorrect Password");
                    window.location.href = "/";
                })
                .then((response) => {
                    const string = JSON.stringify(response);
                    const obj = JSON.parse(string);
                    if (obj.user.uid) {
                        setAuthorized(true);
                        localStorage.setItem("AuthToken", password);
                    }
                });
        };

        verifyPassword();
    }, [setAuthorized]);

    return <> </>;
}
