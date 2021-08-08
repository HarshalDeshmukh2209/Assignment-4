class company
{
    constructor(comname,country,owner)
    {
        this.comname=comname;
        this.country=country;
        this.owner=owner;
    }
    getcarname()
    {
        return this.comname;
    }
}

class car extends company
{
    constructor(carname,compname,country,owner,established,group)
    {
        super(compname,country,owner);
        this.established=established;
        this.carname=carname;
        this.group=group;

    }
    getModel()
    {
        return this.carname;
    }

}
let Car1=new car('Lamborghini Huracan','Volkswagen AG ','Italy',' Stefano Domenicali','2014',' Lamborghini ');
 console.log(Car1.getModel());

 let Car2=new car('Jaguar F-Type','Jaguar Land Rover ','United Kingdom','led Ian Callum','2013','Jaguar Land Rover  ');
 console.log(Car2.getModel());

 let Car3=new car('Ford Mustang','Ford Motor ','US','TLee Iacocca,','1964','Ford');
 console.log(Car3.getModel());

 let Car4=new car('Audi R8','Audi Sport GmbH ','Germany','markus duesmann','2006','Volkswagen');
 console.log(Car4.getModel());

let Car5=new car('Porsche 911','Porsche ','Germany','Oliver Blume',' 1964','Volkswagen ');
 console.log(Car5.getModel());

 let Car6=new car('Ferrari 488','Ferrari ',' Italy','Flavio Manzoni','2015','Fiat Chrysler ');
 console.log(Car6.getModel());