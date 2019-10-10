import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {
	it('positiv date', () => {
        const result = getDate(3600 * 24 * 1000);
		expect(result).toEqual('2 января, пт, 1970 год');
    });
    
    it('string date', () => {
        const result = getDate('2012-01-26');
		expect(result).toEqual('26 января, чт, 2012 год');
    });
    
    it('negative date', () => {
        const result = getDate(-52134);
		expect(result).toEqual('1 января, чт, 1970 год');
    });
    
    it('undefined date', () => {
        const result = getDate(undefined);
		expect(result).toEqual('NaN undefined, undefined, NaN год');
	});
});

