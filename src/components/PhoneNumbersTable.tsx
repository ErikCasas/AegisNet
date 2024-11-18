import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface PhoneNumber {
  code: string;
  number: string;
}

const phoneNumbersData: PhoneNumber[] = [
  { code: "+1", number: "555-1234" },
  { code: "+44", number: "20 7946 0958" },
  { code: "+49", number: "30 123456" },
  { code: "+33", number: "1 23 45 67 89" },
  { code: "+55", number: "11 91234-5678" },
  { code: "+91", number: "98765 43210" },
  { code: "+81", number: "3-1234-5678" },
  { code: "+61", number: "2 1234 5678" },
  { code: "+1", number: "416-555-6789" },
  { code: "+52", number: "55 1234 5678" },
  { code: "+1", number: "555-1234" },
  { code: "+44", number: "20 7946 0958" },
  { code: "+49", number: "30 123456" },
  { code: "+33", number: "1 23 45 67 89" },
  { code: "+55", number: "11 91234-5678" },
  { code: "+91", number: "98765 43210" },
  { code: "+81", number: "3-1234-5678" },
  { code: "+61", number: "2 1234 5678" },
  { code: "+1", number: "416-555-6789" },
  { code: "+52", number: "55 1234 5678" },
  { code: "+1", number: "202-555-0173" },
  { code: "+44", number: "20 7123 4567" },
  { code: "+49", number: "69 12345678" },
  { code: "+33", number: "4 56 78 90 12" },
  { code: "+55", number: "21 99876-5432" },
  { code: "+91", number: "91234 56789" },
  { code: "+81", number: "6-1234-5678" },
  { code: "+61", number: "3 9876 5432" },
  { code: "+1", number: "305-555-0199" },
  { code: "+52", number: "33 1234 5678" },
  { code: "+1", number: "408-555-0139" },
  { code: "+44", number: "161 123 4567" },
  { code: "+49", number: "89 123456" },
  { code: "+33", number: "5 12 34 56 78" },
  { code: "+55", number: "31 91234-5678" },
  { code: "+91", number: "99876 54321" },
  { code: "+81", number: "1-2345-6789" },
  { code: "+61", number: "7 1234 5678" },
  { code: "+1", number: "212-555-0183" },
  { code: "+52", number: "81 2345 6789" },
  { code: "+1", number: "702-555-0156" },
  { code: "+44", number: "113 123 4567" },
  { code: "+49", number: "40 987654" },
  { code: "+33", number: "2 98 76 54 32" },
  { code: "+55", number: "41 98765-4321" },
  { code: "+91", number: "98765 12345" },
  { code: "+81", number: "9-8765-4321" },
  { code: "+61", number: "8 2345 6789" },
  { code: "+1", number: "718-555-0122" },
  { code: "+52", number: "56 7890 1234" },
  { code: "+1", number: "818-555-0117" },
  { code: "+44", number: "141 987 6543" },
  { code: "+49", number: "711 123456" },
  { code: "+33", number: "3 45 67 89 01" },
  { code: "+55", number: "61 99876-5432" },
  { code: "+91", number: "87654 32109" },
  { code: "+81", number: "7-6543-2109" },
  { code: "+61", number: "9 8765 4321" },
  { code: "+1", number: "415-555-0198" },
  { code: "+52", number: "22 3456 7890" },
];

export const PhoneNumbersTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Table stickyHeader aria-label="phone numbers table">
        <TableHead>
          <TableRow>
            <TableCell>Country Code</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {phoneNumbersData.map((phone, index) => (
            <TableRow key={index}>
              <TableCell>{phone.code}</TableCell>
              <TableCell>{phone.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
