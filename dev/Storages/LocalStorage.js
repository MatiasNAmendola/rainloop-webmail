/* RainLoop Webmail (c) RainLoop Team | Licensed under CC BY-NC-SA 3.0 */

/**
 * @constructor
 */
function LocalStorage()
{
	var
		sStorages = [
			LocalStorageDriver,
			CookieDriver
		],
		NextStorageDriver = _.find(sStorages, function (NextStorageDriver) {
			return NextStorageDriver.supported();
		})
	;

	if (NextStorageDriver)
	{
		NextStorageDriver = /** @type {?Function} */ NextStorageDriver;
		this.oDriver = new NextStorageDriver();
	}
}

LocalStorage.prototype.oDriver = null;

/**
 * @param {number} iKey
 * @param {*} mData
 * @return {boolean}
 */
LocalStorage.prototype.set = function (iKey, mData)
{
	return this.oDriver ? this.oDriver.set('p' + iKey, mData) : false;
};

/**
 * @param {number} iKey
 * @return {*}
 */
LocalStorage.prototype.get = function (iKey)
{
	return this.oDriver ? this.oDriver.get('p' + iKey) : null;
};
