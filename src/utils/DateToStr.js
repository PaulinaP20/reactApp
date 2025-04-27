const dateToStr = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      console.error('Provided argument is not a valid Date object:', date);
      return '';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // miesiące od 0
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  export default dateToStr;
