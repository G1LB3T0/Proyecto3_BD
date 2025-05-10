import { utils, writeFile } from 'xlsx';

export const exportToCSV = (data, filename = 'reporte.xlsx') => {
  const worksheet = utils.json_to_sheet(data);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Reporte');
  writeFile(workbook, filename);
};
