import React from 'react'
import Order from './Order';
import {fakeOrders} from '../mock/fakeOrders';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Order.getItems function', () => {

    const fakeOrder = {
        id: 123,
        date: 1544356800000,
        shop: 'Ali Express',
        items: [
            'Утиный пластмасса для показ новый год',
            'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
            'Новый стиль один розница яйцо для упаковки форма латекс',
        ]
    };

    const testingComponent = shallow(
        <Order order={fakeOrder}></Order>,
    );

	it('some valid order', () => {
    
        expect(testingComponent).toMatchSnapshot();
    });

    it('no items', () => {
        const props = {
            order: {
                id: 123,
                date: 1544356800000,
                shop: 'Ali Express',
            },
        }

        testingComponent.setProps(props);
    
        expect(testingComponent).toMatchSnapshot();
    });
});

