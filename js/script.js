const tableBody = document.getElementById('tableBody');
const API_URL = 'https://api.covid19india.org/data.json';

async function getCovidData(url) {
  const res = await fetch(url);
  const data = await res.json();
  const cases_time_series = data.cases_time_series.slice(0);
  const outputHtml = cases_time_series
    .map(
      (data, idx) =>
        `<tr>
          <th scope="row">${idx + 1}</th>
          <td>${data.date + 2020}</td>
          <td>${data.dailyconfirmed}</td>
          <td>${data.dailyrecovered}</td>
          <td>${data.dailydeceased}</td>
          <td>${data.totalconfirmed}</td>
          <td>${data.totalrecovered}</td>
          <td>${data.totaldeceased}</td>
        </tr>`
    )
    .join('');

  tableBody.innerHTML = outputHtml;
}

getCovidData(API_URL);
