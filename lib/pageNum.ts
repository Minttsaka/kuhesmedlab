import { PDFDocument } from 'pdf-lib';

export const loadPdf = async (url: string): Promise<number> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch PDF');
    }

    const pdfBytes = new Uint8Array(await response.arrayBuffer());
    return getPageCount(pdfBytes);
  } catch (error) {
    console.error('Error loading PDF:', error);
    throw error; 
  }
};


const getPageCount = async (pdfBytes: Uint8Array): Promise<number> => {
  try {
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();
    console.log(`Number of pages: ${pageCount}`);
    return pageCount;
  } catch (error) {
    console.error('Error processing PDF:', error);
    throw error; 
  }
};
