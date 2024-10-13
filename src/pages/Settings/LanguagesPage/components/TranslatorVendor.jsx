import { Box } from '@mui/joy';
import Select from '../../../../components/inputs/Select';
import { useAtom } from 'jotai';

function TranslatorVendor({ translatorVendorAtom }) {
    const [translatorVendor, setTranslatorVendor] =
      useAtom(translatorVendorAtom);
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "100px",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <p>Translator Vendor</p>
      <Select
        value={translatorVendor}
        style={{
            minWidth: '250px'
        }}
        options={[
          { label: "Google", value: "google" },
          { label: "DeepL", value: "deepl" },
          { label: "Local Translation", value: "local" },
        ]}
        onChange={(e, newValue) => setTranslatorVendor(newValue)}
      />
    </Box>
  );
}

export default TranslatorVendor