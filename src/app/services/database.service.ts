import { Injectable } from '@angular/core';
import {Category} from '../models/category';
import {Subcategory} from '../models/subcategory';
import {Service} from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getCategories() {
    const prof = new Category();
    prof.id = 1;
    prof.name = 'Профессионалы';

    const photo = new Subcategory();
    photo.id = 1; // уникальное поле
    photo.name = 'Фотографы';

    const service1 = new Service();
    service1.id = 1;
    service1.name = 'Оплата за час';
    service1.price = 3000;
    service1.description = ' Не более 3 часов';

    const service2 = new Service();
    service2.id = 2;
    service2.name = 'Оплата за день';
    service2.price = 15000;
    service2.description = 'Обработка фото через 3 дня';

    const service3 = new Service();
    service3.id = 3;
    service3.name = 'Фотосессия';
    service3.price = 10000;
    service3.description = ' Без аренды студии';

    const guid = new Subcategory();
    guid.id = 2; // уникальное поле
    guid.name = 'Ведущие';

    const service4 = new Service();
    service4.id = 4;
    service4.name = 'Оплата за мероприятие';
    service4.price = 30000;
    service4.description = ' До 4 часов';

    const service5 = new Service();
    service5.id = 5;
    service5.name = 'Дополнительные часы';
    service5.price = 10000;
    service5.description = 'Оплата за каждый дополнительный час';

    const service6 = new Service();
    service6.id = 6;
    service6.name = 'Ведущий + DJ';
    service6.price = 40000;
    service6.description = 'До 4 часов';

    const video = new Subcategory();
    video.id = 3; // уникальное поле
    video.name = 'Видеооператор';

    const service7 = new Service();
    service7.id = 7;
    service7.name = 'Видеосъемка мероприятия';
    service7.price = 30000;
    service7.description = ' 10 часов съемки + монтаж';

    const service8 = new Service();
    service8.id = 8;
    service8.name = 'Дополнительные часы';
    service8.price = 3000;
    service8.description = 'Оплата за каждый дополнительный час';

    const service9 = new Service();
    service9.id = 9;
    service9.name = 'Видеофильм';
    service9.price = 10000;
    service9.description = 'Продуманный сценарий + монтаж';

    const stylist = new Subcategory();
    stylist.id = 4; // уникальное поле
    stylist.name = 'Стилист';

    const service10 = new Service();
    service10.id = 10;
    service10.name = 'Вечерний образ';
    service10.price = 5000;
    service10.description = ' Время работы 2 часа';

    const service11 = new Service();
    service11.id = 11;
    service11.name = 'Свадебный образ';
    service11.price = 7000;
    service11.description = 'Время работы 3 часа';

    const service12 = new Service();
    service12.id = 12;
    service12.name = 'Репетиция образа';
    service12.price = 2000;
    service12.description = 'Время работы 4 часа';

    const music = new Subcategory();
    music.id = 5; // уникальное поле
    music.name = 'Музыкант';

    const service13 = new Service();
    service13.id = 13;
    service13.name = 'Один час';
    service13.price = 50000;
    service13.description = ' Поздравительное выступление';

    const service14 = new Service();
    service14.id = 14;
    service14.name = 'Весь вечер';
    service14.price = 80000;
    service14.description = 'Сопровождение мероприятия';

    const decorate = new Subcategory();
    decorate.id = 6; // уникальное поле
    decorate.name = 'Декоратор';

    const service15 = new Service();
    service15.id = 15;
    service15.name = 'Оформление зала';
    service15.price = 100000;
    service15.description = ' Оформление шарами и живыми цветами';

    const service16 = new Service();
    service16.id = 16;
    service16.name = 'Оформление открытых площадок';
    service16.price = 120000;
    service16.description = 'Оформление шарами и живыми цветами + дополнительный декор';

    const choreography = new Subcategory();
    choreography.id = 7; // уникальное поле
    choreography.name = 'Хореограф';

    const service17 = new Service();
    service17.id = 17;
    service17.name = 'Создание танца';
    service17.price = 15000;
    service17.description = ' Создание танца для молодоженов';

    const banquet = new Category();
    banquet.id = 2;
    banquet.name = 'Банкет';

    const hall = new Subcategory();
    hall.id = 8; // уникальное поле
    hall.name = 'Банкетный зал';

    const oparea = new Subcategory();
    oparea.id = 9; // уникальное поле
    oparea.name = 'Открытая площадка';

    const mv = new Subcategory();
    mv.id = 10; // уникальное поле
    mv.name = 'Теплоход';

    const cotvill = new Subcategory();
    cotvill.id = 11; // уникальное поле
    cotvill.name = 'Котеджный поселок';

    const hotel = new Subcategory();
    hotel.id = 12; // уникальное поле
    hotel.name = 'Отель';

    const catering = new Subcategory();
    catering.id = 13; // уникальное поле
    catering.name = 'Выездной ресторан';

    const transport = new Category();
    transport.id = 3;
    transport.name = 'Транспорт';

    const limousine = new Subcategory();
    limousine.id = 14; // уникальное поле
    limousine.name = 'Лимузин';

    const auto = new Subcategory();
    auto.id = 15; // уникальное поле
    auto.name = 'Автомобиль';

    const autodecor = new Subcategory();
    autodecor.id = 16; // уникальное поле
    autodecor.name = 'Оформление автомобиля';

    const style = new Category();
    style.id = 4;
    style.name = 'Стиль';

    const dress = new Subcategory();
    dress.id = 17; // уникальное поле
    dress.name = 'Платье';

    const suit = new Subcategory();
    suit.id = 18; // уникальное поле
    suit.name = 'Костюм';

    const accessories = new Subcategory();
    accessories.id = 19; // уникальное поле
    accessories.name = 'Аксессуары';

    const shoes = new Subcategory();
    shoes.id = 20; // уникальное поле
    shoes.name = 'Обувь';

    const else2 = new Category();
    else2.id = 5;
    else2.name = 'Прочее';

    const bouquet = new Subcategory();
    bouquet.id = 21; // уникальное поле
    bouquet.name = 'Букет';

    const cake = new Subcategory();
    cake.id = 22; // уникальное поле
    cake.name = 'Торт';

    const minutiae = new Subcategory();
    minutiae.id = 23; // уникальное поле
    minutiae.name = 'Аксессуары';

    const else1 = new Subcategory();
    else1.id = 24; // уникальное поле
    else1.name = 'Другое';

    photo.services = [service1, service2, service3];
    guid.services = [service4, service5, service6];
    video.services = [service7, service8, service9];
    stylist.services = [service10, service11, service12];
    music.services = [service13, service14];
    decorate.services = [service15, service16];
    choreography.services = [service17];
    prof.subcategories = [photo, guid, video, stylist, music, decorate, choreography];
    banquet.subcategories = [hall, oparea, mv, cotvill, hotel, catering];
    transport.subcategories = [limousine, auto, autodecor];
    style.subcategories = [dress, suit, accessories, shoes];
    else2.subcategories = [bouquet, cake, minutiae, else1];

    return [prof, banquet, transport, style, else2];
  }

  getServices(cId: number, subcatId: number) {
    let cat = this.getCategories();
    cat = cat.filter(item => item.id === cId);
    let subcat = cat[0].subcategories.filter(item => item.id === subcatId);
    return subcat[0].services;
  }

}

