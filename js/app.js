var seatle 
{
    var totalcookies = [,,,,,,,,,,,,,];
    var total = 0;
    var mincust = 23;
    var maxcust = 65;
    var avgcookiesales = 6.3;

    function getRandomInt(min, max)
    {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }

    function customerPerHour ()
    {
        return getRandomInt(maxcust, mincust)
    }

    document.write('Seattle <br> <ul>');
    for (var i = 1; i < 15; i++)
    {
        if(i < 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + i+5 + 'am: ' + totalcookies[i-1] + ' cookies ' + '</li>');
        }
        else if (i == 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + '12pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
        else
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + (i-7) + 'pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
    }
    document.write('<li> Total:' + total + '</li></ul>');

}



// NEXT CITY

var tokyo
{
    var totalcookies = [,,,,,,,,,,,,,];
    var total = 0;
    var mincust = 3;
    var maxcust = 24;
    var avgcookiesales = 1.2;

    function getRandomInt(min, max)
    {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }

    function customerPerHour ()
    {
        return getRandomInt(maxcust, mincust)
    }

    document.write('Tokyo <br> <ul>');
    for (var i = 1; i < 15; i++)
    {
        if(i < 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + i+5 + 'am: ' + totalcookies[i-1] + ' cookies ' + '</li>');
        }
        else if (i == 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + '12pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
        else
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + (i-7) + 'pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
    }
    document.write('<li> Total:' + total + '</li></ul>');

}



// NEXT CITY

var dubai 
{
    var totalcookies = [,,,,,,,,,,,,,];
    var total = 0;
    var mincust = 11;
    var maxcust = 38;
    var avgcookiesales = 3.7;

    function getRandomInt(min, max)
    {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }

    function customerPerHour ()
    {
        return getRandomInt(maxcust, mincust)
    }

    document.write('Dubai <br> <ul>');
    for (var i = 1; i < 15; i++)
    {
        if(i < 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + i+5 + 'am: ' + totalcookies[i-1] + ' cookies ' + '</li>');
        }
        else if (i == 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + '12pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
        else
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + (i-7) + 'pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
    }
    document.write('<li> Total:' + total + '</li></ul>');

}




// NEXT CITY

var paris 
{
    var totalcookies = [,,,,,,,,,,,,,];
    var total = 0;
    var mincust = 20;
    var maxcust = 38;
    var avgcookiesales = 2.3;

    function getRandomInt(min, max)
    {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }

    function customerPerHour ()
    {
        return getRandomInt(maxcust, mincust)
    }

    document.write('Paris <br> <ul>');
    for (var i = 1; i < 15; i++)
    {
        if(i < 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + i+5 + 'am: ' + totalcookies[i-1] + ' cookies ' + '</li>');
        }
        else if (i == 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + '12pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
        else
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + (i-7) + 'pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
    }
    document.write('<li> Total:' + total + '</li></ul>');

}




// NEXT CITY

var lima 
{
    var totalcookies = [,,,,,,,,,,,,,];
    var total = 0;
    var mincust = 2;
    var maxcust = 16;
    var avgcookiesales = 4.6;

    function getRandomInt(min, max)
    {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }

    function customerPerHour ()
    {
        return getRandomInt(maxcust, mincust)
    }

    document.write('Lima <br> <ul>');
    for (var i = 1; i < 15; i++)
    {
        if(i < 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + i+5 + 'am: ' + totalcookies[i-1] + ' cookies ' + '</li>');
        }
        else if (i == 7)
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + '12pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
        else
        {
            totalcookies[i-1] = customerPerHour();
            total += totalcookies[i-1];
            document.write('<li>' + (i-7) + 'pm: ' + totalcookies[i-1] +' cookies' + '</li>');
        }
    }
    document.write('<li> Total:' + total + '</li></ul>');

}