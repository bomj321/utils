import { format } from "date-fns"; // This is a NPM package

export const isNullOrEmpty = (data) => {
  if (
    data === null ||
    data === "" ||
    data === "null" ||
    data === "undefined" ||
    data === undefined
  ) {
    return true;
  }
  return false;
};

export const formatNumber = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getMonthName = (month) => {
  let months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  return months[month];
};

export const getSemesterMonthName = (semester) => {
  let months = ["Ene - Jun", "Jul - Dic"];
  return months[semester - 1];
};

export const getTrimesterMonthName = (trimester) => {
  let months = ["Ene - Mar", "Abr - Jun", "Jul - Sep", "Oct - Dic"];
  return months[trimester - 1];
};

export const formatNumber = (number) => {
  let n = number;
  if (isNaN(n)) {
    return 0;
  } else {
    n = parseFloat(n).toFixed(2);
    let withCommas = Number(n).toLocaleString("es");
    return withCommas;
  }
};

export const formatNumberInput = (number) => {
  let n = number;
  n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return n;
};

export const formatNewDate = (date, lang) => {
  if (date) {
    return format(new Date(date), "dd/MMM/yyyy", {
      locale: lang,
    });
  } else {
    return "N/A";
  }
};

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
