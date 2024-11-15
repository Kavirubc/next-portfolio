import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const filePath = path.join('/tmp', 'submissions.csv');

        if (!fs.existsSync(filePath)) {
            return res.status(200).json([]);
        }

        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
            quote: '"',
            escape: '"',
        });

        // Sort records by timestamp in descending order (newest first)
        const sortedRecords = records.sort((a, b) =>
            new Date(b.Timestamp) - new Date(a.Timestamp)
        );

        // Add basic authentication check (you should implement proper auth)
        // const authHeader = req.headers.authorization;
        // if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
        //   return res.status(401).json({ message: 'Unauthorized' });
        // }

        res.status(200).json(sortedRecords);
    } catch (error) {
        console.error('Error reading submissions:', error);

        // Send more detailed error in development
        const errorMessage = process.env.NODE_ENV === 'development'
            ? error.message
            : 'Error reading submissions';

        res.status(500).json({
            message: errorMessage,
            error: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
}