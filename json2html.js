// json2html.js
export default function json2html(data) {
    // Start the HTML table with the required 'data-user' attribute
    let html = '<table data-user="bompalyvaishnavi@gmail.com">';

    // Add table headers (columns Name, Age, Gender)
    html += '<thead><tr>';
    // Check the first object to determine the column names
    const keys = Object.keys(data[0]);
    keys.forEach(key => {
        html += `<th>${key}</th>`;
    });
    html += '</tr></thead>';

    // Add table body
    html += '<tbody>';
    data.forEach(item => {
        html += '<tr>';
        keys.forEach(key => {
            html += `<td>${item[key] || ''}</td>`;  // Handles missing keys gracefully
        });
        html += '</tr>';
    });
    html += '</tbody>';

    // Close the table tag
    html += '</table>';

    return html;
}
