/**
 * SelftecDate - Simple Date Formatting Utility
 * Author: Selftec
 * License: Custom
 */

const SelftecDate = {
    /**
     * Returns the current date in YYYY-MM-DD format.
     * @returns {string}
     */
    getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },

    /**
     * Formats a Date object as DD/MM/YYYY.
     * @param {Date} date - The date to format.
     * @returns {string}
     */
    formatDate(date) {
        if (!(date instanceof Date)) {
            console.error('[SelftecDate] Invalid Date object.');
            return '';
        }
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
};

// Example usage:
// console.log(SelftecDate.getCurrentDate()); // Output: e.g., "2025-06-24"
// console.log(SelftecDate.formatDate(new Date())); // Output: e.g., "24/06/2025"

module.exports = SelftecDate;
