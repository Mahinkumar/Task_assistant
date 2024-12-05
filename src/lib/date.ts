export default function datemap(date: any) {
    const date_item = new Date(date);

    const hours = date_item.getHours().toString().padStart(2, '0');
    const minutes = date_item.getMinutes().toString().padStart(2, '0');
    const seconds = date_item.getSeconds().toString().padStart(2, '0');
    const month = date_item.getMonth().toString().padStart(2, '0');
    const day = date_item.getDate().toString().padStart(2, '0');
    const year = date_item.getFullYear().toString().padStart(2, '0');
    const fulldate = `${day}-${month}-${year}`;

    const hm = `${hours}:${minutes}`;
    return { hours, minutes, seconds, month, day, year, fulldate, hm };
}