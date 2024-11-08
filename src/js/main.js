/**
 * 
 * @employSchema
 * @eventListeners
 * @sensibleDefaults
 * @svgSrc
 * @documentation
 * @iconUniformNames
 * @documentationApi
 * @objectifyEventListeners
 * @distinctEventListeners
 * @minimizeProperties
 * @parentElementSelector
 * @propertiesElemUnderscore
 * @propertyNamingConventions
 * @propertify
 * @methodNamingConventions
 */




/**
 * 
 * @returns {DateFormat}
 */
function DateFormat() {

    /**
     * 
     * @property
     */
    this._Y             = null;

    /**
     * 
     * @property
     */
    this._F             = null;

    /**
     * 
     * @property
     */
    this.mysqlDatetime  = null;

    /**
     * 
     * @property
     */
    this.isoString      = null;

    /**
     * 
     * @property
     */
    this.dateObj        = null;

    return this;

};

/**
 * 
 * @private
 * @returns {Boolean}
 */
DateFormat.prototype._create_data = function() {

    var fullMonths = [
        'Ιανουαρίου',
        'Φεβρουαρίου',
        'Μαρτίου',
        'Απριλίου',
        'Μαΐου',
        'Ιουνίου',
        'Ιουλίου',
        'Αυγούστου',
        'Σεπτεμβρίου',
        'Οκτωβρίου',
        'Νοεμβρίου',
        'Δεκεμβρίου'
    ];

    if ( this.dateObj === null ) {

        return false;

    }


    this._Y = this.dateObj.getFullYear();
    this._m = this.dateObj.getMonth() + 1;
    this._F = fullMonths[ this.dateObj.getMonth() ];
    this._j = this.dateObj.getDate();
    this._H = this.dateObj.getHours();
    this._i = this.dateObj.getMinutes();

    if ( this._m < 10 ) {

        this._m = '0' + this._m;

    }

    if ( this._H < 10 ) {

        this._H = '0' + this._H;

    }

    if ( this._i < 10 ) {

        this._i = '0' + this._i;

    }

    return true;

};

/**
 * 
 * @param {String} isoString 
 * @returns {DateFormat}
 */
DateFormat.prototype.initByIso8601 = function( isoString ) {

    this.isoString = isoString;

    this.dateObj = new Date( isoString );

    this._create_data();

    return this;

};

/**
 * 
 * @param {String} mysqlDatetime 
 * @returns {DateFormat}
 */
DateFormat.prototype.initByMysqlDatetime = function( mysqlDatetime ) {

    this.mysqlDatetime = mysqlDatetime;

    var dateTimeParts= this.mysqlDatetime.split(/[- :]/);

    dateTimeParts[1]--;

    this.dateObj = new Date( dateTimeParts[ 0 ], dateTimeParts[ 1 ] + "", dateTimeParts[ 2 ], dateTimeParts[ 3 ], dateTimeParts[ 4 ], dateTimeParts[ 5 ] );

    this._create_data();

    return this;

};