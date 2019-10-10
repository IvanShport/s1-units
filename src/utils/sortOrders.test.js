import React from 'react'
import {sortByItemCount, sortByItemNames, sortByDate, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are undefined', () => {
		const result = sortByItemCount(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByItemCount(23, 'null');
		expect(result).toEqual(0);
	});

	it('same wrong items', () => {
		const order1 = {
			wrongItems: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('win order1', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('win order2', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByItemNames function', () => {
	it('orders are undefined', () => {
		const result = sortByItemNames(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByItemNames(23, 'null');
		expect(result).toEqual(0);
	});

	it('same wrong items', () => {
		const order1 = {
			wrongItems: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('same items name', () => {
		const order1 = {
			items: ['abc', 'def'],
		};

		const order2 = {
			items: ['abc', 'def'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('empty items', () => {
		const order1 = {
			items: [],
		};

		const order2 = {
			items: [],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('win order1', () => {
		const order1 = {
			items: ['aac', 'def'],
		};

		const order2 = {
			items: ['abc', 'def'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('win order2', () => {
		const order1 = {
			items: ['abc', 'def'],
		};

		const order2 = {
			items: ['aac', 'def'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByDate function', () => {
	it('orders are undefined', () => {
		const result = sortByDate(undefined, undefined);
		expect(result).toEqual(0);
	});

	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not object', () => {
		const result = sortByDate(23, 'null');
		expect(result).toEqual(0);
	});

	it('same wrong items', () => {
		const order1 = {
			wrongDate: 3543252345,
		};

		const order2 = {
			date: 324534523,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('same dates', () => {
		const order1 = {
			date: 324534523,
		};

		const order2 = {
			date: 324534523,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('date1 > date2', () => {
		const order1 = {
			date: 324534523,
		};

		const order2 = {
			date: 224534523,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('date1 > date2', () => {
		const order1 = {
			date: 224534523,
		};

		const order2 = {
			date: 324534523,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortOrders function', () => {
	it('no orders', () => {
		const order = null;
		sortOrders(null, 'names');
		expect(order === null).toBeTruthy();
	});
});