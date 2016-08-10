function City(yearRank,city,state,yearEstimate,lastCensus,change,landArea,landAreaInKm,lastPopDensity,lastPopDensityInKM,latLon){
		this.yearRank = yearRank;
		this.city = city;
		this.state = state;
		this.yearEstimate = yearEstimate;
		this.lastCensus = lastCensus;
		this.change = change;
		this.landArea = landArea;
		this.landAreaInKm = landAreaInKm;
		this.lastPopDensity = lastPopDensity;
		this.lastPopDensityInKM = lastPopDensityInKM;
		
		var latLonArray = latLon.split(",");
		this.lat = Number(latLonArray[0]);
		this.lon = Number(latLonArray[1]);

		this.latLon = latLon;	
	}

	var cities = [];

	cities.push(new City("1","New York","New York","8,491,079","8,175,133","+3.86%","302.6 sq mi","783.8 km2","27,012 per sq mi","10,430 km−2","40.6643,-73.9385"));
	cities.push(new City("2","Los Angeles","California","3,928,864","3,792,621","+3.59%","468.7 sq mi","1,213.9 km2","8,092 per sq mi","3,124 km−2","34.0194,-118.4108"));
	cities.push(new City("3","Chicago","Illinois","2,722,389","2,695,598","+0.99%","227.6 sq mi","589.6 km2","11,842 per sq mi","4,572 km−2","41.8376,-87.6818"));
       	cities.push(new City("4","Houston","Texas","2,239,558","2,100,263","+6.63%","599.6 sq mi","1,552.9 km2","3,501 per sq mi","1,352 km−2","29.7805,-95.3863"));
	cities.push(new City("5","Philadelphia","Pennsylvania","1,560,297","1,526,006","+2.25%","134.1 sq mi","347.3 km2","11,379 per sq mi","4,394 km−2","40.0094,-75.1333"));
	cities.push(new City("6","Phoenix","Arizona","1,537,058","1,445,632","+6.32%","516.7 sq mi","1,338.3 km2","2,798 per sq mi","1,080 km−2","33.5722,-112.0880"));
	cities.push(new City("7","San Antonio","Texas","1,436,697","1,327,407","+8.23%","460.9 sq mi","1,193.8 km2","2,880 per sq mi","1,112 km−2","29.4724,-98.5251"));
	cities.push(new City("8","San Diego","California","1,381,069","1,307,402","+5.63%","325.2 sq mi","842.2 km2","4,020 per sq mi","1,552 km−2","32.8153,-117.1350"));
	cities.push(new City("9","Dallas","Texas","1,281,047","1,197,816","+6.95%","340.5 sq mi","881.9 km2","3,518 per sq mi","1,358 km−2","32.7757,-96.7967"));
	cities.push(new City("10","San Jose","California","1,015,785","945,942","+7.38%","176.6 sq mi","457.3 km2","5,359 per sq mi","2,069 km−2","37.2969,-121.8193"));
	cities.push(new City("11","Austin","Texas","912,791","790,390","+15.49%","322.48 sq mi","835.2 km2","2,653 per sq mi","1,024 km−2","30.3072,-97.7560"));	
	cities.push(new City("12","Jacksonville","Florida","853,382","821,784","+3.85%","747.0 sq mi","1,934.7 km2","1,120 per sq mi","433 km−2","30.3370,-81.6613"));
	cities.push(new City("13","San Francisco","California","852,469","805,235","+5.87%","46.9 sq mi","121.4 km2","17,179 per sq mi","6,633 km−2","37.7751,-122.4193"));
	cities.push(new City("14","Indianapolis","Indiana","848,788","820,445","+3.45%","361.4 sq mi","936.1 km2","2,270 per sq mi","876 km−2","39.7767,-86.1459"));
	cities.push(new City("15","Columbus","Ohio","835,957","787,033","+6.22%","217.2 sq mi","562.5 km2","3,624 per sq mi","1,399 km−2","39.9848,-82.9850"));
	cities.push(new City("16","Fort Worth","Texas","812,238","741,206","+9.58%","339.8 sq mi","880.1 km2","2,181 per sq mi","842 km−2","32.7795,-97.3463"));
	cities.push(new City("17","Charlotte","North Carolina","809,958","731,424","+10.74%","297.7 sq mi","771.0 km2","2,457 per sq mi","949 km−2","35.2087,-80.8307"));
	cities.push(new City("18","Detroit","Michigan","680,250","713,777","−4.70%","138.8 sq mi","359.4 km2","5,144 per sq mi","1,986 km−2","42.3830,-83.1022"));
	cities.push(new City("19","El Paso","Texas","679,036","649,121","+4.61%","255.2 sq mi","661.1 km2","2,543 per sq mi","982 km−2","31.8484,-106.4270"));
	cities.push(new City("20","Seattle","Washington","668,342","608,660","+9.81%","83.9 sq mi","217.4 km2","7,251 per sq mi","2,800 km−2","47.6205,-122.3509"));
