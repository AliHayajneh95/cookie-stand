var hours = ["6:00am",
             "7:00am",
             "8:00am",
             "9:00am",
             "10:00am",
             "11:00am",
             "12:00pm",
             "1:00pm",
             "2:00pm",
             "3:00pm",
             "4:00pm",
             "5:00pm",
             "6:00pm",
             "7:00pm",
            ];

function createHeader()
{
    document.write('<table> <tr>');
    for (var i = 0; i < hours.length; i++)
        {
            document.write('<th>' + hours[i] + '</th>');
        }
    document.write('</tr>');
}


function branch(name, mincust, maxcust, avgcookiesales)
{


    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookiesales = avgcookiesales;

    var totalcookies = new Array (14);
    var total = 0;
    var hours = ["6am",
                 "7am",
                 "8am",
                 "9am",
                 "10am",
                 "11am",
                 "12pm",
                 "1pm",
                 "2pm",
                 "3pm",
                 "4pm",
                 "5pm",
                 "6pm",
                 "7pm",
                ];

    for (var i = 0; i < totalcookies.length; i++)
    {
        totalcookies[i] = customerPerHour(mincust, maxcust);
        total += totalcookies[i];

        document.write();
    }

    function render()
    {
        document.write('<tr>');

        for (var i = 0; i < totalcookies.length; i++)
        {
            document.write('<td>' + totalcookies[i] + '</td>');

        }
        
        document.write('</tr>');
    }
    render();
}


    /*
    document.write(name + '<br> <ul>');
    for(var i = 0; i < totalcookies.length; i++)
    {
        totalcookies[i] = customerPerHour(mincust, maxcust);
        total += totalcookies[i];

        document.write('<li>' + hours[i] + totalcookies[i] + '</li>');

        if(i == totalcookies.length)
        {
            document.write('<li> total: ' + total + '</li>');
            document.write('</ul> <br>');
        }
    }
}
*/
function getRandomInt(min, max)
{
    return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
}

function customerPerHour (min, max)
{
    return getRandomInt(min, max);
}

createHeader();



var seattle = new branch('Seattle', 23, 65, 6.3);
var tokyo = new branch('Tokyo', 3, 24, 1.2);
var tokyo = new branch('Dubai', 11, 38, 2.3);
var tokyo = new branch('Paris',20 ,38 ,2.3);
var tokyo = new branch('Lima',2 ,16 ,4.6);