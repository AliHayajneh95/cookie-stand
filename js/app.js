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

var totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalofdailylocationtotal = 0;

var table = document.createElement("TABLE");
function createHeader() {
    var header = document.createElement("TR");
    header.appendChild(document.createElement("TH"));

    for (var i = 0; i < hours.length; i++) {
        var th = document.createElement("TH");
        var td = document.createTextNode(hours[i]);
        th.appendChild(td);
        header.appendChild(th);
    }

    var th = document.createElement("TH");
    var td1 = document.createTextNode("Daily");
    var td2 = document.createTextNode("Location");
    var td3 = document.createTextNode("Total");
    th.appendChild(td1);
    th.appendChild(document.createElement("br"));
    th.appendChild(td2);
    th.appendChild(document.createElement("br"));
    th.appendChild(td3);
    header.appendChild(th);

    table.appendChild(header);
}

function Branch(name, mincust, maxcust, avgcookiesales) {


    this.name = name;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgcookiesales = avgcookiesales;

    this.totalcookies = new Array(14);
    this.total = 0;

    /*for (var i = 0; i < totalcookies.length; i++) {
        totalcookies[i] = customerPerHour(mincust, maxcust);
        total += totalcookies[i];
        totals[i] += totalcookies[i];
        document.write();
    }

    function render() {
        var tr = document.createElement("TR");
        var th = document.createElement("TH");
        var td = new Array(14);
        var textnode = document.createTextNode(name);
        th.appendChild(textnode);
        tr.appendChild(th);
        for (var i = 0; i < totalcookies.length; i++) {
            total += totalcookies[i];
            var textnode = document.createTextNode(totalcookies[i]);
            td[i] = document.createElement("TD");
            td[i].appendChild(textnode);
            tr.appendChild(td[i]);
        }
        var totaldata = document.createElement("TD");
        textnode2 = document.createTextNode(total);
        totaldata.appendChild(textnode2);
        tr.appendChild(totaldata);
        table.appendChild(tr);
    }
    render();
    totalofdailylocationtotal += total;

    function customerPerHour(min, max) {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }*/

}

Branch.prototype = 
{
    generate : function() 
    {
        for (var i = 0; i < this.totalcookies.length; i++) {
            this.totalcookies[i] = this.customerPerHour(this.mincust, this.maxcust);
            this.total += parseInt(this.totalcookies[i]);
            totals[i] += parseInt(this.totalcookies[i]);
        }
    },

    render : function() 
    {
        var tr = document.createElement("TR");
        var th = document.createElement("TH");
        var td = new Array(14);
        var textnode = document.createTextNode(this.name);
        th.appendChild(textnode);
        tr.appendChild(th);
        for (var i = 0; i < this.totalcookies.length; i++) {
            //this.total += this.totalcookies[i];
            var textnode = document.createTextNode(this.totalcookies[i]);
            td[i] = document.createElement("TD");
            td[i].appendChild(textnode);
            tr.appendChild(td[i]);
        }
        var totaldata = document.createElement("TD");
        textnode2 = document.createTextNode(this.total);
        totaldata.appendChild(textnode2);
        tr.appendChild(totaldata);
        table.appendChild(tr);
        totalofdailylocationtotal += this.total;
    },

    customerPerHour : function(min, max) {
        return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
    }
};



// start from here

createHeader();

var locations = [];
locations[0] = new Branch('Seattle', 23, 65, 6.3);
locations[0].generate();
locations[0].render();

locations[1] = new Branch('Tokyo', 3, 24, 1.2);
locations[1].generate();
locations[1].render();

locations[2] = new Branch('Dubai', 11, 38, 2.3);
locations[2].generate();
locations[2].render();

locations[3] = new Branch('Paris', 20, 38, 2.3);
locations[3].generate();
locations[3].render();

locations[4] = new Branch('Lima', 2, 16, 4.6);
locations[4].generate();
locations[4].render();

createFooter();

document.getElementById("main").appendChild(table);


// ends here



function createFooter() {
    var tr = document.createElement('TR');
    var td = new Array(14);
    tr.appendChild(document.createElement('td').appendChild(document.createTextNode('Totals')));

    for (var i = 0; i < hours.length; i++) {
        td[i] = document.createElement("TD");
        td[i].appendChild(document.createTextNode(totals[i]));
        tr.appendChild(td[i]);
        //tr.appendChild(document.createElement('td').appendChild(document.createTextNode(totalofdailylocationtotal)));
    }
    tr.appendChild(document.createElement('td').appendChild(document.createTextNode(totalofdailylocationtotal)));
    table.appendChild(tr);
}


var locationsForm = document.getElementById('locform');

locationsForm.addEventListener('submit', function (event) 
{
    event.preventDefault();
    table.removeChild(table.lastChild);
    locations[locations.length] = new Branch(event.target.name.value,
                                             event.target.mincust.value,
                                             event.target.maxcust.value,
                                             event.target.avgcookiesales.value);
    locations[locations.length-1].generate();
    locations[locations.length-1].render();

    createFooter();
});

    /*function submitForm() 
    {

        name = document.getElementById("name").value;
        var minCust = getElementById("minCust").value;
        var maxCust = getElementById("maxCust").value;
        var avgCookiesales = getElementById("avgCookiesales").value;
        console.log("");
        locations[locations.length] = new Branch(name, minCust, maxCust, avgCookiesales);

    }*/