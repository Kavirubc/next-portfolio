import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { fullName, email, phone, message, services } = req.body;

        // Validate required fields
        if (!fullName || !email || !phone || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create CSV row
        const csvRow = [
            new Date().toISOString(),
            fullName.replace(/,/g, ' '),
            email.replace(/,/g, ' '),
            phone.replace(/,/g, ' '),
            message.replace(/,/g, ' ').replace(/\n/g, ' '),
            services.join(';')
        ].map(field => `"${field}"`).join(',');

        // Define CSV file path in /tmp directory
        const filePath = path.join('/tmp', 'submissions.csv');

        // Create CSV file with headers if it doesn't exist
        if (!fs.existsSync(filePath)) {
            const headers = 'Timestamp,Full Name,Email,Phone,Message,Services\n';
            fs.writeFileSync(filePath, headers);
        }

        // Append new row to CSV
        fs.appendFileSync(filePath, csvRow + '\n');

        // Send success response
        res.status(200).json({ message: 'Submission saved successfully' });
    } catch (error) {
        console.error('Submission error:', error);
        res.status(500).json({ message: 'Error saving submission' });
    }
}