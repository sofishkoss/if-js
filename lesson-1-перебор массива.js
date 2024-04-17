// let date =new Date('2020-11-26');
// console.log(date.toLocaleDateString());



const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];


// console.log(data(country , city , hotel)); ***как нереформулировать, разобраться!!!!!!

// for (const item of data) {
//     data[item] = data[item] ? data[item] + 1 : 1;
// }
// const result = Object.keys(data).filter((item) => data[item] > 1);
// console.log(result);
//
//
//
// data.forEach(function(item, i, data) {
//     alert( i + ": " + item + " (массив:" + data + ")" );
// });

const searchArg='hotel'
function dataTransformer (searchArg){

    return data.map(i=>`${i.country},${i.city},${i.hotel}`)
}

console.log(dataTransformer(data))