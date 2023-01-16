import { Button } from "react-bootstrap";
import { Part, Status } from "../Interfaces";
import axios from "axios";

type Props = {
    part: Part;
    setPopupPart: (part: Part) => void;
    setShowPopup: (show: boolean) => void;
    setHotPart: (part: Part) => void;
};

export default function PartRow({
    part,
    setPopupPart,
    setHotPart,
    setShowPopup,
}: Props): JSX.Element {
    const manage = (e: any) => {
        e.preventDefault();
        setPopupPart(part);
        setShowPopup(true);
    };

    const download = async (e: any) => {
        e.preventDefault();
        if (part.files.camExt === "") {
            alert("No GCODE Found");
            return;
        }

        let params = {
            fileId: part.id,
            fileExt: "cam",
            name: `${part.name}-GCODE`,
        };

        await axios({
            url: `${process.env.REACT_APP_}/downloadPart`,
            method: "GET",
            responseType: "blob",
            params: params,
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
                "download",
                `${part.name}-GCODE.${part.files.camExt}`
            );
            document.body.appendChild(link);
            link.click();
        });
    };

    const complete = (e: any) => {
        e.preventDefault();
        if (parseInt(part.needed) > 0)
            part.needed = parseInt(part.needed) - 1 + "";
        if (part.needed === "0") part.status++;
        setHotPart(part);
    };
    return (
        <tr>
            <td align="center">{part.priority}</td>
            <td align="center">{part.name}</td>
            <td align="center">{part.machine}</td>
            <td align="center">{part.project}</td>
            <td align="center">{part.material}</td>
            <td align="center">
                {Object.values(Status)[part.status < 0 ? 0 : part.status]}
            </td>
            <td align="center">{part.needed}</td>
            <td align="center">
                <Button
                    onClick={(e) => complete(e)}
                    className="btn btn-success flex"
                >
                    ✓
                </Button>
            </td>
            <td align="center">
                <button
                    className="btn btn-primary my-2"
                    onClick={(e) => download(e)}
                >
                    Download
                </button>
            </td>
            <td align="center">
                <button
                    className="btn btn-primary my-2"
                    onClick={(e) => manage(e)}
                >
                    Manage
                </button>
            </td>
        </tr>
    );
}
