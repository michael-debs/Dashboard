import { Select, MenuItem } from '@mui/joy';
import { atom, useAtom } from 'jotai';

const selectValueAtom = atom('');

const SelectElement = ({ elementAtom }) => {
    const [value, setValue] = useAtom(selectValueAtom);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Select value={value} onChange={handleChange}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    );
};

export default SelectElement;