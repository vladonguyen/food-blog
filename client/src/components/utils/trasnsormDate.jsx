
export const transformDateFormat = (inputDate) => {
    const months = [
      'JAN', 'FEB', 'MAR', 'APR',
      'MAY', 'JUN', 'JUL', 'AUG',
      'SEP', 'OCT', 'NOV', 'DEC'
    ];
  
    const [year, month, day] = inputDate.split('-');
    const formattedMonth = months[parseInt(month, 10) - 1];
  
    return (
     <>
          <span>{day}</span>{formattedMonth}<br /> {year}
          </>

    );
  };