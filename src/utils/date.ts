//import { isToday, isYesterday, format } from 'date-fns';
//import { TOptionsDateFormat } from '../services/types/types';

//export const dateWhen = (date: Date) => {
//    if (isToday(date)) {
//        return 'Сегодня'
//    } else if (isYesterday(date)) {
//        return 'Вчера'
//    } else {
//        return format((date), 'MM.dd.yyyy');
//    }
//}

//export const conversionDate = (date: string) => {
//    const options: TOptionsDateFormat = {
//        timezone: 'Moscow',
//        hour: 'numeric',
//        minute: 'numeric',
//        timeZoneName: "short",
//    }

//    return new Date(Date.parse(date)).toLocaleString("ru", options)
//}

//Получить дату создания заказа
const getDays = (days: number) => (
    days === 0 ? 'Сегодня'
      : days === 1 ? 'Вчера'
        : days > 1 ? `${days} дня(-ей) назад`
          : 'Что-то пошло не так :('
  )
  
  //Сформировать дату создания заказа
  export const conversionDate = (date: string) => {
    const dayCreated: Date = new Date(date);
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime: number = Math.ceil((today.getTime() - dayCreated.getTime()) / (60 * 60 * 24 * 1000));
    const hours = dayCreated.getHours() > 9 ? dayCreated.getHours() : `0${dayCreated.getHours()}`
    const min = dayCreated.getMinutes() > 9 ? dayCreated.getMinutes() : `0${dayCreated.getMinutes()}`
  
    return `${getDays(diffTime)}, ${hours}:${min} i-GMT+${dayCreated.getTimezoneOffset() * (-1) / 60}`;
  }