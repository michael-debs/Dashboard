import { useAtom } from "jotai";
import FileInput from "../inputs/FileInput";

function FileInputElement({ elementAtom }) {
    const [element, setElement] = useAtom(elementAtom);
    const handleChange = (e) => {
        setElement((prev) => ({
            ...prev,
            value: e.target.files[0],
        }));
    };
    return <FileInput onChange={handleChange} value={element.value.name} />;
}

export default FileInputElement