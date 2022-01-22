import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
    id: string;
    content: string;
    type: 'text';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router(); 

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    // Make sure the cell storage file exists
    // If it does not exists, add in a default list of cells
    // Read the the file
    // Parse a list of cells out of it
    // Send list of cells back to the browser
  });

  router.post('/cells', async (req, res) => {
    // Make sure the cell storage file exists

    // If not, create it

    // Take the list of cells from the req object
    // serialize them
    const { cell }: { cells: Cell[] } = req.body;

    // write the cells into the file 
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({ status: 'ok' });
  });

  return router;
}


